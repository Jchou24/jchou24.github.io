---
layout: post
title: Develop Jekyll Blog - TOC
excerpt: 修改原生TOC功能
last_modified_at: 
categories:
- Development
- Jekyll
tags:
- blog
- dev
- TOC
header:
  overlay_color:
  overlay_image: 
  image: 
  caption: 
sidebar:
  nav: ''
  image: ''
---

Minimal Mistake用到的TOC(Table Of Content)會自動根據`<hN>`(N=1,2,3,4,5,6)去產生

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