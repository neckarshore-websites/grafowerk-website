/**
 * Grafowerk wordmark — the GRAFOWERK lettering in the display typeface.
 *
 * Provisional: a typographic wordmark until a real logo exists. Kept as a
 * component so swapping in an SVG logo later touches one file.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold tracking-tight text-ink ${className}`}
    >
      GRAFOWERK
    </span>
  );
}
