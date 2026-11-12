/* Small progressive enhancements; no framework or external requests. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const root = document.body.dataset.root || '';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const path = value => root + value;
  const link = (url, text, cls = '') => `<a class="${cls}" href="${escape(url)}">${text}</a>`;
  const tags = values => `<div class="tags">${values.map(t => `<span class="tag">${escape(t)}</span>`).join('')}</div>`;
  const shield = '<svg class="security-icon" aria-hidden="true" viewBox="0 0 50 58"><path d="M25 3 45 11v15c0 14-20 26-20 26S5 40 5 26V11Z"/><path d="m16 27 6 6 13-15"/></svg>';
  function artwork(project) {
    if (project.image) return `<img src="${path(project.image)}" alt="${escape(project.imageAlt)}" width="1200" height="760" loading="lazy" decoding="async">`;
    const visuals = {
      architecture: ['Application architecture','A foundation to build on.','<div class="architecture-blocks"><span>Domain</span><span>Application</span><span>Infrastructure</span><span>Persistence</span><span>Web</span></div>','Identity · Permissions · CRUD'],
      community: ['Client work · Nonprofit','A platform for purpose.','<div class="community-mark" aria-hidden="true"><i></i><i></i><i></i></div>','Women Health Empowerment & Emancipation Initiative'],
      authentication: ['Authentication flow','More than a password.',shield+'<div class="auth-steps"><span>Password</span><span>Second factor</span><span>Access</span></div>','TOTP · Email OTP · Recovery codes'],
      password: ['Educational password analysis','Understand your strength.','<div class="password-dots" aria-hidden="true">••••••••</div><div class="strength-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></div>','Rules · Dictionary checks · Feedback'],
      automation: ['Administration modules','Every task, in its place.','<div class="architecture-blocks"><span>Files</span><span>Encryption</span><span>Logs</span><span>Background jobs</span></div>','A modular academic prototype']
    };
    const v = visuals[project.visual] || visuals.architecture;
    return `<div class="art"><span class="art-label">${v[0]}</span>${v[2]}<span class="art-title">${v[1]}</span><span class="art-rule"></span><span class="art-caption">${v[3]}</span></div>`;
  }
  const projectUrl = p => path(p.page || ('project.html?id=' + encodeURIComponent(p.id)));
  function sourceLinks(project, detail = false) {
    return `${project.repo ? link(project.repo,'Source code →') : '<span class="private-label">Private source</span>'}${project.demo ? link(project.demo,'Live website →') : ''}${detail ? '' : link(projectUrl(project),'View project <span aria-hidden="true">→</span>')}`;
  }
  function renderCards() {
    const target = document.getElementById('project-grid');
    if (!target) return;
    target.innerHTML = data.projects.map(p => `<article class="project-card" data-categories="${escape(p.filters.join('|'))}"><a href="${projectUrl(p)}" class="project-visual ${p.visual}" aria-label="Explore ${escape(p.title)}">${artwork(p)}</a><div class="card-top"><span class="category">${escape(p.category)}</span><span class="project-number">${escape(p.number)}</span></div><h3><a href="${projectUrl(p)}">${escape(p.title)}</a></h3><p>${escape(p.summary)}</p>${tags(p.stack)}<div class="card-links">${sourceLinks(p)}</div><p class="project-status">${escape(p.status)}</p></article>`).join('');
    const buttons = [...document.querySelectorAll('.filter')];
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      const filter = button.dataset.filter;
      let count = 0;
      target.querySelectorAll('.project-card').forEach(card => {
        card.hidden = filter !== 'All' && !card.dataset.categories.split('|').includes(filter);
        if (!card.hidden) count++;
      });
      document.getElementById('filter-status').textContent = `${count} projects shown${filter === 'All' ? '' : ' in '+filter}.`;
    }));
    const other = document.getElementById('other-grid');
    other.innerHTML = data.otherWork.map(p => `<article class="other-card"><p class="other-stack">${escape(p.stack)}</p><h3>${escape(p.title)}</h3><p>${escape(p.text)}</p><small>${escape(p.status)}</small>${p.repo ? link(p.repo,'Source →') : ''}</article>`).join('');
  }
  function renderProject() {
    const target = document.getElementById('case-study');
    if (!target) return;
    const id = document.body.dataset.project || new URLSearchParams(location.search).get('id');
    const p = data.projects.find(item => item.id === id);
    if (!p) {
      target.innerHTML = `<section class="wrap not-found"><p class="eyebrow">Project not found</p><h1>Let’s find your way back.</h1><p>This project link may have changed.</p><a class="btn primary" href="${path('index.html#projects')}">Explore all projects →</a></section>`;
      document.title = 'Project not found | Usman Idris Kwaru';
      return;
    }
    document.title = `${p.title} | Usman Idris Kwaru`;
    document.querySelector('meta[name="description"]').content = p.summary;
    const next = data.projects[(data.projects.indexOf(p) + 1) % data.projects.length];
    const section = (id, title, content) => `<section id="${id}"><h2>${title}</h2>${content}</section>`;
    const list = items => `<ul>${items.map(t => `<li>${escape(t)}</li>`).join('')}</ul>`;
    target.innerHTML = `<section class="wrap case-hero"><a class="back-link" href="${path('index.html#projects')}">← Back to selected work</a><p class="eyebrow">${escape(p.category)} · ${escape(p.type)}</p><h1>${escape(p.title)}</h1><p class="case-summary">${escape(p.summary)}</p>${tags(p.stack)}<dl class="case-meta"><div><dt>My contribution</dt><dd>${escape(p.role)}</dd></div><div><dt>Project status</dt><dd>${escape(p.status)}</dd></div><div><dt>Explore</dt><dd><div class="card-links" style="margin-top:0">${sourceLinks(p,true)}</div></dd></div></dl></section><div class="wrap"><div class="case-banner ${p.visual}">${artwork(p)}</div><div class="case-layout"><aside class="case-aside" aria-label="On this page"><div class="case-aside-inner"><h2>Inside the project</h2><a href="#context">Context & contribution</a><a href="#problem">The problem</a><a href="#approach">The approach</a><a href="#features">What I built</a><a href="#engineering">Engineering decisions</a><a href="#outcome">Outcome & scope</a>${p.gallery ? '<a href="#gallery">Project screenshots</a>' : ''}</div></aside><div class="case-body">${section('context','Context & contribution',`<p>${escape(p.context)}</p>`)}${section('problem','The problem',`<p>${escape(p.problem)}</p>`)}${section('approach','The approach',`<p>${escape(p.solution)}</p>`)}${section('features','What I built',list(p.features))}${section('engineering','Engineering decisions',list(p.engineering))}${section('outcome','Outcome & scope',`<p>${escape(p.outcome)}</p><div class="case-note"><h2>Scope & limitations</h2><p>${escape(p.limitation)}</p></div>`)}${p.gallery ? section('gallery','A closer look',p.gallery.map(g=>`<figure class="gallery-figure"><img src="${path(g.src)}" alt="${escape(g.caption)}" width="1200" height="800" loading="lazy"><figcaption>${escape(g.caption)}</figcaption></figure>`).join('')) : ''}</div></div><div class="project-next"><a href="${path('index.html#projects')}">← All projects</a><a href="${projectUrl(next)}">Next project: ${escape(next.title)} →</a></div></div>`;
  }
  renderCards();
  renderProject();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-navigation');
  if (toggle && nav) {
    const close = () => { toggle.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); };
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open); });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
    document.addEventListener('keydown',event => {if(event.key==='Escape' && toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
  }
  document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());
})();
