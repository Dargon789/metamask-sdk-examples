import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAddress = (addr: string | undefined): string => {
  if (!addr || !/^0x[a-fA-F0-9]{40}$/.test(addr)) {
    return ""; // Return empty string for invalid addresses
  }
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
};
