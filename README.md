# iAvezzano MVP

Piattaforma web/PWA per Avezzano: eventi, sconti, coupon, attività locali, mappa cittadina e area commercianti.

## Stato progetto

Il progetto nasce come MVP web statico e ora va portato in modalità **pilot/produzione leggera** con:

- **GitHub** per versionamento codice.
- **Vercel** per deploy HTTPS e preview automatiche.
- **Neon PostgreSQL** come database cloud.
- **PWA installabile** su Android/iOS da browser.

> Nota sicurezza: questo repository non deve contenere password, API key, stringhe di connessione Neon o credenziali admin reali. Usa sempre variabili ambiente su Vercel.

## Cosa contiene

- Home cittadina con eventi, sconti, nuove aperture e attività vicine.
- Design mobile-first con card, ricerca e widget meteo demo.
- Scorciatoie rapide per stasera, coupon, weekend, pranzo/cena e nuove aperture.
- Mappa OpenStreetMap con import automatico attività di Avezzano, marker custom e link a Google Maps.
- Eventi con prenotazioni demo.
- Coupon digitali con QR Code demo.
- Sistema fedeltà con punti, progress e premi.
- Area profilo utente.
- Area commercianti: creazione scheda negozio, piani e dashboard demo.
- Admin panel per moderazione e analytics demo.
- Manifest PWA e service worker per installazione.

## Obiettivo del pilot

Prima di aggiungere altre funzioni, l'obiettivo è validare iAvezzano con i primi locali reali:

1. Pubblicare una versione stabile su Vercel.
2. Collegare Neon come database reale.
3. Inserire 10-30 attività vere.
4. Generare QR tracciati per ogni partner.
5. Misurare scansioni, aperture offerte e coupon salvati/usati.
6. Usare i primi dati come prova commerciale per nuovi partner.

## Struttura minima consigliata database

Vedi `neon_schema.sql` per uno schema iniziale con:

- `users`
- `businesses`
- `merchant_accounts`
- `offers`
- `events`
- `qr_codes`
- `qr_scans`
- `subscriptions`

## Variabili ambiente

Copia `.env.example` e configura i valori reali su Vercel, non nel repository.

Variabili principali:

```bash
DATABASE_URL="postgresql://..."
APP_BASE_URL="https://iavezzano.it"
ADMIN_EMAIL="admin@iavezzano.it"
SESSION_SECRET="usa-una-stringa-lunga-e-casuale"
```

## Deploy su Vercel

1. Collega il repository GitHub a Vercel.
2. Imposta il branch `main` come Production Branch.
3. Configura le variabili ambiente in Vercel Project Settings.
4. Collega Neon e usa `DATABASE_URL` solo lato server/API.
5. Verifica che il dominio sia in HTTPS.
6. Testa da smartphone: installazione PWA, mappa, QR, area partner e form.

## Neon database

Per preparare Neon:

1. Apri la console Neon.
2. Crea un database dedicato a iAvezzano.
3. Esegui `neon_schema.sql`.
4. Copia la connection string in `DATABASE_URL` su Vercel.
5. Non esporre `DATABASE_URL` nel frontend.

## Sicurezza prima del lancio

Prima di raccogliere dati reali:

- rimuovere credenziali demo dal codice e dalla documentazione;
- creare admin solo lato database/server;
- usare sessioni/token sicuri;
- aggiungere rate limit su login, form e QR scan;
- validare input utente lato server;
- preparare privacy policy e termini;
- fare backup/export periodico del database Neon.

## Come aprire la versione locale

Apri `index.html` nel browser.

Per testare PWA, service worker e storage in modo più fedele, servi la cartella con un server locale statico, per esempio:

```bash
npx serve .
```

## Roadmap tecnica breve

### Fase 1 - Pilot stabile

- Deploy Vercel funzionante.
- Database Neon con schema base.
- Admin protetto.
- CRUD attività, eventi e offerte.
- QR tracciati per ogni locale.

### Fase 2 - Commercianti

- Dashboard commerciante reale.
- Coupon creati dal partner.
- Statistiche base: scansioni, aperture, coupon usati.
- Pagina pubblica partner fondatore.

### Fase 3 - Crescita

- Notifiche push.
- Pagamenti/abbonamenti.
- App wrapper con Capacitor se serve pubblicazione store.
- Analytics avanzate per zona, campagna e locale.

## Posizionamento commerciale

iAvezzano non va presentata come semplice app, ma come rete cittadina locale:

> Eventi, offerte, coupon e attività di Avezzano in un'unica guida, con QR tracciati per ogni partner.

Formula consigliata per il lancio:

- primi 10 partner fondatori: ingresso gratuito pilot;
- successivi 20: contributo attivazione simbolico;
- piano mensile dopo validazione: da 12,99 EUR/mese.
