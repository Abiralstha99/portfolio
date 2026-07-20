// Renders a Google Material Symbols glyph. Accepts the same `size` prop (px) as
// a lucide-react icon so it can drop into the same icon slots. Any `strokeWidth`
// a caller passes (icon fonts have no stroke) is simply not consumed — nothing
// is forwarded to the DOM, so there's no unknown-attribute warning.
function MaterialIcon({ name, size = 18, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: `${size}px` }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}

export default MaterialIcon
