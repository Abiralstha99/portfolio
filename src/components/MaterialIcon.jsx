// Renders a Google Material Symbols glyph. Accepts the same `size` prop as a
// lucide-react icon (px) so it can drop into the same icon slots; `strokeWidth`
// is accepted and intentionally ignored — an icon font has no stroke — so it is
// not forwarded to the DOM (which would trigger a React unknown-prop warning).
function MaterialIcon({ name, size = 18, strokeWidth, className = '', ...rest }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: `${size}px` }}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  )
}

export default MaterialIcon
