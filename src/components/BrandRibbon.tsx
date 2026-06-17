/**
 * Grafowerk "Farbband" — recreation of the folded green ribbon from
 * grafowerk.de, as scalable inline SVG. Deliberately slim proportions (band
 * width ≈ 1:10 to its length, matching the original): a short olive stub top
 * left → long lime vertical → long olive foot to the right, with darker fold
 * tips and a soft shadow under the foot.
 *
 * Decorative — aria-hidden so it adds no noise for screen readers.
 */
export default function BrandRibbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 470"
      role="presentation"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top horizontal stub (olive) */}
      <rect x="24" y="22" width="132" height="36" fill="#9fb52e" />
      {/* top folded tip */}
      <polygon points="156,22 188,40 156,58" fill="#7e9325" />
      {/* vertical band (lime) */}
      <rect x="120" y="58" width="36" height="340" fill="#c4d72b" />
      {/* bottom folded tip */}
      <polygon points="120,398 88,416 120,434" fill="#7e9325" />
      {/* bottom horizontal foot (olive) */}
      <rect x="120" y="398" width="300" height="36" fill="#9fb52e" />
      {/* soft shadow under the foot */}
      <rect x="120" y="434" width="300" height="5" fill="#7e9325" opacity="0.45" />
    </svg>
  );
}
