(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1016:function(t,e,r){"use strict";r.r(e);r(51),r(74),r(75),r(8),r(32),r(6),r(42);var n=r(15),i=(r(52),r(685)),a=r.n(i),o=r(686),s=r.n(o),c=r(73);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var u={name:"NavbarToggler",components:{},props:{},data:function(){return{}},computed:{},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(c.c)("layout",["toggle_layout_is"])),mounted:function(){},updated:function(){},destroyed:function(){}},_=(r(683),r(21)),p=Object(_.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(e){return t.toggle_layout_is("is_sidebar_active")}}},[r("span",{staticClass:"navbar-toggler-icon"})])},[],!1,null,"0f4c70f5",null).exports,f={name:"BaseLink",props:{to:{type:String,required:!0},replace:{type:Boolean,default:!1},title:{type:String,default:""},icon:{type:String,default:""}},methods:{on_click:function(){this.$emit("click")}}},d=(r(684),Object(_.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"navbar-brand",attrs:{to:t.to,replace:t.replace},nativeOn:{click:function(e){return t.on_click()}}},[t._t("icon"),t._v(" "),t.icon?r("i",{staticClass:"material-icons"},[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.title?r("div",{staticClass:"d-none d-sm-none d-md-block navbar-item"},[t._v(t._s(t.title))]):t._e()],2)},[],!1,null,"5ebfd89b",null).exports),v={name:"LinkHome",props:{is_sm_size:{type:Boolean,default:!1}},components:{BaseLink:d}},h=Object(_.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return this.is_sm_size?e("BaseLink",{staticClass:"d-sm-block d-md-none",attrs:{to:this.$site.base,icon:"home"}}):e("BaseLink",{staticClass:"left-item d-none d-sm-none d-md-block",attrs:{to:this.$site.base,title:"Home",icon:"home"}})},[],!1,null,"12d76a2f",null).exports,g={name:"LinkAbout",props:{is_sm_size:{type:Boolean,default:!1}},components:{BaseLink:d}},y=Object(_.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return this.is_sm_size?e("BaseLink",{staticClass:"d-sm-block d-md-none",attrs:{to:"/about/",icon:"info"}}):e("BaseLink",{staticClass:"left-item d-none d-sm-none d-md-block",attrs:{to:"/about/",title:"About",icon:"info"}})},[],!1,null,"584cf470",null).exports,b={name:"LinkCategory",components:{BaseLink:d,CategoryIcon:r(377).a}},m=Object(_.a)(b,function(){var t=this.$createElement,e=this._self._c||t;return e("BaseLink",{attrs:{to:"/category/",title:"Category"},scopedSlots:this._u([{key:"icon",fn:function(){return[e("CategoryIcon")]},proxy:!0}])})},[],!1,null,"204e0942",null).exports,O={name:"LinkTag",components:{BaseLink:d,TagIcon:r(348).a}},w=Object(_.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("BaseLink",{attrs:{to:"/tag/",title:"Tag"},scopedSlots:this._u([{key:"icon",fn:function(){return[e("TagIcon")]},proxy:!0}])})},[],!1,null,"e4dceb8e",null).exports,j={name:"LinkArchive",components:{BaseLink:d}},k=Object(_.a)(j,function(){var t=this.$createElement;return(this._self._c||t)("BaseLink",{attrs:{to:"/archive/",title:"Archive",icon:"receipt"}})},[],!1,null,"6255cba8",null).exports;function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var P={name:"LinkSearch",components:{BaseLink:d},props:{search_path:{type:String,default:"/search/"}},data:function(){return{current_path:this.$route.path,previous_path:this.$route.path}},watch:{"$route.path":function(t,e){this.current_path=t,this.previous_path=e}},computed:{link:{get:function(){return this.current_path==this.search_path?this.previous_path:this.search_path}}},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({on_click:function(){this.set_layout({key:"is_onpopstate",val:!0})}},Object(c.c)("layout",["set_layout"]))},B=Object(_.a)(P,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseLink",{class:{active:t.current_path==t.search_path},attrs:{to:t.link,replace:""},on:{click:t.on_click},scopedSlots:t._u([{key:"icon",fn:function(){return[r("i",{staticClass:"material-icons"},[t._v("search")])]},proxy:!0}])})},[],!1,null,"5691ac6e",null).exports,$={name:"NavBar",components:{BNavbar:a.a,BContainer:s.a,NavbarToggler:p,LinkHome:h,LinkAbout:y,LinkCategory:m,LinkTag:w,LinkArchive:k,LinkSearch:B},props:{},data:function(){return{}},computed:{},methods:{is_about_page_exists:function(){return!!this.$router.resolve({path:"/about/"}).resolved.name}},mounted:function(){},updated:function(){},destroyed:function(){}},L=Object(_.a)($,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BNavbar",{attrs:{type:"dark"}},[r("BContainer",[r("div",{staticClass:"left-items"},[r("NavbarToggler"),t._v(" "),r("LinkHome"),t._v(" "),t.is_about_page_exists()?r("LinkAbout"):t._e()],1),t._v(" "),r("div",{staticClass:"right-items d-flex justify-content-around"},[r("LinkHome",{attrs:{is_sm_size:!0}}),t._v(" "),t.is_about_page_exists()?r("LinkAbout",{attrs:{is_sm_size:!0}}):t._e(),t._v(" "),r("LinkCategory"),t._v(" "),r("LinkTag"),t._v(" "),r("LinkArchive"),t._v(" "),r("LinkSearch")],1)])],1)},[],!1,null,"103d3086",null).exports,S=r(466),D=r(5);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var E={name:"NavArea",components:{NavBar:L,CategoryBarViewer:S.a},props:{is_category_page:{type:Boolean,required:!0},is_tag_page:{type:Boolean,required:!0},is_archive_page:{type:Boolean,required:!0},is_search_page:{type:Boolean,required:!0},is_index_page:{type:Boolean,required:!0}},data:function(){return{}},computed:{is_displayer_active:{get:function(){return this.$store.state.layout.is_displayer_active}},is_nav_header_active:{get:function(){return this.$store.state.layout.is_nav_header_active}},is_sidebar_active:{get:function(){return this.$store.state.layout.is_sidebar_active}},is_active_CategoryBarViewer:{get:function(){return this.$store.state.layout.app_resize,(this.is_category_page||this.is_tag_page)&&!this.is_sidebar_active&&"xs"==Object(D.i)()}},is_active_CountdownTimer:{get:function(){return this.$store.state.layout.app_resize,this.is_index_page&&("l"==Object(D.i)()||"xl"==Object(D.i)())}}},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(c.c)("layout",["trigger_refresh_waterfall"])),beforeMount:function(){this.$options.components.ReadingProgress=function(){return Promise.all([r.e(0),r.e(68)]).then(r.bind(null,1024))},this.$options.components.CountdownTimer=function(){return Promise.all([r.e(0),r.e(67)]).then(r.bind(null,1025))}},mounted:function(){},updated:function(){},destroyed:function(){}},N=Object(_.a)(E,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"nav-header disactive-search",class:{"active-display":t.is_nav_header_active||t.is_sidebar_active,"active-displayer":t.is_displayer_active}},[r("div",{staticClass:"view-container"},[r("NavBar"),t._v(" "),r("ClientOnly",[t.is_active_CategoryBarViewer?r("CategoryBarViewer",{staticClass:"d-sm-none d-block animated fadeInDown fastest"}):t._e()],1),t._v(" "),t.is_active_CountdownTimer?r("CountdownTimer",{on:{refresh:function(e){return t.trigger_refresh_waterfall()}}}):t._e(),t._v(" "),r("ReadingProgress",{attrs:{is_category_page:t.is_category_page,is_tag_page:t.is_tag_page,is_archive_page:t.is_archive_page,is_search_page:t.is_search_page,is_index_page:t.is_index_page}})],1)])},[],!1,null,"41de96c1",null);e.default=N.exports},423:function(t,e,r){},424:function(t,e,r){},466:function(t,e,r){"use strict";r(51),r(74),r(75),r(8),r(32),r(6),r(42);var n=r(15),i=r(272),a=r.n(i),o=r(73);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var c={name:"CategorySortListLi",components:{},directives:{"b-tooltip":a.a},props:{target:{}},data:function(){return{}},computed:{},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(o.c)("category",["set_sort_function_name","set_article_sort_function"])),mounted:function(){},updated:function(){},destroyed:function(){}},l=r(21);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var _={name:"CategorySortList",components:{CategorySortListLi:Object(l.a)(c,function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],class:{active:t.$store.state.category.article_sort.sort_function_name==t.target},attrs:{title:"sort by "+t.target},on:{click:function(e){t.set_sort_function_name(t.target),t.set_article_sort_function()}}},[t._v("\n    "+t._s(t.target)+"\n")])},[],!1,null,"1502e48e",null).exports},props:{},data:function(){return{sort_option:["datetime","title"]}},computed:{},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({toggle_is_desc:function(){var t=!this.$store.state.category.article_sort.is_desc;this.set_is_desc(t),this.set_article_sort_function()}},Object(o.c)("category",["set_is_desc","set_article_sort_function"])),mounted:function(){},updated:function(){},destroyed:function(){}},p=Object(l.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-sort-list"},[r("div",{staticClass:"sort-order"},[r("i",{staticClass:"material-icons",class:{asc:t.$store.state.category.article_sort.is_desc},on:{click:function(e){return t.toggle_is_desc()}}},[t._v("arrow_drop_down")])]),t._v(" "),r("div",{staticClass:"sort-option"},t._l(t.sort_option,function(t,e){return r("CategorySortListLi",{key:e,attrs:{target:t,"data-index":e}})}),1)])},[],!1,null,"e656985a",null).exports,f=r(107),d=r.n(f),v={name:"CategoryBarViewerInput",components:{},props:{},data:function(){return{current_categories_value:"",current_category_path:[],is_display_table:!1,is_white_space:!1}},computed:{},methods:{init:function(){this.recycle(),this.current_category_path=this.$store.state.category.active_category_path,this.is_white_space=!1,this.join_path_value(),window.addEventListener("click",this.on_click)},on_click:function(t){t.target!=this.$el?this.is_white_space=!1:this.is_white_space=!this.is_white_space,this.join_path_value()},join_path_value:function(){this.is_white_space?(this.is_display_table=!0,this.current_categories_value="/"+this.current_category_path.join(" / ")):(this.is_display_table=!1,this.current_categories_value="/"+this.current_category_path.join("/"))},recycle:function(){window.removeEventListener("click",this.on_click)}},watch:{"$store.state.category.active_category_path":function(t){this.current_category_path=t,this.is_white_space=!1,this.join_path_value()}},mounted:function(){},updated:function(){},beforeDestroy:function(){this.recycle()}},h=Object(l.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"category-bar-viewer-input",style:{display:this.is_display_table?"table":"block"}},[this._v("\n    "+this._s(this.current_categories_value)+"\n")])},[],!1,null,"3c898438",null).exports;function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var y={name:"CategoryContentShowIcon",components:{TagIcon:r(348).a},props:{is_show:{required:!0,type:Boolean},set_target:{type:String,required:!0}},data:function(){return{}},computed:{},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},Object(o.c)("category",["set_is_show"])),mounted:function(){},updated:function(){},destroyed:function(){}},b=Object(l.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"sidebar-icon-circle",class:{disactive:!t.is_show},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.set_is_show({target:t.set_target,value:!t.is_show})}}},[r("div",{staticClass:"sidebar-icon"},["datetime"==t.set_target?r("i",{staticClass:"material-icons datetime"},[t._v("\n            schedule\n        ")]):t._e(),t._v(" "),"update_datetime"==t.set_target?r("i",{staticClass:"material-icons update_datetime"},[t._v("\n            update\n        ")]):t._e(),t._v(" "),"tag"==t.set_target?r("TagIcon"):t._e()],1)])},[],!1,null,"99372fba",null).exports,m=r(106),O=r.n(m);function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var j={name:"CategoryBarViewer",components:{CategorySortList:p,CategoryBarViewerInput:h,CategoryContentShowIcon:b},directives:{"b-tooltip":a.a},props:{},data:function(){return{is_active_sort_list:!1,top:50}},computed:{},watch:{},methods:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach(function(e){Object(n.a)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({init:function(){var t=this;t.$refs.category_bar_viewer_input.init(),t.recycle(),r.e(1).then(r.t.bind(null,1007,7)).then(function(e){e.default(document.querySelector("div.category-bar-viewer-input"),O()(function(){t.$refs.category_bar_viewer_input&&t.$refs.category_bar_viewer_input.$el&&(t.top=t.$refs.category_bar_viewer_input.$el.clientHeight+14)}),300)}),window.addEventListener("click",t.on_click)},recycle:function(){window.removeEventListener("click",this.on_click)},on_click:function(t){function e(t,e){var r=document.querySelector(e);return!!r&&(t.target.tagName==r.tagName&&t.target.className==r.className)}var r=e(t,"i.material-icons.sort"),n=e(t,"div.category-sort-list");document.querySelector("div.category-sort-list")&&!r&&(n||d()(t.target).parents("div.category-sort-list").length?this.is_active_sort_list=!0:this.is_active_sort_list=!1)}},Object(o.c)("category",["upside_active_category_path","refresh"])),mounted:function(){var t=this;t.$nextTick(function(){t.init()})},updated:function(){},beforeDestroy:function(){this.recycle()}},k=Object(l.a)(j,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-bar-viewer"},[r("span",{staticClass:"bar-icon d-none d-sm-block"},[r("a",{staticClass:"sidebar-icon-circle",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.refresh(e)}}},[t._m(0)]),t._v(" "),r("a",{staticClass:"sidebar-icon-circle upside",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.upside_active_category_path(e)}}},[t._m(1)])]),t._v(" "),r("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInDown faster","leave-active-class":"animated fadeOutUp faster"}},[t.is_active_sort_list?r("CategorySortList",{ref:"category_sort_list",style:{top:t.top+"px"}}):t._e()],1),t._v(" "),r("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"material-icons sort",attrs:{title:"sort article"},on:{click:function(e){t.is_active_sort_list=!t.is_active_sort_list}}},[t._v("unfold_more")]),t._v(" "),r("CategoryBarViewerInput",{ref:"category_bar_viewer_input"}),t._v(" "),r("div",{staticClass:"category-content-show-icons"},[r("a",{staticClass:"sidebar-icon-circle refresh d-block d-sm-none",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.refresh(e)}}},[t._m(2)]),t._v(" "),r("a",{staticClass:"sidebar-icon-circle upside d-block d-sm-none",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.upside_active_category_path(e)}}},[t._m(3)]),t._v(" "),r("CategoryContentShowIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{is_show:t.$store.state.category.is_show.datetime,set_target:"datetime",title:"toggle create date"}}),t._v(" "),r("CategoryContentShowIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{is_show:t.$store.state.category.is_show.update_datetime,set_target:"update_datetime",title:"toggle update date"}}),t._v(" "),r("CategoryContentShowIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"tag",attrs:{is_show:t.$store.state.category.is_show.tag,set_target:"tag",title:"toggle tag"}})],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-icon"},[e("i",{staticClass:"material-icons refresh"},[this._v("refresh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-icon"},[e("i",{staticClass:"material-icons"},[this._v("subdirectory_arrow_left")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-icon"},[e("i",{staticClass:"material-icons refresh"},[this._v("refresh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-icon"},[e("i",{staticClass:"material-icons"},[this._v("subdirectory_arrow_left")])])}],!1,null,"4d2c1387",null);e.a=k.exports},683:function(t,e,r){"use strict";var n=r(423);r.n(n).a},684:function(t,e,r){"use strict";var n=r(424);r.n(n).a},685:function(t,e,r){"use strict";e.__esModule=!0,e.default=e.props=void 0;var n=r(328);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={tag:{type:String,default:"nav"},type:{type:String,default:"light"},variant:{type:String},toggleable:{type:[Boolean,String],default:!1},fixed:{type:String},sticky:{type:Boolean,default:!1},print:{type:Boolean,default:!1}};e.props=a;var o={name:"BNavbar",functional:!0,props:a,render:function(t,e){var r,a=e.props,o=e.data,s=e.children,c="";return a.toggleable&&"string"==typeof a.toggleable&&"xs"!==a.toggleable?c="navbar-expand-".concat(a.toggleable):!1===a.toggleable&&(c="navbar-expand"),t(a.tag,(0,n.mergeData)(o,{staticClass:"navbar",class:(r={"d-print":a.print,"sticky-top":a.sticky},i(r,"navbar-".concat(a.type),Boolean(a.type)),i(r,"bg-".concat(a.variant),Boolean(a.variant)),i(r,"fixed-".concat(a.fixed),Boolean(a.fixed)),i(r,"".concat(c),Boolean(c)),r),attrs:{role:"nav"===a.tag?null:"navigation"}}),s)}};e.default=o},686:function(t,e,r){"use strict";e.__esModule=!0,e.default=e.props=void 0;var n=r(328),i={tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}};e.props=i;var a={name:"BContainer",functional:!0,props:i,render:function(t,e){var r=e.props,i=e.data,a=e.children;return t(r.tag,(0,n.mergeData)(i,{class:{container:!r.fluid,"container-fluid":r.fluid}}),a)}};e.default=a}}]);