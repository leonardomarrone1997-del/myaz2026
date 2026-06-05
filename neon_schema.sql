-- iAvezzano - schema iniziale Neon PostgreSQL
-- Esegui questo file nella console SQL di Neon.
-- Non contiene dati sensibili.

create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  phone text,
  role text not null default 'user',
  created_at timestamptz not null default now()
);

create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  category text,
  address text,
  phone text,
  email text,
  website text,
  description text,
  lat numeric(10,7),
  lng numeric(10,7),
  logo_url text,
  image_url text,
  status text not null default 'draft',
  is_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists merchant_accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  business_id uuid references businesses(id) on delete cascade,
  role text not null default 'owner',
  created_at timestamptz not null default now(),
  unique(user_id, business_id)
);

create table if not exists offers (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  title text not null,
  description text,
  starts_at timestamptz,
  ends_at timestamptz,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete set null,
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  location text,
  image_url text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists qr_codes (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  code text unique not null,
  source text not null default 'generic',
  target_url text not null,
  created_at timestamptz not null default now()
);

create table if not exists qr_scans (
  id uuid primary key default gen_random_uuid(),
  qr_code_id uuid references qr_codes(id) on delete cascade,
  business_id uuid references businesses(id) on delete cascade,
  user_agent text,
  ip_hash text,
  referer text,
  scanned_at timestamptz not null default now()
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  plan text not null default 'founder',
  status text not null default 'trial',
  price_cents integer not null default 0,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_businesses_slug on businesses(slug);
create index if not exists idx_businesses_status on businesses(status);
create index if not exists idx_offers_business_id on offers(business_id);
create index if not exists idx_events_starts_at on events(starts_at);
create index if not exists idx_qr_codes_code on qr_codes(code);
create index if not exists idx_qr_scans_business_id on qr_scans(business_id);
create index if not exists idx_qr_scans_scanned_at on qr_scans(scanned_at);

-- Esempio facoltativo di attività iniziale.
-- Puoi togliere o modificare questi dati.
insert into businesses (
  name,
  slug,
  category,
  address,
  phone,
  description,
  lat,
  lng,
  status,
  is_verified
) values (
  'Partner Fondatore Demo',
  'partner-fondatore-demo',
  'Attività locale',
  'Avezzano',
  '',
  'Scheda dimostrativa per testare iAvezzano.',
  42.0326000,
  13.4256000,
  'published',
  false
)
on conflict (slug) do nothing;
