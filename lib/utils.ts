import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Professional Number Formatter for Carbon Credits
export function formatCarbon(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(value);
}