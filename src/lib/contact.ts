import type { ContactKey } from "../data/portfolio";

export function normalizeContactHref(key: ContactKey, value: string): string {
  const trimmed = value.trim();

  if (!trimmed) return "";
  if (key === "email" && !trimmed.startsWith("mailto:")) return `mailto:${trimmed}`;
  if (key === "whatsapp" && /^\+?[\d\s()-]+$/.test(trimmed)) {
    return `https://wa.me/${trimmed.replace(/\D/g, "")}`;
  }

  return trimmed;
}

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//.test(href);
}
