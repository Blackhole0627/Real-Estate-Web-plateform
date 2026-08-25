# USER-TODO — pasos que solo tú (o el cliente) pueden hacer

Estado del código: el panel de administración y el sitio en inglés están
COMPLETOS y desplegados en modo latente. El sitio sigue funcionando con los
datos en archivos hasta que existan las variables de entorno de Supabase;
en ese momento el panel cobra vida sin ningún cambio de código.

## 1. Crear el proyecto de Supabase (con el CLIENTE, ~20 min)

1. En https://supabase.com crear la cuenta CON EL CORREO DEL CLIENTE
   (mismo principio de propiedad que GitHub y Vercel).
2. Crear un proyecto: nombre `onkerhome`, región East US (la más cercana
   a RD). Guardar la contraseña de la base de datos.
3. SQL Editor → pegar y ejecutar el contenido de `supabase/schema.sql`.
4. Storage → crear DOS buckets públicos: `listings` y `news`
   (marcar "Public bucket" en ambos).
5. Authentication → Users → "Add user" → crear el usuario administrador
   con el correo del cliente y una contraseña (este será el login del
   panel en /admin).
6. Enviarme tres valores de Project Settings → API:
   - Project URL
   - anon public key
   - service_role key (solo para la migración única; no se guarda)

## 2. Después de enviarme las claves (mi parte, pero la disparas tú)

- Yo ejecuto `scripts/migrate-content.ts` (sube ~700 fotos e inserta las
  37 propiedades y 22 artículos) y verifico el sitio en modo base de datos.

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
