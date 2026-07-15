"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  landingPage: string;
  children: ReactNode;
}

/** Wraps a WhatsApp <a> link so every click fires a whatsapp_click analytics event before navigating. */
export function WhatsAppLink({ landingPage, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent("whatsapp_click", { landing_page: landingPage });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
