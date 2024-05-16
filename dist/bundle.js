(()=>{"use strict";var e={859:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.additionalItem=void 0,t.additionalItem=function(e,t){return`\n  <div class="form-check">\n      <input class="form-check-input additional" type="checkbox" name="additionalItem" id="additionalItem${t}" title="${e.name}" value="${e.price}"/>\n      <label class="form-check-label w-100" for="additionalItem${t}">\n          <div class="d-flex justify-content-between w-100">\n              <div class="fst-italic">${e.name}</div>\n              <div>R$ ${e.price.toFixed(2)}</div>\n          </div>\n      </label>\n  </div>`}},347:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.buttonQt=void 0,t.buttonQt=function(){return'\n    <div class="input-group mb-3">\n    <button class="btn btn-outline-danger w-25 fs-5" type="button" id="btnRemove">-</button>\n    <input\n      type="number"\n      id="orderQt"\n      min="0"\n      value="1"\n      class="form-control w-25 text-center"\n      placeholder=""\n      aria-label="Example text with button addon"\n      aria-describedby="button-addon1"\n      disabled />\n    <button class="btn btn-outline-success w-25 fs-5" type="button" id="btnAdd">+</button>\n  </div>'}},823:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.categoryBtn=void 0,t.categoryBtn=function(e){return`\n<button \n  type="button" \n  class="categoryBtn btn btn-outline-secondary ms-2 fst-italic border border-0" \n  id="${e.id}-btn">${e.name}\n</button>`}},496:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalFooter=void 0,t.modalFooter=function(e,t){return`\n    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${e}</button>\n    <button type="button" class="btn btn-success" id="addOrder">${t}</button>`}},581:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.productItem=void 0,t.productItem=function(e){return`\n<div class="card w-auto mx-2 mb-1 productItem" id="productCard${e.id}" data-bs-toggle="modal" data-bs-target="#cartModal">\n  <div class="card-body p-1">\n    <div class="d-flex align-items-end">\n      <div class="me-1 w-25">\n        <img \n        src="${e.imageUrl||"./dist/assets/images/food-icon.png"}" \n        class="img-thumbnail border border-0" \n        alt="${e.name}" />\n      </div>\n      <h5 class="card-title">${e.name}</h5>\n    </div>\n\n    <div>\n      <p class="card-text mb-1 fst-italic">${e.description}</p>\n      <p class="card-text text-end fst-italic" id="${e.id}-price">R$ ${e.price.toFixed(2)}</p>\n    </div>\n  </div>\n</div>`}},54:(e,t)=>{function i(e,t,i){return`\n<div class="form-check">\n    <input \n        class="form-check-input required${i}" \n        type="radio" \n        name="${e}"\n        id="${t.id}" \n        value="${t.price}" \n        title="${t.name}" />\n    <label class="form-check-label w-100 " for="${t.id}">\n        <div class="d-flex justify-content-between w-100">\n            <div class="fst-italic">${t.name}</div>\n            <div>R$ ${t.price.toFixed(2)}</div>\n        </div>\n    </label>\n</div>`}Object.defineProperty(t,"__esModule",{value:!0}),t.requiredItem=void 0,t.requiredItem=function(e,t){let o=`\n  <p class="fw-bold fst-italic">${e.title} *Obrigatório</p>\n  <div id="${e.id}-items">`;for(let r=0;r<e.items.length;r++)o+=i(e.id,e.items[r],t);return o+="</div><br/>",o}},996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.storeLogo=void 0,t.storeLogo=function(e){return`\n    <img\n    src="${e}"\n    alt="Logo"\n    width="40"\n    height="40"\n    class="d-inline-block align-text-top m-0" />`}},319:(e,t)=>{function i(e){for(let t=0;t<e.items.length;t++)return`\n    <div class="row fst-italic px-1">\n      <div class="col-6">• ${e.items[t].name}</div>\n      <div class="col-6 text-end">+ R$ ${e.items[t].price.toFixed(2)}</div>\n    </div>`}Object.defineProperty(t,"__esModule",{value:!0}),t.tableOrderItem=void 0,t.tableOrderItem=function(e){const t=document.getElementById("tableContent");var o;if(t.innerHTML+=`\n  <div class="row fw-semibold">\n  <div class="col-8">${(o=e).name}</div>\n  <div class="col text-end">R$ ${o.price.toFixed(2)}</div>\n</div>`,e.requiredSelected)for(let o=0;o<e.requiredSelected.length;o++)t.innerHTML+=i(e.requiredSelected[o]);e.additionalSelected&&e.additionalSelected.length>0&&e.additionalSelected.forEach((e=>t.innerHTML+=function(e){return`\n<div class="row fst-italic px-1">\n  <div class="col-6">• ${e.name}</div>\n  <div class="col-6 text-end">+ R$ ${e.price.toFixed(2)}</div>\n</div>`}(e))),e.comment&&(t.innerHTML+=`\n<div class="row fst-italic px-1">\n  <div class="col-12">${e.comment}</div>\n</div>`),e.status&&(t.innerHTML+=`\n  <div class="row fw-semibold">\n  <div class="col-12 text-end p-0 pe-2">Status: ${e.status}</div>\n</div>`),t.innerHTML+=function(e){return`\n  <div class="row fw-semibold">\n  <div class="col-4">Quantidade</div>\n  <div class="col-2 text-end">${e.qt}</div>\n  <div class="col text-center">Subtotal</div>\n  <div class="col text-end">R$ ${e.orderValue.toFixed(2)}</div>\n</div>`}(e)}},420:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.categoriesDB=void 0,t.categoriesDB=[{id:"ca01",name:"Entradas",active:!0},{id:"ca02",name:"Pratos",active:!0},{id:"ca03",name:"Petiscos",active:!0},{id:"ca04",name:"Snacks",active:!0},{id:"ca05",name:"Sobremesas",active:!0},{id:"ca06",name:"Refrigerantes",active:!0},{id:"ca07",name:"Sucos",active:!0},{id:"ca08",name:"Cervejas",active:!0},{id:"ca09",name:"Bebidas",active:!0},{id:"ca10",name:"Drinks",active:!0}]},634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.productsDB=void 0,t.productsDB=[{id:"p001",name:"Entrada 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:1,active:!0,categoryId:"ca01",additionals:[{id:"add001",name:"Item de seleção opcional 1",price:2},{id:"add002",name:"Item de seleção opcional 2",price:1.5}],requiredOption:[{id:"req001",title:"Obrigatório 1",items:[{id:"req001-item-001",name:"Item de seleção obrigatória 1",price:0},{id:"req001-item-002",name:"Item de seleção obrigatória 2",price:1.2}]}]},{id:"p002",name:"Prato 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:2,active:!0,categoryId:"ca02",additionals:[],requiredOption:[{id:"req001",title:"Obrigatório 1",items:[{id:"req001-item-001",name:"Item de seleção obrigatória 1",price:.5},{id:"req001-item-002",name:"Item de seleção obrigatória 2",price:.7}]},{id:"req002",title:"Obrigatório 2",items:[{id:"req002-item-001",name:"Item de seleção obrigatória 1",price:3},{id:"req002-item-002",name:"Item de seleção obrigatória 2",price:2.8}]}]},{id:"p003",name:"Petisco 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:3,active:!0,categoryId:"ca03",additionals:[],requiredOption:[]},{id:"p004",name:"Snack 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:4,active:!0,categoryId:"ca04",additionals:[],requiredOption:[]},{id:"p005",name:"Sobremesa 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:5,active:!0,categoryId:"ca05",additionals:[],requiredOption:[]},{id:"p006",name:"Refrigerante 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:6,active:!1,categoryId:"ca06",additionals:[],requiredOption:[]},{id:"p007",name:"Suco 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:7,active:!0,categoryId:"ca07",additionals:[],requiredOption:[]},{id:"p008",name:"Cerveja 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:8,active:!0,categoryId:"ca08",additionals:[],requiredOption:[]},{id:"p009",name:"Bebida 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:9,active:!0,categoryId:"ca09",additionals:[],requiredOption:[]},{id:"p010",name:"Drink 1",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:10,active:!0,categoryId:"ca10",additionals:[],requiredOption:[]},{id:"p011",name:"Entrada 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:11,active:!0,categoryId:"ca01",additionals:[],requiredOption:[]},{id:"p012",name:"Prato 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:12,active:!0,categoryId:"ca02",additionals:[],requiredOption:[]},{id:"p013",name:"Petisco 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:13,active:!0,categoryId:"ca03",additionals:[],requiredOption:[]},{id:"p014",name:"Snack 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:14,active:!0,categoryId:"ca04",additionals:[],requiredOption:[]},{id:"p015",name:"Sobremesa 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:15,active:!0,categoryId:"ca05",additionals:[],requiredOption:[]},{id:"p016",name:"Refrigerante 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:16,active:!0,categoryId:"ca06",additionals:[],requiredOption:[]},{id:"p017",name:"Suco 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:17,active:!0,categoryId:"ca07",additionals:[],requiredOption:[]},{id:"p018",name:"Cerveja 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:18,active:!0,categoryId:"ca08",additionals:[],requiredOption:[]},{id:"p019",name:"Bebida 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:19,active:!0,categoryId:"ca09",additionals:[],requiredOption:[]},{id:"p020",name:"Drink 2",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:20,active:!0,categoryId:"ca10",additionals:[],requiredOption:[]},{id:"p021",name:"Entrada 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:21,active:!0,categoryId:"ca01",additionals:[],requiredOption:[]},{id:"p022",name:"Prato 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:22,active:!0,categoryId:"ca02",additionals:[],requiredOption:[]},{id:"p023",name:"Petisco 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:23,active:!0,categoryId:"ca03",additionals:[],requiredOption:[]},{id:"p024",name:"Snack 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:24,active:!0,categoryId:"ca04",additionals:[],requiredOption:[]},{id:"p025",name:"Sobremesa 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:25,active:!0,categoryId:"ca05",additionals:[],requiredOption:[]},{id:"p026",name:"Refrigerante 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:26,active:!0,categoryId:"ca06",additionals:[],requiredOption:[]},{id:"p027",name:"Suco 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:27,active:!0,categoryId:"ca07",additionals:[],requiredOption:[]},{id:"p028",name:"Cerveja 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:28,active:!0,categoryId:"ca08",additionals:[],requiredOption:[]},{id:"p029",name:"Bebida 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:29,active:!0,categoryId:"ca09",additionals:[],requiredOption:[]},{id:"p030",name:"Drink 3",description:"Descrição das características do produto, por exemplo ingredientes ou tamanhos",price:30,active:!0,categoryId:"ca10",additionals:[],requiredOption:[]}]},948:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.storeInfo=void 0;const o=i(420),r=i(634);t.storeInfo={id:"st0001",name:"Restaurante",logoUrl:"./dist/assets/images/logo.png",categories:o.categoriesDB,products:r.productsDB,users:[],tables:[]}},22:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineStoreInfo=void 0;const o=i(996);t.defineStoreInfo=function(e){document.getElementById("storeName").innerText=e.name;const t=document.getElementById("placeLogo"),i=document.getElementById("favicon");e.logoUrl?(t.innerHTML=(0,o.storeLogo)(e.logoUrl),i.setAttribute("href",e.logoUrl)):(t.innerHTML=(0,o.storeLogo)("./dist/assets/images/logo.png"),i.setAttribute("href","./dist/assets/images/logo.png"))}},846:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setClickNavButtons=void 0;const o=i(782),r=i(935),d=i(158);t.setClickNavButtons=function(){document.getElementById("btnViewMenu").addEventListener("click",(()=>{(0,d.setNavBtnActive)("btnViewMenu",!0),(0,d.setNavBtnActive)("btnViewConsumption",!1),(0,r.startMenu)()})),document.getElementById("btnViewConsumption").addEventListener("click",(()=>{(0,d.setNavBtnActive)("btnViewConsumption",!0),(0,d.setNavBtnActive)("btnViewMenu",!1),(0,o.startConsumption)()}))}},158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setNavBtnActive=void 0,t.setNavBtnActive=function(e,t){const i=document.getElementById(e);t?i.setAttribute("class","nav-link mx-1 w-50 text-center fw-semibold text-decoration-underline"):i.setAttribute("class","nav-link mx-1 w-50 text-center")}},782:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startConsumption=void 0;const o=i(319),r=i(247),d=i(288);t.startConsumption=function(){(0,r.componentVisibility)("categoryNav","hide"),(0,r.componentVisibility)("productsMenu","hide"),(0,r.componentVisibility)("tableConsumption","show");const e=(0,d.getStorageData)("myOrders");if(document.getElementById("tableContent").innerHTML="",e){let t=0;const i=document.getElementById("totalValue");e[0].ordered.forEach((e=>{(0,o.tableOrderItem)(e),t+=e.orderValue})),i.innerHTML=`R$ ${t.toFixed(2)}`}}},474:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.filterProducts=void 0;const o=i(581),r=i(948),d=i(676);t.filterProducts=function(){document.querySelectorAll(".categoryBtn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const t=document.getElementById("productsMenu");t.innerHTML="",r.storeInfo.products.forEach((i=>{i.categoryId===e&&(t.innerHTML+=(0,o.productItem)(i))})),document.querySelectorAll(".productItem").forEach((e=>{const t=e.id.replace("productCard","");e.addEventListener("click",(()=>{(0,d.setCardClick)(t)}))}))}(e.id.replace("-btn",""))}))}))}},647:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setCategories=void 0;const o=i(823),r=i(948);t.setCategories=function(){const e=document.getElementById("categoryBar"),t=r.storeInfo.categories;e.innerHTML="",e.innerHTML=(0,o.categoryBtn)({id:"all",name:"Todos",active:!0}),t.forEach((t=>{t.active&&(e.innerHTML+=(0,o.categoryBtn)(t))})),e.innerHTML+="<hr />"}},70:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setProductsMenu=void 0;const o=i(581),r=i(948),d=i(676);t.setProductsMenu=function(){const e=document.getElementById("productsMenu");e.innerHTML="";const t=r.storeInfo.categories,i=r.storeInfo.products;t.forEach((t=>{i.forEach((i=>{i.categoryId===t.id&&i.active&&(e.innerHTML+=(0,o.productItem)(i))}))})),document.querySelectorAll(".productItem").forEach((e=>{const t=e.id.replace("productCard","");e.addEventListener("click",(()=>{(0,d.setCardClick)(t)}))}))}},935:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startMenu=void 0;const o=i(247),r=i(474),d=i(647),n=i(70);t.startMenu=function(){(0,o.componentVisibility)("categoryNav","show"),(0,o.componentVisibility)("productsMenu","show"),(0,o.componentVisibility)("tableConsumption","hide"),(0,d.setCategories)(),(0,r.filterProducts)(),(0,n.setProductsMenu)(),document.getElementById("all-btn").addEventListener("click",(()=>{(0,n.setProductsMenu)()}))}},44:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addOrderQt=void 0;const o=i(288),r=i(937),d=i(840);t.addOrderQt=function(){const e=(0,o.getStorageData)("newOrderProduct"),t=document.getElementById("orderQt"),i=document.getElementById("orderValue");e.qt++,t.value=String(e.qt),i.innerText=(0,d.calcValues)(e).toFixed(2),e.orderValue=(0,d.calcValues)(e),(0,r.saveToStorage)("newOrderProduct",e)}},840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcValues=void 0,t.calcValues=function(e){let t=e.price*e.qt;if(void 0!==e.additionalSelected)for(let i=0;i<e.additionalSelected.length;i++)t+=e.additionalSelected[i].price*e.qt;if(void 0!==e.requiredSelected)for(let i=0;i<e.requiredSelected.length;i++)for(let o=0;o<e.requiredSelected[i].items.length;o++)t+=e.requiredSelected[i].items[o].price*e.qt;return t}},939:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeOrderQt=void 0;const o=i(288),r=i(937),d=i(840);t.removeOrderQt=function(){const e=(0,o.getStorageData)("newOrderProduct"),t=document.getElementById("orderQt"),i=document.getElementById("orderValue");e.qt--,t.value=String(e.qt),i.innerText=(0,d.calcValues)(e).toFixed(2),e.orderValue=(0,d.calcValues)(e),(0,r.saveToStorage)("newOrderProduct",e)}},502:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveOrder=void 0;const o=i(96),r=i(288),d=i(591),n=i(937);t.saveOrder=function(){const e=(0,r.getStorageData)("newOrderProduct");if(e.requiredOption.length>0&&e.requiredSelected)for(let t=0;t<e.requiredOption.length;t++)if(""===e.requiredSelected[t].id)return void document.querySelectorAll(`.required${t}`).forEach((e=>{e.classList.add("is-invalid")}));let t=Object.assign(Object.assign({},e),{status:"Enviado"});const i=document.getElementById("comment");i.value&&(t.comment=i.value);let a=(0,r.getStorageData)("myOrders");if(0==a.length){let e=[{id:`order${a.length}`,table:(0,d.getUrlValue)("t"),ordered:[t]}];(0,n.saveToStorage)("myOrders",e)}else a[0].ordered.push(t),(0,n.saveToStorage)("myOrders",a);(0,o.closeModal)()}},676:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setCardClick=void 0;const o=i(859),r=i(347),d=i(496),n=i(54),a=i(948),c=i(247),s=i(937),l=i(44),u=i(939),p=i(502),m=i(398),v=i(975);t.setCardClick=function(e){const t=a.storeInfo.products.find((t=>t.id===e)),i=Object.assign(Object.assign({},t),{qt:1,orderValue:t.price});(0,s.saveToStorage)("newOrderProduct",i),document.getElementById("cartModalLabel").innerText=t.name;const g=document.getElementById("requiredOptions");if(g.innerHTML="",t.requiredOption)if(t.requiredOption.length>0){(0,c.componentVisibility)("requiredOptions","show");for(let e=0;e<t.requiredOption.length;e++)g.innerHTML+=(0,n.requiredItem)(t.requiredOption[e],e)}else(0,c.componentVisibility)("requiredOptions","hide");const b=document.getElementById("additionalItems");if(b.innerHTML="",t.additionals.length>0){(0,c.componentVisibility)("additionalOptions","show");for(let e=0;e<t.additionals.length;e++)b.innerHTML+=(0,o.additionalItem)(t.additionals[e],e)}else(0,c.componentVisibility)("additionalOptions","hide");(0,v.watchRadios)(),(0,m.watchCheckboxes)(),document.getElementById("orderValue").innerText=t.price.toFixed(2),document.getElementById("btnQt").innerHTML=(0,r.buttonQt)(),document.getElementById("btnAdd").addEventListener("click",(()=>{(0,l.addOrderQt)()})),document.getElementById("btnRemove").addEventListener("click",(()=>{(0,u.removeOrderQt)()})),document.getElementById("modalFooter").innerHTML=(0,d.modalFooter)("Voltar","Enviar Pedido"),document.getElementById("addOrder").addEventListener("click",(()=>{(0,p.saveOrder)()}))}},398:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.watchCheckboxes=void 0;const o=i(288),r=i(937),d=i(840);t.watchCheckboxes=function(){const e=document.querySelectorAll(".additional"),t=document.getElementById("orderValue"),i=(0,o.getStorageData)("newOrderProduct");let n=Object.assign(Object.assign({},i),{additionalSelected:[]});(0,r.saveToStorage)("newOrderProduct",n),e.forEach((e=>{e.addEventListener("change",(()=>{var i,a,c;n=(0,o.getStorageData)("newOrderProduct");const s={id:e.id,name:e.title,price:Number(e.value)};if(e.checked)null===(i=n.additionalSelected)||void 0===i||i.push(s),t.innerText=(0,d.calcValues)(n).toFixed(2),n.orderValue=(0,d.calcValues)(n),(0,r.saveToStorage)("newOrderProduct",n);else{const e=null===(a=n.additionalSelected)||void 0===a?void 0:a.findIndex((e=>e.id===s.id));void 0!==e&&n.additionalSelected&&(n.additionalSelected.length>1?null===(c=n.additionalSelected)||void 0===c||c.splice(e,1):n.additionalSelected=[]),t.innerText=(0,d.calcValues)(n).toFixed(2),n.orderValue=(0,d.calcValues)(n),(0,r.saveToStorage)("newOrderProduct",n)}}))}))}},975:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.watchRadios=void 0;const o=i(288),r=i(937),d=i(840);t.watchRadios=function(){var e;const t=(0,o.getStorageData)("newOrderProduct"),i=document.getElementById("orderValue");let n=Object.assign(Object.assign({},t),{requiredSelected:[]});for(let i=0;i<t.requiredOption.length;i++)null===(e=n.requiredSelected)||void 0===e||e.push({id:"",title:"",items:[{id:"",name:"",price:0}]});(0,r.saveToStorage)("newOrderProduct",n);for(let e=0;e<t.requiredOption.length;e++)document.querySelectorAll(`.required${e}`).forEach((t=>{t.addEventListener("change",(()=>{let n=(0,o.getStorageData)("newOrderProduct");if(t.checked){document.querySelectorAll(`.required${e}`).forEach((e=>{e.classList.remove("is-invalid")}));const o={id:`selected-${t.id}`,title:`required-${t.id}`,items:[{id:t.id,name:t.title,price:Number(t.value)}]};n.requiredSelected&&(n.requiredSelected[e]=o),i.innerText=(0,d.calcValues)(n).toFixed(2),n.orderValue=(0,d.calcValues)(n),(0,r.saveToStorage)("newOrderProduct",n)}}))}))}},96:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.closeModal=void 0,t.closeModal=function(){document.getElementById("closeModal").click()}},247:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.componentVisibility=void 0,t.componentVisibility=function(e,t){const i=document.getElementById(e);"show"==t?i.removeAttribute("style"):i.setAttribute("style","display: none")}},288:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSessionStorageData=t.getStorageData=void 0,t.getStorageData=function(e){return JSON.parse(localStorage.getItem(e)||"[]")},t.getSessionStorageData=function(e){return JSON.parse(sessionStorage.getItem(e)||"[]")}},591:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getUrlValue=void 0,t.getUrlValue=function(e){return new URLSearchParams(window.location.search).get(e)||""}},937:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveSessionToStorage=t.saveToStorage=void 0,t.saveToStorage=function(e,t){localStorage.setItem(e,JSON.stringify(t))},t.saveSessionToStorage=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))}}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,i),d.exports}(()=>{const e=i(948),t=i(22),o=i(846),r=i(935),d=e.storeInfo;(0,t.defineStoreInfo)(d),localStorage.clear(),(0,o.setClickNavButtons)(),(0,r.startMenu)()})()})();