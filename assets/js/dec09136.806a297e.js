"use strict";(self.webpackChunkgorm=self.webpackChunkgorm||[]).push([[6588],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={title:"\u8bbe\u7f6e",layout:"page"},l=void 0,c={unversionedId:"settings",id:"settings",title:"\u8bbe\u7f6e",description:"GORM \u63d0\u4f9b\u4e86 Set, Get, InstanceSet, InstanceGet \u65b9\u6cd5\u6765\u5141\u8bb8\u7528\u6237\u4f20\u503c\u7ed9 \u52fe\u5b50 \u6216\u5176\u4ed6\u65b9\u6cd5",source:"@site/docs/settings.md",sourceDirName:".",slug:"/settings",permalink:"/gorm/docs/settings",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/settings.md",tags:[],version:"current",frontMatter:{title:"\u8bbe\u7f6e",layout:"page"},sidebar:"tutorialSidebar",previous:{title:"\u4f1a\u8bdd",permalink:"/gorm/docs/session"},next:{title:"Sharding",permalink:"/gorm/docs/sharding"}},s={},p=[{value:"Set / Get",id:"set--get",level:2},{value:"InstanceSet / InstanceGet",id:"instanceset--instanceget",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GORM \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Set"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"InstanceSet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"InstanceGet")," \u65b9\u6cd5\u6765\u5141\u8bb8\u7528\u6237\u4f20\u503c\u7ed9 ",(0,o.kt)("a",{parentName:"p",href:"hooks.html"},"\u52fe\u5b50")," \u6216\u5176\u4ed6\u65b9\u6cd5"),(0,o.kt)("p",null,"Gorm \u4e2d\u6709\u4e00\u4e9b\u7279\u6027\u7528\u5230\u4e86\u8fd9\u79cd\u673a\u5236\uff0c\u5982\u8fc1\u79fb\u8868\u683c\u65f6\u4f20\u9012\u8868\u683c\u9009\u9879\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// \u521b\u5efa\u8868\u65f6\u6dfb\u52a0\u8868\u540e\u7f00\ndb.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&User{})\n')),(0,o.kt)("h2",{id:"set--get"},"Set / Get"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"Get")," \u4f20\u9012\u8bbe\u7f6e\u5230\u94a9\u5b50\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type User struct {\n  gorm.Model\n  CreditCard CreditCard\n  // ...\n}\n\nfunc (u *User) BeforeCreate(tx *gorm.DB) error {\n  myValue, ok := tx.Get("my_value")\n  // ok => true\n  // myValue => 123\n}\n\ntype CreditCard struct {\n  gorm.Model\n  // ...\n}\n\nfunc (card *CreditCard) BeforeCreate(tx *gorm.DB) error {\n  myValue, ok := tx.Get("my_value")\n  // ok => true\n  // myValue => 123\n}\n\nmyValue := 123\ndb.Set("my_value", myValue).Create(&User{})\n')),(0,o.kt)("h2",{id:"instanceset--instanceget"},"InstanceSet / InstanceGet"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"InstanceSet")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"InstanceGet")," \u4f20\u9012\u8bbe\u7f6e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"*Statement")," \u7684\u94a9\u5b50\u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type User struct {\n  gorm.Model\n  CreditCard CreditCard\n  // ...\n}\n\nfunc (u *User) BeforeCreate(tx *gorm.DB) error {\n  myValue, ok := tx.InstanceGet("my_value")\n  // ok => true\n  // myValue => 123\n}\n\ntype CreditCard struct {\n  gorm.Model\n  // ...\n}\n\n// \u5728\u521b\u5efa\u5173\u8054\u65f6\uff0cGORM \u521b\u5efa\u4e86\u4e00\u4e2a\u65b0 `*Statement`\uff0c\u6240\u4ee5\u5b83\u4e0d\u80fd\u8bfb\u53d6\u5230\u5176\u5b83\u5b9e\u4f8b\u7684\u8bbe\u7f6e\nfunc (card *CreditCard) BeforeCreate(tx *gorm.DB) error {\n  myValue, ok := tx.InstanceGet("my_value")\n  // ok => false\n  // myValue => nil\n}\n\nmyValue := 123\ndb.InstanceSet("my_value", myValue).Create(&User{})\n')))}d.isMDXComponent=!0}}]);