"use client";

import dynamic from "next/dynamic";

// Only ever matters once a visitor starts leaving — nothing about it is
// needed for the initial paint, so keep its JS out of the critical path.
const ExitIntentPopup = dynamic(() => import("./ExitIntentPopup").then((m) => m.ExitIntentPopup), { ssr: false });

export function ExitIntentPopupLoader({ locale }: { locale: string }) {
  return <ExitIntentPopup locale={locale} />;
}
