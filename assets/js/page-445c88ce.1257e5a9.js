(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1228:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("由於最近有朋友想要學習 vue 的東西")]),t._v(" "),a("p",[t._v('這邊就稍微整理一下自己學 vue 的一些心得，並儘可能用比較"平滑"的方式來談談 Vue')]),t._v(" "),a("p",[t._v("本系列文預計將會介紹 Vue 的一些常見用法以及常見語法")]),t._v(" "),a("h1",{attrs:{id:"why-vue"}},[t._v("Why Vue?")]),t._v(" "),a("p",[t._v('一個網頁會由許多"要素"組成')]),t._v(" "),a("ul",[a("li",[a("p",[t._v("User跟網頁的互動體驗(UX)")])]),t._v(" "),a("li",[a("p",[t._v("網頁上的畫面(UI)")])]),t._v(" "),a("li",[a("p",[t._v("資料流的更新")])]),t._v(" "),a("li",[a("p",[t._v("開發成本(學習難易度、開發時間、重用性、模組化、語法兼容)")])]),t._v(" "),a("li",[a("p",[t._v("...")])])]),t._v(" "),a("p",[t._v("而使用前端框架可以很大程度的讓上述的事情，在實作上變得有效率")]),t._v(" "),a("h1",{attrs:{id:"efficient"}},[t._v("Efficient")]),t._v(" "),a("p",[t._v("這邊簡述使用Vue如何對上述提及議題帶來幫助")]),t._v(" "),a("h2",{attrs:{id:"網頁動畫呈現"}},[t._v("網頁動畫呈現")]),t._v(" "),a("p",[t._v("像是切換分頁時，有時淡進淡出的網頁效果會讓使用體驗更好")]),t._v(" "),a("p",[t._v("而這可以透過 vue 的 transition 快速的做到")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isDisplay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("像以上寫法，當 isDisplay 被設為 true 時 div 就會套用 fade 的效果淡進")]),t._v(" "),a("p",[t._v("當然 fade 需要撰寫對應的 css ， 但這邊暫且不談的太細節")]),t._v(" "),a("h2",{attrs:{id:"網頁上的畫面-ui"}},[t._v("網頁上的畫面(UI)")]),t._v(" "),a("p",[t._v("網頁上的畫面，由許多的元素組成")]),t._v(" "),a("p",[t._v("而一個元素可以是一個表單，一個按鈕，一個列表")]),t._v(" "),a("p",[t._v("如果畫面要差異更新，那就要使用一大堆的 ajax 去讀資料，並更新畫面")]),t._v(" "),a("p",[t._v("而這些更新的畫面若想要可以分享給別人看到一樣的內容")]),t._v(" "),a("p",[t._v("那就要把當前的狀態與網址做對應的處理(也就是要做front-end routing)")]),t._v(" "),a("p",[t._v("如果想要用網址一一對應的話，那就要在更新資料的同時，手動調整網址")]),t._v(" "),a("p",[t._v("如果用前端框架，那就可以用框架的機制去做 front-end routing")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("routeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("而假如 routing 的定義檔這樣寫，那就代表網址對應到 "),a("code",[t._v("/")]),t._v(" 時")]),t._v(" "),a("p",[t._v("會幫你帶入到 Home 這個組件，而 Home 這個組件就包含了首頁該有的 html、css、js 了")]),t._v(" "),a("h2",{attrs:{id:"資料流的更新"}},[t._v("資料流的更新")]),t._v(" "),a("h3",{attrs:{id:"事件驅動-event-driven"}},[t._v("事件驅動(event driven)")]),t._v(" "),a("p",[t._v("當 ajax 取得資料後，畫面上必然會需要更新對應的元素")]),t._v(" "),a("p",[t._v("當使用 jquery 或原生的 event listener 進行開發時")]),t._v(" "),a("p",[t._v("整個網頁的開發就會變成 "),a("code",[t._v("事件驅動(event driven)")])]),t._v(" "),a("p",[t._v("當按下某個 button 後，觸發資料的更新，而資料更新後再去更新對應的畫面")]),t._v(" "),a("h3",{attrs:{id:"資料驅動-data-driven"}},[t._v("資料驅動(data driven)")]),t._v(" "),a("p",[t._v("但使用前端框架進行開發是一種 "),a("code",[t._v("資料驅動(data driven)")]),t._v(" 的開發體驗")]),t._v(" "),a("p",[t._v("你會先定義要"),a("code",[t._v("關注哪些資料")]),t._v("，在撰寫設定，"),a("code",[t._v("當資料更新時")])]),t._v(" "),a("p",[a("em",[a("strong",[a("code",[t._v("響應式(reactive)")])])]),t._v(" ，"),a("code",[t._v("自動")]),t._v("觸發哪些function，"),a("code",[t._v("自動")]),t._v("對有關資料進行調整")]),t._v(" "),a("p",[t._v("並且網頁上的內容，直接響應資料的變動自動更新")]),t._v(" "),a("p",[t._v("所以你不需要再手動更新 html 的內容了，你在開發畫面時")]),t._v(" "),a("p",[t._v("只需要定義好你要依照哪個資料去進行畫面的渲染(render)")]),t._v(" "),a("p",[t._v("資料更新後，框架就會幫你更新畫面(而且框架還會幫你處理更新畫面的效率問題)")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{temperature}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("像以上這個寫法，當系統自己每 30 秒擷取一次溫度資料時")]),t._v(" "),a("p",[t._v("你只需要更新 "),a("code",[t._v("temperature")]),t._v(" 這個變數，網頁上的溫度數值又會自己響應資料的變化進行更新")]),t._v(" "),a("p",[t._v("這樣就不會當資料更新時，忘記要更新畫面上的哪些元素了")]),t._v(" "),a("h3",{attrs:{id:"資料驅動的方向性"}},[t._v("資料驅動的方向性")]),t._v(" "),a("p",[t._v("但用 data driven 也不是萬能，他算是目前來說比較好的開發模式")]),t._v(" "),a("p",[t._v("但這個開發模式也是需要考慮一些對應的issue")]),t._v(" "),a("p",[t._v("也就是 "),a("code",[t._v("one-way-data-binding")]),t._v(" 與 "),a("code",[t._v("two-way-data-binding")])]),t._v(" "),a("p",[t._v("這邊我們暫且先提及到他，先不深入進行討論")]),t._v(" "),a("h1",{attrs:{id:"開發成本"}},[t._v("開發成本")]),t._v(" "),a("p",[t._v("開發是需要考量成本與效益的，而開發成本需要考量非常多的面向")]),t._v(" "),a("p",[t._v("這邊就先稍微列舉幾個來談談")]),t._v(" "),a("h2",{attrs:{id:"學習難易度"}},[t._v("學習難易度")]),t._v(" "),a("p",[t._v("這最直接關乎到開發人力的量，畢竟市場上工程師就這麼多")]),t._v(" "),a("p",[t._v("技術的學習難易度，直接影響到一個系統有沒有人開發、維護")]),t._v(" "),a("p",[t._v("而 Vue 在學習曲線上就與 Angular、React 有著極大的不同")]),t._v(" "),a("p",[t._v("Vue 是 Progressive Framework (漸進式框架)")]),t._v(" "),a("p",[t._v("你可以用 vue 寫出 js 套件後，用最傳統的方式，在 html 引用套件")]),t._v(" "),a("p",[t._v("也可以用 vue 進行整套的開發")]),t._v(" "),a("p",[t._v("言下之意，你不需要學習 vue 的全部特性後才能用他")]),t._v(" "),a("p",[t._v("你可以只使用他的一小部分功能，就進行開發")]),t._v(" "),a("p",[t._v("然後隨著一步步的學習，在相同專案下，嘗試使用他的不同功能")]),t._v(" "),a("p",[t._v("但 react 跟 angular 就沒辦法了")]),t._v(" "),a("p",[t._v("要使用前，必須先學習相對來說比較多的背景知識後才能使用他們")]),t._v(" "),a("p",[t._v("在前端世界變化極大極快的這個時代，我還滿喜歡這種 "),a("code",[t._v("Progressive")])]),t._v(" "),a("p",[t._v("漸進式的思維，比較不用為了某些新功能，導致必須要一口氣學很多東西後才能使用")]),t._v(" "),a("h2",{attrs:{id:"開發時間"}},[t._v("開發時間")]),t._v(" "),a("p",[t._v("使用前端框架開發、如果在技術上已經有一定熟練度的話")]),t._v(" "),a("p",[t._v("在開發有規模的系統上時，開發時間將會巨量減少")]),t._v(" "),a("p",[t._v("光是資料更新後，要更新對應畫面這件事，就不是傳統的開發模式能匹敵的")]),t._v(" "),a("p",[t._v("傳統的開發方式，當系統開發到一定程度後，不同功能不同人開發")]),t._v(" "),a("p",[t._v("資料更新後很難去追蹤你要更新哪些畫面，但使用前端框架的話")]),t._v(" "),a("p",[t._v("這些事框架都會規範你寫好定義，並直接用這個定義去運行")]),t._v(" "),a("p",[t._v("直接幫你省下檢查的時間，並增加了畫面更新的可靠性")]),t._v(" "),a("h2",{attrs:{id:"重用性、模組化"}},[t._v("重用性、模組化")]),t._v(" "),a("p",[t._v("假如今天要製作一個日曆")]),t._v(" "),a("p",[t._v("那麼可能要提供按鈕點擊時切換月份，切換時還要有轉場效果")]),t._v(" "),a("p",[t._v("而日曆的布局可能還需要 css 去撰寫，甚至可能要靠 js 輔助")]),t._v(" "),a("p",[t._v("而在不借助框架下，最原生的開發方式，就是分別寫 html、js、css")]),t._v(" "),a("p",[t._v("然後將他們引用進來")]),t._v(" "),a("p",[t._v("但只要有一個不小心，js沒有閉包，變數命名重複，css作用域重複")]),t._v(" "),a("p",[t._v("開發偵錯時間直接倍量成長，bug變feature")]),t._v(" "),a("p",[t._v("而原生開發模式若要用新的 js 語法模組化元件，封裝元件的話")]),t._v(" "),a("p",[t._v('又不可避免的要"很手動"(自己架設轉譯流程)的處理瀏覽器兼容的問題')]),t._v(" "),a("p",[t._v("使用前端框架的話，像 vue 就有提供 "),a("code",[t._v("組件(component)")]),t._v(" 的開發模式")]),t._v(" "),a("p",[t._v("甚至可以使用 "),a("code",[t._v("SFC(Single File Component)")]),t._v(" 的方式開發")]),t._v(" "),a("p",[t._v("一個組件，一個檔案，一個模組")]),t._v(" "),a("p",[t._v("模組化的開發方式，直接幫你避掉上述的困難點")]),t._v(" "),a("p",[t._v("用 vue-cli 架設專案的話，還幫你處理了瀏覽器兼容")]),t._v(" "),a("p",[t._v("檔案大小最佳化...的功能")]),t._v(" "),a("h2",{attrs:{id:"語法兼容"}},[t._v("語法兼容")]),t._v(" "),a("p",[t._v("當開發時想使用比較新的 js 語法時，很常要考慮瀏覽器兼容的問題")]),t._v(" "),a("p",[t._v("尤其常常要害怕網站跑在上古神獸 IE 上會掛掉")]),t._v(" "),a("p",[t._v("若專案用 vue-cli 架設，js 常見語法直接幫你編譯成 IE 也懂得語法")]),t._v(" "),a("p",[t._v("許多新規格的語法、語法糖，就可以不用再靠像是 pollyfill 的方式來兼容了")]),t._v(" "),a("h1",{attrs:{id:"事前準備"}},[t._v("事前準備")]),t._v(" "),a("p",[t._v("以上描述了許多我看到的 Vue 的優點，接著就來為 coding 做些準備吧!")]),t._v(" "),a("p",[t._v("專案位置可以先"),a("a",{attrs:{href:"https://github.com/Jchou24/vue-basic-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("到github上下載"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("執行專案前需先安裝好node.js，接著在專案目錄中")]),t._v(" "),a("p",[t._v("看得到"),a("code",[t._v("package.json")]),t._v("的地方開啟command line執行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("這個指令會將需要使用到的套件安裝")]),t._v(" "),a("p",[t._v("若windows電腦下該指令有些問題，也可以使用專案中以下包好的"),a("code",[t._v("node_modules.zip")])]),t._v(" "),a("p",[t._v("套件安裝完成後，便可在command line執行以下指令啟動專案")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])])]),a("p",[t._v("預設將會在 "),a("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/"),a("OutboundLink")],1),t._v(" 開起專案")]),t._v(" "),a("h1",{attrs:{id:"建立專案"}},[t._v("建立專案")]),t._v(" "),a("p",[t._v("這邊使用 vue-cli 的指令進行專案的建立")]),t._v(" "),a("p",[t._v("當下 "),a("code",[t._v("vue create your_project_name")]),t._v(" 後")]),t._v(" "),a("p",[t._v("會有許多的選項可以選，這邊就先暫且先不談及裡面的內容")]),t._v(" "),a("h1",{attrs:{id:"開發架構"}},[t._v("開發架構")]),t._v(" "),a("h2",{attrs:{id:"基礎架構"}},[t._v("基礎架構")]),t._v(" "),a("p",[t._v("這邊使用 vue-cli 建立起來的專案做基礎架構")]),t._v(" "),a("p",[t._v("這個基礎架構的部分功能簡述如下")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 "),a("code",[t._v("main.js")]),t._v(" 作為單一進入點(entry point)")]),t._v(" "),a("p",[t._v("不精確來說，這個檔案就是整個專案運行的起點")])]),t._v(" "),a("li",[a("p",[t._v("使用 vue-router 來進行前端 routing + 前端SPA開發")])]),t._v(" "),a("li",[a("p",[t._v("使用 vuex-store 來進行前端全域資料的儲存")]),t._v(" "),a("p",[t._v("(這算是不太精確的說法，但方便理解來說，可以簡單把它當成是一個client端的小DB就好)")])]),t._v(" "),a("li",[a("p",[t._v("使用 SFC 的方式，進行模組化的開發")])])]),t._v(" "),a("h2",{attrs:{id:"開發思維"}},[t._v("開發思維")]),t._v(" "),a("p",[t._v("以下提供一些開發學習時的思考方向")]),t._v(" "),a("p",[t._v("(以下提到的內容，下一篇文章會有更細節的說明)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在 router 設定哪個網址對應到哪個 "),a("code",[t._v("View組件")])])]),t._v(" "),a("li",[a("p",[t._v("而一個 "),a("code",[t._v("View組件")]),t._v(" 再去使用 "),a("code",[t._v("子組件")])])]),t._v(" "),a("li",[a("p",[t._v("這個子組件若很多地方可以用上的話，就可以設計開發的模組化一點，增加共用性")])]),t._v(" "),a("li",[a("p",[t._v("用 SFC 的方式開發的話，一個檔案一個組件，檔案包含 html、js、css，看起來會長這樣")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 這邊寫html --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"compoentName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 註冊要用到哪些組件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定義要從外部獲得什麼資料，甚至可以做到資料的驗證")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定義組件內的共用資料")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定義要監聽哪些資料，讓該資料變化時觸發指定 function")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 定義組件內的"響應式"衍伸資料')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定義共用的function")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定義當組件被掛到 html 上時，要執行哪些動作")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeDestroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("更多可以定義的地方("),a("code",[t._v("hook")]),t._v(")，可以參考官網")])]),t._v(" "),a("li",[a("p",[t._v("父組件的資料可以使用html property 的方式傳遞給子組件")]),t._v(" "),a("p",[t._v("而子組件要在 props 定義對外的 html property")]),t._v(" "),a("p",[t._v("這樣當外層丟給 props 的資料變化時，子組件就會響應")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- I am parent --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("children")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("myName")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("AAA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I am children")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        myName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 當父組件將 myName 做 assign 時，這邊的值也會響應變化")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他型態還有很多，像是 Number, Objects, Array ...")]),t._v("\n            required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定義父組件是否一定要傳遞這個值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("子組件 props 收到的資料不要直接 assign 他，會破壞響應式機制")]),t._v(" "),a("p",[t._v("要往父組件傳遞的話，可以使用 "),a("code",[t._v("this.$emit")]),t._v(" 往父組件傳遞訊息")]),t._v(" "),a("p",[t._v("假如使用了 "),a("code",[t._v("this.$emit('CustomEvent')")])]),t._v(" "),a("p",[t._v("父組件可以透過 "),a("code",[t._v('<ChildrenComponent @CustomEvent="SomeHandler" />')]),t._v(" 的方式處理")]),t._v(" "),a("p",[t._v("這就是2個方向的one-way-data-binding")]),t._v(" "),a("p",[t._v("而這有語法糖 "),a("code",[t._v(".sync")]),t._v(" 可以包裝成 two-way-data-binding")])]),t._v(" "),a("li",[a("p",[t._v("當父組件使用子組件後，想要在子組件內寫html，可以使用 "),a("code",[t._v("slot")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("father")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("I want write something here"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("father")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- children.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("當資料的傳遞必須透過多層的組件由上傳遞時，可以使用 "),a("code",[t._v("provide/inject")])])]),t._v(" "),a("li",[a("p",[t._v("當資料的傳遞必須透過多層的組件由下往上傳遞時，可以使用 vuex store")])]),t._v(" "),a("li",[a("p",[t._v("組件有許多生命週期，像是建立、掛載到html、從html上卸載、等等等")]),t._v(" "),a("p",[t._v("你可以在不同的生命週期處理對應的事")]),t._v(" "),a("p",[t._v("像是在掛載到 html 上之前( Mounted() )前，先準備好資料")]),t._v(" "),a("p",[t._v("在組件被移除前( beforeDestroyed() )前，把 event listener 清掉")])]),t._v(" "),a("li",[a("p",[t._v("當 css 樣式只希望作用在當前組件，又不想面臨作用域問題的話，可以使用 scoped")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    // 裏頭的style只會作用在"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"當前"')]),t._v("組件\n    // 影響不了外部組件\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("若想寫 scss 也是可以的")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    // ...\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),a("h1",{attrs:{id:"備註"}},[t._v("備註")]),t._v(" "),a("p",[t._v("以上從比較全域的角度談論了 Vue 的一些相關內容")]),t._v(" "),a("p",[t._v("接著下一篇將會提到 vue 的一些常見語法")]),t._v(" "),a("p",[t._v("此外，這邊提到的算是 vue 的一些相關內容")]),t._v(" "),a("p",[t._v("建議當遇到一些細節不是很清楚時，還是可以再額外多了解一下")]),t._v(" "),a("p",[t._v("比方說網頁的特效可以用 "),a("code",[t._v("transition")]),t._v(" 做到")]),t._v(" "),a("p",[t._v("vue 跟後端做結合， vue 的生命週期，等等")])])},[],!1,null,null,null);s.default=e.exports}}]);