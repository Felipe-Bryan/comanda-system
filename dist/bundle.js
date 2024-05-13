(()=>{"use strict";var e={239:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.additionalOptionToProduct=void 0;const n=t(634),d=t(266);function o(e,i){return`\n<div class="form-check">\n    <input class="form-check-input text-danger" type="checkbox" name="additionalItem" id="additionalItem${i}" />\n    <label class="form-check-label w-100" for="additionalItem${i}">\n        <div class="d-flex justify-content-between w-100">\n            <div class="fst-italic">${e.name}</div>\n            <div>R$ ${e.price.toFixed(2)}</div>\n        </div>\n    </label>\n</div>`}i.additionalOptionToProduct=function(e){const i=n.productsDB.find((i=>i.id===e));if(i.additionals.length>0){(0,d.componentVisibility)("additionalOptions","show");const e=document.getElementById("additionalItems");e.innerHTML="";for(let t=0;t<i.additionals.length;t++)e.innerHTML+=o(i.additionals[t],t)}else(0,d.componentVisibility)("additionalOptions","hide")}},823:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.categoryBtn=void 0,i.categoryBtn=function(e){return e.active?`\n<button \n  type="button" \n  class="categoryBtn btn btn-outline-secondary ms-2 fst-italic border border-0" \n  id="${e.id}-btn">${e.name}\n</button>`:""}},581:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.productItem=void 0,i.productItem=function(e){return e.active?`\n<div class="card w-auto mx-2 mb-1 productItem" id="productCard${e.id}" data-bs-toggle="modal" data-bs-target="#cartModal">\n  <div class="card-body p-1">\n    <div class="d-flex align-items-end">\n      <div class="me-1 w-25">\n        <img \n        src="${e.imageUrl||"./dist/assets/images/plate.png"}" \n        class="img-thumbnail border border-0" \n        alt="${e.name}" />\n      </div>\n      <h5 class="card-title">${e.name}</h5>\n    </div>\n\n    <div>\n      <p class="card-text mb-1 fst-italic">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolore quisquam perferendis accusantium ea\n        quaerat possimus sequi quam, ab, odio commodi consequuntur ipsam. Reiciendis, natus. Perferendis ad adipisci\n        illo minus!\n      </p>\n      <p class="card-text text-end fst-italic" id="${e.id}-price">R$ ${e.price.toFixed(2)}</p>\n    </div>\n  </div>\n</div>`:""}},603:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.requiredOptionToProduct=void 0;const n=t(634),d=t(266);function o(e,i){return`\n<div class="form-check">\n    <input class="form-check-input" type="radio" name="requiredItem" id="requiredItem${i}" />\n    <label class="form-check-label w-100" for="requiredItem${i}">\n        <div class="d-flex justify-content-between w-100">\n            <div class="fst-italic">${e.name}</div>\n            <div>R$ ${e.price.toFixed(2)}</div>\n        </div>\n    </label>\n</div>`}i.requiredOptionToProduct=function(e){const i=n.productsDB.find((i=>i.id===e));if(i.requiredOption.length>0){(0,d.componentVisibility)("requiredOptions","show");const e=document.getElementById("requiredItems");e.innerHTML="";for(let t=0;t<i.requiredOption.length;t++)e.innerHTML+=o(i.requiredOption[t],t)}else(0,d.componentVisibility)("requiredOptions","hide")}},420:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.categoriesDB=void 0,i.categoriesDB=[{id:"ca01",name:"Entradas",active:!0},{id:"ca02",name:"Pratos",active:!0},{id:"ca03",name:"Petiscos",active:!0},{id:"ca04",name:"Snacks",active:!0},{id:"ca05",name:"Sobremesas",active:!0},{id:"ca06",name:"Refrigerantes",active:!0},{id:"ca07",name:"Sucos",active:!0},{id:"ca08",name:"Cervejas",active:!0},{id:"ca09",name:"Bebidas",active:!0},{id:"ca10",name:"Drinks",active:!0}]},634:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.productsDB=void 0,i.productsDB=[{id:"p001",name:"Entrada 1",description:"Description",price:1,active:!0,categoryId:"ca01",additionals:[{id:"add001",name:"Additional 1",price:2},{id:"add002",name:"Additional 2",price:1.5}],requiredOption:[{id:"req001",name:"Required 1",price:0},{id:"req002",name:"Required 2",price:1.2}]},{id:"p002",name:"Prato 1",description:"Descrição",price:2,active:!0,categoryId:"ca02",additionals:[],requiredOption:[]},{id:"p003",name:"Petisco 1",description:"Descrição",price:3,active:!0,categoryId:"ca03",additionals:[],requiredOption:[]},{id:"p004",name:"Snack 1",description:"Descrição",price:4,active:!0,categoryId:"ca04",additionals:[],requiredOption:[]},{id:"p005",name:"Sobremesa 1",description:"Descrição",price:5,active:!0,categoryId:"ca05",additionals:[],requiredOption:[]},{id:"p006",name:"Refrigerante 1",description:"Descrição",price:6,active:!1,categoryId:"ca06",additionals:[],requiredOption:[],imageUrl:"./dist/assets/images/refri.png"},{id:"p007",name:"Suco 1",description:"Descrição",price:7,active:!0,categoryId:"ca07",additionals:[],requiredOption:[]},{id:"p008",name:"Cerveja 1",description:"Descrição",price:8,active:!0,categoryId:"ca08",additionals:[],requiredOption:[]},{id:"p009",name:"Bebida 1",description:"Descrição",price:9,active:!0,categoryId:"ca09",additionals:[],requiredOption:[]},{id:"p010",name:"Drink 1",description:"Descrição",price:10,active:!0,categoryId:"ca10",additionals:[],requiredOption:[]},{id:"p011",name:"Entrada 2",description:"Descrição",price:11,active:!0,categoryId:"ca01",additionals:[],requiredOption:[]},{id:"p012",name:"Prato 2",description:"Descrição",price:12,active:!0,categoryId:"ca02",additionals:[],requiredOption:[]},{id:"p013",name:"Petisco 2",description:"Descrição",price:13,active:!0,categoryId:"ca03",additionals:[],requiredOption:[]},{id:"p014",name:"Snack 2",description:"Descrição",price:14,active:!0,categoryId:"ca04",additionals:[],requiredOption:[]},{id:"p015",name:"Sobremesa 2",description:"Descrição",price:15,active:!0,categoryId:"ca05",additionals:[],requiredOption:[]},{id:"p016",name:"Refrigerante 2",description:"Descrição",price:16,active:!0,categoryId:"ca06",additionals:[],requiredOption:[],imageUrl:"./dist/assets/images/refri.png"},{id:"p017",name:"Suco 2",description:"Descrição",price:17,active:!0,categoryId:"ca07",additionals:[],requiredOption:[]},{id:"p018",name:"Cerveja 2",description:"Descrição",price:18,active:!0,categoryId:"ca08",additionals:[],requiredOption:[]},{id:"p019",name:"Bebida 2",description:"Descrição",price:19,active:!0,categoryId:"ca09",additionals:[],requiredOption:[]},{id:"p020",name:"Drink 2",description:"Descrição",price:20,active:!0,categoryId:"ca10",additionals:[],requiredOption:[]},{id:"p021",name:"Entrada 3",description:"Descrição",price:21,active:!0,categoryId:"ca01",additionals:[],requiredOption:[]},{id:"p022",name:"Prato 3",description:"Descrição",price:22,active:!0,categoryId:"ca02",additionals:[],requiredOption:[]},{id:"p023",name:"Petisco 3",description:"Descrição",price:23,active:!0,categoryId:"ca03",additionals:[],requiredOption:[]},{id:"p024",name:"Snack 3",description:"Descrição",price:24,active:!0,categoryId:"ca04",additionals:[],requiredOption:[]},{id:"p025",name:"Sobremesa 3",description:"Descrição",price:25,active:!0,categoryId:"ca05",additionals:[],requiredOption:[]},{id:"p026",name:"Refrigerante 3",description:"Descrição",price:26,active:!0,categoryId:"ca06",additionals:[],requiredOption:[],imageUrl:"./dist/assets/images/refri.png"},{id:"p027",name:"Suco 3",description:"Descrição",price:27,active:!0,categoryId:"ca07",additionals:[],requiredOption:[]},{id:"p028",name:"Cerveja 3",description:"Descrição",price:28,active:!0,categoryId:"ca08",additionals:[],requiredOption:[]},{id:"p029",name:"Bebida 3",description:"Descrição",price:29,active:!0,categoryId:"ca09",additionals:[],requiredOption:[]},{id:"p030",name:"Drink 3",description:"Descrição",price:30,active:!0,categoryId:"ca10",additionals:[],requiredOption:[]}]},266:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.componentVisibility=void 0,i.componentVisibility=function(e,i){const t=document.getElementById(e);"show"==i?t.removeAttribute("style"):t.setAttribute("style","display: none")}},689:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.filterProducts=void 0;const n=t(581),d=t(634),o=t(632);i.filterProducts=function(){document.querySelectorAll(".categoryBtn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const i=document.getElementById("productsMenu");i.innerHTML="",d.productsDB.forEach((t=>{t.categoryId===e&&(i.innerHTML+=(0,n.productItem)(t))})),document.querySelectorAll(".productItem").forEach((e=>{const i=e.id.replace("productCard","");e.addEventListener("click",(()=>{(0,o.setProductCardClick)(i)}))}))}(e.id.replace("-btn",""))}))}))}},707:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setCategories=void 0;const n=t(823),d=t(420);i.setCategories=function(){const e=document.getElementById("categoryBar"),i=d.categoriesDB;e.innerHTML=(0,n.categoryBtn)({id:"all",name:"Todos",active:!0}),i.forEach((i=>{e.innerHTML+=(0,n.categoryBtn)(i)}))}},857:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setClickNavButtons=void 0;const n=t(782),d=t(935),o=t(20);i.setClickNavButtons=function(){document.getElementById("btnViewMenu").addEventListener("click",(()=>{(0,o.setNavBtnActive)("btnViewMenu",!0),(0,o.setNavBtnActive)("btnViewConsumption",!1),(0,d.startMenu)()})),document.getElementById("btnViewConsumption").addEventListener("click",(()=>{(0,o.setNavBtnActive)("btnViewConsumption",!0),(0,o.setNavBtnActive)("btnViewMenu",!1),(0,n.startConsumption)()}))}},20:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setNavBtnActive=void 0,i.setNavBtnActive=function(e,i){const t=document.getElementById(e);i?t.setAttribute("class","nav-link mx-1 w-50 text-center fw-semibold text-decoration-underline"):t.setAttribute("class","nav-link mx-1 w-50 text-center")}},632:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setProductCardClick=void 0;const n=t(239),d=t(603),o=t(634);i.setProductCardClick=function(e){const i=o.productsDB.find((i=>i.id===e));document.getElementById("cartModalLabel").innerText=i.name,(0,n.additionalOptionToProduct)(e),(0,d.requiredOptionToProduct)(e)}},830:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.setProductsMenu=void 0;const n=t(581),d=t(420),o=t(634),r=t(632);i.setProductsMenu=function(){const e=document.getElementById("productsMenu");e.innerHTML="";const i=d.categoriesDB,t=o.productsDB;i.forEach((i=>{t.forEach((t=>{t.categoryId===i.id&&(e.innerHTML+=(0,n.productItem)(t))}))})),document.querySelectorAll(".productItem").forEach((e=>{const i=e.id.replace("productCard","");e.addEventListener("click",(()=>{(0,r.setProductCardClick)(i)}))}))}},782:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.startConsumption=void 0;const n=t(266);i.startConsumption=function(){(0,n.componentVisibility)("tableConsumption","show"),(0,n.componentVisibility)("productsMenu","hide"),(0,n.componentVisibility)("categoryNav","hide")}},935:(e,i,t)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.startMenu=void 0;const n=t(266),d=t(689),o=t(707),r=t(830);i.startMenu=function(){(0,n.componentVisibility)("tableConsumption","hide"),(0,n.componentVisibility)("productsMenu","show"),(0,n.componentVisibility)("categoryNav","show"),(0,o.setCategories)(),(0,r.setProductsMenu)(),(0,d.filterProducts)(),document.getElementById("all-btn").addEventListener("click",(()=>{(0,r.setProductsMenu)()}))}}},i={};function t(n){var d=i[n];if(void 0!==d)return d.exports;var o=i[n]={exports:{}};return e[n](o,o.exports,t),o.exports}(()=>{const e=t(857),i=t(935);(0,e.setClickNavButtons)(),(0,i.startMenu)()})()})();