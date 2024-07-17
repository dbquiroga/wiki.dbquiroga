"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9643],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},6796:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={sidebar_position:3,title:"Callbacks"},l=void 0,c={unversionedId:"javascript/callbacks",id:"javascript/callbacks",title:"Callbacks",description:"Que son?",source:"@site/docs/javascript/callbacks.md",sourceDirName:"javascript",slug:"/javascript/callbacks",permalink:"/wiki.dbquiroga/docs/javascript/callbacks",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/javascript/callbacks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Callbacks"},sidebar:"tutorialSidebar",previous:{title:"Objetos y mejotodos en js",permalink:"/wiki.dbquiroga/docs/javascript/objetos"},next:{title:"Arrays/ Arreglos",permalink:"/wiki.dbquiroga/docs/javascript/arrays"}},i={},s=[{value:"Que son?",id:"que-son",level:2},{value:"Ejemplo",id:"ejemplo",level:4}],u={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"que-son"},"Que son?"),(0,a.yg)("p",null,"Son un tipo de funciones que se pasan por parametro a otras funciones. "),(0,a.yg)("p",null,"A lo que se llama callback en si es cuando una funcion, supongamos funcion 1, ejecuta otra funcion, supongamos la 2, ese proceso es el llamado ",(0,a.yg)("strong",{parentName:"p"}," callback ")),(0,a.yg)("p",null,"Los callbacks aseguran que una funcion no se va a ejecutar antes de que se complete una tarea"),(0,a.yg)("h4",{id:"ejemplo"},"Ejemplo"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"function devuelvoUsuario() {\n   return 'CAMILO';\n}\nfunction devuelvoSaludo() {\n   return 'Hola';\n}\nfunction saludar(cb1, cb2) {\n   return cb1() + ' ' + cb2();\n}\nvar resultado = saludar(devuelvoSaludo, devuelvoUsuario);\nconsole.log(resultado);\n")))}d.isMDXComponent=!0}}]);