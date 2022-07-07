(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[38],{446:function(e){e.exports=JSON.parse('{"name":"@coreui/coreui-free-react-admin-template","version":"4.1.1","description":"CoreUI Free React Admin Template","homepage":"http://BuddhikaDilupul.github.io.BIT_Project_Admin","bugs":{"url":"https://github.com/coreui/coreui-free-react-admin-template/issues"},"repository":{"type":"git","url":"git@github.com:coreui/coreui-free-react-admin-template.git"},"license":"MIT","author":"The CoreUI Team (https://github.com/orgs/coreui/people)","scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","build":"react-scripts build","build:n17":"react-scripts --openssl-legacy-provider build","changelog":"auto-changelog --starting-version 4.1.0 --commit-limit false --hide-credit","eject":"react-scripts eject","lint":"eslint \\"src/**/*.js\\"","start":"react-scripts start","start:n17":"react-scripts --openssl-legacy-provider start","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand"},"config":{"coreui_library_short_version":"4.1"},"dependencies":{"@coreui/chartjs":"^3.0.0","@coreui/coreui":"^4.1.0","@coreui/coreui-pro":"^4.2.0-rc.1","@coreui/icons":"^2.1.0","@coreui/icons-react":"^2.0.0","@coreui/react":"^4.1.0","@coreui/react-chartjs":"^2.0.0","@coreui/react-pro":"^4.2.0-rc.0","@coreui/utils":"^1.3.1","@wojtekmaj/enzyme-adapter-react-17":"^0.6.5","chart.js":"^3.6.0","classnames":"^2.3.1","core-js":"^3.19.1","enzyme":"^3.11.0","gh-pages":"^4.0.0","html2canvas":"^1.4.1","jspdf":"^2.5.1","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-content-loader":"^6.1.0","react-date-range":"^1.4.0","react-datepicker":"^4.7.0","react-dom":"^17.0.2","react-hook-form":"^7.26.1","react-loading-skeleton":"^3.0.2","react-redux":"^7.2.6","react-router-dom":"^5.3.0","redux":"4.1.2","simplebar-react":"^2.3.6"},"devDependencies":{"auto-changelog":"~2.3.0","eslint":"^7.32.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","prettier":"2.5.0","react-scripts":"^4.0.3","sass":"^1.43.5"},"engines":{"node":">=10","npm":">=6"}}')},571:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),c=t(16);const s=o.a.lazy((()=>t.e(24).then(t.bind(null,573)))),r=o.a.lazy((()=>t.e(11).then(t.bind(null,548)))),i=o.a.lazy((()=>Promise.all([t.e(0),t.e(18)]).then(t.bind(null,549)))),l=o.a.lazy((()=>Promise.all([t.e(0),t.e(29)]).then(t.bind(null,550)))),m=o.a.lazy((()=>t.e(15).then(t.bind(null,551)))),p=o.a.lazy((()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,574)))),d=o.a.lazy((()=>Promise.all([t.e(0),t.e(32)]).then(t.bind(null,552)))),h=o.a.lazy((()=>t.e(16).then(t.bind(null,553)))),u=o.a.lazy((()=>Promise.all([t.e(0),t.e(25)]).then(t.bind(null,554)))),j=o.a.lazy((()=>t.e(13).then(t.bind(null,555)))),b=o.a.lazy((()=>Promise.all([t.e(0),t.e(20)]).then(t.bind(null,556)))),x=o.a.lazy((()=>Promise.all([t.e(0),t.e(19)]).then(t.bind(null,557)))),g=o.a.lazy((()=>t.e(14).then(t.bind(null,558)))),O=o.a.lazy((()=>Promise.all([t.e(0),t.e(1),t.e(5),t.e(28)]).then(t.bind(null,577)))),v=o.a.lazy((()=>Promise.all([t.e(0),t.e(22)]).then(t.bind(null,559)))),y=o.a.lazy((()=>Promise.all([t.e(0),t.e(30)]).then(t.bind(null,575)))),P=o.a.lazy((()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(37)]).then(t.bind(null,560)))),f=o.a.lazy((()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(36)]).then(t.bind(null,561)))),C=o.a.lazy((()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(34)]).then(t.bind(null,562)))),N=o.a.lazy((()=>Promise.all([t.e(1),t.e(2),t.e(3),t.e(35)]).then(t.bind(null,563)))),V=o.a.lazy((()=>Promise.all([t.e(1),t.e(2),t.e(33)]).then(t.bind(null,564)))),z=o.a.lazy((()=>Promise.all([t.e(1),t.e(5),t.e(23)]).then(t.bind(null,572)))),A=o.a.lazy((()=>Promise.all([t.e(10),t.e(27)]).then(t.bind(null,578))));var M=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:s},{path:"/categories",exact:!0,name:"Categories",component:r},{path:"/category/:id",exact:!0,name:"Category",component:i},{path:"/newcategory",exact:!0,name:"NewCategory",component:l},{path:"/products",exact:!0,name:"Products",component:g},{path:"/products/:id",exact:!0,name:"Product",component:O},{path:"/newproduct",exact:!0,name:"NewProduct",component:v},{path:"/promo",exact:!0,name:"Promotions",component:o.a.lazy((()=>Promise.all([t.e(0),t.e(31)]).then(t.bind(null,570))))},{path:"/register",exact:!0,name:"Register",component:d},{path:"/employees",exact:!0,name:"Employees",component:h},{path:"/employees/:id",exact:!0,name:"Employee",component:u},{path:"/customers",exact:!0,name:"Customers Details",component:m},{path:"/customers/:id",exact:!0,name:"Customer",component:p},{path:"/orders",exact:!0,name:"Orders",component:z},{path:"/order/:id",exact:!0,name:"Order",component:A},{path:"/locations",exact:!0,name:"Locations",component:j},{path:"/location/:id",exact:!0,name:"Location",component:b},{path:"/addlocations",exact:!0,name:"AddLocations",component:x},{path:"/profile",exact:!0,name:"Profile",component:y},{path:"/reports/income",exact:!0,name:"Income",component:P},{path:"/reports/popular",exact:!0,name:"Report",component:f},{path:"/reports/location",exact:!0,name:"Location Reports",component:C},{path:"/reports/product",exact:!0,name:"Product Income Reports",component:N},{path:"/reports/customers",exact:!0,name:"Customers Reports",component:V}],Z=t(392),k=t(22);const w=()=>Object(k.jsx)(Z.m,{lg:!0,children:Object(k.jsx)(n.Suspense,{fallback:Object(k.jsx)(Z.Z,{color:"primary"}),children:Object(k.jsxs)(c.d,{children:[M.map(((e,a)=>e.component&&Object(k.jsx)(c.b,{path:e.path,exact:e.exact,name:e.name,render:a=>Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(e.component,{...a})})},a))),Object(k.jsx)(c.a,{from:"/",to:"/dashboard"})]})})});var I=o.a.memo(w);const L=()=>Object(k.jsx)(Z.t,{children:Object(k.jsx)("div",{children:Object(k.jsx)("span",{className:"ms-1",children:"\xa9 2021 Ruwan BakeHouse"})})});var R=o.a.memo(L),S=t(126),D=t(127),H=t(401),T=t(534),E=t(532),q=t(533),U=t.p+"static/media/10.8cfc8dbc.png";var B=()=>{const e=Object(c.g)();return Object(k.jsxs)(Z.n,{variant:"nav-item",children:[Object(k.jsx)(Z.s,{placement:"bottom-end",className:"py-0",caret:!1,children:Object(k.jsx)(Z.b,{src:U,size:"md"})}),Object(k.jsxs)(Z.r,{className:"pt-0",placement:"bottom-end",children:[Object(k.jsx)(Z.p,{className:"bg-light fw-semibold py-2",children:"Settings"}),Object(k.jsxs)(Z.q,{onClick:()=>{e.push("/profile")},children:[Object(k.jsx)(H.a,{icon:E.a,className:"me-2"}),"Profile"]}),Object(k.jsx)(Z.o,{}),Object(k.jsxs)(Z.q,{style:{cursor:"pointer"},onClick:()=>{localStorage.setItem("authToken",null),localStorage.setItem("authUser",null),localStorage.setItem("authID",null),localStorage.setItem("isAdmin",null),e.push("/login")},children:[Object(k.jsx)(H.a,{icon:q.a,className:"me-2"}),"Logout"]})]})]})};const _=["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'];var F=()=>{const e=Object(D.b)(),a=Object(D.c)((e=>e.sidebarShow));return Object(k.jsx)(Z.A,{position:"sticky",className:"mb-4",children:Object(k.jsxs)(Z.m,{fluid:!0,children:[Object(k.jsx)(Z.D,{className:"ps-1",onClick:()=>e({type:"set",sidebarShow:!a}),children:Object(k.jsx)(H.a,{icon:T.a,size:"lg"})}),Object(k.jsx)(Z.B,{className:"mx-auto d-md-none",to:"/",children:Object(k.jsx)(H.a,{icon:_,height:48,alt:"Logo"})}),Object(k.jsx)(Z.C,{className:"d-none d-md-flex me-auto",children:Object(k.jsx)(Z.P,{children:Object(k.jsx)(Z.Q,{to:"/dashboard",component:S.b,activeClassName:"active",children:"Dashboard"})})}),Object(k.jsx)(Z.C,{className:"ms-3",children:Object(k.jsx)(B,{})})]})})};const J=e=>{let{items:a}=e;const t=Object(c.h)(),s=(e,a,t)=>Object(k.jsxs)(k.Fragment,{children:[a&&a,e&&e,t&&Object(k.jsx)(Z.c,{color:t.color,className:"ms-auto",children:t.text})]}),r=(e,a)=>{const{component:t,name:o,badge:c,icon:r,...i}=e,l=t;return Object(n.createElement)(l,{...i.to&&!i.items&&{component:S.b,activeClassName:"active"},key:a,...i},s(o,r,c))},i=(e,a)=>{var n;const{component:o,name:c,icon:l,to:m,...p}=e,d=o;return Object(k.jsx)(d,{idx:String(a),toggler:s(c,l),visible:t.pathname.startsWith(m),...p,children:null===(n=e.items)||void 0===n?void 0:n.map(((e,a)=>e.items?i(e,a):r(e,a)))},a)};return Object(k.jsx)(o.a.Fragment,{children:a&&a.map(((e,a)=>e.items?i(e,a):r(e,a)))})};var Q=t.p+"static/media/shop_logo.dc69379f.png";var W=t(526),G=(t(477),t(535)),X=t(536),Y=t(537),K=t(538),$=t(539);var ee=[{component:Z.P,name:"Dashboard",to:"/dashboard",icon:Object(k.jsx)(H.a,{icon:G.a,customClassName:"nav-icon"})},{component:Z.P,name:"Categories",to:"/categories",icon:Object(k.jsx)(H.a,{icon:X.a,customClassName:"nav-icon"})},{component:Z.P,name:"products",to:"/products",icon:Object(k.jsx)(H.a,{icon:Y.a,customClassName:"nav-icon"})},{component:Z.P,name:"Delivery Locations",to:"/locations",icon:Object(k.jsx)(H.a,{icon:K.a,customClassName:"nav-icon"})},{component:Z.P,name:"Orders Management",to:"/orders",icon:Object(k.jsx)(H.a,{icon:$.a,customClassName:"nav-icon"})}],ae=t(540),te=t(541),ne=t(542),oe=t(543),ce=t(544);var se=[{component:Z.P,name:"Dashboard",to:"/dashboard",icon:Object(k.jsx)(H.a,{icon:G.a,customClassName:"nav-icon"})},{component:Z.R,name:"Inventory"},{component:Z.P,name:"Categories",to:"/categories",icon:Object(k.jsx)(H.a,{icon:X.a,customClassName:"nav-icon"})},{component:Z.P,name:"Products Details",to:"/products",icon:Object(k.jsx)(H.a,{icon:Y.a,customClassName:"nav-icon"})},{component:Z.R,name:"Locations"},{component:Z.P,name:"Delivery Locations",to:"/locations",icon:Object(k.jsx)(H.a,{icon:K.a,customClassName:"nav-icon"})},{component:Z.R,name:"Orders"},{component:Z.P,name:"Orders Management",to:"/orders",icon:Object(k.jsx)(H.a,{icon:$.a,customClassName:"nav-icon"})},{component:Z.R,name:"Users"},{component:Z.O,name:"Users Management",to:"/users",icon:Object(k.jsx)(H.a,{icon:ae.a,customClassName:"nav-icon"}),items:[{component:Z.P,name:"Customers Details",to:"/customers",icon:Object(k.jsx)(H.a,{icon:E.a,customClassName:"nav-icon"})},{component:Z.P,name:"Employees Details",to:"/employees",icon:Object(k.jsx)(H.a,{icon:E.a,customClassName:"nav-icon"})},{component:Z.P,name:"Add Employee",to:"/register",icon:Object(k.jsx)(H.a,{icon:te.a,customClassName:"nav-icon"})}]},{component:Z.R,name:"Reports"},{component:Z.P,name:"Income Management",to:"/reports/income",icon:Object(k.jsx)(H.a,{icon:ne.a,customClassName:"nav-icon"})},{component:Z.P,name:"Location Reports",to:"/reports/location",icon:Object(k.jsx)(H.a,{icon:K.a,customClassName:"nav-icon"})},{component:Z.P,name:"Customer Loyalty",to:"/reports/customers",icon:Object(k.jsx)(H.a,{icon:E.a,customClassName:"nav-icon"})},{component:Z.P,name:"Popular Products",to:"/reports/popular",icon:Object(k.jsx)(H.a,{icon:oe.a,customClassName:"nav-icon"})},{component:Z.P,name:"Product Income Reports",to:"/reports/product",icon:Object(k.jsx)(H.a,{icon:ne.a,customClassName:"nav-icon"})},{component:Z.R,name:"Promotions"},{component:Z.P,name:"Promotions",to:"/promo",icon:Object(k.jsx)(H.a,{icon:ce.a,customClassName:"nav-icon"})}];const re=()=>{const e=Object(D.b)(),a=Object(D.c)((e=>e.sidebarUnfoldable)),t=Object(D.c)((e=>e.sidebarShow)),n=localStorage.getItem("isAdmin");return Object(k.jsxs)(Z.V,{position:"fixed",unfoldable:a,visible:t,onVisibleChange:a=>{e({type:"set",sidebarShow:a})},children:[Object(k.jsxs)(Z.W,{className:"d-none d-md-flex",to:"/",children:[Object(k.jsx)(Z.E,{className:"sidebar-brand-full",src:Q,alt:"Logo",height:65}),Object(k.jsx)(Z.E,{className:"sidebar-brand-narrow",src:Q,alt:"Logo",height:65})]}),Object(k.jsx)(Z.X,{children:Object(k.jsx)(W.a,{children:"true"===n?Object(k.jsx)(J,{items:se}):Object(k.jsx)(J,{items:ee})})}),Object(k.jsx)(Z.Y,{className:"d-none d-lg-flex",onClick:()=>e({type:"set",sidebarUnfoldable:!a})})]})};var ie=o.a.memo(re);t(446);t(545),t(546);a.default=()=>{const e=Object(c.g)(),[a,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{(async()=>{const a=localStorage.getItem("authToken");try{200!==(await fetch("".concat("https://express-server-a.herokuapp.com","/api/authToken"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}})).status&&e.push("/login")}catch(t){console.log("error",t)}})()}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)(ie,{}),Object(k.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[Object(k.jsx)(F,{}),Object(k.jsx)("div",{className:"body flex-grow-1 px-3",children:Object(k.jsx)(I,{})}),Object(k.jsx)(R,{})]})]})}}}]);
//# sourceMappingURL=38.b729deb7.chunk.js.map