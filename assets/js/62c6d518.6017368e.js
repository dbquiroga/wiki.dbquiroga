"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8342],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const o={sidebar_position:7,title:"Template Sring"},i=void 0,l={unversionedId:"qa-automation/template_string",id:"qa-automation/template_string",title:"Template Sring",description:"Que es",source:"@site/docs/qa-automation/template_string.md",sourceDirName:"qa-automation",slug:"/qa-automation/template_string",permalink:"/wiki.dbquiroga/docs/qa-automation/template_string",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/qa-automation/template_string.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Template Sring"},sidebar:"tutorialSidebar",previous:{title:"Node js",permalink:"/wiki.dbquiroga/docs/qa-automation/node"},next:{title:"Selenium",permalink:"/wiki.dbquiroga/docs/selenium"}},s={},c=[{value:"Que es",id:"que-es",level:3},{value:"Interpolacion de expresiones",id:"interpolacion-de-expresiones",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"que-es"},"Que es"),(0,r.yg)("p",null,"Una nueva carcateristica de ES6, una nueva forma de mostrar textos, variables, datos e interpolar informacion. "),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"ECMAScript es el nombre estandarizado del lenguaje de programaci\xf3n com\xfanmente conocido como Javascript, y ECMAScript2015 (su a\xf1o de publicaci\xf3n), o ES6, hace referencia a la 6\xaa versi\xf3n de este lenguaje, superando a la anterior, ES5, nacida en 2011.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Antes"',title:'"Antes"'},"let nombre = 'Maria'\nlet apellido = 'Perez'\nconsole.log('El nombre es: '+nombre +' y el apellido es '+apellido);\n")),(0,r.yg)("p",null,"Antes habia que poner el string + variable, para luego colocar string + variable. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Ahora"',title:'"Ahora"'},"let nombre = 'Maria'\nlet apellido = 'Perez'\nconsole.log(`El nombre es: ${nombre} y el apellido es ${apellido}`);\n")),(0,r.yg)("p",null,"Usando comillas invertidas se puede mostrar el mismo texto y con unos nuevos contenedores definidos con signo peso, ya no sera necesario colocar tantas comillas. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Doble linea de texto Antes"',title:'"Doble',linea:!0,de:!0,texto:!0,'Antes"':!0},"console.log('Linea 1 de texto\\n'+\n'\\y linea 2 de texto');\n")),(0,r.yg)("p",null,"Para ver las lineas una debajo de la otra, no era posible colocar un enter y ejecutarlo, habia que poner comillas y el signo mas para que esto sea visible. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Doble linea de texto Ahora"',title:'"Doble',linea:!0,de:!0,texto:!0,'Ahora"':!0},"console.log(`Linea 1 de texto\ny linea 2 de texto`);\n")),(0,r.yg)("h3",{id:"interpolacion-de-expresiones"},"Interpolacion de expresiones"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Suma Antes"',title:'"Suma','Antes"':!0},"console.log('La suma de a + b es = '+(a+b)+''.');\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Suma ahora"',title:'"Suma','ahora"':!0},"console.log(`La suma de a + b es = ${a+b}`);\n")),(0,r.yg)("p",null,"Mas info: ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"Documentacion oficial")))}m.isMDXComponent=!0}}]);