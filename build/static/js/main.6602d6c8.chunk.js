(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{21:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var n=t(2),s=t.n(n),i=t(14),a=t.n(i),r=(t(21),t.p+"static/media/logo.e6ecab44.png"),j=t(0),d=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("img",{src:r})})},b=t(16),o=t(15),l=t.n(o),h=function(e){var c=e.imgPath;return Object(j.jsx)("div",{children:Object(j.jsx)("img",{id:"card-img",src:c})})},m=function(){var e=Object(n.useState)([]),c=Object(b.a)(e,2),t=c[0],s=c[1];return Object(n.useEffect)((function(){l.a.get("https://www.breakingbadapi.com/api/characters").then((function(e){return s(e.data)}));console.log(t)}),[]),Object(j.jsx)("div",{className:"image-container",children:t.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"mainContainer",children:Object(j.jsxs)("div",{className:"theCard",children:[Object(j.jsx)("div",{className:"theFront",children:Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)(h,{imgPath:e.img})})}),Object(j.jsxs)("div",{className:"theBack",children:[console.log(e),Object(j.jsx)("img",{src:e.img,style:{height:"120px"}}),Object(j.jsxs)("p",{children:["Name : ",e.name]}),Object(j.jsxs)("p",{children:["NickName : ",e.nickname]}),Object(j.jsxs)("p",{children:["Status : ",e.status]}),Object(j.jsxs)("p",{children:["Occupation : ",e.occupation[0]]})]})]})})})}))})},O=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d,{}),Object(j.jsx)(m,{})]})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6602d6c8.chunk.js.map