import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  // Serve llms.txt as markdown when agent requests text/markdown
  if (accept.includes("text/markdown")) {
    const url = request.nextUrl.clone();
    url.pathname = "/llms.txt";
    const res = NextResponse.rewrite(url);
    res.headers.set("Content-Type", "text/markdown; charset=utf-8");
    res.headers.set("Vary", "Accept");
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("Vary", "Accept");
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|\\.png|\\.jpg|\\.svg|\\.ico|\\.woff2?).*)"],
};
