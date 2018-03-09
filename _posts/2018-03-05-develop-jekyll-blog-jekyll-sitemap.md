---
layout: post
title: Develop Jekyll Blog - Jekyll Sitemap
excerpt: 產生網站sitemap
last_modified_at: 2018/03/09 21:25
categories:
- Development
- Jekyll
tags:
- blog
- dev
- Jekyll Sitemap
header:
  overlay_color:
  overlay_image: 
  image: 
  caption: 
sidebar:
  nav: ''
  image: ''
---

Sitemap可以

1. 做為網站的導覽，顯示出網站有哪些頁面，讓訪客知道這個網站有哪些內容

2. 用做SEO，讓爬蟲知道怎麼去爬取網站比較好

對於1，由於我希望用分類、分Tag的方式去做整理呈現

因此對於我的網誌來說，實現sitemap最主要的目的是SEO

像是Google SEO就可以透過上傳sitemap，來讓Google"記憶"下我的文章，讓文章可以被搜尋

## Jekyll Sitemap

[Jekyll Sitemap](https://github.com/jekyll/jekyll-sitemap)是一個可以產生xml格式sitemap的Jekyll套件

使用方式很簡單，只要在`_config.yml`上加上設定即可，如以下

```md
plugins:
  - jekyll-sitemap
```

這樣只要Jekyll在Github上生成網站時，就會產生`網址/sitemap.xml`的sitemap了