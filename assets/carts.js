/* =====================================================================
   عربيات الجولف كار — البيانات بتتحمّل من data/carts.json (لوحة التحكم /admin)
   ===================================================================== */
let COMMON = {}, CARTS = [];
const CATS = [
  {id:"all",      ar:"الكل",                 en:"All"},
  {id:"standard", ar:"عادي (Non-Lifted)",     en:"Standard (Non-Lifted)"},
  {id:"lifted",   ar:"مرفوع Lifted",          en:"Lifted"},
  {id:"forward",  ar:"كل الكراسي لقدّام",      en:"All forward-facing"},
  {id:"service",  ar:"خدمة / إسعاف / نقل",     en:"Utility / Ambulance / Service"}
];

function normCart(c, i){
  const slug = (c.code||("cart-"+i)).toLowerCase().replace(/[^a-z0-9]+/g,"-");
  const spec = {};
  if(c.battery_ar || c.battery_en) spec.battery = {ar:c.battery_ar||c.battery_en, en:c.battery_en||c.battery_ar};
  return {id:slug, code:c.code||"", cat:c.category||"standard", p:String(c.seats||""), dims:c.dims||"", range:c.range||"",
    climb:c.climb||"", turn:c.turn||"", load:c.load||"", bed:c.bed||"", wheelbase:c.wheelbase||"", popular:!!c.popular,
    ar:c.name_ar||c.name_en||"", en:c.name_en||c.name_ar||"", dAr:c.desc_ar||"", dEn:c.desc_en||"", img:c.image||"", spec};
}
function normCommon(m){
  const o={}; Object.keys(m).forEach(k=>{ const b=k.replace(/_(ar|en)$/,""); o[b]=o[b]||{}; o[b][k.endsWith("_ar")?"ar":"en"]=m[k]; });
  Object.keys(o).forEach(b=>{ if(o[b].ar===o[b].en) o[b]=o[b].ar||""; else o[b]={ar:o[b].ar||o[b].en,en:o[b].en||o[b].ar}; });
  return o;
}
const bi = (ar,en) => `<span class="ar">${ar}</span><span class="en">${en}</span>`;
const tx = o => typeof o==="string"||typeof o==="number" ? o : bi(o.ar,o.en);
const specOf = c => Object.assign({}, COMMON, c.spec||{});
const pic = c => `<img src="${c.img}" alt="Elite Car ${c.en}">`;
const seatsTxt = c => bi(`${c.p} راكب`,`${c.p} seats`);

function renderTabs(){
  document.getElementById("cart-tabs").innerHTML = CATS.map(k=>{
    const n = k.id==="all" ? CARTS.length : CARTS.filter(c=>c.cat===k.id).length;
    return `<button data-cat="${k.id}" class="${k.id==="all"?"on":""}">${bi(k.ar,k.en)} <small>${n}</small></button>`;}).join("");
  document.querySelectorAll("#cart-tabs button").forEach(b=>b.onclick=()=>{
    document.querySelectorAll("#cart-tabs button").forEach(x=>x.classList.remove("on")); b.classList.add("on");
    renderGrid(b.dataset.cat);
  });
}

function renderGrid(cat="all"){
  const list = CARTS.filter(c=>cat==="all"||c.cat===cat);
  document.getElementById("cart-grid").innerHTML = list.map(c=>{const k=CATS.find(x=>x.id===c.cat);return `
    <div class="card cart-card" onclick="openCart('${c.id}')">
      <div class="img cart-img">${pic(c)}${c.popular?`<span class="ribbon">${bi("الأكثر طلباً","Best seller")}</span>`:""}</div>
      <div class="body">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
          <span class="code">${c.code}</span><span class="tag">${bi(k.ar,k.en)}</span></div>
        <h3>${bi(c.ar,c.en)}</h3>
        <div class="badges">
          <span>${icon("users")}${seatsTxt(c)}</span>
          <span>${icon("battery")}${bi("حتى "+c.range+" كم","up to "+c.range+" km")}</span>
          <span>${icon("bolt")}72V</span>
          ${c.bed?`<span>${icon("truck")}${bi("صندوق","cargo bed")}</span>`:""}
        </div>
        <div class="row-btns">
          <button class="btn btn-dark">${bi("المواصفات","View specs")}</button>
          <a class="btn btn-wa" onclick="event.stopPropagation()" href="${waLink("عايز عرض سعر: "+c.code+" — "+c.ar)}" target="_blank" rel="noopener">${bi("عرض سعر","Get a quote")}</a>
        </div>
      </div>
    </div>`;}).join("");
}

function openCart(id){
  const c = CARTS.find(x=>x.id===id), s = specOf(c);
  const row = (ar,en,v) => `<tr><th>${bi(ar,en)}</th><td>${tx(v)}</td></tr>`;
  const related = CARTS.filter(x=>x.cat===c.cat && x.id!==c.id).slice(0,4);
  document.getElementById("cart-modal-body").innerHTML = `
    <div class="m-grid">
      <div class="m-pic">${pic(c)}</div>
      <div>
        <span class="code">${c.code}</span>
        <h2>${bi(c.ar,c.en)}</h2>
        <p class="m-desc">${bi(c.dAr,c.dEn)}</p>
        <ul class="m-feat">
          <li>${bi("نظام 72 فولت AC — عزم أعلى على الطلعات والحمولة","72V AC system — more torque on slopes and under load")}</li>
          <li>${bi("بطارية ليثيوم بدون صيانة","Maintenance-free lithium battery")}</li>
          <li>${bi("فرامل ديسك هيدروليك على الـ 4 عجلات","4-wheel hydraulic disc brakes")}</li>
          <li>${bi("متاحة بـ 8 ألوان + ألوان حسب الطلب","8 colours + custom colours")}</li>
          <li>${bi("ضمان سنة على البطارية","1-year battery warranty")}</li>
        </ul>
        <a class="btn btn-wa" href="${waLink("عايز عرض سعر: "+c.code+" — "+c.ar)}" target="_blank" rel="noopener">${icon("wa")}${bi("اطلب عرض سعر على واتساب","Get a quote on WhatsApp")}</a>
      </div>
    </div>
    <div class="spec-groups">
      <div><h4>${bi("الموتور والبطارية","Power")}</h4><table>
        ${row("النظام","System",s.voltage)}${row("البطارية","Battery",s.battery)}${row("الموتور","Motor",s.motor)}
        ${row("الكنترولر","Controller",s.controller)}${row("السرعة القصوى","Max speed",s.speed)}
        ${row("أقصى مسافة بالشحنة","Max range",bi(c.range+" كم",c.range+" km"))}${row("الصعود","Climbing ability",c.climb)}</table></div>
      <div><h4>${bi("الأبعاد والشاسيه","Dimensions & chassis")}</h4><table>
        ${row("عدد الركاب","Passengers",c.p)}${row("الأبعاد (ط×ع×ار) مم","Dimensions (L×W×H) mm",c.dims)}
        ${c.wheelbase?row("قاعدة العجلات","Wheelbase",c.wheelbase+" mm"):""}
        ${row("الحمولة","Loading weight",c.load+" kg")}${c.bed?row("مقاس الصندوق مم","Cargo bed mm",c.bed):""}
        ${row("نصف قطر الدوران","Turning radius",c.turn+" m")}
        ${row("الفرامل","Brakes",s.brakes)}${row("المساعدين","Suspension",s.suspension)}${row("الجنوط","Rims",s.rims)}${row("الضمان","Warranty",s.warranty)}</table></div>
    </div>
    ${related.length?`<h4 class="rel-title">${bi("موديلات مشابهة","Related models")}</h4>
    <div class="rel">${related.map(r=>`<button onclick="openCart('${r.id}')"><div>${pic(r)}</div>${bi(r.ar,r.en)}</button>`).join("")}</div>`:""}`;
  const m=document.getElementById("cart-modal"); m.classList.add("open"); m.scrollTop=0;
  document.body.style.overflow="hidden";
}
function closeCart(){ document.getElementById("cart-modal").classList.remove("open"); document.body.style.overflow=""; }
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeCart(); });

loadJSON("/data/carts.json").then(d=>{ COMMON = normCommon(d.common||{}); CARTS = (d.items||[]).map(normCart); renderTabs(); renderGrid(); const n=document.getElementById("cart-count"); if(n) n.textContent=CARTS.length; })
  .catch(()=>{ document.getElementById("cart-grid").innerHTML = "<p style=\"text-align:center;color:#5E6E80\">تعذّر تحميل الموديلات — حدّث الصفحة.</p>"; });
