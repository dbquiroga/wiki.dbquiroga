"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8620],{5680:(e,o,r)=>{r.d(o,{xA:()=>d,yg:()=>g});var a=r(6540);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function t(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,a,n=function(e,o){if(null==e)return{};var r,a,n={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var o=a.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},d=function(e){var o=p(e.components);return a.createElement(i.Provider,{value:o},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},u=a.forwardRef((function(e,o){var r=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,g=c["".concat(i,".").concat(u)]||c[u]||m[u]||t;return r?a.createElement(g,s(s({ref:o},d),{},{components:r})):a.createElement(g,s({ref:o},d))}));function g(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var t=r.length,s=new Array(t);s[0]=u;var l={};for(var i in o)hasOwnProperty.call(o,i)&&(l[i]=o[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<t;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3150:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var a=r(8168),n=(r(6540),r(5680));const t={sidebar_position:1,title:"Objetos y mejotodos en js"},s=void 0,l={unversionedId:"javascript/objetos",id:"javascript/objetos",title:"Objetos y mejotodos en js",description:"JavaScript tiene una serie de objetos globales integrados que nos son de utilidad.Uno de estos objetos es Math, que tiene varios m\xe9todos propios.",source:"@site/docs/javascript/objetos.md",sourceDirName:"javascript",slug:"/javascript/objetos",permalink:"/wiki.dbquiroga/docs/javascript/objetos",draft:!1,editUrl:"https://github.com/dbquiroga/wiki.dbquiroga/edit/main/docs/javascript/objetos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Objetos y mejotodos en js"},sidebar:"tutorialSidebar",previous:{title:"Variables, tipos de datos y operadores.",permalink:"/wiki.dbquiroga/docs/javascript/variables"},next:{title:"Callbacks",permalink:"/wiki.dbquiroga/docs/javascript/callbacks"}},i={},p=[{value:"Objeto Math",id:"objeto-math",level:2},{value:"Math.pow",id:"mathpow",level:3},{value:"Math.round &amp; Math.floor &amp; Math.ceil",id:"mathround--mathfloor--mathceil",level:3},{value:"Math.max &amp; Math.min",id:"mathmax--mathmin",level:3},{value:"Math.random",id:"mathrandom",level:3},{value:"Metodo hasOwnProperty",id:"metodo-hasownproperty",level:3},{value:"Metodo keys",id:"metodo-keys",level:3},{value:"Recorrer objetos FOR-IN",id:"recorrer-objetos-for-in",level:3},{value:"This",id:"this",level:3},{value:"Object.create",id:"objectcreate",level:3},{value:"Object.assign",id:"objectassign",level:3}],d={toc:p},c="wrapper";function m(e){let{components:o,...r}=e;return(0,n.yg)(c,(0,a.A)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"JavaScript tiene una serie de objetos globales integrados que nos son de utilidad.Uno de estos objetos es Math, que tiene varios m\xe9todos propios."),(0,n.yg)("h2",{id:"objeto-math"},"Objeto Math"),(0,n.yg)("h3",{id:"mathpow"},"Math.pow"),(0,n.yg)("p",null,"Este m\xe9todo nos permite potenciar un n\xfamero. Por ejemplo, 2 elevado al cubo, ser\xeda igual a multiplicar 2 x 2 x 2. Es decir, 8."),(0,n.yg)("p",null,"El primer n\xfamero es la base, y el segundo ser\xe1 la potencia."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"Math.pow(2,3);\n//8\n")),(0,n.yg)("h3",{id:"mathround--mathfloor--mathceil"},"Math.round & Math.floor & Math.ceil"),(0,n.yg)("p",null,"A veces necesitamos redondear un n\xfamero decimal, ya que muchas veces las operaciones matem\xe1ticas pueden resultar en n\xfameros con coma. Para esto, JavaScript nos ofrece tres m\xe9todos"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"* Math.round *")," redondear\xe1 el n\xfamero decimal al entero m\xe1s pr\xf3ximo. Es decir que, si tenemos 0.49, el resultado ser\xe1 0. En cambio, si tenemos 0.50, el resultado ser\xe1 1."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"** Math.floor **")," redondear\xe1 el n\xfamero decimal al entero de menor valor. Por ejemplo, si tenemos el n\xfamero 5.93, el resultado ser\xe1 5."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"** Math.ceil **")," este m\xe9todo, al contrario que el anterior, redondear\xe1 un n\xfamero al siguiente entero. Por ejemplo, si tenemos 3.27 el resultado ser\xe1 4."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"Math.round(0.49)\n//0\n\nMath.round(0.50)\n//1\n\nMath.floor(5.93)\n//5\n\nMath.ceil(3.27)\n//4\n")),(0,n.yg)("h3",{id:"mathmax--mathmin"},"Math.max & Math.min"),(0,n.yg)("p",null,"Estos dos m\xe9todos nos permitir\xe1n conocer el valor m\xe1ximo o m\xednimo de un conjunto de n\xfameros. Por ejemplo, si tenemos los n\xfameros 1, 2, 3, 4 y 5, el m\xe1ximo ser\xe1 el 5 y el m\xednimo el n\xfamero 1."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"Math.max(1, 2, 3, 4, 5);\n// 5\n\nMath.min(1, 2, 3, 4, 5);\n// 1\n")),(0,n.yg)("h3",{id:"mathrandom"},"Math.random"),(0,n.yg)("p",null,"\u2013\nEste \xfaltimo m\xe9todo nos permitir\xe1 generar un n\xfamero aleatorio. Es importante tener en cuenta que el n\xfamero que se generar\xe1 es decimal, y puede ser cualquiera entre el 0 y el 1."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"Math.random();\n//0.9745698546\n")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"En caso que quisieramos que nos de un numero random en un rango mayor, deberiamos multiplicarlo por un numero\nej: ",(0,n.yg)("inlineCode",{parentName:"p"},"Math.random()*1000;"))),(0,n.yg)("h3",{id:"metodo-hasownproperty"},"Metodo hasOwnProperty"),(0,n.yg)("p",null,"Este metodo nos sirve para saber si un objeto tiene una propiedad especifica. Responde con un booleano, true o false."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// HAS OWN PROPERTY\nvar libro = { autor: 'Borges', genero: 'Policial', a\xf1o: 1990 };\nvar tienePropiedad = libro.hasOwnProperty('nombre');\n\nconsole.log(tienePropiedad);\n")),(0,n.yg)("h3",{id:"metodo-keys"},"Metodo keys"),(0,n.yg)("p",null,"Devuelve un arreglo con todas las propiedades de un objeto"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// KEYS\nvar libro = { autor: 'Borges', genero: 'Policial', a\xf1o: 1990 };\nvar todasLasPropiedades = Object.keys(libro);\n\nconsole.log(todasLasPropiedades);\n")),(0,n.yg)("h3",{id:"recorrer-objetos-for-in"},"Recorrer objetos FOR-IN"),(0,n.yg)("p",null,"De la misma manera que pod\xedamos recorrer los elementos de un arreglo, podemos recorrer las propiedades de un objeto junto con sus valores."),(0,n.yg)("p",null,"El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. Una representa el objeto que recorremos, y la otra la propiedad en la que se est\xe1 realizando la iteraci\xf3n. Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"for (let prop in mundo) {\n   console.log('Esta es la propiedad: ', prop);\n   console.log('Este es el valor: ', mundo[prop]);\n}\n")),(0,n.yg)("h3",{id:"this"},"This"),(0,n.yg)("p",null,"Se hace referencia a un contexto. Dentro de este lenguaje de programaci\xf3n existe un objeto global llamado this. Este nos permite manipular el contexto en el que las funciones y la informaci\xf3n est\xe1 siendo ejecutada. De esta forma podremos tener un alcance m\xe1s preciso dentro de nuestro c\xf3digo."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"//THIS\nvar mascota = {\n   animal: 'Perro',\n   raza: 'Ovejero Alem\xe1n',\n   amistoso: true,\n   due\xf1o: 'Mar\xeda L\xf3pez',\n   info: () => {\n      console.log('Mi perro es un  ' + this.raza);\n   },\n};\n")),(0,n.yg)("h3",{id:"objectcreate"},"Object.create"),(0,n.yg)("p",null,"El metodo create de los objetos nos permite crear un nuevo objeto a partir de un prototypre especificado "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// creamos un objeto con un objeto vacio como proto\nvar obj = Object.create({})\nconsole.log(obj) //Object {}\n\n// creamos un objeto a partir de un prototipo de Objeto\nvar obj = Object.create(Object.prototype)\n// es lo mismo que crear un objeto vacio literal\nvar obj = {}\n")),(0,n.yg)("h3",{id:"objectassign"},"Object.assign"),(0,n.yg)("p",null,"Nos permite agregar propiedades a un objeto pasado por parametro:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"var obj = {}\n\n// No es necesario guardar el resultado porque los objetos se pasan por referencia\nObject.assign(obj,{nombre:'EMi', apellido: 'Chequer'})\n\nobj.nombre //Emi\n")))}m.isMDXComponent=!0}}]);