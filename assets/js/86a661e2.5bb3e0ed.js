"use strict";(self.webpackChunkgorm=self.webpackChunkgorm||[]).push([[8050],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?t.createElement(b,s(s({ref:n},d),{},{components:r})):t.createElement(b,s({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7159:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={title:"DBResolver",layout:"page"},i=void 0,c={unversionedId:"dbresolver",id:"dbresolver",title:"DBResolver",description:"DBResolver \u4e3a GORM \u63d0\u4f9b\u4e86\u591a\u4e2a\u6570\u636e\u5e93\u652f\u6301\uff0c\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a",source:"@site/docs/dbresolver.md",sourceDirName:".",slug:"/dbresolver",permalink:"/gorm/docs/dbresolver",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dbresolver.md",tags:[],version:"current",frontMatter:{title:"DBResolver",layout:"page"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",permalink:"/gorm/docs/data_types"},next:{title:"\u5220\u9664",permalink:"/gorm/docs/delete"}},d={},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"Automatic connection switching",id:"automatic-connection-switching",level:2},{value:"Read/Write Splitting",id:"readwrite-splitting",level:2},{value:"Manual connection switching",id:"manual-connection-switching",level:2},{value:"Transaction",id:"transaction",level:2},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",level:2},{value:"\u8fde\u63a5\u6c60",id:"\u8fde\u63a5\u6c60",level:2}],p={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DBResolver \u4e3a GORM \u63d0\u4f9b\u4e86\u591a\u4e2a\u6570\u636e\u5e93\u652f\u6301\uff0c\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u4e2a sources\u3001replicas"),(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u5199\u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u5de5\u4f5c\u8868\u3001struct \u81ea\u52a8\u5207\u6362\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"\u624b\u52a8\u5207\u6362\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"Sources/Replicas \u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u539f\u751f SQL"),(0,a.kt)("li",{parentName:"ul"},"Transaction")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/go-gorm/dbresolver"},"https://github.com/go-gorm/dbresolver")),(0,a.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "gorm.io/gorm"\n  "gorm.io/plugin/dbresolver"\n  "gorm.io/driver/mysql"\n)\n\ndb, err := gorm.Open(mysql.Open("db1_dsn"), &gorm.Config{})\n\ndb.Use(dbresolver.Register(dbresolver.Config{\n  // `db2` \u4f5c\u4e3a sources\uff0c`db3`\u3001`db4` \u4f5c\u4e3a replicas\n  Sources:  []gorm.Dialector{mysql.Open("db2_dsn")},\n  Replicas: []gorm.Dialector{mysql.Open("db3_dsn"), mysql.Open("db4_dsn")},\n  // sources/replicas \u8d1f\u8f7d\u5747\u8861\u7b56\u7565\n  Policy: dbresolver.RandomPolicy{},\n}).Register(dbresolver.Config{\n  // `db1` \u4f5c\u4e3a sources\uff08DB \u7684\u9ed8\u8ba4\u8fde\u63a5\uff09\uff0c\u5bf9\u4e8e `User`\u3001`Address` \u4f7f\u7528 `db5` \u4f5c\u4e3a replicas\n  Replicas: []gorm.Dialector{mysql.Open("db5_dsn")},\n}, &User{}, &Address{}).Register(dbresolver.Config{\n  // `db6`\u3001`db7` \u4f5c\u4e3a sources\uff0c\u5bf9\u4e8e `orders`\u3001`Product` \u4f7f\u7528 `db8` \u4f5c\u4e3a replicas\n  Sources:  []gorm.Dialector{mysql.Open("db6_dsn"), mysql.Open("db7_dsn")},\n  Replicas: []gorm.Dialector{mysql.Open("db8_dsn")},\n}, "orders", &Product{}, "secondary"))\n')),(0,a.kt)("h2",{id:"automatic-connection-switching"},"Automatic connection switching"),(0,a.kt)("p",null,"DBResolver will automatically switch connection based on the working table/struct"),(0,a.kt)("p",null,"For RAW SQL, DBResolver will extract the table name from the SQL to match the resolver, and will use ",(0,a.kt)("inlineCode",{parentName:"p"},"sources")," unless the SQL begins with ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," (excepts ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT... FOR UPDATE"),"), for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// `User` Resolver \u793a\u4f8b\ndb.Table("users").Rows() // replicas `db5`\ndb.Model(&User{}).Find(&AdvancedUser{}) // replicas `db5`\ndb.Exec("update users set name = ?", "jinzhu") // sources `db1`\ndb.Raw("select name from users").Row().Scan(&name) // replicas `db5`\ndb.Create(&user) // sources `db1`\ndb.Delete(&User{}, "name = ?", "jinzhu") // sources `db1`\ndb.Table("users").Update("name", "jinzhu") // sources `db1`\n\n// Global Resolver \u793a\u4f8b\ndb.Find(&Pet{}) // replicas `db3`/`db4`\ndb.Save(&Pet{}) // sources `db2`\n\n// Orders Resolver \u793a\u4f8b\ndb.Find(&Order{}) // replicas `db8`\ndb.Table("orders").Find(&Report{}) // replicas `db8`\n')),(0,a.kt)("h2",{id:"readwrite-splitting"},"Read/Write Splitting"),(0,a.kt)("p",null,"Read/Write splitting with DBResolver based on the current used ",(0,a.kt)("a",{parentName:"p",href:"https://gorm.io/docs/write_plugins.html"},"GORM callbacks"),"."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Row")," callback, will use ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas")," unless ",(0,a.kt)("inlineCode",{parentName:"p"},"Write")," mode specified For ",(0,a.kt)("inlineCode",{parentName:"p"},"Raw")," callback, statements are considered read-only and will use ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas")," if the SQL starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")),(0,a.kt)("h2",{id:"manual-connection-switching"},"Manual connection switching"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u4f7f\u7528 Write \u6a21\u5f0f\uff1a\u4ece sources db `db1` \u8bfb\u53d6 user\ndb.Clauses(dbresolver.Write).First(&user)\n\n// \u6307\u5b9a Resolver\uff1a\u4ece `secondary` \u7684 replicas db `db8` \u8bfb\u53d6 user\ndb.Clauses(dbresolver.Use("secondary")).First(&user)\n\n// \u6307\u5b9a Resolver \u548c Write \u6a21\u5f0f\uff1a\u4ece `secondary` \u7684 sources db `db6` \u6216 `db7` \u8bfb\u53d6 user\ndb.Clauses(dbresolver.Use("secondary"), dbresolver.Write).First(&user)\n')),(0,a.kt)("h2",{id:"transaction"},"Transaction"),(0,a.kt)("p",null,"When using transaction, DBResolver will keep using the transaction and won't switch to sources/replicas based on configuration"),(0,a.kt)("p",null,"But you can specifies which DB to use before starting a transaction, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Start transaction based on default replicas db\ntx := DB.Clauses(dbresolver.Read).Begin()\n\n// Start transaction based on default sources db\ntx := DB.Clauses(dbresolver.Write).Begin()\n\n// Start transaction based on `secondary`\'s sources\ntx := DB.Clauses(dbresolver.Use("secondary"), dbresolver.Write).Begin()\n')),(0,a.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("p",null,"GORM supports load balancing sources/replicas based on policy, the policy should be a struct implements following interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Policy interface {\n    Resolve([]gorm.ConnPool) gorm.ConnPool\n}\n")),(0,a.kt)("p",null,"Currently only the ",(0,a.kt)("inlineCode",{parentName:"p"},"RandomPolicy")," implemented and it is the default option if no other policy specified."),(0,a.kt)("h2",{id:"\u8fde\u63a5\u6c60"},"\u8fde\u63a5\u6c60"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"db.Use(\n  dbresolver.Register(dbresolver.Config{ /* xxx */ }).\n  SetConnMaxIdleTime(time.Hour).\n  SetConnMaxLifetime(24 * time.Hour).\n  SetMaxIdleConns(100).\n  SetMaxOpenConns(200)\n)\n")))}m.isMDXComponent=!0}}]);