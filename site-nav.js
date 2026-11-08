(() => {
 const header=document.querySelector('.siteHeader');if(!header)return;
 const links=[...header.querySelectorAll('[data-section]')],fitPage=location.pathname.endsWith('/fit.html'),teamsPage=location.pathname.endsWith('/opportunities.html');
 const setCurrent=key=>links.forEach(a=>{if(a.dataset.section===key)a.setAttribute('aria-current',['fit','teams'].includes(key)?'page':'location');else a.removeAttribute('aria-current')});
 const measure=()=>document.documentElement.style.setProperty('--site-header-height',Math.ceil(header.getBoundingClientRect().height)+'px');
 measure();if('ResizeObserver'in window)new ResizeObserver(measure).observe(header);else window.addEventListener('resize',measure,{passive:true});
 if(fitPage||teamsPage){setCurrent(fitPage?'fit':'teams');return;}
 links.forEach(a=>{if(['profile','film','dossier','contact'].includes(a.dataset.section))a.setAttribute('href',new URL(a.href).hash)});
 const sections=[...document.querySelectorAll('main>section[id]')];let scheduled=false;
 const update=()=>{scheduled=false;let key='profile';for(const s of sections){if(s.getBoundingClientRect().top<=header.getBoundingClientRect().height+90)key=s.id==='source-queue'?'film':s.id==='journey'?'dossier':s.id==='contact'?'contact':'profile'}setCurrent(key)};
 window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});window.addEventListener('hashchange',update);update();
 const revealHash=()=>{let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const target=id&&document.getElementById(id),group=target&&target.closest('details');if(group){group.open=true;target.scrollIntoView()}};
 window.addEventListener('hashchange',revealHash);revealHash();
})();

