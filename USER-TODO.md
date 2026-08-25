# USER-TODO — estado y pasos restantes

## ✅ COMPLETADO (2026-08-25/26)

- Supabase: proyecto del cliente creado por API, esquema, buckets, usuario
  admin, 36 propiedades + 20 artículos + ~700 fotos migrados, traducciones
  EN sincronizadas. Credenciales guardadas en
  `C:\Users\Administrator\Videos\projects\onker-supabase-credentials.txt`
  (fuera del repositorio).
- Vercel: variables de entorno configuradas por API y redeploy hecho.
  PRODUCCIÓN EN MODO BASE DE DATOS. Panel vivo en onkerhomes.com/admin
  (login: onkerhome@gmail.com; contraseña en el archivo de credenciales).
- Meta Pixel 228203565063501 + Conversions API activos, con banner de
  cookies ES/EN (los eventos solo se envían tras aceptar). Verificado en
  vivo: banner, carga del píxel, ViewContent y relé CAPI.
- Sitio en inglés en /en con hreflang y sitemap (109 URLs).

## PENDIENTE

1. REVOCAR los tokens usados en el chat (ya no hacen falta):
   - Supabase: supabase.com → Account → Access Tokens
   - Vercel: vercel.com → Account Settings → Tokens
   - GitHub: regenerar ambos tokens cuando haya un momento tranquilo
   (el token de Meta CAPI NO se revoca: está en uso en Vercel)
2. Prueba con el cliente en Meta Events Manager → pestaña Probar eventos:
   navegar la página, abrir una propiedad, tocar WhatsApp y enviar un
   formulario; deben aparecer PageView, ViewContent, Contact y Lead.
3. Entregar al cliente su acceso al panel (correo + contraseña del archivo
   de credenciales) con una mini-capacitación.
4. Correo `Info@onkerhomes.com`: crear el buzón (Zoho Mail gratis o Google
   Workspace) y añadir los registros MX en el DNS de Wix. La política de
   privacidad ya lo nombra como contacto oficial; avisar para cambiarlo en
   la página (hoy muestra el Gmail).
5. Sesión de Google con el cliente: Search Console (slot del token en
   `src/data/site.ts` → `googleSiteVerification`), GA4 y conversiones
   ANTES del piloto de Google Ads. El banner de cookies ya existe; al
   instalar GA4 se conecta al mismo consentimiento.
6. Campañas: anuncios en español → `/propiedades?...`; internacionales en
   inglés → `/en/propiedades?...`.

## Referencia rápida del panel (para el cliente)

- Entrar: onkerhomes.com/admin → correo y contraseña.
- Propiedades: crear/editar, subir fotos (se comprimen solas), ordenar,
  elegir portada con la ★, "Visible en la página" para ocultar sin borrar.
- Actualidad: igual, con imagen de portada 1600×900.
- Campos EN (opcionales): si se llenan, la versión en inglés los usa; si
  no, el inglés muestra el texto en español.
- Todo lo guardado se publica en segundos, sin despliegues.
