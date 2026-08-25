# USER-TODO — pasos que solo tú (o el cliente) pueden hacer

Estado del código: el panel de administración y el sitio en inglés están
COMPLETOS y desplegados en modo latente. El sitio sigue funcionando con los
datos en archivos hasta que existan las variables de entorno de Supabase;
en ese momento el panel cobra vida sin ningún cambio de código.

## 1. Supabase — RUTA FÁCIL (recomendada, ~5 min de tu parte)

1. En https://supabase.com crear la cuenta CON EL CORREO DEL CLIENTE
   (mismo principio de propiedad que GitHub y Vercel).
2. Icono de la cuenta (arriba a la derecha) → Account Settings →
   Access Tokens → "Generate new token" → copiar el token.
3. Enviarme el token junto con una contraseña de base de datos que tú
   elijas. Con eso yo hago TODO lo demás por API: crear el proyecto,
   ejecutar el esquema, crear los buckets, crear el usuario administrador
   del panel, migrar el contenido y verificar. El token se usa por
   operación, no se guarda, y se revoca después desde la misma página.

## 1B. Supabase — ruta manual (solo si prefieres hacerlo a mano)

1. Crear un proyecto: nombre `onkerhome`, región East US. Guardar la
   contraseña de la base de datos.
2. SQL Editor → pegar y ejecutar el contenido de `supabase/schema.sql`.
3. Storage → crear DOS buckets públicos: `listings` y `news`.
4. Authentication → Users → "Add user" → crear el usuario administrador
   (correo del cliente + contraseña; será el login de /admin).
5. Enviarme de Project Settings → API: Project URL, anon public key y
   service_role key (esta última solo para la migración única).

## 2. Después del token o las claves (mi parte)

- Yo ejecuto `scripts/migrate-content.ts` (sube ~700 fotos e inserta las
  37 propiedades y 22 artículos) y verifico el sitio en modo base de datos.

## 2B. Meta Pixel / CAPI (cuando el cliente envíe el token)

- El cliente debe generar el token de acceso de la API de conversiones
  (ver mensaje enviado). Con el token: variable `META_CAPI_TOKEN` en
  Vercel; el Pixel 228203565063501 y los eventos ya estarán en el código.

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
