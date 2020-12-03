(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1243:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("router-link",{attrs:{to:"/Coding/Website/vue-dotnetcore-scaffolding/authorization.html"}},[t._v("承接上篇")]),t._v("，用了role-based authorization機制")],1),t._v(" "),e("p",[t._v("讓存取後端時，必須通過授權機制的審核才能存取資源")]),t._v(" "),e("p",[t._v("在這篇，我想要稍微練習一下，更加貼近真實應用的狀況")]),t._v(" "),e("h1",{attrs:{id:"情境"}},[t._v("情境")]),t._v(" "),e("p",[t._v("當user使用一個有會員機制的網站時，一開始一定需要先註冊帳號")]),t._v(" "),e("p",[t._v("而當網站本身還要做權限控管的機制的話，那就必須要由一個相對權限高的人，來調整user的權限")]),t._v(" "),e("p",[t._v("而當user擁有應對的權限後，才能夠存取後端對應權限的資源")]),t._v(" "),e("p",[t._v("以下影片為上述的示意")]),t._v(" "),e("p",[e("video",{attrs:{controls:"",preload:"metadata"}},[e("source",{attrs:{type:"video/mp4",src:a(817)}}),t._v("\nYour browser does not support playing HTML5 video. You can "),e("a",{attrs:{href:"./img-user-setting/user-setting(2020-12-03).mp4",download:""}},[t._v("download a copy of the video file")]),t._v(" instead.\n")])]),t._v(" "),e("h1",{attrs:{id:"目標"}},[t._v("目標")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("新增一個註冊頁讓User進行註冊")]),t._v(" "),e("p",[t._v("註冊成功後，出現請等候管理員開通的字")])]),t._v(" "),e("li",[e("p",[t._v("新增一個管理員頁面")]),t._v(" "),e("p",[t._v("讓管理員可以開通帳號，並調整帳號的權限")])]),t._v(" "),e("li",[e("p",[t._v("新增一個個人設定頁")]),t._v(" "),e("p",[t._v("用以調整user的設定:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("顯示名稱")])]),t._v(" "),e("li",[e("p",[t._v("變更密碼")])])]),t._v(" "),e("p",[t._v("以及觀看帳號的資訊:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("帳號是否被開通了")])]),t._v(" "),e("li",[e("p",[t._v("Email")])]),t._v(" "),e("li",[e("p",[t._v("目前擁有哪些 Roles")])])])])]),t._v(" "),e("h1",{attrs:{id:"架構設計"}},[t._v("架構設計")]),t._v(" "),e("p",[t._v("由於想稍微貼近一點真實狀況，但又想避免在非本文關注的焦點上，實作的過於嚴謹")]),t._v(" "),e("p",[t._v("所以一些資安上有疑慮的作法，這邊就先不處理得太仔細")]),t._v(" "),e("h2",{attrs:{id:"前端"}},[t._v("前端")]),t._v(" "),e("p",[t._v("在前端的部分，大致處理的方向有")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("routing")])]),t._v(" "),e("li",[e("p",[t._v("新增對應的3個頁面")])]),t._v(" "),e("li",[e("p",[t._v("新增更改資料時對應的API")])]),t._v(" "),e("li",[e("p",[t._v("Navigation要能根據user的role調整顯示的內容")])]),t._v(" "),e("li",[e("p",[t._v("由於使用了typescript，因此需要新增對應的資料格式定義")])])]),t._v(" "),e("h2",{attrs:{id:"後端"}},[t._v("後端")]),t._v(" "),e("p",[t._v("在後端的部分，大致處理的方向有")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("新增AdminController.cs，來處理這次的API")])]),t._v(" "),e("li",[e("p",[t._v("調整 authorization action filter，新增帳號狀態的判定")])]),t._v(" "),e("li",[e("p",[t._v("實作ORM many-to-many 的 update 邏輯")])]),t._v(" "),e("li",[e("p",[t._v("建立資料格式對應的 data model")])])]),t._v(" "),e("h1",{attrs:{id:"開發思路"}},[t._v("開發思路")]),t._v(" "),e("p",[t._v("前端部分可以參考"),e("a",{attrs:{href:"https://github.com/Jchou24/vue3-donetcore3-spa-user-setting-template/commit/19e9e9ea395c2463e793b550dffda842192c51be",target:"_blank",rel:"noopener noreferrer"}},[t._v("這邊"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("後端部分可以參考"),e("a",{attrs:{href:"https://github.com/Jchou24/vue3-donetcore3-spa-user-setting-template/commit/033450a158725b4ba835bb027418c27ae65de666",target:"_blank",rel:"noopener noreferrer"}},[t._v("這邊"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"註冊帳號"}},[t._v("註冊帳號")]),t._v(" "),e("p",[t._v("一般註冊帳號，有的網站做的比較動態的，會在輸入帳號時，就即時的顯示該帳號是否有被用過")]),t._v(" "),e("p",[t._v("以及輸入密碼的同時，就同步顯示密碼強度")]),t._v(" "),e("p",[t._v("那這邊我們簡單起見，就還是交由後端驗證為主，並把驗證後的結果回傳到前端")]),t._v(" "),e("h2",{attrs:{id:"開通帳號"}},[t._v("開通帳號")]),t._v(" "),e("p",[t._v("在admin頁，允許admin開通帳號，而這個功能的實作有很多方式")]),t._v(" "),e("p",[t._v("而我這邊是用比較偷懶一點的方式去做")]),t._v(" "),e("p",[t._v("針對更新帳號的處理，會全部交由 "),e("code",[t._v("api/Admin/UpdateAccounts")]),t._v(" 這支API來處理")]),t._v(" "),e("p",[t._v("並且API本身以接收多個帳號的方式來做處理")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IActionResult")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateAccounts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IEnumerable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UpdateAccount"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" updateAccounts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("而開通帳號會是以點擊button的方式，來一筆一筆的呼叫 "),e("code",[t._v("UpdateAccounts")]),t._v(" 這支API來更新資料")]),t._v(" "),e("p",[t._v("而更新資料時，由於更改帳號權限也是呼叫這一支API")]),t._v(" "),e("p",[t._v("因此"),e("code",[t._v("UpdateAccount")]),t._v("這個data model，刻意在各欄位上設計 isUpdatable 的欄位")]),t._v(" "),e("p",[t._v("用以讓後端直接判斷哪些欄位是會被更新的，這樣後端就不用再判斷要更新哪些資料了")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UpdateAccount")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Id "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsUpdateName "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AccountStatus")]),t._v(" AccountStatus "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsUpdateAccountStatus "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ICollection"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" UserRoles "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsUpdateUserRoles "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DecryptId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    \n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"更改帳號權限"}},[t._v("更改帳號權限")]),t._v(" "),e("p",[t._v("而更改帳號權限這邊，則是採用比較類似表單傳送的方式做設計")]),t._v(" "),e("p",[t._v("並且用了一個防呆機制，透過"),e("code",[t._v("isUpdateAccounts")]),t._v("來判斷user是否有調整了表單")]),t._v(" "),e("p",[t._v("而判斷邏輯則是比對表單上的user role是否與原始資料相同")]),t._v(" "),e("p",[t._v("而當不同時，user一點擊update按鈕，就會呼叫 "),e("code",[t._v("UpdateAccounts")]),t._v(" 這支API，並一次處理多筆資料")]),t._v(" "),e("p",[t._v("不過必須說的是，這樣的 UI 呈現方式，在資料量大的時候是非常不憂的")]),t._v(" "),e("p",[t._v("因為網頁上會直接顯示所有的 user 資料")]),t._v(" "),e("p",[t._v("實務上，還是會添加 pagination 的功能，一次要部分的資料")]),t._v(" "),e("p",[t._v("甚至搭配 filter，或search的功能，來讓 admin 更快地找到他想找的人")]),t._v(" "),e("h2",{attrs:{id:"個人設定頁"}},[t._v("個人設定頁")]),t._v(" "),e("p",[t._v("個人設定頁就比較單純一點")]),t._v(" "),e("p",[t._v("一些資料是單純的顯示(Account Status、Email、Roles)")]),t._v(" "),e("p",[t._v("而 Name 則是做字串比對，跟原先的不同才允許更新，並且更新時，會連動更新 nav 上的顯示")]),t._v(" "),e("p",[t._v("而密碼的更新，則是做了double check，並且還要再輸入一次原先的密碼")]),t._v(" "),e("h1",{attrs:{id:"總結來說"}},[t._v("總結來說")]),t._v(" "),e("p",[t._v("這次做了一些讓網站的一些設定值可以線上修改的功能，讓一些重要的參數不用進DB也可以修改")]),t._v(" "),e("p",[t._v("像是調整帳號是否已啟用，以及帳號可以擁有什麼權限，等等")]),t._v(" "),e("p",[t._v("但也因為做得比較簡單一點，因此user role是寫死的")]),t._v(" "),e("p",[t._v("一些參數前後端是寫死在code裡的")]),t._v(" "),e("p",[t._v("如果想要讓網站功能更加動態一點，這些參數寫進DB中")]),t._v(" "),e("p",[t._v("並由啟動階段來讀取他們，初始化網站，可能會是比較好一點的作法")]),t._v(" "),e("p",[t._v("此外在更新資料的機制上，其實這篇的做法就是資料庫的id前後端跑")]),t._v(" "),e("p",[t._v("這樣其實滿容易造成資安的風險")]),t._v(" "),e("p",[t._v("好一點的作法，應該是要將id加密後傳到前端，後端處理前再解密會好一點")]),t._v(" "),e("p",[t._v("另外，在網站的UI上，也比較陽春了一點")]),t._v(" "),e("p",[t._v("但若想要套用一些UI library，短期內可能會比較困難一些")]),t._v(" "),e("p",[t._v("畢竟vue3出的還不夠久，許多套件其實都還在規劃升級，或開發階段")]),t._v(" "),e("p",[t._v("只能說，vue3新推的功能是真的香")]),t._v(" "),e("p",[t._v("但若想要現在就使用vue3上營運環境")]),t._v(" "),e("p",[t._v("那可能需要有十足的心理準備，許多輪子可能都要自己重刻")]),t._v(" "),e("p",[t._v("或許等個半年(2021/6)，或甚至一年後(2021/12)，這種狀況就會有很大的改善了吧")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Jchou24/vue3-donetcore3-spa-user-setting-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整的Code在此"),e("OutboundLink")],1),t._v(" 歡迎參考看看啦")])])},[],!1,null,null,null);s.default=n.exports},817:function(t,s,a){t.exports=a.p+"assets/media/user-setting(2020-12-03).6e33a137.mp4"}}]);