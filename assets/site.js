/* ===== بيانات الشركة: القيم الافتراضية — التعديل بيتم من لوحة التحكم /admin (data/settings.json) ===== */
const SITE = {
  phone:    "+20 128 585 5552",          // رقم الموبايل (للعرض)
  whatsapp: "201285855552",              // رقم الواتساب بالصيغة الدولية بدون + أو مسافات
  email:    "info@globalimporteg.com",
  email2:   "hurghada.global.import@gmail.com",
  hoursAr:  "من 10 الصبح لـ 5 العصر — أيام العمل الرسمية",
  hoursEn:  "10 AM – 5 PM, official working days",
  map:      "27.2578957,33.8116067",
  addressAr:"الغردقة، البحر الأحمر، مصر",
  addressEn:"Hurghada, Red Sea, Egypt",
  facebook: "https://www.facebook.com/Globaldivingequipment",
  instagram:""                           // حط لينك الانستجرام هنا
};
/* ================================================================= */

/* ---------- أيقونات ---------- */
const ICONS = {
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  battery:'<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
  truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  ship:'<path d="M3 16l2 4h14l2-4zM5 16v-5h14v5M8 11V6h8v5M12 3v3"/>',
  invoice:'<path d="M6 2h9l5 5v15H6zM15 2v5h5M9 12h8M9 16h8M9 8h3"/>',
  hotel:'<path d="M4 21V4h16v17M9 21v-4h6v4M8 8h2M14 8h2M8 12h2M14 12h2"/>',
  home:'<path d="M3 11 12 4l9 7M5 10v10h14V10"/>',
  flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  factory:'<path d="M3 21V10l6 4V10l6 4V6h6v15z"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z"/>',
  palette:'<path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.2-1.7-.4-1.2.4-2.3 1.7-2.3H17a4 4 0 0 0 4-4c0-5-4-9-9-10z"/><circle cx="7.5" cy="11" r="1"/><circle cx="9" cy="7" r="1"/><circle cx="13.5" cy="6.5" r="1"/><circle cx="16.5" cy="9.5" r="1"/>',
  key:'<circle cx="7.5" cy="15.5" r="3.5"/><path d="M10 13 20 3M16 7l3 3"/>',
  sofa:'<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2zM5 18v2M19 18v2"/>',
  disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
  screen:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  handshake:'<path d="M2 11l4-4 5 2 3-2 4 1 4 4M6 7v6l5 5 2-1 2 1 3-3M9 15l2 2M12 13l2 2"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  tank:'<path d="M8.5 7h7v13a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM10 7V4.5h4V7M12 2v2.5M8.5 11h7"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  waves:'<path d="M2 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/>',
  leaf:'<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15zM5 19l8-8"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.5.5 4 2.6 4 6"/>',
  speed:'<path d="M4 18a9 9 0 1 1 16 0M12 14l4-5"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  anchor:'<circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 13a7 7 0 0 0 14 0M8 11h8"/>',
  mountain:'<path d="m3 20 6-10 4 6 3-4 5 8z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  customs:'<path d="M4 21V9l8-5 8 5v12"/><path d="M9 21v-6h6v6M9 11h6"/>',
  export:'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M4 14v6h16v-6"/>',
  import:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 14v6h16v-6"/>',
  percent:'<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
  flask:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7 15h10"/>',
  mask:'<path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3l-1.5-2h-3L9 15H6a3 3 0 0 1-3-3z"/>',
  fb:'<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/>',
  ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/>'
};
const WA_PATH = '<path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C5 9.9 9.9 5.2 16 5.2s11 4.7 11 10.6-4.9 10.6-11 10.6zm6-7.9c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1.1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 2.9 1.1 3.4.9 4 .8.6-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z"/>';
const icon = n => n==="wa" ? `<svg class="svg-wa" viewBox="0 0 32 32" aria-hidden="true">${WA_PATH}</svg>`
  : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]||""}</svg>`;
function hydrateIcons(root=document){ root.querySelectorAll("[data-i]").forEach(e=>{ if(!e.dataset.done){ e.innerHTML = icon(e.dataset.i) + e.innerHTML; e.dataset.done=1; } }); }

function waLink(msg){ return "https://wa.me/" + SITE.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : ""); }

const PAGES = [
  {href:"index.html",      ar:"الرئيسية",        en:"Home"},
  {href:"golf-carts.html", ar:"جولف كار",        en:"Golf Carts"},
  {href:"diving.html",     ar:"معدات الغوص",     en:"Diving"},
  {href:"services.html",   ar:"خدماتنا",         en:"Services"},
  {href:"about.html",      ar:"عن الشركة",       en:"About"},
  {href:"contact.html",    ar:"تواصل معنا",      en:"Contact"}
];

function renderHeader(){
  const cur = location.pathname.split("/").pop() || "index.html";
  const links = PAGES.map(p =>
    `<li><a href="${p.href}" class="${p.href===cur?'active':''}"><span class="ar">${p.ar}</span><span class="en">${p.en}</span></a></li>`).join("");
  document.getElementById("site-header").innerHTML = `
  <header id="hdr"><div class="container nav">
    <a href="index.html" class="logo"><img src="images/logo.png" alt="Global Import"></a>
    <nav><ul class="menu">${links}</ul></nav>
    <div class="nav-actions">
      <button class="lang-btn" onclick="toggleLang()" aria-label="language"><span class="ar">EN</span><span class="en">ع</span></button>
      <a class="btn btn-wa btn-sm hide-sm" href="${waLink('')}" target="_blank" rel="noopener">${icon('wa')}<span class="ar">واتساب</span><span class="en">WhatsApp</span></a>
      <button class="burger" aria-label="menu" onclick="document.body.classList.toggle('menu-open')"><span></span><span></span><span></span></button>
    </div>
  </div></header>`;
  addEventListener("scroll",()=>document.getElementById("hdr").classList.toggle("scrolled",scrollY>10),{passive:true});
}

function renderFooter(){
  const links = PAGES.map(p => `<li><a href="${p.href}"><span class="ar">${p.ar}</span><span class="en">${p.en}</span></a></li>`).join("");
  const social = [SITE.facebook&&`<a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon('fb')}</a>`,
                  SITE.instagram&&`<a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('ig')}</a>`,
                  `<a href="${waLink('')}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('wa')}</a>`].filter(Boolean).join("");
  document.getElementById("site-footer").innerHTML = `
  <footer><div class="container">
    <div class="f-cols">
      <div class="f-about">
        <img src="images/logo-white.png" alt="Global Import" class="f-logo">
        <p class="ar">جلوبال للاستيراد والتصدير — منذ 2008 في الغردقة. عربيات جولف كار Elite Car ومعدات غوص احترافية.</p>
        <p class="en">Global for Import &amp; Export — Hurghada, since 2008. Elite Car golf carts and professional diving equipment.</p>
        <div class="social">${social}</div>
      </div>
      <div><h4><span class="ar">الصفحات</span><span class="en">Pages</span></h4><ul>${links}</ul></div>
      <div><h4><span class="ar">تواصل معنا</span><span class="en">Contact</span></h4><ul class="f-contact">
        <li>${icon('phone')}<a href="tel:${SITE.phone.replace(/\s/g,'')}" dir="ltr">${SITE.phone}</a></li>
        <li>${icon('mail')}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li>${icon('clock')}<span><span class="ar">${SITE.hoursAr}</span><span class="en">${SITE.hoursEn}</span></span></li>
        <li>${icon('pin')}<span><span class="ar">${SITE.addressAr}</span><span class="en">${SITE.addressEn}</span></span></li>
      </ul></div>
    </div>
    <div class="copy">© ${new Date().getFullYear()} Global for Import &amp; Export · globalimporteg.com</div>
  </div></footer>
  <a class="wa-float" href="${waLink('')}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('wa')}</a>`;
}

function fillContactBits(){
  document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink(a.dataset.wa); a.target="_blank"; a.rel="noopener"; });
  document.querySelectorAll("[data-phone]").forEach(e => { e.textContent = SITE.phone; e.href = "tel:"+SITE.phone.replace(/\s/g,''); });
  document.querySelectorAll("[data-email]").forEach(e => { e.textContent = SITE.email; e.href = "mailto:"+SITE.email; });
  document.querySelectorAll("[data-email2]").forEach(e => { e.textContent = SITE.email2; });
  document.querySelectorAll("[data-hours]").forEach(e => { e.innerHTML = `<span class="ar">${SITE.hoursAr}</span><span class="en">${SITE.hoursEn}</span>`; });
  document.querySelectorAll("[data-address]").forEach(e => { e.innerHTML = `<span class="ar">${SITE.addressAr}</span><span class="en">${SITE.addressEn}</span>`; });
}

function setLang(l){
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  try{ localStorage.setItem("gi-lang", l); }catch(e){}
}
function toggleLang(){ setLang(document.documentElement.lang === "ar" ? "en" : "ar"); }

/* contact form -> opens WhatsApp with the message filled in */
function sendForm(e){
  e.preventDefault();
  const f = e.target, ar = document.documentElement.lang === "ar";
  const msg = (ar ? "استفسار من الموقع\n" : "Website enquiry\n") +
    (ar?"الاسم: ":"Name: ") + f.name.value + "\n" +
    (ar?"الموبايل: ":"Phone: ") + f.phone.value + "\n" +
    (ar?"المنتج: ":"Product: ") + f.product.value + "\n" +
    (ar?"الرسالة: ":"Message: ") + f.message.value;
  window.open(waLink(msg), "_blank");
}

/* reveal on scroll */
function reveal(){
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} }),{threshold:.12}) : null;
  document.querySelectorAll(".rv").forEach(el=> io ? io.observe(el) : el.classList.add("in"));
}

function loadJSON(path){ return fetch(path,{cache:"no-cache"}).then(r=>{ if(!r.ok) throw 0; return r.json(); }); }

(function init(){
  let l = "ar"; try{ l = localStorage.getItem("gi-lang") || "ar"; }catch(e){}
  setLang(l);
  const paint = ()=>{ renderHeader(); renderFooter(); fillContactBits(); hydrateIcons();
    document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>document.body.classList.remove("menu-open"))); };
  paint(); reveal();
  /* بيانات التواصل من لوحة التحكم */
  loadJSON("/data/settings.json").then(d=>{ Object.assign(SITE, d); paint(); }).catch(()=>{});
})();
