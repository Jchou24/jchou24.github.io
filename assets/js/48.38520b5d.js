(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{408:function(t,e,i){},650:function(t,e,i){"use strict";var n=i(408);i.n(n).a},981:function(t,e,i){"use strict";i.r(e);i(7),i(10);var n=i(12),s=(i(147),i(266)),o=i.n(s),c={name:"ChatIcon",components:{},props:{},data:function(){return{}},computed:{},methods:{},mounted:function(){},updated:function(){},destroyed:function(){}},r=i(9),a=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"chat-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","aria-labelledby":"title","aria-describedby":"desc",role:"img","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("title",[this._v("Bubble")]),this._v(" "),e("desc",[this._v("A line styled icon from Orion Icon Library.")]),this._v(" "),e("path",{attrs:{"data-name":"layer1",d:"M5 59l18.8-6.9a37.1 37.1 0 0 0 8.2.9c16.6 0 30-10.7 30-24S48.6 5 32 5 2 15.7 2 29c0 6.7 3.5 12.8 9.1 17.2z",fill:"none",stroke:"#496586","stroke-miterlimit":"10","stroke-width":"5","stroke-linejoin":"round","stroke-linecap":"round"}})])},[],!1,null,"106e1db3",null).exports,u=i(67),d={name:"DisqusCount",directives:{"b-tooltip":o.a},components:{ChatIcon:a},props:{identifier:{type:String,default:void 0},script_id:{type:String,default:"dsq-count-scr"}},data:function(){return{}},computed:{shortname:{get:function(){try{return this.$site.themeConfig.disqus.shortname}catch(t){return""}}},comment_url:{get:function(){return this.identifier?window.location.origin+this.identifier_:document.baseURI.split("#")[0]}},identifier_:{get:function(){return this.identifier||this.$route.path||window.location.pathname}},disqus:{get:function(){return this.$store.state.disqus.disqus}},cache:{get:function(){return this.$store.state.disqus.cache}},comment_cache:{get:function(){return this.$store.state.disqus.cache[this.comment_url]}},comment:{get:function(){return this.comment_cache&&this.comment_cache.comment||"0"}}},watch:{identifier:function(){this.init()},shortname:function(){this.init()}},methods:Object(n.a)({init:function(){var t=this;if(t.disqus)t.is_need_refresh()&&(t.disqus.getCount({reset:!0}),setTimeout(function(){t.setting_cache()},1500));else{var e=window.document.createElement("script");e.async=!0,e.src="https://".concat(this.shortname,".disqus.com/count.js"),e.id=t.script_id,window.document.body.appendChild(e),setTimeout(function(){t.set_disqus(window.DISQUSWIDGETS),t.setting_cache()},1500)}},is_need_refresh:function(){return!this.comment_cache||(0==this.comment.length||(new Date-this.comment_cache.datetime)/1e3>3600)},setting_cache:function(){var t=this;document.querySelectorAll("span.disqus-comment-count").forEach(function(e){var i=e.getAttribute("data-disqus-url");t.set_cache({key:i,val:{comment:e.innerText,datetime:new Date}})})}},Object(u.c)("disqus",["set_cache","set_disqus"])),mounted:function(){this.init(),setTimeout(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!1})},1500)}},h=(i(650),Object(r.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"DisqusCount"},[e("ChatIcon",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"chat-icon",attrs:{title:"Comment Count"}}),this._v(" "),e("span",{staticClass:"disqus-comment-count",attrs:{"data-disqus-identifier":this.identifier_,"data-disqus-url":this.comment_url}},[this._v(this._s(this.comment))])],1)},[],!1,null,"0d1b50e0",null));e.default=h.exports}}]);