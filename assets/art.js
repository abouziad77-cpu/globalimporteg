/* رسومات توضيحية لمعدات الغوص (لحد ما تتحط صور حقيقية) */
let _gid=0;
function cyl(x, y, w, h, band, body){
  const id="g"+(++_gid), cx=x+w/2, r=w/2;
  return `
  <defs><linearGradient id="${id}" x1="0" x2="1">
    <stop offset="0" stop-color="${body[0]}"/><stop offset=".38" stop-color="${body[1]}"/>
    <stop offset=".62" stop-color="${body[2]}"/><stop offset="1" stop-color="${body[3]}"/></linearGradient></defs>
  <rect x="${cx-7}" y="${y-30}" width="14" height="22" rx="3" fill="#2A3746"/>
  <rect x="${cx-16}" y="${y-22}" width="32" height="8" rx="3" fill="#3B4A5B"/>
  <circle cx="${cx+20}" cy="${y-18}" r="9" fill="#1E2A36"/><circle cx="${cx+20}" cy="${y-18}" r="4" fill="#C8A04A"/>
  <path d="M${x} ${y+r} Q${x} ${y} ${cx} ${y} Q${x+w} ${y} ${x+w} ${y+r} V${y+h-14} Q${x+w} ${y+h} ${x+w-14} ${y+h} H${x+14} Q${x} ${y+h} ${x} ${y+h-14}Z" fill="url(#${id})"/>
  <rect x="${x}" y="${y+r+18}" width="${w}" height="${h*.11}" fill="${band}" opacity=".95"/>
  <rect x="${x}" y="${y+r+18+h*.11+6}" width="${w}" height="3" fill="${band}" opacity=".7"/>
  <ellipse cx="${cx}" cy="${y+h+6}" rx="${r+6}" ry="5" fill="rgba(10,31,51,.12)"/>`;
}
const ALU=["#8EA3B6","#F5F8FB","#D3DDE6","#7D93A6"], YEL=["#C99A14","#FFE27A","#F2C230","#B5860C"], BLU=["#0F4E86","#58A9E6","#1D74BC","#0C3E6B"];
const ART = {
  globe: ()=>{
    const pts=[[-60,-35],[95,-60],[40,55],[-95,40],[10,-90]]; // route endpoints around a hub
    const hub=[-5,10];
    let routes=pts.map(([x,y],i)=>`<path d="M${200+hub[0]} ${200+hub[1]} Q${200+(hub[0]+x)/2+(i%2?40:-40)} ${200+(hub[1]+y)/2-50} ${200+x} ${200+y}" fill="none" stroke="#E2C27A" stroke-width="2" stroke-dasharray="5 6" opacity=".85"><animate attributeName="stroke-dashoffset" from="44" to="0" dur="${2+i*.4}s" repeatCount="indefinite"/></path><circle cx="${200+x}" cy="${200+y}" r="5" fill="#E2C27A"/><circle cx="${200+x}" cy="${200+y}" r="11" fill="none" stroke="#E2C27A" opacity=".4"/>`).join("");
    let lat="",lon="";
    for(let k=-3;k<=3;k++){const ry=Math.abs(150*Math.cos(k*Math.PI/8)), cy=200+150*Math.sin(k*Math.PI/8); lat+=`<ellipse cx="200" cy="${cy}" rx="${ry}" ry="${ry*.18}" fill="none" stroke="rgba(255,255,255,.12)"/>`;}
    for(let k=0;k<6;k++){lon+=`<ellipse cx="200" cy="200" rx="${150*Math.abs(Math.cos(k*Math.PI/6))}" ry="150" fill="none" stroke="rgba(255,255,255,.12)"/>`;}
    return `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="gg" cx=".35" cy=".3"><stop offset="0" stop-color="#1C8FD6" stop-opacity=".55"/><stop offset="1" stop-color="#0A1F33" stop-opacity=".1"/></radialGradient></defs>
      <circle cx="200" cy="200" r="150" fill="url(#gg)" stroke="rgba(255,255,255,.25)"/>${lat}${lon}${routes}
      <circle cx="${200+hub[0]}" cy="${200+hub[1]}" r="9" fill="#25D366"/><circle cx="${200+hub[0]}" cy="${200+hub[1]}" r="18" fill="none" stroke="#25D366" opacity=".5"><animate attributeName="r" from="10" to="26" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" from=".6" to="0" dur="2s" repeatCount="indefinite"/></circle>
      <text x="${200+hub[0]}" y="${200+hub[1]+32}" text-anchor="middle" fill="#fff" font-size="13" font-family="Segoe UI,Arial" font-weight="700">EGYPT</text>
    </svg>`;},
  trio: ()=>`<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">${cyl(40,92,62,190,"#1C8FD6",ALU)}${cyl(198,92,62,190,"#C8A04A",ALU)}${cyl(113,62,74,226,"#0A1F33",YEL)}</svg>`,
  s80:  ()=>`<svg viewBox="0 0 160 300" xmlns="http://www.w3.org/2000/svg">${cyl(45,58,70,226,"#1C8FD6",ALU)}</svg>`,
  small:()=>`<svg viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">${cyl(40,110,62,174,"#C8A04A",ALU)}${cyl(122,140,56,144,"#0A1F33",YEL)}</svg>`,
  s100: ()=>`<svg viewBox="0 0 160 300" xmlns="http://www.w3.org/2000/svg">${cyl(42,46,76,238,"#C8A04A",BLU)}</svg>`,
  comp: (size)=>{
    const s = size==="s"?.78:size==="l"?1.12:.95;
    return `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><g transform="translate(150 160) scale(${s}) translate(-150 -160)">
      <ellipse cx="150" cy="262" rx="120" ry="8" fill="rgba(10,31,51,.12)"/>
      <rect x="40" y="70" width="220" height="186" rx="12" fill="none" stroke="#1E2A36" stroke-width="8"/>
      <rect x="40" y="236" width="220" height="20" rx="6" fill="#1E2A36"/>
      <rect x="58" y="150" width="120" height="70" rx="16" fill="#C62828"/>
      <rect x="58" y="150" width="120" height="16" rx="8" fill="#E25050"/>
      ${[0,1,2,3,4,5].map(i=>`<rect x="${66+i*18}" y="172" width="8" height="40" rx="3" fill="#9E1B1B"/>`).join("")}
      <rect x="196" y="96" width="22" height="124" rx="8" fill="#D3DDE6" stroke="#7D93A6" stroke-width="2"/>
      <rect x="226" y="110" width="18" height="110" rx="7" fill="#D3DDE6" stroke="#7D93A6" stroke-width="2"/>
      <rect x="62" y="92" width="110" height="44" rx="8" fill="#2A3746"/>
      <circle cx="90" cy="114" r="15" fill="#F5F8FB" stroke="#C8A04A" stroke-width="3"/><path d="M90 114l7-7" stroke="#0A1F33" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="140" cy="114" r="15" fill="#F5F8FB" stroke="#C8A04A" stroke-width="3"/><path d="M140 114l-6-8" stroke="#0A1F33" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M207 96V78h30v32" fill="none" stroke="#2A3746" stroke-width="5" stroke-linecap="round"/>
    </g></svg>`;}
};
function renderArt(root=document){ root.querySelectorAll("[data-art]").forEach(el=>{ if(el.dataset.drawn) return; const [k,a]=el.dataset.art.split(":"); if(ART[k]){ el.innerHTML = ART[k](a); el.dataset.drawn=1; } }); }
renderArt();
/* bubbles */
document.querySelectorAll(".bubbles").forEach(b=>{
  let h=""; for(let i=0;i<18;i++){ const s=6+Math.random()*22; h+=`<i style="left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${9+Math.random()*12}s;animation-delay:${-Math.random()*15}s"></i>`; }
  b.innerHTML=h;
});
