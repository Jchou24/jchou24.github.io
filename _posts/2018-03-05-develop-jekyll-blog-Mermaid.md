---
layout: post
title: Develop Jekyll Blog - Mermaid UML
excerpt: 在Blog上製作流程圖
last_modified_at: 
categories:
- Development
- Jekyll
tags:
- blog
- dev
- Mermaid UML
header:
  overlay_color:
  overlay_image: 
  image: 
  caption: 
sidebar:
  nav: ''
  image: ''
---

Mermaid UML 是一個可以繪畫UML圖形的js套件

最一開始我是從[stackedit](https://stackedit.io/app)看到的

* # Jekyll Mermaid

  本來我想找看看Jekyll有沒有相關的支援套件，這樣我只要在設定檔寫好就好了

  不找還好，一找就發現了還真的有[Jekyll Mermaid](https://github.com/jasonbellamy/jekyll-mermaid)這個東東

  但是稍微try了一下後發現，自己在local端可以正常運作，但上github.io後就不行了

  原來github.io針對jekyll套件，基於資安上的考量有做[白名單的限制](https://pages.github.com/versions/)

  所以想用Jekyll Mermaid是沒轍了 TT

* # Mermaid js 

  * [Mermaid](https://github.com/knsv/mermaid)

  * [說明頁](https://mermaidjs.github.io/)

  還好Mermaid有出js套件，而且使用方式也很簡單，至少在版本 7.1.2

  只要引用JS套件就可以用了，而且原生似乎就會標上一些呈現的CSS元素效果

  不知道原始碼是怎麼寫的，是寫得很暴力去上css還是很有藝術性的去處理呢?

  * ## Customization

    Anyway, 因為我不喜歡原生的CSS style，所以就還是手動去改了CSS了

    CSS原始檔是使用[forest style](https://cdnjs.cloudflare.com/ajax/libs/mermaid/7.0.0/mermaid.forest.css)，然後加上以下顏色的修改:

      > 1. #13540c > #81B1DB
      > 2. #cde498 > #BDD5EA
      > 3. green   > #555

  * ## 載入套件

    js套件怕載入的太早，文章還來不及被讀取到，所以放在尾端

    以本網誌的架構來說，就是放在 `_includes/footer/custom.html`

    css檔則要放在js的下面，不然css效果會被defaut蓋過去

    ```html
    <script src="//unpkg.com/mermaid@7.1.2/dist/mermaid.min.js"></script>
    <link rel="stylesheet" href="/assets/css/mermaid.css">
    ```

  * ## 使用範例

    使用以下範例可以變成UML圖

    ```
    <div class="mermaid">
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    </div>
    ```
    
    <div class="mermaid">
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    </div>