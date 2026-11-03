# Predare: minicurs Inhabit / BuildWise (3 nov 2026)

Előd predă proiectul lui Luca pentru că laptopul lui e la reparat până mâine dimineață. Parolele nu stau aici, repo-ul e public: le ai pe WhatsApp, în poza de la Előd.

## Unde e
- Sursa: `site/minicurs.html`, `site/assets/css/minicurs.css`, `site/assets/js/main.js`.
- Pagina de mulțumire (live): sursa în `multumim-minicurs/`, pe server în `public_html/multumim-minicurs/`.
- Previzualizare: ramura `gh-pages`, publicată pe GitHub Pages.
  - De verificat acum: https://elod3.github.io/inhabit-landing/v12/minicurs.html (v9 cu fundaluri alternate, „Cât poți economisi” înaintea lui „Ce vei învăța”, formular pe galben cald)
  - `/v9/` = baza aleasă. `/v10/`, `/v11/` = variante respinse (negru, acoperiș, animații).
  - `/v7/` = ce a primit Alin la 12:12.
  - Rădăcina `/minicurs.html` = iterația de dinainte de corecturi. `/v3/`, `/v4/` = versiuni păstrate la cererea lui.
- Feedbackul lui Alin: https://docs.google.com/document/d/19dC_bKLlLdr8AsUHE9WcMwCn4tkd8uxrhRGHOWMai84/edit (Tab 1 și Tab 2), plus conversația de pe WhatsApp.

## Starea
Tab 1 și Tab 2 sunt făcute, plus ce a mai cerut Alin pe WhatsApp: fără fraza cu achiziția Planificatorului, fără săgeți la recenzii, recenzii pe coloane, titlul lor pe un rând pe desktop, buline în lista care se deschide, calculatorul fără gol în stânga. La 12:00, Alin a zis că recenziile pe coloane sunt prea încărcate și că vrea butonul: acum se văd 3, iar restul se deschid din „Apasă pentru mai multe”, pus la 12:15 în golul de sub prima recenzie. Textul lui e în ordinea trimisă de el. La 12:30: sus rămâne doar butonul „Vreau lecțiile pe email”, care duce la formularul de jos; acolo stă textul cu politica, fără bifă.

**Nimic din minicursul nou nu e pe inhabitstudio.ro.** Formularele din previzualizare nu trimit nimic.

## De făcut, în ordine
1. Előd se uită pe `/v12/` și îi dă linkul lui Alin. Când zice Alin că e bine, `/v12/` se copiază peste rădăcină.
2. Pe pagina de mulțumire live: butonul „Grupul pe Facebook” devine „Grupul pe WhatsApp” și linkul „Mini-cursul” iese din footer. Sursa e deja schimbată (`multumim-minicurs/index.html`), trebuie doar urcată.
3. Lansarea minicursului pe `inhabitstudio.ro/minicurs/`: formularul legat la Fluent Forms #3, redirecționare spre `/multumim-minicurs/`, `noindex` scos, og:image cu URL absolut. Vezi și `README.md`, „Înainte de lansare”.
4. După minicurs: Alin vrea scoasă secțiunea cu calculatorul din pagina planificatorului și din titlul ei. Calculatorul devine gratis, planificatorul rămâne contra cost.

## De lămurit cu Alin
- Pagina promite 30 de lecții, câte una pe zi. Notițele vechi zic că din Ep.23 emailurile sunt săptămânale. Câte lecții are automatizarea de fapt?
- Sigla e simbolul BuildWise din `poze-originale/`. Alin zice că a trimis un logo mai demult; dacă e altul, se schimbă.

## Reguli
- Pune doar ce a cerut Alin. S-a supărat pe adăugirile necerute.
- Textul nu se inventează: se ia din doc sau de pe paginile lor (`preluat/`).
- Sâmbăta nu pleacă emailuri. Asta e intenționat și nu se scrie pe site.
- Înainte de orice modificare pe serverul real: copie a fișierului și OK de la Előd.
- FluentCRM: automatizarea „Înscriere Minicurs” (#4). Hostingul permite maximum 200 de mailuri pe oră.
