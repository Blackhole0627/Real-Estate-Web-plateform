import { NextResponse, type NextRequest } from "next/server";

/**
 * Maintenance switch.
 *
 * When the MAINTENANCE_MODE env var is "1", every public page answers with an
 * empty HTTP 503 + Retry-After (site offline, no page shown), which search
 * engines treat as a temporary outage (rankings are preserved for a few
 * days). The admin panel, API routes and static assets keep working so the
 * client can still edit content while the site is paused.
 *
 * Toggle: set/remove MAINTENANCE_MODE in Vercel and redeploy. No code change.
 */
export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "1") return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Site offline: empty 503, no page, no branding. Browsers show their own
  // generic error; search engines read it as a temporary outage.
  return new NextResponse(null, {
    status: 503,
    headers: {
      "Retry-After": "86400",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  // Skip Next internals, image optimizer and public assets so the page can load its logo.
  matcher: ["/((?!_next/static|_next/image|assets/|favicon.ico|icon.png).*)"],
};
