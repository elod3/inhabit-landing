/* Inhabit Studio — comportamente comune pentru landing și minicurs */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* meniul de pe telefon */
  const nav = document.getElementById('nav');
  const burger = nav && nav.querySelector('.nav__burger');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Închide meniul' : 'Deschide meniul');
    });
    nav.querySelectorAll('.nav__links a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', false);
    }));
  }

  /* C · cele trei uși: una deschisă o dată; pe desktop se deschid și la hover */
  document.querySelectorAll('[data-doors]').forEach(list => {
    const doors = [...list.querySelectorAll('.door')];
    const open = door => doors.forEach(d => {
      const on = d === door;
      d.classList.toggle('is-open', on);
      d.querySelector('.door__head').setAttribute('aria-expanded', on);
    });
    const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
    doors.forEach(d => {
      d.querySelector('.door__head').addEventListener('click', () => open(d));
      if (canHover) {
        let t;
        d.addEventListener('mouseenter', () => { t = setTimeout(() => open(d), 140); });
        d.addEventListener('mouseleave', () => clearTimeout(t));
      }
    });
  });

  /* D · banda de proiecte: dublăm cardurile ca bucla să nu aibă cusătură */
  document.querySelectorAll('[data-reel]').forEach(track => {
    [...track.children].forEach(card => {
      const copy = card.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.removeAttribute('tabindex');
      track.appendChild(copy);
    });
  });

  /* E · linia drumului se umple cu scroll-ul; punctele se aprind când linia ajunge la ele */
  const path = document.querySelector('[data-path]');
  if (path) {
    const steps = [...path.querySelectorAll('.step')];
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = path.getBoundingClientRect();
      const mark = innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (mark - r.top) / r.height));
      path.style.setProperty('--fill', reduce ? 1 : p);
      steps.forEach(s => {
        const dot = s.querySelector('.step__dot').getBoundingClientRect();
        s.classList.toggle('is-lit', reduce || dot.top < mark);
      });
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  /* titlurile apar o singură dată, când intră în ecran */
  const rise = document.querySelectorAll('.rise');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    rise.forEach(el => io.observe(el));
  } else {
    rise.forEach(el => el.classList.add('is-in'));
  }

  /* minicurs · testul cu cele 7 întrebări */
  const quiz = document.querySelector('[data-quiz]');
  if (quiz) {
    const items = [...quiz.querySelectorAll('[data-q]')];
    const out = quiz.querySelector('[data-quiz-out]');
    const house = document.querySelector('[data-house]');
    const parts = house ? [...house.querySelectorAll('.hp')] : [];
    const render = () => {
      const known = items.filter(i => i.getAttribute('aria-pressed') === 'true').length;
      parts.forEach((p, n) => p.classList.toggle('on', n < known));
      if (house) house.classList.toggle('done', known === items.length);
      const left = items.length - known;
      out.innerHTML = left === 0
        ? '<b>Le știi pe toate 7.</b> Nu ai nevoie de informațiile oferite. Trimite cursul cuiva care își face casă.'
        : `<b>Știi ${known} din 7.</b> ${left === 1 ? 'Întrebarea rămasă are' : `Fiecare din cele ${left} rămase are`} o lecție dedicată în minicurs.`;
    };
    items.forEach(i => i.addEventListener('click', () => {
      i.setAttribute('aria-pressed', i.getAttribute('aria-pressed') !== 'true');
      render();
    }));
    render();
  }

  /* minicurs · formularele de înscriere
     Pe inhabitstudio.ro le legăm de formularul existent (Fluent Forms #3) la lansare.
     Până atunci, local, nu trimit nimic nicăieri. */
  document.querySelectorAll('[data-signup]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = form.querySelector('input[type=email]');
      if (!email.checkValidity()) { email.reportValidity(); return; }
      const msg = form.querySelector('[data-signup-msg]');
      form.classList.add('is-sent');
      // TODO la lansare: trimitere reală către Fluent Forms; mesajul de mai jos e doar pentru varianta locală
      if (msg) msg.textContent = 'Varianta locală: formularul se leagă de lista de emailuri când punem pagina pe inhabitstudio.ro.';
    });
  });

  /* minicurs · videoclipul: iframe-ul YouTube se încarcă doar când apeși play */
  document.querySelectorAll('[data-yt]').forEach(box => {
    box.querySelector('.video__play').addEventListener('click', () => {
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${box.dataset.yt}?autoplay=1&playsinline=1&rel=0`;
      f.title = 'Videoclip arh. Alin Ionescu';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      box.replaceChildren(f);
    }, { once: true });
  });

  /* minicurs · etapele aprind lecțiile lor din bandă */
  const strip = document.querySelector('[data-strip]');
  if (strip) {
    const cells = [...strip.children];
    document.querySelectorAll('[data-stages] .stage').forEach(st => {
      const on = () => { strip.classList.add('is-on'); cells.forEach(c => c.classList.toggle('is-hot', c.dataset.stage === st.dataset.stage)); };
      const off = () => { strip.classList.remove('is-on'); cells.forEach(c => c.classList.remove('is-hot')); };
      st.addEventListener('mouseenter', on); st.addEventListener('focus', on);
      st.addEventListener('mouseleave', off); st.addEventListener('blur', off);
    });
  }

  /* banda de cuvinte: se mișcă doar cât derulezi */
  const bands = [...document.querySelectorAll('[data-words]')];
  if (bands.length && !reduce) {
    let busy = false;
    const move = () => {
      busy = false;
      bands.forEach(band => {
        const r = band.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        const x = (innerHeight - r.top) * 0.45;
        band.firstElementChild.style.transform = `translate3d(${-x - 120}px,0,0)`;
      });
    };
    addEventListener('scroll', () => { if (!busy) { busy = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  /* minicurs · distribuie pe WhatsApp cu linkul paginii */
  document.querySelectorAll('[data-share-wa]').forEach(a => {
    const text = 'Uite un curs gratuit de la doi arhitecți, 22 de lecții despre teren, buget și constructor: ' + location.href.split('#')[0];
    a.href = 'https://wa.me/?text=' + encodeURIComponent(text);
  });
})();
