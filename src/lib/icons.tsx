export const ICONS: Record<string, React.ReactNode> = {
  design: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M20 6c-7.7 0-14 6.3-14 14s6.3 14 14 14c1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2-.5-.5-.8-1.2-.8-2 0-1.7 1.3-3 3-3h3.5c3.9 0 7.1-3.2 7.1-7.1C34.9 11.2 28.2 6 20 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".08" />
      <circle cx="14" cy="17" r="1.8" fill="currentColor" opacity=".75" />
      <circle cx="20" cy="13" r="1.8" fill="currentColor" opacity=".75" />
      <circle cx="26" cy="17" r="1.8" fill="currentColor" opacity=".75" />
      <circle cx="15" cy="24" r="1.8" fill="currentColor" opacity=".75" />
    </svg>
  ),
  structure: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="7" y="8" width="26" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".08" />
      <rect x="7" y="19" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="19" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="27" width="12" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  navigation: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M8 32V10a2 2 0 012-2h8l3 3h9a2 2 0 012 2v10a2 2 0 01-2 2h-9l-3-3h-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".08" />
      <line x1="8" y1="32" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <rect x="12" y="5" width="16" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <line x1="12" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.2" strokeOpacity=".5" />
      <line x1="12" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="1.2" strokeOpacity=".5" />
      <circle cx="20" cy="32.3" r="1.4" fill="currentColor" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M15 11L7 20l8 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 11l8 9-8 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="22.5" y1="8" x2="17.5" y2="32" stroke="currentColor" strokeWidth="1.3" strokeOpacity=".5" strokeLinecap="round" />
    </svg>
  ),
  controls: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <line x1="9" y1="12" x2="31" y2="12" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".5" />
      <line x1="9" y1="20" x2="31" y2="20" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".5" />
      <line x1="9" y1="28" x2="31" y2="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".5" />
      <circle cx="16" cy="12" r="3" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="26" cy="20" r="3" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="28" r="3" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  speed: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="20" cy="21" r="13" stroke="currentColor" strokeWidth="1.5" strokeOpacity=".35" />
      <path d="M20 21l6-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="20" cy="21" r="2" fill="currentColor" />
      <path d="M13 9l1.5 2.5M27 9l-1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M14 14v-5M26 14V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="11" y="14" width="18" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".08" />
      <path d="M20 24v5a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M20 6L6 14l14 8 14-8-14-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".08" />
      <path d="M6 20l14 8 14-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 26l14 8 14-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeOpacity=".5" />
    </svg>
  ),
  gears: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 6v3M16 23v3M6 16h3M23 16h3M9 9l2 2M9 23l2-2M23 9l-2 2M23 23l-2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="27" cy="27" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".08" />
    </svg>
  ),
  portal: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M11 33V13a2 2 0 012-2h14a2 2 0 012 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".06" />
      <line x1="8" y1="33" x2="32" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="23" cy="22" r="1.6" fill="currentColor" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M12 27a6 6 0 01-.6-11.97A8 8 0 0127 17.4 5.5 5.5 0 0126.5 27H12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".08" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="30" cy="10" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="30" r="4" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity=".1" />
      <line x1="13" y1="12" x2="18" y2="27" stroke="currentColor" strokeWidth="1.2" strokeOpacity=".55" />
      <line x1="27" y1="12" x2="22" y2="27" stroke="currentColor" strokeWidth="1.2" strokeOpacity=".55" />
      <line x1="14" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="1.2" strokeOpacity=".55" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M6 8h4l3.2 16.6a2 2 0 002 1.6h12.2a2 2 0 002-1.6L32 13H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity=".06" />
      <circle cx="18" cy="33" r="1.8" fill="currentColor" />
      <circle cx="27" cy="33" r="1.8" fill="currentColor" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M13 8h6a2.5 2.5 0 010 5 2.5 2.5 0 000 5h6v6a2.5 2.5 0 01-5 0 2.5 2.5 0 00-5 0v6H8v-6a2.5 2.5 0 015 0 2.5 2.5 0 000-5H8V8h5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="currentColor" fillOpacity=".07" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="7.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <line x1="25.5" y1="25.5" x2="33" y2="33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M20 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z" fill="currentColor" fillOpacity=".85" />
      <path d="M31 27l1.2 3.4L35.5 31.6l-3.3 1.2L31 36.2l-1.2-3.4-3.3-1.2 3.3-1.2L31 27z" fill="currentColor" fillOpacity=".55" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M6 10a3 3 0 013-3h22a3 3 0 013 3v14a3 3 0 01-3 3H16l-7 6v-6h-0a3 3 0 01-3-3V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".06" />
      <circle cx="14" cy="17" r="1.6" fill="currentColor" />
      <circle cx="20" cy="17" r="1.6" fill="currentColor" />
      <circle cx="26" cy="17" r="1.6" fill="currentColor" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M8 21v-2a12 12 0 0124 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="20" width="7" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <rect x="28" y="20" width="7" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity=".06" />
      <path d="M32 30v1a4 4 0 01-4 4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M7 33V13M17 33V7M27 33V19M33 33H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="13" r="1.8" fill="currentColor" />
      <circle cx="17" cy="7" r="1.8" fill="currentColor" />
      <circle cx="27" cy="19" r="1.8" fill="currentColor" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
      <path d="M20 5l13 5v9c0 9-5.5 14.5-13 16-7.5-1.5-13-7-13-16v-9l13-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity=".06" />
      <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
