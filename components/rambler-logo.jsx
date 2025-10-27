export default function RamblerLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer circle - Sky Blue */}
      <circle cx="128" cy="128" r="120" className="stroke-primary" strokeWidth="16" />

      {/* Inner circle - Sky Blue */}
      <circle cx="128" cy="128" r="90" className="stroke-primary" strokeWidth="12" />

      {/* Cardinal points - Coral */}
      {/* Top point */}
      <circle cx="128" cy="28" r="8" className="fill-secondary" />
      {/* Right point */}
      <circle cx="228" cy="128" r="8" className="fill-secondary" />
      {/* Bottom point */}
      <circle cx="128" cy="228" r="8" className="fill-secondary" />
      {/* Left point */}
      <circle cx="28" cy="128" r="8" className="fill-secondary" />

      {/* Compass needle - pointing northeast */}
      {/* North arrow - Sky Blue */}
      <path d="M 128 60 L 155 120 L 128 110 L 101 120 Z" className="fill-primary" />

      {/* South arrow - Sand */}
      <path d="M 128 196 L 155 136 L 128 146 L 101 136 Z" className="fill-accent" />

      {/* East arrow - Coral */}
      <path d="M 196 128 L 136 155 L 146 128 L 136 101 Z" className="fill-secondary" />

      {/* West arrow - Sand */}
      <path d="M 60 128 L 120 155 L 110 128 L 120 101 Z" className="fill-accent" />

      {/* Center circle - Primary */}
      <circle cx="128" cy="128" r="12" className="fill-primary" />
    </svg>
  )
}
