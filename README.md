# iAvezzano MVP

Prototype web standalone della piattaforma iAvezzano.

## Cosa contiene

- Home cittadina con eventi, sconti, nuove aperture e attivita vicine.
- Design minimal con testata chiara, card leggere e micro-widget meteo demo per Avezzano.
- Scorciatoie rapide per stasera, coupon, weekend, pranzo/cena e nuove aperture.
- Mappa reale OpenStreetMap con import automatico delle attivita di Avezzano, marker a goccia con logo/foto dove disponibile, cache locale e link a Google Maps.
- Eventi con prenotazioni e ticket digitali demo.
- Coupon digitali con QR Code demo.
- Sistema fedelta con livello, progress e premi.
- Sezione "Crea il tuo negozio" a pagamento, con piani da 12,99 EUR/mese e dashboard sbloccabile dopo checkout demo.
- Admin panel con moderazione e analytics citta.
- Icona app personalizzata in `assets/app-icon.svg`.
- Manifest PWA e service worker per installazione su Android/iOS.
- Registrazione demo attiva con email/password, Google, telefono e Apple usando storage locale.
- Pannello profilo utente con foto profilo, impostazioni, coupon, eventi, preferenze e creazione negozio.
- Pulsanti principali collegati a flussi demo con toast, salvataggi locali, prenotazioni, reminder, filtri, strumenti commerciante e riepilogo nel profilo utente.
- Demo guidata al primo ingresso, riapribile dal pulsante Guida e dalle impostazioni del profilo.

## Come aprirla

Apri `index.html` nel browser:

`outputs/localhub/index.html`

Non richiede build, dipendenze o server locale.

## Nota tecnica

In questa sessione Flutter e npm non sono disponibili, quindi questo output e un MVP web statico pronto da provare. La struttura e pensata per essere convertita in:

- Flutter mobile/web per il frontend.
- Node.js/NestJS per backend API.
- PostgreSQL/PostGIS per dati e geolocalizzazione.
- Firebase Cloud Messaging per notifiche push.
- Cloud Storage per media.
