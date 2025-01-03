"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[695],{5680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?t.createElement(g,o(o({ref:a},d),{},{components:n})):t.createElement(g,o({ref:a},d))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},632:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(8168),r=(n(6540),n(5680));const i={sidebar_position:1,title:"Clases"},o=void 0,s={unversionedId:"java/clases",id:"java/clases",title:"Clases",description:"Que son las clases?",source:"@site/docs/java/clases.md",sourceDirName:"java",slug:"/java/clases",permalink:"/wiki.dbquiroga/docs/java/clases",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/java/clases.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Clases"},sidebar:"tutorialSidebar",previous:{title:"Github Actions",permalink:"/wiki.dbquiroga/docs/github-actions/ci-cd"},next:{title:"Tipod de Datos Primitivos",permalink:"/wiki.dbquiroga/docs/java/datos_primitivos"}},l={},c=[{value:"Que son las clases?",id:"que-son-las-clases",level:2},{value:"Clases con metodo main",id:"clases-con-metodo-main",level:3},{value:"Clases sin metodo main",id:"clases-sin-metodo-main",level:4}],d={toc:c},u="wrapper";function p(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"que-son-las-clases"},"Que son las clases?"),(0,r.yg)("h3",{id:"clases-con-metodo-main"},"Clases con metodo main"),(0,r.yg)("p",null,"En Java, solo las clases que act\xfaan como puntos de entrada para un programa deben contener un m\xe9todo main. Estas clases principales se utilizan para iniciar la ejecuci\xf3n del programa Java cuando se ejecuta desde la l\xednea de comandos o desde un entorno que requiere un punto de entrada espec\xedfico."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class MiPrograma {\n\n    public static void main(String[] args) {\n        // C\xf3digo para iniciar y ejecutar el programa\n        System.out.println("Hola, mundo!");\n    }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"public"),": Indica que el m\xe9todo es accesible desde cualquier parte."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"static"),": Indica que el m\xe9todo main pertenece a la clase en s\xed misma y no a instancias de la clase."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"void"),": Indica que el m\xe9todo main no devuelve ning\xfan valor."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"String[] args"),": Es un par\xe1metro del m\xe9todo que permite recibir argumentos desde la l\xednea de comandos.")),(0,r.yg)("p",null,"En este caso, MiPrograma es la clase principal que contiene el m\xe9todo main, y este m\xe9todo se ejecuta cuando el programa se inicia."),(0,r.yg)("h4",{id:"clases-sin-metodo-main"},"Clases sin metodo main"),(0,r.yg)("p",null,"Todas las dem\xe1s clases en el programa Java, no necesitan tener un m\xe9todo main. Estas clases suelen contener la l\xf3gica de negocio, m\xe9todos espec\xedficos para realizar tareas, definiciones de objetos y cualquier otra funcionalidad necesaria para el funcionamiento del programa."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class Calculadora {\n\n    public int sumar(int a, int b) {\n        return a + b;\n    }\n\n    public int restar(int a, int b) {\n        return a - b;\n    }\n}\n")),(0,r.yg)("p",null,"En este ejemplo, la clase Calculadora contiene m\xe9todos para realizar operaciones matem\xe1ticas, pero no tiene un m\xe9todo main. En cambio, estas operaciones podr\xedan ser invocadas desde el m\xe9todo main de una clase principal como MiPrograma."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Las clases que no contienen un m\xe9todo main suelen ser utilizadas para encapsular funcionalidad espec\xedfica, definir objetos, manejar l\xf3gica de negocio, etc. Pueden ser instanciadas y utilizadas por la clase principal (con main) o por otras clases secundarias dependiendo de la estructura y dise\xf1o del programa.")))}p.isMDXComponent=!0}}]);