---
layout: post
title: Develop Jekyll Blog - Katex
excerpt: 在Blog上顯示數學式
last_modified_at: 
categories:
- Development
- Jekyll
tags:
- blog
- dev
- Katex
- Latex
header:
  overlay_color:
  overlay_image: 
  image: 
  caption: 
sidebar:
  nav: ''
  image: ''
---

Katex是一個可以將數學式呈現出來的套件

* ## 加入Katex功能

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

* ## 使用範例

  ```latex
  $$a^2 + b^2 = c^2$$
  ```

  $$a^2 + b^2 = c^2$$