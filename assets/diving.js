/* معدات الغوص — البيانات بتتحمّل من data/diving.json (لوحة التحكم /admin) */
(function(){
  const B=(ar,en)=>`<span class="ar">${ar||en||""}</span><span class="en">${en||ar||""}</span>`;
  const ask=B("اسأل عن السعر","Ask for price");
  const arts=["comp:s","comp","comp:l"];
  function render(d){
    const brands=d.brands||[], sizes=d.sizes||[], comps=d.compressors||[];
    document.getElementById("dv-brands").innerHTML = brands.map(b=>`
      <div class="brand-card rv in">
        <span class="b-origin">${b.origin||""}</span>
        <h3>${b.name||""}</h3>
        <p class="b-tag">${B(b.tag_ar,b.tag_en)}</p>
        <p>${B(b.desc_ar,b.desc_en)}</p>
        <a class="link-arrow" data-wa="عايز أسعار اسطوانات ${b.name}">${B("اسأل عن السعر","Ask for price")}<span data-i="arrow"></span></a>
      </div>`).join("");
    document.getElementById("dv-sizes").innerHTML = sizes.map(z=>`
      <div class="card size-card rv in">
        <div class="img dive-photo">${z.image?`<img src="${z.image}" alt="${z.liters} L scuba cylinder">`:`<div data-art="s80"></div>`}</div>
        <div class="body">
          <div class="size-num">${z.liters}<small>${B("لتر","L")}</small>${z.popular?`<span class="tag" style="margin-inline-start:auto">${B("الأكثر طلباً","Most popular")}</span>`:""}</div>
          <p>${B(z.desc_ar,z.desc_en)}</p>
          <a class="btn btn-dark" data-wa="عايز أسعار اسطوانة غوص ${z.liters} لتر">${ask}</a>
        </div>
      </div>`).join("");
    document.getElementById("dv-table").innerHTML = `<table>
      <thead><tr><th>${B("المقاس","Size")}</th>${brands.map(b=>`<th>${b.name}<small>${b.origin||""}</small></th>`).join("")}</tr></thead>
      <tbody>${sizes.map(z=>`<tr><td>${z.liters} ${B("لتر","L")}</td>${brands.map(()=>"<td>✓</td>").join("")}</tr>`).join("")}</tbody></table>`;
    document.getElementById("dv-comp").innerHTML = comps.map((c,i)=>`
      <div class="card rv in">
        <div class="img ${c.image?"dive-photo":"dive-art"}">${c.image?`<img src="${c.image}" alt="${c.name_en||""}">`:`<div data-art="${arts[i%3]}"></div>`}</div>
        <div class="body">
          <span class="tag">${B(c.tag_ar,c.tag_en)}</span>
          <h3>${B(c.name_ar,c.name_en)}</h3>
          <p>${B(c.desc_ar,c.desc_en)}</p>
          <a class="btn btn-dark" style="margin-top:auto" data-wa="عايز أسعار ${c.name_ar||c.name_en}">${ask}</a>
        </div>
      </div>`).join("");
    if(window.renderArt) renderArt(); fillContactBits(); hydrateIcons();
  }
  loadJSON("/data/diving.json").then(render).catch(()=>{});
})();
