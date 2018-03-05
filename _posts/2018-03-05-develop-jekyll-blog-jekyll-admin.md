---
layout: post
title: Develop Jekyll Blog - Jekyll Admin
excerpt: Jekyll Blog編輯器
last_modified_at: 
categories:
- Development
- Jekyll
tags:
- blog
- dev
- Jekyll Admin
header:
  overlay_color:
  overlay_image: 
  image: 
  caption: 
sidebar:
  nav: ''
  image: ''
---

[Jekyll Admin](https://github.com/jekyll/jekyll-admin) 主要是讓local端開發時，可以有個admin介面去編輯檔案

像是設定檔，或寫markdown文章，他可以即時在旁邊先預覽效果

不過由於我的頁面呈現有些是用Javascript產生出來的

因此即時呈現有的內容會看不到，像是UML的東西

* ## 安裝

  安裝上很簡單，只要在_config.yml中加入

  ```yaml
  plugins:
    - jekyll-admin
  ```

* ## 使用

  輸入網址 [http://localhost:4000/admin](http://localhost:4000/admin) 就可以進去使用了!