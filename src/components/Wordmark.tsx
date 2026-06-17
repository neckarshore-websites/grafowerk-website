/**
 * Grafowerk wordmark — "GRAFOWERK" in the display typeface with the two R's
 * mirrored, echoing the grafowerk.de logo signature. Rendered as live text
 * (scalable, selectable, accessible) rather than an image.
 *
 * role="img" + aria-label keeps screen readers reading "Grafowerk" instead of
 * spelling out the per-letter spans.
 */
const NAME = "GRAFOWERK";

export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Grafowerk"
      className={`font-display inline-flex font-normal tracking-[0.04em] text-ink ${className}`}
    >
      {NAME.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={ch === "R" ? "inline-block -scale-x-100" : "inline-block"}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
