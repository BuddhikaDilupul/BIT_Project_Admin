(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{394:function(e,t,c){"use strict";c(1);var s=c(392),r=c(22);t.a=e=>Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s.a,{color:e.data.color,children:Object(r.jsx)("strong",{children:e.data.alertMsg})})})},563:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(392),n=(c(418),c(409),c(410),c(407)),a=c(411),o=(c(401),c(394)),l=c(22);t.default=()=>{const[e,t]=Object(s.useState)({}),[c,i]=Object(s.useState)({});var[j,d]=Object(s.useState)([]);const[h,b]=Object(s.useState)([]),[u,O]=Object(s.useState)(!1),[x,m]=Object(s.useState)({alertMsg:"",color:"success"}),[p,g]=Object(s.useState)(!1),[f,w]=Object(s.useState)([{startDate:new Date,endDate:Object(n.default)(new Date,0),key:"selection"}]);function S(e){return"".concat(e.toFixed(2))}const v=()=>{j.splice(0,j.length),h.splice(0,h.length)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.l,{xs:6,children:u?Object(l.jsx)(o.a,{data:x}):null}),Object(l.jsx)(r.U,{children:Object(l.jsx)(r.l,{xs:12,sm:12,children:Object(l.jsxs)(r.h,{className:"mb-4",children:[Object(l.jsx)(r.k,{children:Object(l.jsx)("strong",{children:"Product wise Income"})}),Object(l.jsx)(r.i,{children:Object(l.jsxs)(r.u,{className:"row g-4",children:[Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)(a.DateRangePicker,{onChange:e=>w([e.selection]),showSelectionPreview:!0,moveRangeOnFirstSelection:!1,months:1,ranges:f,direction:"horizontal",maxDate:new Date})}),Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsxs)(r.f,{color:"primary",size:"sm",className:"px-4",onClick:()=>{(async()=>{O(!1),v();try{g(!0);const e=await fetch("".concat("https://express-server-a.herokuapp.com","/api/reports/productIncome"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("authToken")},body:JSON.stringify({state:f})});if(200===e.status){const c=await e.json();for(let e=1;e<=Math.ceil(c.products.length/10);e++)h.push(e);for(let e=0;e<10&&e<c.products.length;e++)j.push(c.products[e]);g(!1),i(c.productCount),t(c.products)}404===e.status&&(O(!0),m({alertMsg:"No data found",color:"warning"}),g(!1)),401===e.status&&(O(!0),g(!1),m({alertMsg:"Unauthorized access",color:"warning"}))}catch(e){console.log(e,"error")}})()},children:[p?Object(l.jsx)(r.Z,{component:"span",size:"sm",variant:"grow","aria-hidden":"true"}):void 0,p?"Loading":"Generate"]})})]})})]})})}),e.length>0?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.U,{children:Object(l.jsx)(r.l,{xs:12,sm:6,children:Object(l.jsxs)(r.h,{className:"mb-4",children:[Object(l.jsx)(r.k,{children:Object(l.jsx)("strong",{children:"Product Income"})}),Object(l.jsxs)(r.i,{children:[Object(l.jsx)("p",{className:"text-medium-emphasis small",children:"Here the all Products of your shop with income."}),Object(l.jsxs)(r.cb,{bordered:!0,hover:!0,children:[Object(l.jsx)(r.fb,{color:"dark",children:Object(l.jsxs)(r.hb,{children:[Object(l.jsx)(r.gb,{scope:"col",children:"Product Name"}),Object(l.jsx)(r.gb,{scope:"col",children:"Sold Count"}),Object(l.jsx)(r.gb,{scope:"col",children:"Item Price"}),Object(l.jsx)(r.gb,{scope:"col",children:"Total"})]})}),Object(l.jsx)(r.db,{children:j.map(((e,t)=>Object(l.jsxs)(r.hb,{children:[Object(l.jsx)(r.eb,{children:e[0]}),Object(l.jsx)(r.eb,{children:e[2]}),Object(l.jsxs)(r.eb,{children:["LKR ",S(e[1])]}),Object(l.jsxs)(r.eb,{children:["LKR ",S(e[1]*e[2])]})]},t)))})]}),Object(l.jsx)(r.S,{align:"center",children:h.map(((t,c)=>Object(l.jsx)(r.T,{onClick:()=>(t=>{d((e=>[]));for(let c=10*t;c<10*(t+1)&&void 0!==e[c];c++)d((t=>[...t,e[c]]))})(c),children:t},c)))})]})]})})})}):null]})}}}]);
//# sourceMappingURL=35.4171a804.chunk.js.map