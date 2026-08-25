-- Onker Home — admin panel schema (run once in the Supabase SQL editor).
-- Buckets: create two PUBLIC storage buckets named "listings" and "news"
-- in Storage before running the content migration.

create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  status text not null check (status in ('En venta', 'En alquiler', 'Obra nueva')),
  price text not null,
  price_prefix text,
  price_suffix text,
  specs text not null,
  location text not null,
  body text not null default '',
  -- English fields for the /en site (fall back to Spanish when null)
  name_en text,
  specs_en text,
  body_en text,
  -- ordered array of public photo URLs; first one is the default cover
  photos jsonb not null default '[]'::jsonb,
  cover text,
  listed_at date,
  published boolean not null default true,
  -- manual catalog order on /propiedades (ascending)
  sort integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  -- article body in the house plain-text format (first paragraph = lede)
  body text not null default '',
  -- English fields for the /en site (fall back to Spanish when null)
  title_en text,
  body_en text,
  image text,
  published boolean not null default true,
  published_at date not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Row Level Security: the public site reads only published rows with the
-- anon key; every write requires the authenticated admin session.
alter table listings enable row level security;
alter table articles enable row level security;

create policy "public read published listings" on listings
  for select using (published = true);
create policy "admin full access listings" on listings
  for all to authenticated using (true) with check (true);

create policy "public read published articles" on articles
  for select using (published = true);
create policy "admin full access articles" on articles
  for all to authenticated using (true) with check (true);

-- Storage policies (run after creating the public buckets):
-- anyone can read, only the authenticated admin can write.
create policy "admin write listings bucket" on storage.objects
  for insert to authenticated with check (bucket_id = 'listings');
create policy "admin update listings bucket" on storage.objects
  for update to authenticated using (bucket_id = 'listings');
create policy "admin delete listings bucket" on storage.objects
  for delete to authenticated using (bucket_id = 'listings');
create policy "admin write news bucket" on storage.objects
  for insert to authenticated with check (bucket_id = 'news');
create policy "admin update news bucket" on storage.objects
  for update to authenticated using (bucket_id = 'news');
create policy "admin delete news bucket" on storage.objects
  for delete to authenticated using (bucket_id = 'news');
