/**
 * Formats back received string to `YYYY-MM-DD` formatted string.
 * @param fullName
 * @returns YYYY-MM-DD formatted date or empty string
 */
export const getBackFormattedDate = (date?: string | undefined): string =>
  date ? date.slice(0, 10) : '';
