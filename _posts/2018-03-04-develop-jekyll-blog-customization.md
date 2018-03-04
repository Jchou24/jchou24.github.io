---
title: Develop Jekyll Blog - Customization
layout: post
header:
  overlay_color: 
  overlay_image: 
  image: 
  caption: 
comments: true
share: true
related: true
toc: true
sidebar:
  nav: ''
  image: ''
excerpt: 客製化 Minimal Mistake
last_modified_at:
categories:
- Development
- Jekyll
tags:
- blog
- dev
---

這個Blog頁面所呈現的各個板塊，基本上都是使用[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)

這個Jekyll主題所開發的templete去產生出來的

但也有些地方我根據自己的需求去做了修改

修改上目前都是版面微調，以及加入一些套件

# Jekyll 套件

  * ## [Jekyll Admin](https://github.com/jekyll/jekyll-admin)

    主要是讓local端開發時，可以有個admin介面去編輯檔案

    像是設定檔，或寫markdown文章，他可以即時在旁邊先預覽效果

    不過由於我的頁面呈現有些是用Javascript產生出來的

    因此即時呈現有的內容會看不到，像是UML的東西

    * ### 安裝

      安裝上很簡單，只要在_config.yml中加入

      ```yaml
      plugins:
        - jekyll-admin
      ```

    * ### 使用

      輸入網址 [http://localhost:4000/admin](http://localhost:4000/admin) 就可以進去使用了!

# Javascript 套件

  * ## Mermaid UML

    Mermaid是一個可以繪畫UML圖形的js套件

    最一開始我是從[stackedit](https://stackedit.io/app)看到的

    * ### Jekyll Mermaid

      本來我想找看看Jekyll有沒有相關的支援套件，這樣我只要在設定檔寫好就好了

      不找還好，一找就發現了還真的有[Jekyll Mermaid](https://github.com/jasonbellamy/jekyll-mermaid)這個東東

      但是稍微try了一下後發現，自己在local端可以正常運作，但上github.io後就不行了

      原來github.io針對jekyll套件，基於資安上的考量有做[白名單的限制](https://pages.github.com/versions/)

      所以想用Jekyll Mermaid是沒轍了 TT

    * ### Mermaid js 

      * [Mermaid](https://github.com/knsv/mermaid)

      * [說明頁](https://mermaidjs.github.io/)

      還好Mermaid有出js套件，而且使用方式也很簡單，至少在版本 7.1.2

      只要引用JS套件就可以用了，而且原生似乎就會標上一些呈現的CSS元素效果

      不知道原始碼是怎麼寫的，是寫得很暴力去上css還是很有藝術性的去處理呢?

      * ### Customization

        Anyway, 因為我不喜歡原生的CSS style，所以就還是手動去改了CSS了

        CSS原始檔是使用[forest style](https://cdnjs.cloudflare.com/ajax/libs/mermaid/7.0.0/mermaid.forest.css)，然後加上以下顏色的修改:

          > 1. #13540c > #81B1DB
          > 2. #cde498 > #BDD5EA
          > 3. green   > #555

      * ### 載入套件

        js套件怕載入的太早，文章還來不及被讀取到，所以放在尾端

        以本網誌的架構來說，就是放在 `_includes/footer/custom.html`

        css檔則要放在js的下面，不然css效果會被defaut蓋過去

        ```html
        <script src="//unpkg.com/mermaid@7.1.2/dist/mermaid.min.js"></script>
        <link rel="stylesheet" href="/assets/css/mermaid.css">
        ```

      * ### 使用範例
    
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

  * ## Katex
  
    Katex是一個可以將數學式呈現出來的套件

    * ### 加入Katex功能

      而我加入Katex功能的作法，主要參考這篇[https://xuc.me/blog/katex-and-jekyll/](https://xuc.me/blog/katex-and-jekyll/)
    
      1. 將以下js引用放在 `_includes/footer/custom.html`

          ```js
          <script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min.js"></script>
          ```

      2. 修改 **`assets/js/_main.js`**
    
          加上下面的code

          ```js
          // ====================================================================================================
          // handle Katex
          // ====================================================================================================
          $("script[type='math/tex']").replaceWith(
          function(){
            var tex = $(this).text();
            return "<span class=\"inline-equation\">" + 
                   katex.renderToString(tex) +
                   "</span>";
          });

          $("script[type='math/tex; mode=display']").replaceWith(
            function(){
              var tex = $(this).text();
              return "<div class=\"equation\">" + 
                     katex.renderToString("\\displaystyle "+tex) +
                     "</div>";
          });
          ```

    * ### 使用範例

      ```latex
      $$a^2 + b^2 = c^2$$
      ```

      $$a^2 + b^2 = c^2$$


# 版面調整

  * ## Tag Cloud

    受[這個網誌](https://rhadow.github.io/)啟發

    感覺弄一個Tag Cloud對網誌文章的整理還滿不錯的!

    幸好這功能網路上很多大大已經有實作了

    因此我這邊的Tag Cloud主要參考[Adding Tags to the Jekyll Theme, Minimal Mistakes 這篇](http://dareneiri.github.io/Jekyll-Themes-and-Tags/)而來

  * ## 小功能

    * ### Back to top

      怎麼用CSS去刻

    * ### sidebar

      修了一些東西，像是background的顏色，border-radius，以及...

      * ### TOC

        由於本來的TOC需要在3欄式的畫面中呈現在最右邊

        但我又希望最右邊那欄的空間可以跟中間欄位合併

        讓內文的空間大一點，因此我就將TOC做到了最左邊的sidebar去了

        作法參考Minimal Mistake本身TOC的寫法後，將以下code放到 `_includes/sidebar.html`

        {% raw %}
        ```html        
        {% if page.toc %}
          {% assign nodes_count = page.content | split: '<h' %}
          {% if nodes_count.size > 1 %}
            <aside class="sidebar__left">
              <nav class="toc">
                <header><h4 class="nav__title"><i class="fas fa-{{ page.toc_icon | default: 'file-alt' }}"></i> {{ page.toc_label | default: site.data.ui-text[site.locale].toc_label }}</h4></header>
                {% include toc.html sanitize=true html=content h_min=1 h_max=5 class="toc__menu" %}
              </nav>
            </aside>
          {% endif %}
        {% endif %}        
        ```
        {% endraw %}

      * ### Recent Post

        由於想說想要在一個醒目的地方放上新增文章的資訊

        所以我就將這個資訊放在了sidebar中

        但這麼一來其實主頁也會顯示，但主頁的資訊本身就是在呈現新增文章

        因此我在 `_layouts/home.html` 的Yaml header

        加入了display_sidebar_recent_posts，並設為false，來控制主頁不顯示

        ```yaml
        sidebar:
          display_sidebar_recent_posts: false
        ```

        而在`_config.yml`中加上default設定，來讓display_sidebar_recent_posts 恆為true

        ```yaml
        defaults:
            values:
              sidebar:
                display_sidebar_recent_posts: true
        ```

        這樣除了主頁就預設都會顯示了!

        再來就是要將顯示新文章的code加上了

        參考Minimal Mistake `_includes/archive-single.html`的寫法 將以下code放到 `_includes/sidebar.html`

        {% raw %}
        ```html        
        {% if site.posts.size > 0 and page.sidebar.display_sidebar_recent_posts %}
          <div class="sidebar_recent_posts">
            <h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>
            {% for post in site.posts limit:5 %}  
              <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
              <p class="archive__item-excerpt page__meta"><strong><i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i> </strong> <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></p>
              <hr>
            {% endfor %}  
          </div>
        {% endif %}  
        ```
        {% endraw %}
