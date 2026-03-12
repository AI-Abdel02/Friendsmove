"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Suggestion = {
  id: string;
  label: string;
};

type CityAutocompleteInputProps = {
  label: string;
  placeholder: string;
  name?: string;
};

export default function CityAutocompleteInput({
  label,
  placeholder,
  name,
}: CityAutocompleteInputProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const trimmed = query.trim();

    if (trimmed.length < 2) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://photon.komoot.io/api/?q=${encodeURIComponent(
            trimmed
          )}&limit=6&lang=de`
        );

        const data = await response.json();

        const mapped: Suggestion[] = (data?.features || []).map(
          (feature: any, index: number) => {
            const props = feature.properties || {};
            const parts = [
              props.name,
              props.city,
              props.state,
              props.country,
            ].filter(Boolean);

            return {
              id: `${props.osm_id || props.name || "place"}-${index}`,
              label: Array.from(new Set(parts)).join(", "),
            };
          }
        );

        const unique = mapped.filter(
          (item, index, arr) =>
            item.label && arr.findIndex((x) => x.label === item.label) === index
        );

        setSuggestions(unique);
        setOpen(true);
      } catch (error) {
        console.error("Autocomplete error:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const showDropdown = useMemo(
    () => open && (loading || suggestions.length > 0),
    [open, loading, suggestions.length]
  );

  return (
    <div ref={wrapperRef} className="relative">
      <label className="mb-2 block text-sm font-medium text-white/90">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={query}
        placeholder={placeholder}
        autoComplete="off"
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        className="h-14 w-full rounded-2xl border border-white/15 bg-white px-4 text-[#062014] placeholder:text-gray-400 outline-none transition focus:border-[#00FF88]/60 focus:bg-white"
      />

      {showDropdown && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-white/10 bg-[#081a31]/96 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {loading ? (
            <div className="px-4 py-3 text-sm text-white/70">Suche läuft...</div>
          ) : (
            <ul className="max-h-64 overflow-y-auto py-2">
              {suggestions.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery(item.label);
                      setOpen(false);
                    }}
                    className="flex w-full items-start px-4 py-3 text-left text-sm text-white/85 transition hover:bg-white/8 hover:text-white"
                  >
                    <span className="mr-3 mt-0.5 text-[#00FF88]">📍</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}