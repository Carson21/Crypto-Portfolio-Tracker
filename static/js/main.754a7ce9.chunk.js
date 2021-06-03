(this["webpackJsonpcrypto-portfolio-tracker"]=this["webpackJsonpcrypto-portfolio-tracker"]||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),l=s(3),o=s.n(l),c=s(5),i=s(2),r=s(1),d=function(e){var t=e.coin;return Object(r.jsxs)("div",{className:"flex items-center h-16 text-center divide-solid divide-gray-400 divide-x-2 justify-between p-4 my-2 w-full shadow-sm border-gray-300 border rounded",children:[Object(r.jsx)("h2",{className:"w-1/5 text-lg font-semibold text-blue-600 overflow-x-hidden",children:t.name}),Object(r.jsxs)("h2",{className:"w-1/5 text-lg font-semibold overflow-x-hidden",children:[t.amount," coins"]}),Object(r.jsxs)("h2",{className:"w-1/5 text-lg font-semibold overflow-x-hidden",children:["$",t.cost.toFixed(2)]}),Object(r.jsxs)("h2",{className:"w-1/5 text-lg font-semibold overflow-x-hidden",children:["$",t.totalCost.toFixed(2)]}),Object(r.jsxs)("h2",{className:"w-1/5 text-lg font-semibold overflow-x-hidden",children:["$",t.realizedGains.toFixed(2)]})]})},u=function(e){var t=e.coins;return Object(r.jsxs)("div",{className:"xl:h-full h-1/2 w-full xl:w-1/2 p-4 flex-col align-center gap-6 bg-white rounded-xl shadow-xl",children:[Object(r.jsx)("h2",{className:"text-2xl text-center font-bold my-6",children:"Holdings"}),Object(r.jsxs)("div",{className:"flex justify-evenly text-center gap-1 my-4",children:[Object(r.jsx)("h2",{className:"text-xl w-1/5 font-sans font-semi-bold text-gray-700",children:"Coin Name:"}),Object(r.jsx)("h2",{className:"text-xl w-1/5 font-sans font-semi-bold text-gray-700",children:"Amount of Coins:"}),Object(r.jsx)("h2",{className:"text-xl w-1/5 font-sans font-semi-bold text-gray-700",children:"Average Cost:"}),Object(r.jsx)("h2",{className:"text-xl w-1/5 font-sans font-semi-bold text-gray-700",children:"Total Cost:"}),Object(r.jsx)("h2",{className:"text-xl w-1/5 font-sans font-semi-bold text-gray-700",children:"Realized Gains:"})]}),Object(r.jsx)("div",{className:"overflow-auto mb-2 px-2",children:t&&t.map((function(e,t){return Object(r.jsx)(d,{coin:e},t)}))})]})},x=s(10),b=function(e){var t=e.changeCoin,s=Object(a.useState)(),n=Object(i.a)(s,2),l=n[0],o=n[1],c=Object(a.useState)(),d=Object(i.a)(c,2),u=d[0],b=d[1],j=Object(a.useState)(),m=Object(i.a)(j,2),f=m[0],h=m[1],O=Object(a.useState)(""),g=Object(i.a)(O,2),p=g[0],v=g[1],w=Object(a.useState)(""),y=Object(i.a)(w,2),N=y[0],C=y[1],S=Object(a.useRef)();Object(a.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){h(e.map((function(e){return{value:e.id,label:e.name}})))}))}),[]);return Object(r.jsxs)("div",{className:"h-1/2 xl:h-full p-4 w-full xl:w-1/2 bg-white rounded-xl shadow-xl flex flex-col align-center",children:[Object(r.jsx)("h2",{className:"text-2xl text-center font-bold mt-4",children:"Transactions"}),Object(r.jsx)("h4",{className:"form-label",children:"Select a Coin:"}),Object(r.jsx)(x.a,{options:f,onChange:function(e){o(e.label)},className:"shadow-sm"}),Object(r.jsx)("h4",{className:"form-label",children:"Was this a buy or a sell?:"}),Object(r.jsx)(x.a,{options:[{value:"buy",label:"Buy"},{value:"sell",label:"Sell"}],onChange:function(e){b(e.value)},className:"shadow-sm"}),Object(r.jsx)("h4",{className:"form-label",children:"How many coins did you transact?"}),Object(r.jsx)("input",{type:"number",className:"number-input",value:p,onChange:function(e){v(e.target.value)},placeholder:"Amount"}),Object(r.jsx)("h4",{className:"form-label",children:"Cost of each coin?"}),Object(r.jsx)("input",{type:"number",className:"number-input",value:N,onChange:function(e){C(e.target.value)},placeholder:"Cost $"}),Object(r.jsx)("button",{ref:S,onClick:function(){S.current.blur(),l&&u&&p&&N&&(console.log(l+" "+u+" "+p+" "+N),t(l,u,p,N))},className:"btn-blue",children:Object(r.jsx)("p",{className:"text-white",children:"Submit"})})]})},j=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),s=t[0],n=t[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("coins"));null==e?(localStorage.setItem("coins",JSON.stringify([])),n([])):n(e)}),[]);return Object(r.jsx)("div",{className:"w-full h-full xl:h-screen bg-gray-100",children:Object(r.jsx)("div",{className:"container mx-auto py-6 sm:py-12 h-full",children:Object(r.jsxs)("div",{className:"h-full px-4 flex flex-col xl:flex-row gap-4 justify-evenly",children:[Object(r.jsx)(u,{coins:s}),Object(r.jsx)(b,{changeCoin:function(e,t,a,l){var o={};a=parseFloat(a),l=parseFloat(l);var i=s.findIndex((function(t){return t.name===e}));if("buy"===t)-1===i?(o.name=e,o.cost=l,o.amount=a,o.totalCost=l*a,o.realizedGains=0):((o=s[i]).totalCost=o.totalCost+l*a,o.amount=o.amount+a,o.cost=o.totalCost/o.amount);else if("sell"===t){if(-1===i)return void alert("Tried selling with no coins in list, Try again!");if(!((o=s[i]).amount-a>=0))return void alert("You tried selling more coins than you have recorded! Try again!");o.amount=o.amount-a,o.realizedGains=o.realizedGains+(a*l-a*o.cost),0===o.amount&&(o.totalCost=0,o.cost=0)}var r=s;-1!==i?r[i]=o:r.push(o),r=r.sort((function(e,t){return t.totalCost-e.totalCost})),n(Object(c.a)(r)),localStorage.setItem("coins",JSON.stringify(r))}})]})})})};s(34);o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.754a7ce9.chunk.js.map