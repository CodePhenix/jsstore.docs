(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{176:function(e,t,n){var r=n(179);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(27).default)("7a78b854",r,!0,{})},177:function(e,t,n){"use strict";var r=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}();t.a=r},178:function(e,t,n){"use strict";var r=n(176);n.n(r).a},179:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},180:function(e,t,n){"use strict";var r,o=n(13),i=n(177),a=n(32),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},u=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return l(t,e),t.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(n){n.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+="<a href="+n.url+">"+n.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,n=this.links.find(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")});n&&n.url.length>0&&(this.activeUrl=n.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new i.a(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle}},t.prototype.getVersion=function(){return new i.a("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),n=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+n)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction"];break;case 2:e=["promise"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.onNextBtnClick=function(){var e=this,t=this.$route.path,n=(this.relativeUrl,this.links),r=n.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")});if(r>=0){var o=n[r+1];o&&this.$router.push(this.relativeUrl+o.url)}},t=s([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],t)}(a.a),c=(n(178),n(12)),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[n("ul",[n("li",{staticClass:"search margin-bottom-10px"},[n("v-card",{staticClass:"search-wrapper"},[n("v-card-text",{staticStyle:{padding:"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),n("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),n("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return n("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),n("v-flex",{class:{"margin-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),n("v-flex",{staticClass:"md1 margin-top-50px"},[n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("Sponsor "),n("br"),e._v("Us")]),e._v(" "),n("br"),n("br"),e._v(" "),n("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("Be a backer")])],1)],1)},[],!1,null,null,null);p.options.__file="tutorial.vue";t.a=p.exports},336:function(e,t,n){"use strict";n.r(t);var r,o=n(13),i=n(180),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EDefine%20your%20Table%20Object%20and%20add%20an%20extra%20property%20'Version'%20with%20a%20value%20greater%20than%20Db%20Version%20and%20call%20api%20'isDbExit'%20supplying%20table%20details%20(check%20out%20example).%20You%20can%20get%20Db%20version%20by%20using%20below%20code.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econnection.getDbVersion(db_name).then(function(version)%20%7B%0A%20%20%20%20console.log(version)%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20above%20code%20is%20for%20only%20development%20purpose.Dont%20execute%20this%20code%20to%20increase%20Db%20Version.%20You%20will%20have%20to%20specify%20the%20value%20manually.%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20Doing%20this%20will%20delete%20all%20data%20from%20browser%20for%20the%20particular%20table.%3C/p%3E%0A%3Cp%3EIf%20you%20want%20to%20save%20your%20data.You%20can%20select%20all%20data%20and%20save%20it%20in%20a%20variable.%20When%20your%20new%20db%20schema%20is%20created%20,%20inserts%20all%20data%20into%20new%20table.%3C/p%3E%0A%3Ch4%20id=%22example%22%3EExample%3C/h4%3E%0A%3Cp%3EStep%20-%201%20:%20Define%20your%20table%3C/p%3E%0A%3Cpre%3E%3Ccode%3Evar%20table1%20=%20%7B%0A%20%20%20%20name:%20%22table_name%22,%0A%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22column1%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%20%20%20%20primaryKey:%20true%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22column2%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20.....%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20%22columnN%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20dataType:%20'datatype'%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D,%0A%20%20%20%20version:%202%20//Default%20version%20is%201.%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EStep%20-%202%20:%20call%20api%20'isDbExit'%20supplying%20table%20details%3C/p%3E%0A%3Cpre%3E%3Ccode%3E//%20You%20can%20also%20change%20multiple%20table%20at%20a%20time.%20Just%20change%20version%20no%20and%20specify%20only%20one%20table%20in%20isDbExist%20and%20JsStore%20will%20take%20care%20of%20everything.%0A%0Avar%20connection%20=%20new%20JsStore.Instance(new%20Worker('jsstore.js'));%0Aconnection.isDbExist(%7B%0A%20%20%20%20dbName:%20%22db_name%22,%0A%20%20%20%20table:%20%7B%0A%20%20%20%20%20%20%20%20name:%20table_name,%0A%20%20%20%20%20%20%20%20version:%202%20//%20the%20same%20version%20which%20you%20have%20specified%20in%20the%20table%0A%20%20%20%20%7D%0A%7D).then(function(isExist)%20%7B%0A%20%20%20%20if%20(isExist)%20%7B%0A%20%20%20%20%20%20%20%20connection.openDb(%22db_name%22);%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20connection.createDb(Database);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22https://github.com/ujjwalguptaofficial/JsStore/tree/master/examples/change%2520table%2520schema%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",t.title="Change Table Design",t}return a(t,e),t=l([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),u=n(12),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="change-table-design.vue";t.default=c.exports}}]);