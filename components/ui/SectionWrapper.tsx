import { type ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  dark?: boolean;
  children: ReactNode;
}

export default function SectionWrapper({ id, className = "", dark = false, children }: Props) {
  return (
    <section
      id={id}
      className={`section-py ${dark ? "bg-brand-dark text-white" : "bg-brand-bg"} ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </section>
  );
}
