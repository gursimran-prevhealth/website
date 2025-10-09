// utils/cn.ts
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const LANGUAGES = [
  { label: "English", value: "en" },
  { label: "Svenska", value: "sv" },
  { label: "Deutsch", value: "de" },
];