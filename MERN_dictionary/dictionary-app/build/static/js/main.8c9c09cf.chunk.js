(this["webpackJsonpdictionary-app"]=this["webpackJsonpdictionary-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a(74)},50:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(3),s=a(13),i=a(4),u=a(6),m=a(9),d=a.n(m),p=a(14),b="https://mern-dictionary-sergi.herokuapp.com/api",f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(b,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},E=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(b,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},v="[ui] Open modal",h="[ui] Close modal",O="[translation] Logout translation",g="[translation] Set Active",j="[translation] Add new",y="[translation] Event deleted",N="[translation] Events loaded",k="[auth] Finish checking login state",w="[auth] Login",x="[auth] logout",S=a(21),T=a.n(S),C=function(e){return{type:j,payload:e}},I=function(){return{type:y}},P=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("translations");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=n.translations,t(A(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return{type:N,payload:e}},L=function(){return{type:k}},D=function(e){return{type:w,payload:e}},_=function(){return function(e){localStorage.clear(),e({type:O}),e(R())}},R=function(){return{type:x}},F=a(15),G=a(2),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],c=a[1],l=function(){c(e)},o=function(e){var t=e.target;c(Object(G.a)(Object(G.a)({},r),{},Object(F.a)({},t.name,t.value)))};return[r,o,l]},M=(a(50),function(){var e=Object(o.b)(),t=J({lEmail:"",lPassword:""}),a=Object(u.a)(t,2),n=a[0],c=a[1],l=n.lEmail,s=n.lPassword;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mx-auto login-form-2"},r.a.createElement("h3",null,"DICTIONARY ONLINE"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=l,n=s,function(){var e=Object(p.a)(d.a.mark((function e(t){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(D({uid:c.uid,name:c.name}))):T.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:l,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btn btn-dark",value:"Login"}))))))}),X=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement(s.b,{className:"nav-item nav-link",exact:!0,to:"/search"},"Search"),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t(_())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},q=a(29),B=a.n(q),U={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};B.a.setAppElement("#root");var V={wordEsp:"",wordIta:""},Y=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.b)(),a=Object(n.useState)(!0),c=Object(u.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(!0),m=Object(u.a)(i,2),b=m[0],f=m[1],v=Object(n.useState)(V),O=Object(u.a)(v,2),g=O[0],j=O[1],y=g.wordEsp,N=g.wordIta,k=function(e){var t=e.target;j(Object(G.a)(Object(G.a)({},g),{},Object(F.a)({},t.name,t.value)))},w=function(){t({type:h}),j(V)};return r.a.createElement(B.a,{isOpen:e,onRequestClose:w,style:U,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," Nueva traducci\xf3n "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){return e.preventDefault(),y.trim().length<2?s(!1):N.trim().length<2?f(!1):(t((a=g,function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,c,l,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth,c=r.uid,l=r.name,e.prev=1,e.next=4,E("translations",a,"POST");case 4:return o=e.sent,e.next=7,o.json();case 7:(s=e.sent).ok&&(a.id=s.translation.id,a.user={_id:c,name:l},t(C(a))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())),s(!0),f(!0),void w());var a}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Palabra ESP"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!l&&"is-invalid"),placeholder:"ESP",name:"wordEsp",autoComplete:"off",value:y,onChange:k})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Palabra ITA"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!b&&"is-invalid"),placeholder:"ITA",name:"wordIta",autoComplete:"off",value:N,onChange:k})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},z=function(){var e=Object(o.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e({type:v})}},r.a.createElement("i",{className:"fas fa-plus"}))},H=function(e){var t=e.idTranslation,a=Object(o.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){a({type:g,payload:t}),a(function(){var e=Object(p.a)(d.a.mark((function e(t,a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().dictionary.activeTranslation,e.prev=1,e.next=4,E("translations/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(I()):T.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}))},K=function(e){var t=e.id,a=e.wordEsp,n=e.wordIta;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,a," - ",n),r.a.createElement("td",null,r.a.createElement(H,{idTranslation:t})))))},Q=function(e){for(var t=e.translationsPerPage,a=e.totalTranslations,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("button",{onClick:function(){return n(e)},className:"page-link"},e))})))))},W=function(){var e=Object(o.c)((function(e){return e.dictionary})).translations,t=Object(n.useState)(1),a=Object(u.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(5),i=Object(u.a)(s,1)[0],m=c*i,d=m-i,p=e.slice(d,m);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"table-responsive text-center"},r.a.createElement("table",{className:"table table-hover table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ESP - ITA"),r.a.createElement("th",{scope:"col"},"X"))),p.map((function(e){return r.a.createElement(K,Object.assign({key:e.id},e))})))),r.a.createElement(Q,{translationsPerPage:i,totalTranslations:e.length,paginate:function(e){l(e)}}))))},Z=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(P())}),[e]),r.a.createElement("div",{className:"dictionary-screen"},r.a.createElement(X,null),r.a.createElement(Y,null),r.a.createElement(z,null),r.a.createElement(W,null))},$=a(22),ee=function(e){var t=e.isAuthenticated,a=e.component,n=Object($.a)(e,["isAuthenticated","component"]);return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(i.a,{to:"/"}):r.a.createElement(a,e)}}))},te=function(e){var t=e.isAuthenticated,a=e.component,n=Object($.a)(e,["isAuthenticated","component"]);return r.a.createElement(i.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(i.a,{to:"/login"})}}))},ae=a(38),ne=a.n(ae),re=function(e){var t=e.history,a=Object(o.b)();Object(n.useEffect)((function(){a(P())}),[a]);var c=Object(i.g)(),l=ne.a.parse(c.search).q,s=void 0===l?"":l,m=J({searchText:s}),d=Object(u.a)(m,2),p=d[0],b=d[1],f=p.searchText,E=Object(o.c)((function(e){return e.dictionary})).translations,v=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return""===e?[]:(e=e.toLocaleLowerCase(),t.filter((function(t){return t.wordIta.toLocaleLowerCase().includes(e)})))}(s,E)}),[s,E]);return r.a.createElement("div",{className:"dictionary-screen"},r.a.createElement(X,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h4",null," Search Form "),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.push("?q=".concat(f))}},r.a.createElement("input",{type:"text",placeholder:"Buscar traducci\xf3n",className:"m-1 form-control",name:"searchText",autoComplete:"off",value:f,onChange:b}),r.a.createElement("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary"},"Search...")),r.a.createElement("button",{className:"btn m-1 btn-outline-info",onClick:function(){t.push("/")}},"Return")),r.a.createElement("div",{className:"col-7"},r.a.createElement("h4",null," Results "),r.a.createElement("hr",null),""===s&&r.a.createElement("div",{className:"alert alert-info"},"Buscar una traducci\xf3n"),""!==s&&0===v.length&&r.a.createElement("div",{className:"alert alert-danger"},"No hay traducciones con este nombre ",s),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"table-responsive text-center"},r.a.createElement("table",{className:"table table-hover table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ESP - ITA"),r.a.createElement("th",{scope:"col"},"X"))),v.map((function(e){return r.a.createElement(K,Object.assign({key:e.id},e))}))))))))))},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(D({uid:n.uid,name:n.name}))):t(L());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere...."):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(ee,{exact:!0,path:"/login",component:M,isAuthenticated:!!c}),r.a.createElement(te,{exact:!0,path:"/",component:Z,isAuthenticated:!!c}),r.a.createElement(te,{exact:!0,path:"/search",component:re,isAuthenticated:!!c}),r.a.createElement(i.a,{to:"/"}))))},le=a(12),oe=a(39),se={modalOpen:!1},ie=a(30),ue={translations:[],activeTranslation:null},me={checking:!0},de=Object(le.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(G.a)(Object(G.a)({},e),{},{modalOpen:!0});case h:return Object(G.a)(Object(G.a)({},e),{},{modalOpen:!1});default:return e}},dictionary:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(G.a)(Object(G.a)({},e),{},{activeTranslation:t.payload});case j:return Object(G.a)(Object(G.a)({},e),{},{translations:[].concat(Object(ie.a)(e.translations),[t.payload])});case y:return Object(G.a)(Object(G.a)({},e),{},{translations:e.translations.filter((function(t){return t.id!==e.activeTranslation})),activeTranslation:null});case N:return Object(G.a)(Object(G.a)({},e),{},{translations:Object(ie.a)(t.payload)});case O:return Object(G.a)({},ue);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(G.a)(Object(G.a)(Object(G.a)({},e),t.payload),{},{checking:!1});case k:return Object(G.a)(Object(G.a)({},e),{},{checking:!1});case x:return{checking:!1};default:return e}}}),pe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,be=Object(le.e)(de,pe(Object(le.a)(oe.a))),fe=function(){return r.a.createElement(o.a,{store:be},r.a.createElement(ce,null))};a(73);l.a.render(r.a.createElement(fe,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8c9c09cf.chunk.js.map