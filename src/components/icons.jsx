import MaterialIcon from './MaterialIcon'

// lucide-react dropped its brand logos, so GitHub and LinkedIn render as
// brand-neutral Material Symbols glyphs. Both accept the same props as a
// lucide icon (size, strokeWidth) via MaterialIcon.
export const GithubIcon = (props) => <MaterialIcon name="code" {...props} />
export const LinkedinIcon = (props) => <MaterialIcon name="link" {...props} />
