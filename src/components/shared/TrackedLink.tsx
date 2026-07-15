"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/analytics";

interface Props extends ComponentProps<typeof Link> {
  event: string;
  eventParams?: Record<string, unknown>;
}

/** Wraps next/link so a click fires an analytics event before navigating — for use from Server Component pages. */
export function TrackedLink({ event, eventParams, onClick, children, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
