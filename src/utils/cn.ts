import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';

/**
 * Merges and manipulate class names using clsx and tailwind-merge.
 * @param inputs Class values to be merged.
 * @returns A single string with merged class names.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}
