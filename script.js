/* ТОЯМО СУШИ · Hero + White actions · Scroll reveal */
(function(){
  'use strict';

  const SVG={
    whatsapp:'<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2a10 10 0 00-8.6 15.1L2 22l4.9-1.3A10 10 0 1012 2z"/></svg>',
    telegram:'<svg viewBox="0 0 24 24"><path d="M21.2 4.4L2.4 10.8c-.6.2-.6.9 0 1.1l4.8 1.8 1.8 5.7c.1.4.6.5.9.3l2.7-2.2 4.7 3.5c.4.3 1 .1 1.1-.4L22 5.3c.1-.6-.4-1.1-.8-.9z"/><path d="M8.3 13.7l8.8-5.4"/></svg>',
    phone:'<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.44 2.24.7 2.81.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45s.57.26 2.81.7A2 2 0 0122 16.92z"/></svg>',
    'map-pin':'<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    instagram:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    vk:'<svg viewBox="0 0 24 24"><path d="M20.8 7.74c.15-.48 0-.83-.68-.83h-2.25c-.57 0-.83.3-.98.64 0 0-1.14 2.79-2.76 4.6-.52.52-.76.69-1.05.69-.14 0-.36-.17-.36-.65V7.74c0-.57-.16-.83-.63-.83H9.15c-.35 0-.56.26-.56.5 0 .53.79.65.87 2.14v3.23c0 .71-.13.84-.4.84-.77 0-2.62-2.81-3.72-6.03-.22-.62-.43-.87-1-.87H2.08c-.64 0-.77.3-.77.64 0 .58.74 3.5 3.46 7.34C6.58 17.18 9 18.5 11.17 18.5c1.3 0 1.46-.29 1.46-.8v-2.02c0-.64.14-.77.59-.77.33 0 .9.17 2.24 1.45 1.52 1.52 1.78 2.2 2.63 2.2h2.25c.64 0 .96-.32.77-.94-.2-.62-.93-1.52-1.9-2.59-.52-.62-1.31-1.29-1.55-1.62-.33-.43-.24-.62 0-1 0 0 2.72-3.83 3-5.13z"/></svg>',
    max:'<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>'
  };

  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const $=id=>document.getElementById(id);

  function addUtm(url,u){
    if(!u||!/^https?:/.test(url))return url;
    try{const o=new URL(url);Object.entries(u).forEach(([k,v])=>{if(v&&!o.searchParams.has(k))o.searchParams.set(k,v)});return o.toString()}
    catch{return url}
  }

  function track(ev,d){
    if(typeof ym==='function'&&window._ymId)ym(window._ymId,'reachGoal',ev,d);
    if(typeof gtag==='function')gtag('event',ev,d);
    if(['localhost','127.0.0.1'].includes(location.hostname))console.log('[ev]',ev,d);
  }

  function mkA(url,cls){
    const a=document.createElement('a');a.href=url;a.className=cls;
    if(!/^(tel:|tg:)/.test(url)){a.target='_blank';a.rel='noopener noreferrer'}
    return a;
  }

  function render(c){
    if($('brandMain'))$('brandMain').textContent=c.brand_name||'ТОЯМО';
    if($('brandSub'))$('brandSub').textContent=c.brand_sub||'СУШИ';
    if($('subtitle'))$('subtitle').textContent=c.subtitle||'';
    if($('workTime'))$('workTime').textContent=c.work_time||'';
    if($('logoImg')&&c.logo)$('logoImg').src=c.logo;
    if($('footerAddress')&&c.address)$('footerAddress').textContent=c.address;
    if($('footerPhone')&&c.phone){
      const n=c.phone.replace(/[^+\d]/g,'');
      $('footerPhone').innerHTML='<a href="tel:'+esc(n)+'">'+esc(c.phone)+'</a>';
    }
    if(c.meta?.title)document.title=c.meta.title;
    const dm=document.querySelector('meta[name="description"]');
    if(dm&&c.meta?.description)dm.content=c.meta.description;

    // Hero text is hardcoded in HTML — no JS override needed

    const ls=(c.links||[]).filter(l=>l.isEnabled).sort((a,b)=>a.order-b.order);
    const g={primary:[],messenger:[],util:[],social:[]};
    ls.forEach(l=>{(g[l.group||'primary']||(g.primary)).push(l)});
    const u=c.utm_defaults;

    /* PRIMARY — unified buttons */
    const sBox=$('primaryActions');
    if(sBox) g.primary.forEach((l,i)=>{
      const url=addUtm(l.url,u);
      const a=mkA(url,'btn rc');
      a.dataset.id=l.id;
      const isImg=l.icon&&/\.\w+$/.test(l.icon);
      const icoHtml=isImg
        ?'<span class="btn__ico"><img src="'+esc(l.icon)+'" alt="" class="btn__img"></span>'
        :(SVG[l.icon]?'<span class="btn__ico">'+SVG[l.icon]+'</span>':'');
      a.innerHTML=icoHtml+'<span>'+esc(l.title)+'</span>';
      a.style.transitionDelay=(i*.08)+'s';
      a.onclick=()=>track(l.event,{button:l.title,url});
      sBox.appendChild(a);
    });

    /* MESSENGERS — circles */
    const rBox=$('messengerActions');
    if(rBox) g.messenger.forEach((l,i)=>{
      const url=addUtm(l.url,u);
      const a=mkA(url,'circ rc');
      a.dataset.id=l.id;
      a.style.transitionDelay=(.12+i*.06)+'s';
      const isImg=l.icon&&/\.\w+$/.test(l.icon);
      if(isImg){
        a.innerHTML='<span class="circ__ring"><img src="'+esc(l.icon)+'" alt="'+esc(l.title)+'" class="circ__img"></span>';
      }else{
        a.innerHTML='<span class="circ__ring">'+(SVG[l.icon]||'')+'</span>';
      }
      a.onclick=()=>track(l.event,{button:l.title,url});
      rBox.appendChild(a);
    });

    /* UTILS — text links */
    const uBox=$('utilActions');
    if(uBox) g.util.forEach((l,i)=>{
      const url=addUtm(l.url,u);
      const a=mkA(url,'tlink rc');
      a.style.transitionDelay=(.25+i*.06)+'s';
      a.innerHTML=(SVG[l.icon]||'')+' '+esc(l.title);
      a.onclick=()=>track(l.event,{button:l.title,url});
      uBox.appendChild(a);
    });

    /* SOCIAL — dots */
    const dBox=$('socialActions');
    if(dBox) g.social.forEach((l,i)=>{
      const url=addUtm(l.url,u);
      const a=mkA(url,'dot rc');
      a.title=l.title;
      a.style.transitionDelay=(.3+i*.06)+'s';
      a.innerHTML=SVG[l.icon]||'';
      a.onclick=()=>track(l.event,{button:l.title,url});
      dBox.appendChild(a);
    });

    initAnalytics(c.analytics);

    // Init scroll reveal after render
    requestAnimationFrame(initReveal);
  }

  /* ---- Scroll Reveal with IntersectionObserver ---- */
  function initReveal(){
    const items=document.querySelectorAll('.reveal, .rc');
    if(!items.length)return;

    const obs=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
        }
      });
    },{
      threshold:0.15,
      rootMargin:'0px 0px -40px 0px'
    });

    items.forEach(el=>obs.observe(el));
  }

  async function loadCfg(){
    try{const r=await fetch('config.json?v='+Date.now());if(!r.ok)throw 0;return r.json()}
    catch{if(window.__INLINE_CONFIG__)return window.__INLINE_CONFIG__;throw new Error('x')}
  }

  function initAnalytics(a){
    if(!a)return;
    if(a.yandex_metrika_id){
      window._ymId=+a.yandex_metrika_id;
      (function(m,e,t,r,i,k,x){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=+new Date;
      for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r)return}
      k=e.createElement(t);x=e.getElementsByTagName(t)[0];k.async=1;k.src=r;x.parentNode.insertBefore(k,x)
      })(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
      ym(window._ymId,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
    }
    if(a.google_analytics_id){
      const s=document.createElement('script');s.async=true;
      s.src='https://www.googletagmanager.com/gtag/js?id='+a.google_analytics_id;
      document.head.appendChild(s);
      window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
      gtag('js',new Date());gtag('config',a.google_analytics_id);
    }
  }

  function initArrow(){
    const arrow=document.querySelector('.hero__arrow');
    if(!arrow)return;
    let ticking=false;
    window.addEventListener('scroll',()=>{
      if(!ticking){
        requestAnimationFrame(()=>{
          arrow.classList.toggle('hidden',window.scrollY>50);
          ticking=false;
        });
        ticking=true;
      }
    },{passive:true});
  }

  async function init(){try{render(await loadCfg());initArrow()}catch(e){console.error(e)}}
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();
