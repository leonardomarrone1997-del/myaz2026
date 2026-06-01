# iAvezzano - Android e iOS

L'app e stata preparata come PWA installabile su Android e iOS.

## Cosa e gia pronto

- `manifest.json` per installazione mobile.
- `service-worker.js` per cache offline dell'app shell.
- Meta tag iOS: titolo, status bar e modalita standalone.
- Icona app collegata come favicon, manifest icon e Apple touch icon.
- Layout responsive per smartphone.
- Mappa OpenStreetMap con look Google-like, marker custom e link a Google Maps per la navigazione reale.
- Import automatico attivita reali da OpenStreetMap/Overpass, con cache locale nel browser.

## Come renderla installabile

La PWA deve essere pubblicata su un dominio HTTPS, per esempio:

- `https://iavezzano.it`
- `https://app.iavezzano.it`

Dopo la pubblicazione:

- Android Chrome: menu browser -> Installa app.
- iOS Safari: Condividi -> Aggiungi alla schermata Home.

## Build native su store

Per pubblicarla su Play Store e App Store serve un wrapper nativo, ad esempio:

- Flutter, se si vuole ricostruire la UI come app nativa.
- Capacitor, se si vuole impacchettare questa PWA in una WebView nativa.

In questa sessione Flutter e npm non sono disponibili, quindi non posso generare APK o IPA direttamente qui. Il prototipo e pero pronto per essere pubblicato come PWA e poi convertito in wrapper nativo.

## Checklist produzione

- Pubblicare su HTTPS.
- Pubblicare su HTTPS per abilitare geolocalizzazione, service worker e installazione PWA.
- Sostituire l'icona SVG con PNG 192x192, 512x512 e 1024x1024 per compatibilita store.
- Collegare backend reale per login, eventi, coupon, mappa e notifiche.
- Configurare Firebase Cloud Messaging per Android.
- Configurare Apple Push Notification service per iOS o notifiche web push dove supportate.
- Preparare privacy policy e termini.
