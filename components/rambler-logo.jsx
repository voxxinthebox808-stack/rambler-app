// components/rambler-logo.jsx
export default function RamblerLogo({ className = "w-14 h-14" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ====== GRADIENTS ====== */}
      <defs>
        <linearGradient id="rambler-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#3B82F6" /> {/* Sky Blue */}
          <stop offset="100%" stopColor="#FB923C" /> {/* Warm Orange */}
        </linearGradient>
      </defs>

      {/* ====== OUTER CIRCLE ====== */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#rambler-gradient)"
        strokeWidth="6"
      />

      {/* ====== INNER DOTTED CIRCLE ====== */}
      <circle
        cx="50"
        cy="50"
        r="33"
        stroke="url(#rambler-gradient)"
        strokeWidth="4"
        strokeDasharray="4 6"
      />

      {/* ====== DIRECTION MARKERS ====== */}
      <g stroke="url(#rambler-gradient)" strokeWidth="4" strokeLinecap="round">
        {/* North */}
        <line x1="50" y1="10" x2="50" y2="3" />
        {/* East */}
        <line x1="90" y1="50" x2="97" y2="50" />
        {/* South */}
        <line x1="50" y1="90" x2="50" y2="97" />
        {/* West */}
        <line x1="10" y1="50" x2="3" y2="50" />
      </g>

      {/* ====== COMPASS NEEDLE (TRIANGLE OUTLINE STYLE) ====== */}
      <g transform="rotate(25 50 50)">
        {/* Triangle outline, soft and modern */}
        <path
          d="M50 30 L58 50 L50 70 L42 50 Z"
          stroke="url(#rambler-gradient)"
          strokeWidth="3.5"
          fill="none"
        />
        {/* Center circle */}
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="url(#rambler-gradient)"
          stroke="none"
        />
      </g>
    </svg>
  );
}
