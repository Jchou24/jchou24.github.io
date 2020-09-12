(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1132:function(t,a,s){"use strict";s.r(a);var n=s(22),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("一般在使用django快速開發網站的時候，DB方面使用Sqlite3，對開發會方便很多")]),t._v(" "),s("p",[t._v("因為少掉了非常大量DB方面的設置，當然換個角度想，也算是在埋技術債啦")]),t._v(" "),s("p",[t._v("畢竟相對Postgresql，Sqlite3比較不適合用在營運環境上一點")]),t._v(" "),s("p",[t._v("但當系統早期建置時，需求相當不穩定下，與其追求DB的穩定，使用ORM，早點把系統雛形開發出來")]),t._v(" "),s("p",[t._v("再為了營運需求，使用更符合的DB也是個策略")]),t._v(" "),s("p",[t._v("而這篇最主要紀錄的，就是將Sqlite3上的資料快速的轉換到Postgresql上")]),t._v(" "),s("h1",{attrs:{id:"可能方案"}},[t._v("可能方案")]),t._v(" "),s("p",[t._v("這邊介紹一些轉換方案，這些方案都會有適合他的情況，基本上可以挑狀況去用")]),t._v(" "),s("p",[t._v("至於我覺得最泛用的方法，寫在下方最終方案中")]),t._v(" "),s("h2",{attrs:{id:"暴力法"}},[t._v("暴力法")]),t._v(" "),s("p",[t._v("用sqlite指令，直接dump資料，再把dump出來的資料格式轉成Postgresql看得懂的格式")]),t._v(" "),s("p",[t._v("或者也可以透過SQLiteStudio這樣的tool去dump資料")]),t._v(" "),s("p",[t._v("dump的格式、資料量，會是個大問題，再來如果資料有許多reference關西的話")]),t._v(" "),s("p",[t._v("資料輸出輸入的順序也不能有錯，比較適合在資料量小，schema單純的情況下用")]),t._v(" "),s("p",[t._v('但好處是，環境相依低，基本上各OS一定可以匯出匯入這些"格式正確"的資料')]),t._v(" "),s("h2",{attrs:{id:"pgloader"}},[t._v("pgloader")]),t._v(" "),s("p",[t._v("可以直接讓Postgresql自己去讀取Sqlite3上面的資料")]),t._v(" "),s("p",[t._v("看說明是寫的很美好，但有個問題，就是windows上不是太好用")]),t._v(" "),s("p",[t._v("光是要把pgloader這個指令安裝起來就是個大問題")]),t._v(" "),s("p",[t._v("有些人是建議安裝Windows Subsystem for Linux，但這流程就會變得有點長了")]),t._v(" "),s("p",[t._v("但如果是在Linux based上的機器做轉換的話，pgloader應該還是個不錯的做法")]),t._v(" "),s("h1",{attrs:{id:"最終方案"}},[t._v("最終方案")]),t._v(" "),s("p",[t._v("主要參考自"),s("a",{attrs:{href:"https://dev.to/coderasha/how-to-migrate-data-from-sqlite-to-postgresql-in-django-182h",target:"_blank",rel:"noopener noreferrer"}},[t._v("這篇文章"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("簡單來說，就是使用Django指令把資料dump出來，再import回去")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 將資料全部倒到 datadump.json")]),t._v("\npython manage.py dumpdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" datadump.json\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更改DB連線設定後，重新建立對應")]),t._v("\npython manage.py migrate --run-syncdb\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 開啟一個django的shell，並清掉一些設定資料")]),t._v("\npython manage.py shell\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" from django.contrib.contenttypes.models "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" ContentType\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ContentType.objects.all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" quit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 將資料倒回")]),t._v("\npython manage.py loaddata datadump.json\n")])])]),s("p",[t._v("這樣就能很快地將資料進行移轉了")]),t._v(" "),s("p",[t._v("這個方法唯一的限制是，他是透過django指令，還有ORM機制來輔助的")]),t._v(" "),s("p",[t._v("所以系統如果不是用Django開發，ORM機制建立DB的話，就不能這樣轉換資料了")])])},[],!1,null,null,null);a.default=e.exports}}]);