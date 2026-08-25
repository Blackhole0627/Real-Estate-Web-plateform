# USER-TODO — estado y pasos restantes

## ✅ COMPLETADO (2026-08-25/26)

- Supabase: proyecto del cliente creado, esquema, buckets, usuario admin,
  36 propiedades + 20 artículos + ~700 fotos migrados, traducciones EN
  sincronizadas. Credenciales en
  C:UsersAdministratorVideosprojectsonker-supabase-credentials.txt
- Vercel: variables de entorno configuradas por API y redeploy hecho.
  PRODUCCIÓN EN MODO BASE DE DATOS. Panel vivo en onkerhomes.com/admin
  (login: onkerhome@gmail.com, contraseña en el archivo de credenciales).
- Meta Pixel 228203565063501 + Conversions API activos con banner de
  cookies (los eventos solo se envían tras aceptar). Verificado en vivo.

## PENDIENTE

1. REVOCAR los tokens usados (ya no hacen falta):
   - Supabase: supabase.com → Account → Access Tokens
   - Vercel: vercel.com → Account Settings → Tokens
   - GitHub: regenerar ambos tokens cuando haya un momento tranquilo
2. Prueba con el cliente en Meta Events Manager → pestaña Probar eventos:
   navegar la página, abrir una propiedad, tocar WhatsApp y enviar un
   formulario; deben aparecer PageView, ViewContent, Contact y Lead.
3. Entregar al cliente su acceso al panel (correo + contraseña del archivo
   de credenciales) con una mini-capacitación.

## 3. Variables de entorno en Vercel (2 min)

En el proyecto de Vercel del cliente → Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL` = Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon public key

Redeploy. Desde ese momento: el sitio lee de la base de datos, y el panel
vive en `https://onkerhomes.com/admin` (login = usuario del paso 1.5).

## 4. Pendientes previos que siguen abiertos

- Correo `Info@onkerhomes.com`: crear el buzón (Zoho Mail gratis o Google
  Workspace) y añadir los registros MX en el DNS de Wix. La política de
  privacidad ya lo nombra como contacto oficial. Avisarme cuando exista
  para cambiarlo en la página (hoy muestra el Gmail).
- Sesión de Google con el cliente: Search Console (hay un slot para el
  token en `src/data/site.ts` → `googleSiteVerification`), GA4 y la
  medición de conversiones ANTES del piloto de Ads. Recordatorio: al
  instalar GA4/Ads hay que añadir el banner de cookies que la política de
  privacidad (sección 10) promete — pídemelo junto con el tracking.
- Al lanzar la campaña: los anuncios en español apuntan a `/propiedades?...`
  y los internacionales en inglés a `/en/propiedades?...`.
- Tokens de GitHub: regenerarlos cuando haya un momento tranquilo (los
  actuales viajaron por el chat).

## Referencia rápida del panel (para el cliente)

- Entrar: onkerhomes.com/admin → correo y contraseña.
- Propiedades: crear/editar, subir fotos (se comprimen solas), ordenar,
  elegir portada con la ★, "Visible en la página" para ocultar sin borrar.
- Actualidad: igual, con imagen de portada 1600×900.
- Campos EN (opcionales): si se llenan, la versión en inglés los usa; si
  no, el inglés muestra el texto en español.
- Todo lo guardado se publica en segundos, sin despliegues.
