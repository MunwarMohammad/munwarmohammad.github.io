const content = {
  review: `<h2>Multi-Agent GitHub Code Reviewer</h2>
    <h4>From webhook to review</h4>
    <p>FastAPI receives GitHub webhooks. Celery and Redis process reviews asynchronously, with PostgreSQL for storage and Docker for deployment.</p>
    <p>A LangGraph supervisor routes each pull request to agents for static analysis, security, architecture, and code quality. The OpenAI API consolidates their findings into structured feedback and removes duplicates.</p>
    <h4>Tracing and monitoring</h4>
    <p>Langfuse traces agent execution and token use. Prometheus and Grafana track job throughput and latency.</p>`,
  policy: `<h2>Agentic RAG Platform for SEC Filings</h2>
    <h4>Retrieval across 20 companies</h4>
    <p>Azure Databricks ingests and chunks SEC 10-K filings. Delta Lake stores the data, Unity Catalog governs access, and Databricks Vector Search indexes the embeddings.</p>
    <p>LangGraph coordinates LangChain and LlamaIndex for hybrid retrieval, reranking, tool calls, and conversation memory.</p>
    <h4>Answer validation</h4>
    <p>Model calls pass through Mosaic AI Gateway. The platform validates citations, evaluates retrieval relevance and groundedness, and routes low-confidence answers to human review. GitHub Actions automates deployment.</p>`
};
const dialog=document.querySelector('dialog');document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#dialog-content').innerHTML=content[b.dataset.project];dialog.showModal()}));document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});document.querySelector('#copy').onclick=async()=>{try{await navigator.clipboard.writeText('munwarmohammad70@gmail.com');document.querySelector('#copy-status').textContent='Email copied to clipboard.'}catch{document.querySelector('#copy-status').textContent='Email: munwarmohammad70@gmail.com'}};
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
