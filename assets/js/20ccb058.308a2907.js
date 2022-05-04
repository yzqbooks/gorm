"use strict";(self.webpackChunkgorm=self.webpackChunkgorm||[]).push([[5578],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),d=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return r?t.createElement(g,s(s({ref:n},u),{},{components:r})):t.createElement(g,s({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9961:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],l={title:"\u9884\u52a0\u8f7d",layout:"page"},i=void 0,d={unversionedId:"preload",id:"preload",title:"\u9884\u52a0\u8f7d",description:"\u9884\u52a0\u8f7d",source:"@site/docs/preload.md",sourceDirName:".",slug:"/preload",permalink:"/gorm/docs/preload",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/preload.md",tags:[],version:"current",frontMatter:{title:"\u9884\u52a0\u8f7d",layout:"page"},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd",permalink:"/gorm/docs/performance"},next:{title:"Prometheus",permalink:"/gorm/docs/prometheus"}},u={},p=[{value:"\u9884\u52a0\u8f7d",id:"\u9884\u52a0\u8f7d",level:2},{value:"Joins \u9884\u52a0\u8f7d",id:"joins-\u9884\u52a0\u8f7d",level:2},{value:"\u9884\u52a0\u8f7d\u5168\u90e8",id:"\u9884\u52a0\u8f7d\u5168\u90e8",level:2},{value:"\u5e26\u6761\u4ef6\u7684\u9884\u52a0\u8f7d",id:"\u5e26\u6761\u4ef6\u7684\u9884\u52a0\u8f7d",level:2},{value:"\u81ea\u5b9a\u4e49\u9884\u52a0\u8f7d SQL",id:"\u81ea\u5b9a\u4e49\u9884\u52a0\u8f7d-sql",level:2},{value:'<span id="nested_preloading">\u5d4c\u5957\u9884\u52a0\u8f7d</span>',id:"\u5d4c\u5957\u9884\u52a0\u8f7d",level:2}],c={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9884\u52a0\u8f7d"},"\u9884\u52a0\u8f7d"),(0,o.kt)("p",null,"GORM \u5141\u8bb8\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Preload")," \u7684\u5176\u5b83 SQL \u4e2d\u76f4\u63a5\u52a0\u8f7d\u5173\u7cfb\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type User struct {\n  gorm.Model\n  Username string\n  Orders   []Order\n}\n\ntype Order struct {\n  gorm.Model\n  UserID uint\n  Price  float64\n}\n\n// \u67e5\u627e user \u65f6\u9884\u52a0\u8f7d\u76f8\u5173 Order\ndb.Preload("Orders").Find(&users)\n// SELECT * FROM users;\n// SELECT * FROM orders WHERE user_id IN (1,2,3,4);\n\ndb.Preload("Orders").Preload("Profile").Preload("Role").Find(&users)\n// SELECT * FROM users;\n// SELECT * FROM orders WHERE user_id IN (1,2,3,4); // has many\n// SELECT * FROM profiles WHERE user_id IN (1,2,3,4); // has one\n// SELECT * FROM roles WHERE id IN (4,5,6); // belongs to\n')),(0,o.kt)("h2",{id:"joins-\u9884\u52a0\u8f7d"},"Joins \u9884\u52a0\u8f7d"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Preload")," \u5728\u4e00\u4e2a\u5355\u72ec\u67e5\u8be2\u4e2d\u52a0\u8f7d\u5173\u8054\u6570\u636e\u3002\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"Join Preload")," \u4f1a\u4f7f\u7528 inner join \u52a0\u8f7d\u5173\u8054\u6570\u636e\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'db.Joins("Company").Joins("Manager").Joins("Account").First(&user, 1)\ndb.Joins("Company").Joins("Manager").Joins("Account").First(&user, "users.name = ?", "jinzhu")\ndb.Joins("Company").Joins("Manager").Joins("Account").Find(&users, "users.id IN ?", []int{1,2,3,4,5})\n')),(0,o.kt)("p",null,"\u5e26\u6761\u4ef6\u7684 Join"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'db.Joins("Company", DB.Where(&Company{Alive: true})).Find(&users)\n// SELECT `users`.`id`,`users`.`name`,`users`.`age`,`Company`.`id` AS `Company__id`,`Company`.`name` AS `Company__name` FROM `users` LEFT JOIN `companies` AS `Company` ON `users`.`company_id` = `Company`.`id` AND `Company`.`alive` = true;\n')),(0,o.kt)("p",null,"{% note warn %}\n",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Join Preload")," \u9002\u7528\u4e8e\u4e00\u5bf9\u4e00\u7684\u5173\u7cfb\uff0c\u4f8b\u5982\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"has one"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"belongs to"),"\n{% endnote %}"),(0,o.kt)("h2",{id:"\u9884\u52a0\u8f7d\u5168\u90e8"},"\u9884\u52a0\u8f7d\u5168\u90e8"),(0,o.kt)("p",null,"\u4e0e\u521b\u5efa\u3001\u66f4\u65b0\u65f6\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," \u7c7b\u4f3c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"clause.Associations")," \u4e5f\u53ef\u4ee5\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Preload")," \u4e00\u8d77\u4f7f\u7528\uff0c\u5b83\u53ef\u4ee5\u7528\u6765 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u9884\u52a0\u8f7d")," \u5168\u90e8\u5173\u8054\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type User struct {\n  gorm.Model\n  Name       string\n  CompanyID  uint\n  Company    Company\n  Role       Role\n  Orders     []Order\n}\n\ndb.Preload(clause.Associations).Find(&users)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clause.Associations")," \u4e0d\u4f1a\u9884\u52a0\u8f7d\u5d4c\u5957\u7684\u5173\u8054\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"#nested_preloading"},"\u5d4c\u5957\u9884\u52a0\u8f7d")," \u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'db.Preload("Orders.OrderItems.Product").Preload(clause.Associations).Find(&users)\n')),(0,o.kt)("h2",{id:"\u5e26\u6761\u4ef6\u7684\u9884\u52a0\u8f7d"},"\u5e26\u6761\u4ef6\u7684\u9884\u52a0\u8f7d"),(0,o.kt)("p",null,"GORM \u5141\u8bb8\u5e26\u6761\u4ef6\u7684 Preload \u5173\u8054\uff0c\u7c7b\u4f3c\u4e8e",(0,o.kt)("a",{parentName:"p",href:"query.html#inline_conditions"},"\u5185\u8054\u6761\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// \u5e26\u6761\u4ef6\u7684\u9884\u52a0\u8f7d Order\ndb.Preload("Orders", "state NOT IN (?)", "cancelled").Find(&users)\n// SELECT * FROM users;\n// SELECT * FROM orders WHERE user_id IN (1,2,3,4) AND state NOT IN (\'cancelled\');\n\ndb.Where("state = ?", "active").Preload("Orders", "state NOT IN (?)", "cancelled").Find(&users)\n// SELECT * FROM users WHERE state = \'active\';\n// SELECT * FROM orders WHERE user_id IN (1,2) AND state NOT IN (\'cancelled\');\n')),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9884\u52a0\u8f7d-sql"},"\u81ea\u5b9a\u4e49\u9884\u52a0\u8f7d SQL"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"func(db *gorm.DB) *gorm.DB")," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u9884\u52a0\u8f7d SQL\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'db.Preload("Orders", func(db *gorm.DB) *gorm.DB {\n  return db.Order("orders.amount DESC")\n}).Find(&users)\n// SELECT * FROM users;\n// SELECT * FROM orders WHERE user_id IN (1,2,3,4) order by orders.amount DESC;\n')),(0,o.kt)("h2",{id:"\u5d4c\u5957\u9884\u52a0\u8f7d"},(0,o.kt)("span",{id:"nested_preloading"},"\u5d4c\u5957\u9884\u52a0\u8f7d")),(0,o.kt)("p",null,"GORM \u652f\u6301\u5d4c\u5957\u9884\u52a0\u8f7d\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'db.Preload("Orders.OrderItems.Product").Preload("CreditCard").Find(&users)\n\n// \u81ea\u5b9a\u4e49\u9884\u52a0\u8f7d `Orders` \u7684\u6761\u4ef6\n// \u8fd9\u6837\uff0cGORM \u5c31\u4e0d\u4f1a\u52a0\u8f7d\u4e0d\u5339\u914d\u7684 order \u8bb0\u5f55\ndb.Preload("Orders", "state = ?", "paid").Preload("Orders.OrderItems").Find(&users)\n')))}m.isMDXComponent=!0}}]);