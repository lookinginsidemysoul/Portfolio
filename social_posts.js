/* Recruiter-facing profile metadata, social connection section and deep case-study entry point. */
window.SOCIAL_POSTS = [];
window.SOCIAL_PROFILES = {
  linkedin: 'https://www.linkedin.com/in/pallab-mukherjee',
  facebook: 'https://www.facebook.com/share/1EfdKgJwuk/?mibextid=wwXIfr'
};

(function(){
  const profile = 'https://lookinginsidemysoul.github.io/Portfolio/';
  const addMeta = (name, content, property) => {
    if (!content) return;
    const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
    if (document.head.querySelector(selector)) return;
    const m = document.createElement('meta');
    if (property) m.setAttribute('property', property); else m.setAttribute('name', name);
    m.content = content;
    document.head.appendChild(m);
  };

  addMeta('description', 'Pallab Mukherjee — Data & AI Analytics leader focused on BI leadership, decision intelligence, AI-enabled transformation and enterprise analytics.');
  addMeta('robots', 'index,follow');
  addMeta('author', 'Pallab Mukherjee');
  addMeta('og:type', 'website', 'og:type');
  addMeta('og:title', 'Pallab Mukherjee — Data & AI Analytics Leader', 'og:title');
  addMeta('og:description', 'Data & AI Analytics leadership across BI, decision intelligence, automation and practical AI systems.', 'og:description');
  addMeta('og:url', profile, 'og:url');
  addMeta('og:image', profile + 'headshot.jpg', 'og:image');
  addMeta('twitter:card', 'summary_large_image');
  addMeta('twitter:title', 'Pallab Mukherjee — Data & AI Analytics Leader');
  addMeta('twitter:description', 'Data & AI Analytics leadership across BI, decision intelligence, automation and practical AI systems.');
  addMeta('twitter:image', profile + 'headshot.jpg');

  if (!document.head.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = profile;
    document.head.appendChild(link);
  }

  if (!document.head.querySelector('#pm-person-schema')) {
    const schema = document.createElement('script');
    schema.id = 'pm-person-schema';
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      '@context':'https://schema.org',
      '@type':'Person',
      name:'Pallab Mukherjee',
      url:profile,
      image:profile+'headshot.jpg',
      jobTitle:'Data & AI Analytics Leader',
      sameAs:[window.SOCIAL_PROFILES.linkedin, window.SOCIAL_PROFILES.facebook]
    });
    document.head.appendChild(schema);
  }

  const style = document.createElement('style');
  style.textContent = `
    :focus-visible{outline:3px solid var(--a);outline-offset:3px}
    .btn,.icon,.dock a{transition:transform .2s ease,box-shadow .2s ease,background .2s ease}
    .btn:hover{transform:translateY(-2px)}
    .project,.skill,.stat,.card{transition:transform .25s ease,box-shadow .25s ease}
    .project:hover,.skill:hover{transform:translateY(-4px)}
    @media(max-width:560px){.top .btn.primary{padding-inline:14px}.hero-actions{margin-top:24px}.hero-actions .primary{order:-1}}
    @media print{.mesh,.grain,.top,.dock,.hero-actions,.contact form{display:none!important}.glass{box-shadow:none;border:1px solid #ccc;background:#fff}.section{padding:30px 0}.hero{min-height:auto;padding:40px 20px}.wrap{width:100%}}
    .social-connect{padding:34px;text-align:center}
    .social-connect h2{margin:0 0 10px;font-size:clamp(28px,4vw,42px);line-height:1.1;letter-spacing:-.03em}
    .social-connect p{max-width:650px;margin:0 auto 24px;color:var(--muted);line-height:1.7}
    .social-connect-actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
    .social-connect-actions .btn{min-width:180px}
    .deep-case{padding:34px;margin-bottom:0}
    .deep-case h2{margin:0 0 10px;font-size:clamp(28px,4vw,42px);line-height:1.1;letter-spacing:-.03em}
    .deep-case p{max-width:760px;margin:0 auto 22px;color:var(--muted);line-height:1.7}
    .deep-case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;text-align:left;margin:20px 0}
    .deep-case-card{padding:16px;border:1px solid var(--border);border-radius:16px;background:rgba(255,255,255,.24)}
    .deep-case-card b{display:block;font-size:12px;margin-bottom:6px}.deep-case-card span{color:var(--muted);font-size:11px;line-height:1.5}
    .deep-case-actions{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}
    @media(max-width:720px){.deep-case-grid{grid-template-columns:1fr}.deep-case{padding:25px 20px}}
    @media(max-width:560px){.social-connect{padding:24px 20px}.social-connect-actions .btn,.deep-case-actions .btn{width:100%}}
  `;
  document.head.appendChild(style);

  document.getElementById('thinking')?.remove();
  document.querySelectorAll('a[href="#thinking"]').forEach(a=>a.remove());

  const contact = document.getElementById('contact');
  if (contact && !document.getElementById('deep-case-studies')) {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'deep-case-studies';
    section.innerHTML = `
      <div class="wrap">
        <div class="deep-case glass reveal">
          <div class="eyebrow">SEE THE OPERATING DEPTH</div>
          <h2>Three problems. Three decision systems.</h2>
          <p>Go beneath the portfolio summary into architecture, workflow controls, KPI flows and sanitized dashboard views—designed to make the Manager / Senior Manager trajectory visible.</p>
          <div class="deep-case-grid">
            <div class="deep-case-card"><b>01 · Multi-Agent SQL Assistant</b><span>Applied AI architecture · governed natural-language querying · 3.2 FTE released</span></div>
            <div class="deep-case-card"><b>02 · Invoicing & Reconciliation</b><span>Enterprise controls · exception management · sanitized control-tower dashboard</span></div>
            <div class="deep-case-card"><b>03 · Commercial Decision Support</b><span>KPI-to-action loop · executive decision surface · documented +15% quarterly uplift</span></div>
          </div>
          <div class="deep-case-actions"><a class="btn primary" href="case-studies.html">Explore the deep case studies →</a></div>
        </div>
      </div>`;
    contact.parentNode.insertBefore(section, contact);
  }

  if (contact && !document.getElementById('connect')) {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'connect';
    section.innerHTML = `
      <div class="wrap">
        <div class="social-connect glass reveal">
          <div class="eyebrow">CONNECT WITH ME</div>
          <h2>Let’s stay connected.</h2>
          <p>Follow my professional journey, ideas and updates across LinkedIn and Facebook.</p>
          <div class="social-connect-actions">
            <a class="btn primary" href="${window.SOCIAL_PROFILES.linkedin}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a>
            <a class="btn" href="${window.SOCIAL_PROFILES.facebook}" target="_blank" rel="noopener noreferrer">Connect on Facebook ↗</a>
          </div>
        </div>
      </div>`;
    contact.parentNode.insertBefore(section, contact);
  }

  const heroCta = document.querySelector('.hero-actions .primary');
  if (heroCta && heroCta.getAttribute('href') === '#contact') heroCta.textContent = 'Explore my leadership journey → Let’s connect';

  const resume = document.getElementById('resume');
  if (resume) resume.setAttribute('aria-label','Download Pallab Mukherjee résumé as PDF');
  const theme = document.getElementById('theme');
  if (theme) theme.setAttribute('title','Toggle dark mode');
  const img = document.querySelector('.photo img');
  if (img) { img.loading='lazy'; img.decoding='async'; }
  const form = document.getElementById('contactForm');
  if (form) {
    const submit = form.querySelector('button');
    if (submit) { submit.type='submit'; submit.setAttribute('aria-label','Open email client to send portfolio message'); }
  }
  document.querySelectorAll('a[target="_blank"]').forEach(a=>a.setAttribute('rel','noopener noreferrer'));
  document.querySelectorAll('.reveal').forEach(el=>{
    if (!el.classList.contains('show') && 'IntersectionObserver' in window) requestAnimationFrame(()=>el.classList.add('show'));
  });
})();
