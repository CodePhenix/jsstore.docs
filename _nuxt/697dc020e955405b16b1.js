(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{176:function(t,e,r){var n=r(179);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(27).default)("7a78b854",n,!0,{})},177:function(t,e,r){"use strict";var n=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=n},178:function(t,e,r){"use strict";var n=r(176);r.n(n).a},179:function(t,e,r){(t.exports=r(26)(!1)).push([t.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},180:function(t,e,r){"use strict";var n,o=r(13),i=r(177),l=r(32),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t,e,r,n){var o,i=arguments.length,l=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,r,l):o(e,r))||l);return i>3&&l&&Object.defineProperty(e,r,l),l},u=function(t){function e(){var e=t.call(this)||this;return e.version=2,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return a(e,t),e.prototype.catchEvents=function(){l.b.$on("version_change",this.onVersionChange),l.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,e="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(t.searchValue)>=0&&(e+="<a href="+r.url+">"+r.text+"</a>")}),this.searchResult=e},e.prototype.mounted=function(){var t=this;this.setVersion();var e=this.$route.path,r=this.links.find(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.registerNextBtnEvents=function(){var t=new i.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle}},e.prototype.getVersion=function(){return new i.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction"];break;case 2:t=["promise"]}return this.allLinks_.filter(function(e){return t.findIndex(function(t){return t===e.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.onNextBtnClick=function(){var t=this,e=this.$route.path,r=(this.relativeUrl,this.links),n=r.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});if(n>=0){var o=r[n+1];o&&this.$router.push(this.relativeUrl+o.url)}},e=s([Object(o.Component)({props:{innerHtml:String,pageTitle:String}})],e)}(l.a),c=(r(178),r(12)),p=Object(c.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,function(e){return r("li",{key:e.text,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+e.url}},[t._v(t._s(e.text))])])})],2)]),t._v(" "),r("v-flex",{class:{"margin-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{staticClass:"md1 margin-top-50px"},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("Sponsor "),r("br"),t._v("Us")]),t._v(" "),r("br"),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("Be a backer")])],1)],1)},[],!1,null,null,null);p.options.__file="tutorial.vue";e.a=p.exports},230:function(t,e,r){"use strict";r.r(e);var n,o=r(13),i=r(180),l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=function(t,e,r,n){var o,i=arguments.length,l=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,r,l):o(e,r))||l);return i>3&&l&&Object.defineProperty(e,r,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EJsStore%20supports%20following%20operators%20:%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3E%22%20&gt;%20%22%20:%3C/strong%3E%20Finds%20value%20greater%20than%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20&lt;%20%22%20:%3C/strong%3E%20Finds%20value%20less%20than%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20&gt;=%20%22%20:%3C/strong%3E%20Finds%20value%20greater%20than%20or%20equal%20to%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20&lt;=%20%22%20:%3C/strong%3E%20Finds%20value%20less%20than%20or%20equal%20to%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20-%20%22%20:%3C/strong%3E%20Finds%20value%20between%20two%20supplied%20value.%3C/li%3E%0A%3Cli%3E%3Cstrong%3E%22%20!=%20%22%20:%3C/strong%3E%20Finds%20value%20not%20equal%20to%20supplied%20value.%3C/li%3E%0A%3C/ul%3E%0A%3Ch4%20id=%22sql%22%3ESql%3C/h4%3E%0A%3Cpre%3E%3Ccode%3ESelect%20*%20From%20Table_Name;%0AWhere%0AColumn_Name%20&gt;%20some_value%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22jsstore%22%3EJsStore%3C/h4%3E%0A%3Cpre%3E%3Ccode%3EConnection.select(%7B%0A%20%20%20%20From:%20%22Table_Name%22,%0A%20%20%20%20Where:%20%7B%0A%20%20%20%20%20%20%20%20Column_Name:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'&gt;':%20some_value%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%7D,%0A%20%20%20%20OnSuccess:%20function(results)%20%7B%0A%20%20%20%20%20%20%20%20//results%20will%20be%20array%20of%20objects.%0A%20%20%20%20%20%20%20%20console.log(results);%0A%20%20%20%20%7D,%0A%20%20%20%20OnError:%20function(error)%20%7B%0A%20%20%20%20%20%20%20%20alert(error.value);%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%3Ca%20class=%22btn%20info%22%20target=%22_blank%22%20href=%22/example/operator%22%3EExample%3C/a%3E%0A%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",e.title="Operators",e}return l(e,t),e=a([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),u=r(12),c=Object(u.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="operators.vue";e.default=c.exports}}]);