(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(n,i){},13:function(n,i,a){"use strict";a.d(i,"a",(function(){return e}));var e=[{id:1,name:"app_1",icon:""},{id:2,name:"app_2",icon:""},{id:3,name:"app_3",icon:""},{id:4,name:"app_4",icon:""},{id:5,name:"app_5",icon:""},{id:6,name:"app_6",icon:""},{id:7,name:"app_7",icon:""},{id:8,name:"app_8",icon:""},{id:9,name:"app_9",icon:""},{id:10,name:"app_10",icon:""},{id:11,name:"app_11",icon:""},{id:12,name:"app_12",icon:""},{id:13,name:"app_13",icon:""},{id:14,name:"app_14",icon:""},{id:15,name:"app_15",icon:""},{id:16,name:"app_16",icon:""},{id:17,name:"app_17",icon:""},{id:18,name:"app_18",icon:""},{id:19,name:"app_19",icon:""},{id:20,name:"app_20",icon:""},{id:21,name:"app_21",icon:""},{id:22,name:"app_22",icon:""},{id:23,name:"app_23",icon:""},{id:24,name:"app_24",icon:""},{id:25,name:"app_25",icon:""},{id:26,name:"app_26",icon:""},{id:27,name:"app_27",icon:""},{id:28,name:"app_28",icon:""},{id:29,name:"app_29",icon:""},{id:30,name:"app_30",icon:""},{id:31,name:"app_31",icon:""},{id:32,name:"app_32",icon:""},{id:33,name:"app_33",icon:""},{id:34,name:"app_34",icon:""},{id:35,name:"app_35",icon:""},{id:36,name:"app_36",icon:""},{id:37,name:"app_37",icon:""},{id:38,name:"app_38",icon:""},{id:39,name:"app_39",icon:""},{id:40,name:"app_40",icon:""},{id:41,name:"app_41",icon:""},{id:42,name:"app_42",icon:""},{id:43,name:"app_43",icon:""},{id:44,name:"app_44",icon:""},{id:45,name:"app_45",icon:""},{id:46,name:"app_46",icon:""},{id:47,name:"app_47",icon:""},{id:48,name:"app_48",icon:""},{id:49,name:"app_49",icon:""},{id:50,name:"app_50",icon:""},{id:51,name:"app_51",icon:""},{id:52,name:"app_52",icon:""},{id:53,name:"app_53",icon:""},{id:54,name:"app_54",icon:""},{id:55,name:"app_55",icon:""},{id:56,name:"app_56",icon:""},{id:57,name:"app_57",icon:""},{id:58,name:"app_58",icon:""},{id:59,name:"app_59",icon:""},{id:60,name:"app_60",icon:""},{id:61,name:"app_61",icon:""},{id:62,name:"app_62",icon:""},{id:63,name:"app_63",icon:""},{id:64,name:"app_64",icon:""},{id:65,name:"app_65",icon:""},{id:66,name:"app_66",icon:""}]},21:function(n,i,a){},24:function(n,i,a){},35:function(n,i,a){},36:function(n,i,a){},37:function(n,i,a){"use strict";a.r(i);for(var e=a(1),c=a.n(e),p=a(4),o=a.n(p),t=(a(20),a(21),a(2)),d=a(14),m=(a(24),a(0)),r=function(n){var i=n.name,a=n.icon,c=n.isDragging,p=Object(e.useState)(!1),o=Object(t.a)(p,2),d=o[0],r=o[1],s=Object(e.useRef)(null);return Object(e.useEffect)((function(){c&&r(!1)}),[c]),Object(e.useEffect)((function(){var n=function(){c||r(!0)};return s.current&&s.current.addEventListener("long-press",n),function(){s.current&&s.current.removeEventListener("long-press",n)}}),[]),Object(m.jsx)("div",{tabIndex:-1,className:"app-item-wrap",onBlur:function(){return r(!1)},onContextMenu:function(n){n.preventDefault()},children:Object(m.jsxs)("div",{"data-long-press-delay":"1000",ref:s,className:"app-item ".concat(!c&&d?"removable":""),style:{width:"100%",height:"100%"},children:[Object(m.jsx)("span",{className:"del-icon",onClick:n.onDel,children:"X"}),Object(m.jsx)("div",{className:"app-icon",style:{backgroundImage:a}}),Object(m.jsx)("div",{className:"app-name",children:i})]})})},s=a(15),_=a(5),u=(a(34),a(35),Math.ceil(_.MOCK_APP_LIST.length/30)),l=[],j=0;j<u;j++)l.push(_.MOCK_APP_LIST.slice(30*j,30*(j+1)));var f=function(){return Object(m.jsx)("div",{className:"desktop-container",children:Object(m.jsx)(s.Carousel,{autoPlay:!1,swipeable:!1,children:l.map((function(n,i){return Object(m.jsx)(b,{items:n},i)}))})})},b=function(n){var i=Object(e.useState)(n.items),a=Object(t.a)(i,2),c=a[0],p=a[1],o=Object(e.useState)(!1),s=Object(t.a)(o,2),_=s[0],u=s[1];return Object(m.jsx)("div",{style:{margin:"0 1vw"},onMouseDown:function(n){n.stopPropagation()},onMouseUp:function(n){n.stopPropagation()},children:Object(m.jsx)(d.ReactSortable,{group:"test",list:c,setList:p,animation:200,delayOnTouchOnly:!0,delay:100,onStart:function(n){u(!0)},onEnd:function(n){u(!1)},children:c.map((function(n,i){return Object(m.jsx)(r,{isDragging:_,name:n.name,icon:n.icon,onDel:function(){p((function(n){var a=n.slice();return a.splice(i,1),a}))}},n.id)}))})})};a(36);var O=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"title",children:"Socialbook Test, Yuxiang Zhang"})]})},g=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(i){var a=i.getCLS,e=i.getFID,c=i.getFCP,p=i.getLCP,o=i.getTTFB;a(n),e(n),c(n),p(n),o(n)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),g()},5:function(n,i,a){"use strict";var e=a(12);a.o(e,"MOCK_APP_LIST")&&a.d(i,"MOCK_APP_LIST",(function(){return e.MOCK_APP_LIST}));var c=a(13);a.d(i,"MOCK_APP_LIST",(function(){return c.a}))}},[[37,1,2]]]);
//# sourceMappingURL=main.8623a4d2.chunk.js.map