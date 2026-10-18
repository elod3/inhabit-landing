**Previzualizare:** https://elod3.github.io/inhabit-landing/ · minicurs: https://elod3.github.io/inhabit-landing/minicurs.html

# Inhabit Studio — landing + minicurs (local)

Local: `cd site && python3 -m http.server 8765` → http://localhost:8765/

- `site/index.html` — landing-ul care le adună pe toate (structura lui Gabriel, 15 oct: A bara, B intrarea, C trei uși, D banda de proiecte, E drumul, F cele 4 faze, păreri, contact).
- `site/minicurs.html` — minicursul refăcut după auditul din chatul Claude al lui Alin (formular în primul ecran și repetat, testul cu 7 întrebări, lecțiile pe etape, share pe WhatsApp, og 1200×630).
- Design: fișa lui Luca „Limbajul vizual al prezentării” (extras din casa-care-vinde/style.css).
- Text: preluat de pe inhabitstudio.ro/minicurs, /servicii-de-consultanta, planificator.inhabitstudio.ro (`preluat/`). Recenziile transcrise din capturile WhatsApp de pe site.
- `referinte/` — capturile lui Gabriel (A–F) și ale site-urilor de referință.

## Înainte de lansare (pe inhabitstudio.ro, cPanel/WordPress)
- Formularele de înscriere nu trimit nimic local → legat de Fluent Forms #3 (cel de pe /minicurs/) sau de lista de email folosită acum.
- `noindex` scos din ambele pagini; og:image cu URL absolut.
- Decis unde stă landing-ul (homepage-ul WP actual?) și ce se întâmplă cu /minicurs/ vechi (redirect).
- De verificat cu Alin: cifrele de pe rețele (aug. 2026), sursa pentru „8 din 10” și „50–70%”, descrierile proiectelor din bandă (scrise după randări), anul 2024 la Refugiul Scara.
