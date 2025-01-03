"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[318],{5680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>y});var t=r(6540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),s=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},u=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,y=p["".concat(c,".").concat(d)]||p[d]||g[d]||i;return r?t.createElement(y,l(l({ref:a},u),{},{components:r})):t.createElement(y,l({ref:a},u))}));function y(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3787:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(8168),n=(r(6540),r(5680));const i={sidebar_position:2,title:"Crear ontrase\xf1a SSH"},l=void 0,o={unversionedId:"git/crear_SSH",id:"git/crear_SSH",title:"Crear ontrase\xf1a SSH",description:"Abrir termina",source:"@site/docs/git/crear_SSH.md",sourceDirName:"git",slug:"/git/crear_SSH",permalink:"/wiki.dbquiroga/docs/git/crear_SSH",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/git/crear_SSH.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Crear ontrase\xf1a SSH"},sidebar:"tutorialSidebar",previous:{title:"Como subir un proyecto Git con SSH",permalink:"/wiki.dbquiroga/docs/git/proyecto_ssh"},next:{title:"Comandos Git",permalink:"/wiki.dbquiroga/docs/git/intro_git"}},c={},s=[{value:"Abrir termina",id:"abrir-termina",level:3},{value:"Crea una nueva clave SSH",id:"crea-una-nueva-clave-ssh",level:3},{value:"Agrega tu clave SSH a ssh-agent",id:"agrega-tu-clave-ssh-a-ssh-agent",level:3},{value:"Inicia sesi\xf3n en tu cuenta de GitHub",id:"inicia-sesi\xf3n-en-tu-cuenta-de-github",level:3}],u={toc:s},p="wrapper";function g(e){let{components:a,...r}=e;return(0,n.yg)(p,(0,t.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"abrir-termina"},"Abrir termina"),(0,n.yg)("p",null,'Asegurate de tener el comando "ssh-keygen" disponible. Si no lo tienes, puedes instalarlo con el siguiente comando:'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo apt-get install ssh-keygen\n")),(0,n.yg)("h3",{id:"crea-una-nueva-clave-ssh"},"Crea una nueva clave SSH"),(0,n.yg)("p",null,"con el siguiente comando, reemplazando <correo-electr\xf3nico> con tu direcci\xf3n de correo electr\xf3nico de GitHub:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'ssh-keygen -t ed25519 -C "<correo-electr\xf3nico>"\n')),(0,n.yg)("p",null,"Presiona Enter para aceptar la ubicaci\xf3n predeterminada del archivo de clave, o proporciona una ubicaci\xf3n personalizada."),(0,n.yg)("p",null,"Se te pedir\xe1 que ingreses una frase de contrase\xf1a. Si lo deseas, puedes agregar una contrase\xf1a para proteger tu clave SSH."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"NO recomiendo hacer esto porque despues te pide esa clave")),(0,n.yg)("h3",{id:"agrega-tu-clave-ssh-a-ssh-agent"},"Agrega tu clave SSH a ssh-agent"),(0,n.yg)("p",null,"Es un programa que maneja tus claves SSH. Inicia el agente SSH con el siguiente comando:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title= "bash"',title:"",'"bash"':!0},'eval "$(ssh-agent -s)"\n')),(0,n.yg)("p",null,"Agrega tu clave privada a ssh-agent con el siguiente comando, reemplazando ",(0,n.yg)("inlineCode",{parentName:"p"},"<ruta-a-la-clave-ssh>")," con la ubicaci\xf3n de tu clave SSH:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title= "csharp"',title:"",'"csharp"':!0},"ssh-add <ruta-a-la-clave-ssh>\n")),(0,n.yg)("p",null,"Ahora, copia la clave SSH p\xfablica al portapapeles con el siguiente comando:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:'title = "javascript"',title:!0,"":"",'"javascript"':!0},"xclip -sel clip < ~/.ssh/id_ed25519.pub\n")),(0,n.yg)("h3",{id:"inicia-sesi\xf3n-en-tu-cuenta-de-github"},"Inicia sesi\xf3n en tu cuenta de GitHub"),(0,n.yg)("p",null,'Haz clic en tu avatar en la esquina superior derecha y luego haz clic en "Settings".'),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},'En la barra lateral izquierda, haz clic en "SSH and GPG keys".')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},'Haz clic en "New SSH key" o "Add SSH key".')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},'Proporciona un t\xedtulo descriptivo para la clave en el campo "Title".')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},'Pega tu clave SSH p\xfablica en el campo "Key" y haz clic en "Add SSH key".'))),(0,n.yg)("p",null,"\xa1Listo! Ahora puedes usar tu clave SSH para autenticar con GitHub en lugar de tu nombre de usuario y contrase\xf1a."))}g.isMDXComponent=!0}}]);