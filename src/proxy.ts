import { NextResponse, type NextRequest } from "next/server";

/**
 * Maintenance switch.
 *
 * When the MAINTENANCE_MODE env var is "1", every public page answers with a
 * branded "volvemos pronto" page and HTTP 503 + Retry-After, which search
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

  const en = pathname === "/en" || pathname.startsWith("/en/");
  const title = en ? "We'll be back soon" : "Volvemos muy pronto";
  const body = en
    ? "We are updating our website. In the meantime, our team is available to help you."
    : "Estamos actualizando nuestra página web. Mientras tanto, nuestro equipo está disponible para atenderte.";
  const cta = en ? "Write to us on WhatsApp" : "Escríbenos por WhatsApp";

  const html = `<!doctype html>
<html lang="${en ? "en" : "es"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title} · Onker Home</title>
<style>
  html,body{margin:0;height:100%;background:#fff;color:#000;font-family:Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
  main{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:48px 24px;box-sizing:border-box}
  img{width:150px;height:auto;margin-bottom:40px}
  h1{font-family:Lora,Georgia,"Times New Roman",serif;font-weight:400;font-size:36px;line-height:1.15;margin:0 0 16px;letter-spacing:.01em}
  p{max-width:520px;font-size:16px;line-height:1.6;color:#555;margin:0 0 32px}
  a.btn{display:inline-block;padding:14px 28px;border:1px solid #000;background:#000;color:#fff;text-decoration:none;font-size:13px;letter-spacing:.12em;text-transform:uppercase}
  .meta{margin-top:40px;font-size:13px;color:#818181}
  .meta a{color:#818181}
</style>
</head>
<body>
<main>
  <img src="/assets/logo-black.png" alt="Onker Home">
  <h1>${title}</h1>
  <p>${body}</p>
  <a class="btn" href="https://wa.me/18493426066" rel="noopener">${cta}</a>
  <div class="meta">+1 849 342 6066 · <a href="mailto:Info@onkerhomes.com">Info@onkerhomes.com</a></div>
</main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "86400",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  // Skip Next internals, image optimizer and public assets so the page can load its logo.
  matcher: ["/((?!_next/static|_next/image|assets/|favicon.ico|icon.png).*)"],
};
