type PawIconProps = {
  className?: string
  title?: string
}

/** Paw print filled with `currentColor` so CSS `color` / `--paw-*` controls it. */
export function PawIcon({ className, title }: PawIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      <ellipse cx="32" cy="44" rx="15" ry="12.5" />
      <circle cx="16.5" cy="24" r="7.2" />
      <circle cx="27" cy="15.5" r="7.4" />
      <circle cx="41" cy="15.5" r="7.4" />
      <circle cx="47.5" cy="24" r="7.2" />
    </svg>
  )
}
