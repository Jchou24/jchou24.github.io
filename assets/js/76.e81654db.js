(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1034:function(e,t,n){"use strict";n.r(t);n(51),n(74),n(75),n(32),n(42),n(159),n(6),n(8);var i=n(21),s=n(107),r=n.n(s),l=(n(110),n(73)),c=n(383);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var a={name:"FullScreenButton",components:{},props:{},data:function(){return{}},watch:{},computed:{is_full_screen:{get:function(){return this.$store.state.layout.is_full_screen}}},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({init:function(){this.recycle()},recycle:function(){},toggle_full_screen:function(){this.toggle_layout_is("is_full_screen"),this.$emit("clicked")}},Object(l.c)("layout",["toggle_layout_is"])),mounted:function(){},updated:function(){},beforeDestroy:function(){this.recycle()}},u=(n(677),n(20));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={name:"Slide",components:{FullScreenButton:Object(u.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"FullScreenButton",on:{click:this.toggle_full_screen}},[this.is_full_screen?t("i",{staticClass:"material-icons"},[this._v("fullscreen_exit")]):t("i",{staticClass:"material-icons"},[this._v("fullscreen")])])},[],!1,null,"82376ac8",null).exports,ResponsiveElement:n(385).a},props:{},data:function(){var e=this._uid,t=this.$store.state.slide[e];return console.log(this),console.log(e),console.log(t),{reveal:null,reveal_script_id:"reveal_script_id",reveal_menu_script_id:"reveal_menu_script_id",reveal_toolbar_script_id:"reveal_toolbar_script_id",is_slide_full_screen:!1,slide_info:_({indexh:0,indexv:0,indexf:0},t)}},computed:{is_layout_full_screen:{get:function(){return this.$store.state.layout.is_full_screen||!1}},is_slide_active_full_screen:{get:function(){return this.is_layout_full_screen&&this.is_slide_full_screen}}},methods:_({init:function(){this.recycle(),this.set_table_width(),this.init_slide(),setTimeout(function(){},500)},init_slide:function(){var e=this,t=n(507);e.reveal=t,e.regist_reveal(t),e.init_plugins(t),t.initialize({slideNumber:!0,width:"100%",height:"100%",margin:0,dependencies:[]}),console.log(e.indexh,e.indexv,e.indexf),t.addEventListener("slidechanged",function(t){console.log(t),e.set_table_width(),e.slide_info.indexh=t.indexh,e.slide_info.indexv=t.indexv,e.slide_info.indexf=t.indexf}),t.slide(e.slide_info.indexh,e.slide_info.indexv,e.slide_info.indexf),t.layout(),t.sync()},regist_reveal:function(e){window.Reveal=e,this.remove_reveal_script();var t=document.createElement("script"),n=document.createTextNode("Reveal = window.Reveal");t.appendChild(n),t.setAttribute("id",this.reveal_script_id),document.querySelector("body").appendChild(t)},init_plugins:function(e){n(508),n(509),n(510)},init_reveal_menu:function(){var e=document.createElement("script");e.src="".concat(this.get_url_domain(),"reveal-plugins/reveal.js-menu/menu.js");var t=document.createTextNode("window.RevealMenu()");e.appendChild(t),e.setAttribute("id",this.reveal_menu_script_id),document.querySelector("body").appendChild(e)},init_reveal_toolbar:function(){var e=document.createElement("script");e.src="".concat(this.get_url_domain(),"reveal-plugins/reveal.js-toolbar/toolbar.js");var t=document.createTextNode("window.RevealToolbar()");e.appendChild(t),e.setAttribute("id",this.reveal_toolbar_script_id),document.querySelector("body").appendChild(e)},remove_reveal_script:function(){var e=document.getElementById(this.reveal_script_id);e&&e.parentNode.removeChild(e),(e=document.getElementById(this.reveal_menu_script_id))&&e.parentNode.removeChild(e),document.querySelectorAll(".slide-menu-wrapper").forEach(function(e){return e.parentNode.removeChild(e)})},remove_plugins:function(){delete n.c[508],delete n.c[509],delete n.c[510]},get_url_domain:function(){return this.$router.options.base},recycle:function(){this.remove_reveal_script(),this.remove_plugins(),delete n.c[507],c.a.destroy()},set_table_width:function(){r()("table").each(function(){var e=r()(this).find("tr").width();e&&r()(this).width(e),console.log(this),console.log(e)})},clicked_full_screen_button:function(){var e=this;function t(){e.reveal.layout(),e.reveal.sync()}if(e.is_slide_full_screen=!e.is_slide_full_screen,e.set_layout({key:"is_disabled_scroll",val:e.is_slide_active_full_screen}),e.is_slide_active_full_screen){for(var n=1;n<=3;n++)setTimeout(t,150*n);setTimeout(t,3e3)}else setTimeout(t,500);e.set_table_width(),console.log(e.reveal),console.log(e._uid)}},Object(l.c)("layout",["toggle_layout_is","set_layout"])),watch:{},mounted:function(){var e=this;e.$nextTick(function(){e.init()})},updated:function(){},beforeDestroy:function(){this.recycle()},destroyed:function(){}},p=(n(678),n(679),n(680),Object(u.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ResponsiveElement",{staticClass:"Slide",class:{"full-screen":e.is_slide_active_full_screen}},[n("div",{ref:"slide",staticClass:"reveal"},[n("div",{directives:[{name:"scroller",rawName:"v-scroller"}],staticClass:"slides"},[e._t("default")],2)]),e._v(" "),n("div",{staticClass:"toolbar"},[n("FullScreenButton",{on:{clicked:function(t){return e.clicked_full_screen_button()}}})],1)])},[],!1,null,"5785a621",null));t.default=p.exports},385:function(e,t,n){"use strict";n(275);var i=n(110),s=n(106),r=n.n(s),l={name:"ResponsiveElement",components:{},props:{get_class:{type:Function,default:null},wait_time:{type:Number,default:300}},data:function(){return{size_class:""}},watch:{},computed:{},methods:{init:function(){this.recycle()},recycle:function(){},default_get_class:function(e){return e<=i.a.screen_size.sm?"sm":""},maintance_size_class:function(){var e=this.$el.offsetWidth,t=this.get_class||this.default_get_class;this.size_class=t(e)}},mounted:function(){var e=this;e.maintance_size_class(),n.e(1).then(n.t.bind(null,1021,7)).then(function(t){t.default(e.$el,r()(e.maintance_size_class,e.wait_time))})},updated:function(){},beforeDestroy:function(){this.recycle()}},c=n(20),o=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.size_class},[this._t("default")],2)},[],!1,null,"5318a492",null);t.a=o.exports},429:function(e,t,n){},430:function(e,t,n){},431:function(e,t,n){},432:function(e,t,n){},677:function(e,t,n){"use strict";var i=n(429);n.n(i).a},678:function(e,t,n){"use strict";var i=n(430);n.n(i).a},679:function(e,t,n){"use strict";var i=n(431);n.n(i).a},680:function(e,t,n){"use strict";var i=n(432);n.n(i).a}}]);