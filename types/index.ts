// ─── Shared TypeScript types ──────────────────────────────────────────────────

export interface City {
  name: string;
  slug: string;
  desc?: string;
  description?: string;
  href?: string;
}

export interface Service {
  name?: string;
  title?: string;
  shortTitle?: string;
  slug: string;
  icon: string;
  description?: string;
  href?: string;
}

export interface Testimonial {
  name?: string;
  author?: string;
  city: string;
  rating: number;
  text: string;
  service?: string;
  date?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PriceCard {
  title: string;
  rooms: string;
  priceFrom: string;
  features: string[];
  note?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

// Aliases used by lib/data.ts
export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
};

export type CityItem = {
  slug: string;
  name: string;
  href: string;
  description: string;
};

export type TestimonialItem = {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
};

export type FAQItem = FaqItem;

export type PricingScenario = {
  title: string;
  size: string;
  priceFrom: string;
  priceTo: string;
  description: string;
  features: string[];
};

export type TrustStat = {
  icon: string;
  value: string;
  label: string;
  detail?: string;
};
