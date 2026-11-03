const content={review:`<div class="eyebrow">PROJECT / 01</div><h2>AI Code Reviewer</h2><p>An event-driven, multi-agent code review platform for GitHub pull requests.</p><div class="architecture">GitHub webhook → FastAPI → Celery + Redis<br>↓<br>LangGraph → Static analysis / Security / Architecture / Quality<br>↓<br>Structured review feedback + PostgreSQL</div><h4>ORCHESTRATION</h4><p>Four parallel agents use LangGraph and OpenAI to inspect distinct dimensions of a pull request. FastAPI microservices coordinate webhook intake and asynchronous processing.</p><h4>OBSERVABILITY & LEARNING</h4><p>A continuous learning workflow uses merged pull requests to refine review patterns. Langfuse supports LLM tracing, with Prometheus and Grafana for system monitoring.</p><h4>TECHNOLOGIES</h4><p>Python, LangGraph, OpenAI, FastAPI, Celery, Redis, PostgreSQL, Docker, Langfuse, Prometheus, Grafana.</p>`,policy:`<div class="eyebrow">PROJECT / 02</div><h2>PolicyPilot</h2><p>An enterprise agentic RAG platform for SEC 10-K filings across 20 companies.</p><div class="architecture">SEC 10-K filings → Ingestion + chunking → Embeddings<br>↓<br>Delta Lake + Unity Catalog → Databricks Vector Search<br>↓<br>LangGraph reasoning → Citation-validated answers</div><h4>GOVERNED RETRIEVAL</h4><p>Document ingestion, chunking, embedding, and semantic retrieval pipelines connect Unity Catalog, Delta Lake, and Databricks Vector Search to provide governed access to financial documents.</p><h4>ANSWER QUALITY</h4><p>Citation validation, hallucination guardrails, and LLM evaluation workflows support context-aware answers with source citations. Unity AI Gateway manages model access.</p><h4>DELIVERY</h4><p>GitHub Actions enables automated, credential-free CI/CD deployment.</p>`};
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#dialog-content').innerHTML=content[b.dataset.project];dialog.showModal()}));document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});document.querySelector('#copy').onclick=async()=>{try{await navigator.clipboard.writeText('munwarmohd15@gmail.com');document.querySelector('#copy-status').textContent='Email copied to clipboard.'}catch{document.querySelector('#copy-status').textContent='Email: munwarmohd15@gmail.com'}};
// Reveal once per visit, with staggered entrances and alternating directions.
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  const targets = [];
  function prepare(element, direction, delay = 0) {
    if (!element) return;
    element.classList.add('motion-reveal', direction);
    element.style.setProperty('--reveal-delay', `${delay}ms`);
    targets.push(element);
  }
  document.querySelectorAll('.hero-copy > *').forEach((element, index) => prepare(element, 'from-left', 100 + index * 110));
  prepare(document.querySelector('.portrait'), 'from-right', 220);
  document.querySelectorAll('.section-heading').forEach(element => prepare(element, 'from-bottom'));
  document.querySelectorAll('.technology').forEach((element, index) => prepare(element, 'from-bottom', (index % 6) * 65));
  document.querySelectorAll('.job').forEach((element, index) => {
    prepare(element.querySelector('.job-meta'), index % 2 ? 'from-right' : 'from-left');
    prepare(element.querySelector('.job-content'), index % 2 ? 'from-left' : 'from-right', 120);
  });
  document.querySelectorAll('.project').forEach((element, index) => {
    prepare(element.querySelector('.project-art'), index % 2 ? 'from-right' : 'from-left');
    prepare(element.querySelector('.project-info'), index % 2 ? 'from-left' : 'from-right', 140);
  });
  prepare(document.querySelector('.education'), 'from-left');
  document.querySelectorAll('.contact > *').forEach((element, index) => prepare(element, 'from-bottom', index * 60));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  requestAnimationFrame(() => requestAnimationFrame(() => targets.forEach(element => observer.observe(element))));
  function showAll() {
    observer.disconnect();
    targets.forEach(element => element.classList.add('is-visible'));
  }
  preference.addEventListener('change', event => { if (event.matches) showAll(); });
  // Keyboard navigation never lands on a visually hidden control.
  document.addEventListener('focusin', event => {
    const target = event.target.closest('.motion-reveal');
    if (target) { target.classList.add('is-visible'); observer.unobserve(target); }
  });
  window.addEventListener('beforeprint', showAll);
})();
