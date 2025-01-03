"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6152],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var a=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return t?a.createElement(f,i(i({ref:r},p),{},{components:t})):a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9645:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=t(8168),o=(t(6540),t(5680));const n={sidebar_position:7,title:"Estructuras de Control"},i="Estructuras de Control",s={unversionedId:"javascript/estructurasDeControl",id:"javascript/estructurasDeControl",title:"Estructuras de Control",description:"Bucles en JavaScript",source:"@site/docs/javascript/estructurasDeControl.md",sourceDirName:"javascript",slug:"/javascript/estructurasDeControl",permalink:"/wiki.dbquiroga/docs/javascript/estructurasDeControl",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/javascript/estructurasDeControl.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Estructuras de Control"},sidebar:"tutorialSidebar",previous:{title:"Herencias",permalink:"/wiki.dbquiroga/docs/javascript/herencias"},next:{title:"Nombrando Funciones",permalink:"/wiki.dbquiroga/docs/javascript/nomenclatura"}},l={},c=[{value:"Bucles en JavaScript",id:"bucles-en-javascript",level:2},{value:"<code>for</code>",id:"for",level:3},{value:"<code>for...in</code>",id:"forin",level:3},{value:"<code>for...of</code>",id:"forof",level:3}],p={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"estructuras-de-control"},"Estructuras de Control"),(0,o.yg)("h2",{id:"bucles-en-javascript"},"Bucles en JavaScript"),(0,o.yg)("p",null,"En JavaScript, existen varios tipos de bucles que se pueden utilizar para iterar sobre colecciones de datos. Los m\xe1s comunes son ",(0,o.yg)("inlineCode",{parentName:"p"},"for"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"for...in")," y ",(0,o.yg)("inlineCode",{parentName:"p"},"for...of"),"."),(0,o.yg)("h3",{id:"for"},(0,o.yg)("inlineCode",{parentName:"h3"},"for")),(0,o.yg)("p",null,"El bucle ",(0,o.yg)("inlineCode",{parentName:"p"},"for")," es el m\xe1s com\xfan y se utiliza para iterar un n\xfamero espec\xedfico de veces. Es \xfatil cuando se conoce de antemano el n\xfamero de iteraciones."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 5; i++) {\n  console.log(i); // Imprime los n\xfameros del 0 al 4\n}\n")),(0,o.yg)("h3",{id:"forin"},(0,o.yg)("inlineCode",{parentName:"h3"},"for...in")),(0,o.yg)("p",null,"El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto. Es \xfatil para recorrer todas las propiedades de un objeto, incluidas las propiedades heredadas."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const objeto = { a: 1, b: 2, c: 3 };\n\nfor (let propiedad in objeto) {\n  console.log(propiedad); // Imprime 'a', 'b', 'c'\n  console.log(objeto[propiedad]); // Imprime 1, 2, 3\n}\n")),(0,o.yg)("h3",{id:"forof"},(0,o.yg)("inlineCode",{parentName:"h3"},"for...of")),(0,o.yg)("p",null,"El bucle for...of se utiliza para iterar sobre objetos iterables (como arrays, strings, mapas, conjuntos, etc.). Es \xfatil para recorrer los valores de una colecci\xf3n."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const array = [10, 20, 30];\n\nfor (let valor of array) {\n  console.log(valor); // Imprime 10, 20, 30\n}\n")),(0,o.yg)("p",null,"::info "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"for: Se utiliza para iterar un n\xfamero espec\xedfico de veces. Ideal para cuando se conoce el n\xfamero de iteraciones."),(0,o.yg)("li",{parentName:"ul"},"for...in: Se utiliza para iterar sobre las propiedades enumerables de un objeto. No se recomienda para iterar sobre arrays debido a que tambi\xe9n itera sobre las propiedades heredadas."),(0,o.yg)("li",{parentName:"ul"},"for...of: Se utiliza para iterar sobre los valores de objetos iterables. Ideal para arrays y otras colecciones iterables.")))}d.isMDXComponent=!0}}]);