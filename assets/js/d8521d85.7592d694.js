"use strict";(self.webpackChunkgorm=self.webpackChunkgorm||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],u={title:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",layout:"page"},i=void 0,p={unversionedId:"data_types",id:"data_types",title:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",description:"GORM \u63d0\u4f9b\u4e86\u5c11\u91cf\u63a5\u53e3\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u4e3a GORM \u5b9a\u4e49\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u91cc\u4ee5 json \u4e3a\u4f8b",source:"@site/docs/data_types.md",sourceDirName:".",slug:"/data_types",permalink:"/gorm/docs/data_types",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data_types.md",tags:[],version:"current",frontMatter:{title:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",layout:"page"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa",permalink:"/gorm/docs/create"},next:{title:"DBResolver",permalink:"/gorm/docs/dbresolver"}},s={},c=[{value:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",level:2},{value:"Scanner / Valuer",id:"scanner--valuer",level:3},{value:"GormDataTypeInterface",id:"gormdatatypeinterface",level:3},{value:'<span id="gorm_valuer_interface">GormValuerInterface</span>',id:"gormvaluerinterface",level:3},{value:"\u4f7f\u7528 SQL \u8868\u8fbe\u5f0f\u8fdb\u884c Create/Update",id:"\u4f7f\u7528-sql-\u8868\u8fbe\u5f0f\u8fdb\u884c-createupdate",level:4},{value:"\u57fa\u4e8e Context \u7684\u503c",id:"\u57fa\u4e8e-context-\u7684\u503c",level:4},{value:"\u6761\u4ef6\u8868\u8fbe\u5f0f",id:"\u6761\u4ef6\u8868\u8fbe\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u96c6\u5408",id:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u96c6\u5408",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GORM \u63d0\u4f9b\u4e86\u5c11\u91cf\u63a5\u53e3\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u4e3a GORM \u5b9a\u4e49\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u91cc\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-gorm/datatypes/blob/master/json.go"},"json")," \u4e3a\u4f8b"),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b"),(0,o.kt)("h3",{id:"scanner--valuer"},"Scanner / Valuer"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\u5fc5\u987b\u5b9e\u73b0 ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/database/sql#Scanner"},"Scanner")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/database/sql/driver#Valuer"},"Valuer")," \u63a5\u53e3\uff0c\u4ee5\u4fbf\u8ba9 GORM \u77e5\u9053\u5982\u4f55\u5c06\u8be5\u7c7b\u578b\u63a5\u6536\u3001\u4fdd\u5b58\u5230\u6570\u636e\u5e93"),(0,o.kt)("p",null,"\u4f8b\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type JSON json.RawMessage\n\n// \u5b9e\u73b0 sql.Scanner \u63a5\u53e3\uff0cScan \u5c06 value \u626b\u63cf\u81f3 Jsonb\nfunc (j *JSON) Scan(value interface{}) error {\n  bytes, ok := value.([]byte)\n  if !ok {\n    return errors.New(fmt.Sprint("Failed to unmarshal JSONB value:", value))\n  }\n\n  result := json.RawMessage{}\n  err := json.Unmarshal(bytes, &result)\n  *j = JSON(result)\n  return err\n}\n\n// \u5b9e\u73b0 driver.Valuer \u63a5\u53e3\uff0cValue \u8fd4\u56de json value\nfunc (j JSON) Value() (driver.Value, error) {\n  if len(j) == 0 {\n    return nil, nil\n  }\n  return json.RawMessage(j).MarshalJSON()\n}\n')),(0,o.kt)("p",null,"\u6709\u8bb8\u591a\u7b2c\u4e09\u65b9\u5305\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Scanner"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Valuer")," \u63a5\u53e3\uff0c\u53ef\u4e0e GORM \u4e00\u8d77\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/google/uuid"\n  "github.com/lib/pq"\n)\n\ntype Post struct {\n  ID     uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()"`\n  Title  string\n  Tags   pq.StringArray `gorm:"type:text[]"`\n}\n')),(0,o.kt)("h3",{id:"gormdatatypeinterface"},"GormDataTypeInterface"),(0,o.kt)("p",null,"GORM \u4f1a\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," ",(0,o.kt)("a",{parentName:"p",href:"models.html#tags"},"\u6807\u7b7e")," \u4e2d\u8bfb\u53d6\u5b57\u6bb5\u7684\u6570\u636e\u5e93\u7c7b\u578b\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5219\u4f1a\u68c0\u67e5\u8be5\u7ed3\u6784\u4f53\u662f\u5426\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"GormDBDataTypeInterface")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"GormDataTypeInterface")," \u63a5\u53e3\uff0c\u7136\u540e\u4f7f\u7528\u63a5\u53e3\u8fd4\u56de\u503c\u4f5c\u4e3a\u6570\u636e\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type GormDataTypeInterface interface {\n  GormDataType() string\n}\n\ntype GormDBDataTypeInterface interface {\n  GormDBDataType(*gorm.DB, *schema.Field) string\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GormDataType")," \u7684\u7ed3\u679c\u7528\u4e8e\u751f\u6210\u901a\u7528\u6570\u636e\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.Field")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"DataType")," \u5b57\u6bb5\u5f97\u5230\u3002\u8fd9\u5728 ",(0,o.kt)("a",{parentName:"p",href:"write_plugins.html"},"\u7f16\u5199\u63d2\u4ef6")," \u6216\u8005 ",(0,o.kt)("a",{parentName:"p",href:"hooks.html"},"hook")," \u65f6\u53ef\u80fd\u4f1a\u6709\u7528\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (JSON) GormDataType() string {\n  return "json"\n}\n\ntype User struct {\n  Attrs JSON\n}\n\nfunc (user User) BeforeCreate(tx *gorm.DB) {\n  field := tx.Statement.Schema.LookUpField("Attrs")\n  if field.DataType == "json" {\n    // \u505a\u70b9\u4ec0\u4e48...\n  }\n}\n')),(0,o.kt)("p",null,"\u5728\u8fc1\u79fb\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"GormDBDataType")," \u901a\u5e38\u4f1a\u4e3a\u5f53\u524d\u9a71\u52a8\u8fd4\u56de\u6070\u5f53\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (JSON) GormDBDataType(db *gorm.DB, field *schema.Field) string {\n  // \u4f7f\u7528 field.Tag\u3001field.TagSettings \u83b7\u53d6\u5b57\u6bb5\u7684 tag\n  // \u67e5\u770b https://github.com/go-gorm/gorm/blob/master/schema/field.go \u83b7\u53d6\u5168\u90e8\u7684\u9009\u9879\n\n  // \u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u5e93\u9a71\u52a8\u8fd4\u56de\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\n  switch db.Dialector.Name() {\n  case "mysql", "sqlite":\n    return "JSON"\n  case "postgres":\n    return "JSONB"\n  }\n  return ""\n}\n')),(0,o.kt)("p",null,"\u5982\u679c struct \u6ca1\u6709\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"GormDBDataTypeInterface")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"GormDataTypeInterface")," \u63a5\u53e3\uff0cGORM \u4f1a\u6839\u636e struct \u7b2c\u4e00\u4e2a\u5b57\u6bb5\u63a8\u6d4b\u5176\u6570\u636e\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a\u4f1a\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"NullString")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type NullString struct {\n  String string // \u4f7f\u7528\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u7684\u6570\u636e\u7c7b\u578b\n  Valid  bool\n}\n\ntype User struct {\n  Name NullString // \u6570\u636e\u7c7b\u578b\u4f1a\u662f string\n}\n")),(0,o.kt)("h3",{id:"gormvaluerinterface"},(0,o.kt)("span",{id:"gorm_valuer_interface"},"GormValuerInterface")),(0,o.kt)("p",null,"GORM \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"GormValuerInterface")," \u63a5\u53e3\uff0c\u652f\u6301\u4f7f\u7528 SQL \u8868\u8fbe\u5f0f\u6216\u57fa\u4e8e context \u7684\u503c\u8fdb\u884c create/update\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// GORM Valuer interface\ntype GormValuerInterface interface {\n  GormValue(ctx context.Context, db *gorm.DB) clause.Expr\n}\n")),(0,o.kt)("h4",{id:"\u4f7f\u7528-sql-\u8868\u8fbe\u5f0f\u8fdb\u884c-createupdate"},"\u4f7f\u7528 SQL \u8868\u8fbe\u5f0f\u8fdb\u884c Create/Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Location struct {\n    X, Y int\n}\n\nfunc (loc Location) GormDataType() string {\n  return "geometry"\n}\n\nfunc (loc Location) GormValue(ctx context.Context, db *gorm.DB) clause.Expr {\n  return clause.Expr{\n    SQL:  "ST_PointFromText(?)",\n    Vars: []interface{}{fmt.Sprintf("POINT(%d %d)", loc.X, loc.Y)},\n  }\n}\n\n// Scan \u65b9\u6cd5\u5b9e\u73b0\u4e86 sql.Scanner \u63a5\u53e3\nfunc (loc *Location) Scan(v interface{}) error {\n  // Scan a value into struct from database driver\n}\n\ntype User struct {\n  ID       int\n  Name     string\n  Location Location\n}\n\ndb.Create(&User{\n  Name:     "jinzhu",\n  Location: Location{X: 100, Y: 100},\n})\n// INSERT INTO `users` (`name`,`point`) VALUES ("jinzhu",ST_PointFromText("POINT(100 100)"))\n\ndb.Model(&User{ID: 1}).Updates(User{\n  Name:  "jinzhu",\n  Location: Location{X: 100, Y: 100},\n})\n// UPDATE `user_with_points` SET `name`="jinzhu",`location`=ST_PointFromText("POINT(100 100)") WHERE `id` = 1\n')),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e SQL \u8868\u8fbe\u5f0f\u8fdb\u884c create/update\uff0c\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"create.html#create_from_sql_expr"},"Create From SQL Expr")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"update.html#update_from_sql_expr"},"Update with SQL Expression")," \u83b7\u53d6\u8be6\u60c5"),(0,o.kt)("h4",{id:"\u57fa\u4e8e-context-\u7684\u503c"},"\u57fa\u4e8e Context \u7684\u503c"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u521b\u5efa\u6216\u66f4\u65b0\u4e00\u4e2a\u4f9d\u8d56\u4e8e\u5f53\u524d context \u7684\u503c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"GormValuerInterface")," \u63a5\u53e3\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type EncryptedString struct {\n  Value string\n}\n\nfunc (es EncryptedString) GormValue(ctx context.Context, db *gorm.DB) (expr clause.Expr) {\n  if encryptionKey, ok := ctx.Value("TenantEncryptionKey").(string); ok {\n    return clause.Expr{SQL: "?", Vars: []interface{}{Encrypt(es.Value, encryptionKey)}}\n  } else {\n    db.AddError(errors.New("invalid encryption key"))\n  }\n\n  return\n}\n')),(0,o.kt)("h3",{id:"\u6761\u4ef6\u8868\u8fbe\u5f0f"},"\u6761\u4ef6\u8868\u8fbe\u5f0f"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6784\u5efa\u4e00\u4e9b\u67e5\u8be2 helper\uff0c\u4f60\u53ef\u4ee5\u8ba9 struct \u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"clause.Expression")," \u63a5\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Expression interface {\n    Build(builder Builder)\n}\n")),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-gorm/datatypes/blob/master/json.go"},"JSON")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"sql_builder.html#clauses"},"SQL Builder")," \u83b7\u53d6\u8be6\u60c5\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// \u6839\u636e Clause Expression \u751f\u6210 SQL\ndb.Find(&user, datatypes.JSONQuery("attributes").HasKey("role"))\ndb.Find(&user, datatypes.JSONQuery("attributes").HasKey("orgs", "orga"))\n\n// MySQL\n// SELECT * FROM `users` WHERE JSON_EXTRACT(`attributes`, \'$.role\') IS NOT NULL\n// SELECT * FROM `users` WHERE JSON_EXTRACT(`attributes`, \'$.orgs.orga\') IS NOT NULL\n\n// PostgreSQL\n// SELECT * FROM "user" WHERE "attributes"::jsonb ? \'role\'\n// SELECT * FROM "user" WHERE "attributes"::jsonb -> \'orgs\' ? \'orga\'\n\ndb.Find(&user, datatypes.JSONQuery("attributes").Equals("jinzhu", "name"))\n// MySQL\n// SELECT * FROM `user` WHERE JSON_EXTRACT(`attributes`, \'$.name\') = "jinzhu"\n\n// PostgreSQL\n// SELECT * FROM "user" WHERE json_extract_path_text("attributes"::json,\'name\') = \'jinzhu\'\n')),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u96c6\u5408"},"\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u96c6\u5408"),(0,o.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a Github \u4ed3\u5e93\uff0c\u7528\u4e8e\u6536\u96c6\u5404\u79cd\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-gorm/datatypes"},"https://github.com/go-gorm/datatypes"),"\uff0c\u975e\u5e38\u6b22\u8fce\u540c\u5b66\u4eec\u7684 pull request ;)"))}d.isMDXComponent=!0}}]);