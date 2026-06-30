import { NextRequest, NextResponse } from "next/server";

const CLAY_URL = "https://api.clay.com/v3/sources/webhook/pull-in-data-from-a-webhook-1956ddca-17b9-4362-b085-82b125bb6ad8";
const MAKE_URL = "https://hook.us2.make.com/j5ybsgnp5mapyotxu57fsxcfufce8ktc";
const CRM_URL  = "https://alora-crm.vercel.app/api/embed/submit";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const opts: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  const [clay, make, crm] = await Promise.allSettled([
    fetch(CLAY_URL, opts),
    fetch(MAKE_URL, opts),
    fetch(CRM_URL, opts),
  ]);

  return NextResponse.json({
    clay: clay.status,
    make: make.status,
    crm: crm.status,
  });
}
