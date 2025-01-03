"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5228],{5680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>m});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),y=n,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},1459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(8168),n=(a(6540),a(5680));const o={sidebar_position:4,title:"Mocha"},i=void 0,s={unversionedId:"qa-automation/Cypress/mocha",id:"qa-automation/Cypress/mocha",title:"Mocha",description:"Para que cypress pueda correr los test necesita de mocha, quien le va a yudar a determinar que es un tets, que tiene que ejecutar primero o despues, cuantos test se tienen que ejecutar. Le indica a cypress que es un test y que deberia ser ejecutado como tal.",source:"@site/docs/qa-automation/Cypress/4.mocha.md",sourceDirName:"qa-automation/Cypress",slug:"/qa-automation/Cypress/mocha",permalink:"/wiki.dbquiroga/docs/qa-automation/Cypress/mocha",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/qa-automation/Cypress/4.mocha.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Mocha"},sidebar:"tutorialSidebar",previous:{title:"Configuracion de Cypress",permalink:"/wiki.dbquiroga/docs/qa-automation/Cypress/configuracion_cypress"},next:{title:"Locators/Selectores",permalink:"/wiki.dbquiroga/docs/qa-automation/Cypress/locators"}},c={},u=[{value:"Cracateristicas",id:"cracateristicas",level:3},{value:"Nomenclatura Mocha",id:"nomenclatura-mocha",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Para que cypress pueda correr los test necesita de mocha, quien le va a yudar a determinar que es un tets, que tiene que ejecutar primero o despues, cuantos test se tienen que ejecutar. Le indica a cypress que es un test y que deberia ser ejecutado como tal."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Mocha ya viene adentro de cypress, no hay que instalarlo. ")),(0,n.yg)("h3",{id:"cracateristicas"},"Cracateristicas"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Soporta distintos navegadores"),(0,n.yg)("li",{parentName:"ul"},"Crea reportes (pasaron, fallaron, resultados actuales y esperados)"),(0,n.yg)("li",{parentName:"ul"},"Permite usar cualquier libreria para hacer ascerciones"),(0,n.yg)("li",{parentName:"ul"},"Permite hooks (secciones que se ejecutan antes o despues del test)"),(0,n.yg)("li",{parentName:"ul"},"Permite filtrar ejecuciones (que test ignorar o ejecutar)"),(0,n.yg)("li",{parentName:"ul"},"Reporta tiempo de duracion de cada test")),(0,n.yg)("h3",{id:"nomenclatura-mocha"},"Nomenclatura Mocha"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"}," describe() "),": Indica que esta seccion va a ser un test suite que incluir\xe1 los test cases. "),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"}," it() "),": Indica que se va a inicializar un test case."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"}," skip() "),": Se utiliza para indicar que el/los test/ suite se ignoraran y no seran ejecutados."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"}," only() "),": Se utiliza para indicar que el/los test/ suite ser\xe1n los \xfanicos en ser ejecutados del archivo. "),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Usar solo un describe() por archivo")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"El only se puede agregar al describe como al it. ej: describe.only(), it.only() ")))}d.isMDXComponent=!0}}]);