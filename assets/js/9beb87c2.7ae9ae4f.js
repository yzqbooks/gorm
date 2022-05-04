"use strict";(self.webpackChunkgorm=self.webpackChunkgorm||[]).push([[80],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"\u66f4\u65b0\u65e5\u5fd7",layout:"page"},u=void 0,p={unversionedId:"changelog",id:"changelog",title:"\u66f4\u65b0\u65e5\u5fd7",description:"v2.0 - 2020.08",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/gorm/docs/changelog",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/changelog.md",tags:[],version:"current",frontMatter:{title:"\u66f4\u65b0\u65e5\u5fd7",layout:"page"},sidebar:"tutorialSidebar",previous:{title:"Belongs To",permalink:"/gorm/docs/belongs_to"},next:{title:"\u590d\u5408\u4e3b\u952e",permalink:"/gorm/docs/composite_primary_key"}},c={},m=[{value:"v2.0 - 2020.08",id:"v20---202008",level:2},{value:"v1.0 - 2016.04",id:"v10---201604",level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"v20---202008"},"v2.0 - 2020.08"),(0,o.kt)("p",null,"GORM 2.0 \u662f\u57fa\u4e8e\u7528\u6237\u8fc7\u53bb\u51e0\u5e74\u4e2d\u7684\u53cd\u9988\u8fdb\u884c\u601d\u8003\u540e\u7684\u91cd\u5199\uff0c\u5728\u8be5\u53d1\u884c\u7248\u672c\u4e2d\u5c06\u4f1a\u5f15\u5165\u4e0d\u517c\u5bb9 API \u6539\u52a8\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6027\u80fd\u4f18\u5316"),(0,o.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6a21\u5757\u5316"),(0,o.kt)("li",{parentName:"ul"},"Context\uff0c\u6279\u91cf\u63d2\u5165\uff0c\u9884\u7f16\u8bd1\u6a21\u5f0f\uff0cDryRun \u6a21\u5f0f\uff0cJoin \u9884\u52a0\u8f7d\uff0cFind To Map\uff0cCreate From Map\uff0cFindInBatches \u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"SavePoint/RollbackTo/Nested Transaction \u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"\u547d\u540d\u53c2\u6570\u3001Group \u6761\u4ef6\u3001Upsert\u3001\u9501\u5b9a\u3001\u4f18\u5316/\u7d22\u5f15/\u8bc4\u8bba\u63d0\u793a\u652f\u6301\u3001SubQuery \u6539\u8fdb"),(0,o.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u7684\u81ea\u5f15\u7528\u652f\u6301\uff0c\u8fde\u63a5\u8868\u6539\u8fdb\uff0c\u6279\u91cf\u6570\u636e\u7684\u5173\u8054\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u63d2\u5165\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u53ef\u652f\u6301\u591a\u4e2a\u5b57\u6bb5\uff0c\u52a0\u5165\u4e86\u5bf9 unix (nano) second \u7684\u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7ea7\u6743\u9650\u63a7\u5236\uff1a\u53ea\u8bfb\u3001\u53ea\u5199\u3001\u53ea\u521b\u5efa\u3001\u53ea\u66f4\u65b0\u3001\u5ffd\u7565"),(0,o.kt)("li",{parentName:"ul"},"\u5168\u65b0\u7684\u63d2\u4ef6\u7cfb\u7edf\uff1a\u591a\u6570\u636e\u5e93\uff0c\u7531 Database Resolver \u63d0\u4f9b\u7684\u8bfb\u5199\u5206\u79bb\u652f\u6301\uff0cPrometheus \u96c6\u6210\uff0c\u4ee5\u53ca\u66f4\u591a..."),(0,o.kt)("li",{parentName:"ul"},"\u5168\u65b0\u7684 Hook API\uff1a\u5e26\u63d2\u4ef6\u7684\u7edf\u4e00\u63a5\u53e3"),(0,o.kt)("li",{parentName:"ul"},"\u5168\u65b0\u7684 Migrator\uff1a\u5141\u8bb8\u4e3a\u5173\u7cfb\u521b\u5efa\u6570\u636e\u5e93\u5916\u952e\uff0c\u7ea6\u675f\u3001\u68c0\u67e5\u5176\u652f\u6301\uff0c\u589e\u5f3a\u7d22\u5f15\u652f\u6301"),(0,o.kt)("li",{parentName:"ul"},"\u5168\u65b0\u7684 Logger\uff1acontext \u652f\u6301\u3001\u63d0\u9ad8\u53ef\u6269\u5c55\u6027"),(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u547d\u540d\u7b56\u7565\uff08\u8868\u540d\u3001\u5b57\u6bb5\u540d\u3001\u8fde\u63a5\u8868\u540d\u3001\u5916\u952e\u3001\u68c0\u67e5\u5668\u3001\u7d22\u5f15\u540d\u79f0\u89c4\u5219\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u6570\u636e\u7c7b\u578b\u5b9a\u4e49\u652f\u6301\uff08\u4f8b\u5982 JSON\uff09")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"v2_release_note.html"},"GORM 2.0 Release Note")),(0,o.kt)("h2",{id:"v10---201604"},"v1.0 - 2016.04"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://v1.gorm.io"},"GORM V1 \u6587\u6863")),(0,o.kt)("p",null,"\u7834\u574f\u6027\u53d8\u66f4:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gorm.Open")," \u8fd4\u56de\u7c7b\u578b\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"*gorm.DB")," \u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"gorm.DB")),(0,o.kt)("li",{parentName:"ul"},"Update \u53ea\u4f1a\u66f4\u65b0\u6709\u53d8\u66f4\u7684\u5b57\u6bb5"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u542f\u8f6f\u5220\u9664\u540e\uff0c\u9ed8\u8ba4\u53ea\u4f1a\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"li"},"deleted_at IS NULL")," \u7684\u8bb0\u5f55"),(0,o.kt)("li",{parentName:"ul"},"\u6839\u636e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/golang/lint/blob/master/lint.go#L702"},"golint")," \u5b9e\u73b0\u7684\u65b0 ToDBname \u521d\u59cb\u5316\u903b\u8f91\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"URI")," \u4f1a\u88ab\u8f6c\u6362\u4e3a\u5c0f\u5199\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP")," \u5176 db \u540d\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," \u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"h_t_t_p"),"\uff0c\u4f46\u5bf9\u4e8e\u5217\u8868\u4e2d\u4e0d\u5305\u542b\u7684\u5176\u4ed6\u521d\u59cb\u503c\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"SKU"),"\uff0c\u5176 db \u540d\u79f0\u4f9d\u7136\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"s_k_u"),"\uff0c\u800c\u6b64\u66f4\u65b0\u5df2\u5c06\u5176\u4fee\u6b63\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"sku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RecordNotFound ")," \u9519\u8bef\u5df2\u88ab\u91cd\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"ErrRecordNotFound ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mssql")," \u5df2\u88ab\u91cd\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"github.com/jinzhu/gorm/dialects/mssql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hstore")," \u5df2\u79fb\u81f3 ",(0,o.kt)("inlineCode",{parentName:"li"},"github.com/jinzhu/gorm/dialects/postgres"))))}d.isMDXComponent=!0}}]);