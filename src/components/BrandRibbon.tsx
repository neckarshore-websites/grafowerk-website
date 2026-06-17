/**
 * Grafowerk "Farbband" — a stylized recreation of the folded green ribbon from
 * grafowerk.de, as scalable inline SVG. Two brand greens (olive + lime) with
 * darker fold tips, forming the recognizable folded-tape corner. Decorative —
 * aria-hidden so it adds no noise for screen readers.
 */
export default function BrandRibbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 500"
      role="presentation"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top horizontal stub (olive) */}
      <rect x="40" y="12" width="170" height="58" fill="#9fb52e" />
      {/* top folded tip */}
      <polygon points="210,12 252,40 210,70" fill="#7e9325" />
      {/* vertical band (lime) */}
      <rect x="150" y="70" width="60" height="340" fill="#c4d72b" />
      {/* bottom folded tip */}
      <polygon points="150,410 108,438 150,468" fill="#7e9325" />
      {/* bottom horizontal foot (olive) */}
      <rect x="150" y="410" width="170" height="58" fill="#9fb52e" />
      {/* subtle drop shadow under the foot */}
      <rect
        x="150"
        y="468"
        width="170"
        height="7"
        fill="#6f8220"
        opacity="0.55"
      />
    </svg>
  );
}
