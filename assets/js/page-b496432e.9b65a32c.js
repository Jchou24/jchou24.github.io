(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1077:function(t,n,e){"use strict";e.r(n);var s=e(22),r=Object(s.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Code分享\n變數命名\n單複數\nPeople, Person\nforeach( var people in person )")]),t._v(" "),e("pre",[e("code",[t._v("\tboolean變數 isAble\n\tjquery變數 $aaa\n\t計算出boolean值 CanDoSomething\n\n責任鍊\n\t回傳ProcessResult\n\t\n\tProcessHandler.Run\n\n\tProcessResult\n\t\tErrorCode\n\t\t\tSystemCode\n\t\t\tSystemMessage\n\t\t\tClientCode\n\t\t\tClientMessage\n\t\tIsSuccess\n\t\tPayload: BasePayload, IPayload\n\t\tNextAction\n\t\t\t\n\nInterface payload技巧\n實作某個Interface，到instance再轉型成自己想要的物件\n\nif else盡量不要巢狀\n\tEX\n\t\tint statusCode = 200;\n\t\tif(NullOrempty){\n\t\t\tstatusCode = 400;\n\t\t}else{\n\t\t\tif(){}\n\t\t\telse(){}\n\t\t}\n\t\treturn statusCode;\n\t\t============================\n\t\t// 獨立成function\n\t\tpublic int GetStatusCode(){\n\t\t\tif(NullOrempty){\n\t\t\t\treturn 400;\n\t\t\t}\n\n\t\t\tif(){\n\t\t\t\treturn ...\n\t\t\t}\n\n\t\t\treturn 200;\n\t\t}\n\nswitch + enum\n\t將情形明確條列\n\t有default提醒預設行為\n\t在看case的時候也有enum可以看到全部的情況，比一堆if else if好\n\t可讀性比較高\n\t擴充性比較好\n\nMVC\n\t權責分離\n\t\tEx SmsOtp分別存變數到Session中，改存DataModel到Session中\n\nData Driven, Event Prevent\n\nconstructor塞值\n\t最好在property前面加上this\n\tAAA(string bbb){\n\t\tthis.Bbb = bbb;\n\t}\n\n變數rename的技巧\n\t在不依靠reference rename的情況下\n\t什麼時候可以直接replace all\n\t基本思路\n\t\t只要replace後的名稱，目前沒人用，就可以replace all\n\nfunction更新後之向下兼容機制\n\t1. 嚴謹的更改邏輯，讓既有之input output不受影響，但又能應對新邏輯\n\t2. 增加參數後，帶好default值\n\t3. 開新的function\n")])]),t._v(" "),e("p",[t._v("Progressive Design 漸進式開發\n先做出最小可提供服務之系統，確認系統價值\n再決定後續如何精進")]),t._v(" "),e("pre",[e("code",[t._v("而一開始開發時留好精進空間，避免後續被技術債壓垮\n")])])])},[],!1,null,null,null);n.default=r.exports}}]);