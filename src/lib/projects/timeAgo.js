const UNITS = [
  ['year', 365 * 24 * 3600],
  ['month', 30 * 24 * 3600],
  ['week', 7 * 24 * 3600],
  ['day', 24 * 3600],
  ['hour', 3600],
  ['minute', 60],
];

const format = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

/** "5 minutes ago", "yesterday"… for an ISO date string. */
export function timeAgo(iso) {
  const seconds = (Date.parse(iso) - Date.now()) / 1000;
  if (!Number.isFinite(seconds)) return '';
  for (const [unit, size] of UNITS) {
    if (Math.abs(seconds) >= size) {
      return format.format(Math.round(seconds / size), unit);
    }
  }
  return 'just now';
}
