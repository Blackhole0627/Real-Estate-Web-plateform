import { NextRequest, NextResponse } from "next/server";
import { META_PIXEL_ID } from "@/lib/track";

/**
 * Meta Conversions API relay. Mirrors browser Pixel events server-side
 * (deduplicated by the shared event_id) to recover conversions lost to ad
 * blockers and browser privacy features. No-op until META_CAPI_TOKEN is
 * configured in the environment.
 */
export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return new NextResponse(null, { status: 204 });

  let payload: {
    event?: string;
    data?: Record<string, unknown>;
    eventId?: string;
    url?: string;
  };
  try {
    payload = await req.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  if (!payload.event || !payload.eventId)
    return new NextResponse(null, { status: 400 });

  const body = {
    data: [
      {
        event_name: payload.event,
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId,
        event_source_url: payload.url,
        action_source: "website",
        user_data: {
          client_user_agent: req.headers.get("user-agent") ?? undefined,
          client_ip_address:
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
            undefined,
        },
        custom_data: payload.data ?? {},
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
  } catch {
    // Tracking must never break the site; failures are silently dropped.
  }
  return new NextResponse(null, { status: 204 });
}
