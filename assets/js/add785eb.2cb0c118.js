"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9087],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var a=n(6540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),p=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(n),d=t,m=y["".concat(l,".").concat(d)]||y[d]||u[d]||s;return n?a.createElement(m,o(o({ref:r},c),{},{components:n})):a.createElement(m,o({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[y]="string"==typeof e?e:t,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5877:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(8168),t=(n(6540),n(5680));const s={sidebar_position:2,title:"Instalar Cypress"},o=void 0,i={unversionedId:"qa-automation/Cypress/instalar_cypress",id:"qa-automation/Cypress/instalar_cypress",title:"Instalar Cypress",description:"Como empezar",source:"@site/docs/qa-automation/Cypress/2.instalar_cypress.md",sourceDirName:"qa-automation/Cypress",slug:"/qa-automation/Cypress/instalar_cypress",permalink:"/wiki.dbquiroga/docs/qa-automation/Cypress/instalar_cypress",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/qa-automation/Cypress/2.instalar_cypress.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Instalar Cypress"},sidebar:"tutorialSidebar",previous:{title:"Empezar en Cypress",permalink:"/wiki.dbquiroga/docs/qa-automation/Cypress/empezar_en_cypress"},next:{title:"Configuracion de Cypress",permalink:"/wiki.dbquiroga/docs/qa-automation/Cypress/configuracion_cypress"}},l={},p=[{value:"Como empezar",id:"como-empezar",level:2},{value:"1. Instalar NodeJS",id:"1-instalar-nodejs",level:3},{value:"2. Instalar Cypress",id:"2-instalar-cypress",level:3},{value:"Con windows",id:"con-windows",level:5},{value:"Con linux",id:"con-linux",level:5},{value:"3. Iniciar un proyecto de NodeJs",id:"3-iniciar-un-proyecto-de-nodejs",level:3},{value:"4. Instalar Cypress",id:"4-instalar-cypress",level:3},{value:"5. Instalar Visual Studio code",id:"5-instalar-visual-studio-code",level:3},{value:"6. Correr Cypress",id:"6-correr-cypress",level:3},{value:"7. Configurar Cypress",id:"7-configurar-cypress",level:3},{value:"8. Instalar extensiones de vc code",id:"8-instalar-extensiones-de-vc-code",level:3}],c={toc:p},y="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(y,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"como-empezar"},"Como empezar"),(0,t.yg)("h3",{id:"1-instalar-nodejs"},"1. Instalar NodeJS"),(0,t.yg)("p",null,"Primero chequear si tenemos o no instalado NOdeJS"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"npm -v \n")),(0,t.yg)("p",null,"En caso de no tenerlo descargar NodeJS"),(0,t.yg)("p",null,"  Instalar NodeJS\nVerificar si se instalo correctamente"),(0,t.yg)("h3",{id:"2-instalar-cypress"},"2. Instalar Cypress"),(0,t.yg)("p",null,"Crear una carpeta donde trabajar"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mkdir %my-site%\n")),(0,t.yg)("h5",{id:"con-windows"},"Con windows"),(0,t.yg)("p",null,"Abrir una terminal\ncon windows cmd como adminsitrador y dirigirse a la carpeta creada"),(0,t.yg)("h5",{id:"con-linux"},"Con linux"),(0,t.yg)("p",null,"dirigirse a la carpeta con"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"cd %my-site%\n")),(0,t.yg)("h3",{id:"3-iniciar-un-proyecto-de-nodejs"},"3. Iniciar un proyecto de NodeJs"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"npm init -y\n")),(0,t.yg)("h3",{id:"4-instalar-cypress"},"4. Instalar Cypress"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"npm install cypress@10.3.0 --save-dev\n")),(0,t.yg)("h3",{id:"5-instalar-visual-studio-code"},"5. Instalar Visual Studio code"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Descargar visual studio code"),(0,t.yg)("li",{parentName:"ul"},"Instalar visual studio code")),(0,t.yg)("h3",{id:"6-correr-cypress"},"6. Correr Cypress"),(0,t.yg)("p",null," Abrir la terminal en la carpeta donde instalamos cypress.\nEj: ",(0,t.yg)("inlineCode",{parentName:"p"},"cd /my%site")," y ejecutar Cypress"),(0,t.yg)("p",null," ",(0,t.yg)("strong",{parentName:"p"},"modo HEAD")," (con interfaz gr\xe1fica)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"npx cypress open\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"modo HEADLESS")," (sin interfaz gr\xe1fica)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"npx cypress run\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"para ejecutar un solo test en modo HEADLESS en Cypress")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"npx cypress run --spec <ruta_del_archivo_de_prueba>\n")),(0,t.yg)("p",null,"Ej:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'npx cypress run --spec "cypress/e2e/homeSauce.cy.js"\n')),(0,t.yg)("h3",{id:"7-configurar-cypress"},"7. Configurar Cypress"),(0,t.yg)("p",null,"Al ejecutar el comando npx cypress open, se nos abrira una interfaz, donde debemos seleccionar:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Elegir e2e testing"),(0,t.yg)("li",{parentName:"ol"},"Click continue"),(0,t.yg)("li",{parentName:"ol"},"Elegir el navegador y empezar el testing"),(0,t.yg)("li",{parentName:"ol"},"Seleccionar scafold "),(0,t.yg)("li",{parentName:"ol"},"Ejecutar el test que deseamos para verificar que funcione"),(0,t.yg)("li",{parentName:"ol"},"Cerrar la interfaz de cypress"),(0,t.yg)("li",{parentName:"ol"},"Verificar que se crearon las carpetas en el proyecto")),(0,t.yg)("h3",{id:"8-instalar-extensiones-de-vc-code"},"8. Instalar extensiones de vc code"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Chai snippets"),(0,t.yg)("li",{parentName:"ul"},"Error lens"),(0,t.yg)("li",{parentName:"ul"},"Cypress snippets")))}u.isMDXComponent=!0}}]);