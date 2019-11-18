(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1054:function(t,e,s){"use strict";s.r(e);var a=s(20),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"emphasize"}},[t._v("Emphasize")]),t._v(" "),s("pre",[s("code",[t._v("*123*\n\n**123**\n\n***123***\n")])]),t._v(" "),s("p",[s("em",[t._v("123")])]),t._v(" "),s("p",[s("strong",[t._v("123")])]),t._v(" "),s("p",[s("em",[s("strong",[t._v("123")])])]),t._v(" "),s("h1",{attrs:{id:"hr"}},[t._v("hr")]),t._v(" "),s("pre",[s("code",[t._v("---\n")])]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"tables"}},[t._v("Tables")]),t._v(" "),s("h2",{attrs:{id:"basic-table"}},[t._v("Basic Table")]),t._v(" "),s("pre",[s("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Tables")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("col 3 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),s("tr",[s("td",[t._v("col 2 is")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),s("tr",[s("td",[t._v("zebra stripes")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),s("h2",{attrs:{id:"cross-cell-table"}},[t._v("Cross-Cell Table")]),t._v(" "),s("h3",{attrs:{id:"multi-line-in-cell"}},[t._v("Multi-Line in Cell")]),t._v(" "),s("pre",[s("code",[t._v("    First header | Second header\n    -------------|---------------\n    List:        | More  \\\n    - over       | data  \\\n    - several    |       \\\n    - lines      |\n")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("First header")]),t._v(" "),s("th",[t._v("Second header")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("p",[t._v("List:")]),t._v(" "),s("ul",[s("li",[t._v("over")]),t._v(" "),s("li",[t._v("several")]),t._v(" "),s("li",[t._v("lines")])])]),t._v(" "),s("td",[s("p",[t._v("More\ndata")])])])])]),t._v(" "),s("h3",{attrs:{id:"merge-column"}},[t._v("Merge-Column")]),t._v(" "),s("pre",[s("code",[t._v("    |              |          Grouping           ||\n    |First Header  | Second Header | Third Header |\n    | ------------ | :-----------: | -----------: |\n    | Content      |          *Long Cell*        ||\n    | Content      |   **Cell**    |         Cell |\n    | New section  |     More      |         Data |\n    | And more     | With an escaped '\\\\|'       ||\n")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[t._v("Grouping")])]),t._v(" "),s("tr",[s("th",[t._v("First Header")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Second Header")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("Third Header")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Content")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[s("em",[t._v("Long Cell")])])]),t._v(" "),s("tr",[s("td",[t._v("Content")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("Cell")])]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("Cell")])]),t._v(" "),s("tr",[s("td",[t._v("New section")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("More")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("Data")])]),t._v(" "),s("tr",[s("td",[t._v("And more")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"2"}},[t._v("With an escaped '\\|'")])])])]),t._v(" "),s("h3",{attrs:{id:"merge-row"}},[t._v("Merge-Row")]),t._v(" "),s("pre",[s("code",[t._v("    First header | Second header\n    -------------|---------------\n    Merged       | Cell 1\n    ^^           | Cell 2\n    ^^           | Cell 3\n")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("First header")]),t._v(" "),s("th",[t._v("Second header")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{attrs:{rowspan:"3"}},[t._v("Merged")]),t._v(" "),s("td",[t._v("Cell 1")])]),t._v(" "),s("tr",[s("td",[t._v("Cell 2")])]),t._v(" "),s("tr",[s("td",[t._v("Cell 3")])])])]),t._v(" "),s("h1",{attrs:{id:"delete"}},[t._v("Delete")]),t._v(" "),s("pre",[s("code",[t._v("~~~123~~~\n~~456~~\n")])]),t._v(" "),s("p",[t._v("~"),s("s",[t._v("123")]),t._v("~")]),t._v(" "),s("p",[s("s",[t._v("456")])]),t._v(" "),s("h1",{attrs:{id:"subscript"}},[t._v("Subscript")]),t._v(" "),s("pre",[s("code",[t._v("A~B~\n\nCH~3~CH~2~OH\n\ntext~a\\ subscript~\n")])]),t._v(" "),s("p",[t._v("A"),s("sub",[t._v("B")])]),t._v(" "),s("p",[t._v("CH"),s("sub",[t._v("3")]),t._v("CH"),s("sub",[t._v("2")]),t._v("OH")]),t._v(" "),s("p",[t._v("text"),s("sub",[t._v("a subscript")])]),t._v(" "),s("h1",{attrs:{id:"superscript"}},[t._v("Superscript")]),t._v(" "),s("pre",[s("code",[t._v("A^B^\n\nH^2^0\n\ntext^a\\ superscript^\n")])]),t._v(" "),s("p",[t._v("A"),s("sup",[t._v("B")])]),t._v(" "),s("p",[t._v("H"),s("sup",[t._v("2")]),t._v("0")]),t._v(" "),s("p",[t._v("text"),s("sup",[t._v("a superscript")])]),t._v(" "),s("h1",{attrs:{id:"foot-note"}},[t._v("Foot Note")]),t._v(" "),s("pre",[s("code",[t._v("Hello World[^1]\n\nHere is a footnote reference,[^1] and another.[^longnote]\n\n[^1]: Here is the footnote.\n\n[^longnote]: Here's one with multiple blocks.\n")])]),t._v(" "),s("p",[t._v("Hello World"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])])]),t._v(" "),s("p",[t._v("Here is a footnote reference,"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1:1"}},[t._v("[1:1]")])]),t._v(" and another."),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])])]),t._v(" "),s("h1",{attrs:{id:"task-list"}},[t._v("Task List")]),t._v(" "),s("pre",[s("code",[t._v("- [X] item 1\n    * [X] item A\n    * [ ] item B\n        + [x] item a\n        + [ ] item b\n        + [x] item c\n    * [X] item C\n- [ ] item 2\n- [ ] item 3\n")])]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox",id:"task-item-6734210"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-6734210"}},[t._v(" item 1")]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox",id:"task-item-492218"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-492218"}},[t._v(" item A")])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox",id:"task-item-4798588"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-4798588"}},[t._v(" item B")]),t._v(" "),s("ul",{staticClass:"contains-task-list"},[s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox",id:"task-item-4260107"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-4260107"}},[t._v(" item a")])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox",id:"task-item-9782809"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-9782809"}},[t._v(" item b")])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox",id:"task-item-2443232"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-2443232"}},[t._v(" item c")])])])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox",id:"task-item-9972848"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-9972848"}},[t._v(" item C")])])])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox",id:"task-item-9100703"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-9100703"}},[t._v(" item 2")])]),t._v(" "),s("li",{staticClass:"task-list-item"},[s("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox",id:"task-item-2834324"}}),s("label",{staticClass:"task-list-item-label",attrs:{for:"task-item-2834324"}},[t._v(" item 3")])])]),t._v(" "),s("h1",{attrs:{id:"mark"}},[t._v("Mark")]),t._v(" "),s("pre",[s("code",[t._v("==mark me==\n")])]),t._v(" "),s("p",[s("mark",[t._v("mark me")])]),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[t._v("Here is the footnote. "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1:1"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[t._v("Here's one with multiple blocks. "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])])])])])},[],!1,null,null,null);e.default=i.exports}}]);