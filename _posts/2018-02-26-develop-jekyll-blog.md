---
title: Develop Jekyll Blog
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
excerpt: with minimal-mistake
last_modified_at:
categories:
- Development
- Jekyll
tags:
- blog
- dev
---

最近心血來潮想寫一些技術上的Blog，因此想來開發個專屬的Blog系統

但是從頭自己打造實在是太累了，於是我稍微盤點了一下需求

並找尋適合的方案來進行開發
  
# 需求

  * ## Write once run erverywhere.
     
    方便的內文撰寫格式，像是markdown
        
    讓我可以專注在寫文章
        
    並且以後若有遷移的需求，也可以較簡單的做遷移
        
    像是找到好找轉換工具之類的

  * ## 站在巨人的肩膀上

    讓我可以在好的基礎上開發，像是...

    * ### Application Level

      * RWD

      * Search

      * Tag機制

      * Archive(歸檔)機制

    * ### Infrastructure Level

      免煩惱的server空間，可以幫我做掉
        
        * server資安問題
        
        * 環境建置
        
          * 套件
          
          *  OS
         
          *  Domain Name
          
          *  硬體設備
          
            * 記憶體
            
            * CPU
            
            * 硬碟

# 開發


  * ## Jekyll

    * 靜態網站產生器
    * [官網](https://jekyllrb.com/)
    * [中文官網](http://jekyllcn.com/)

    此Blog系統主要使用Jekyll這個框架開發

    他可以將_posts/資料夾裏頭的markdown檔案依照一定的機制轉換成網頁

    因此很適合用來產生靜態網站

    又由於他吃的文章格式都是目前滿主流的格式，像是markdown

    因此可以很大程度的解決 **Write once run erverywhere** 的需求

    至於擴充性上，Jekyll可以用Ruby、Javascript去寫很多擴充功能 

  * ## [Minimal Mistakes Jekyll Theme](https://github.com/mmistakes/minimal-mistakes)

    Minimal Mistakes 是基於 Jekyll 開發出來的主題

    裏頭已經整合開發了很多很好的功能

    像是搜尋、RWD、訪客留言、版型...bla bla bla

    而這些都只要在_config.yml去做設定就好，真的非常方便

    而這個主題本身的程式品質滿棒的，很多可以輕易調整或擴充的地方

    像是css是用sass轉出來的，而sass本身又有做好很多檔案、變數、mixin的設計

    然後include裡面也已經做好了很多的template可以套用或修改

    原作者真的做得滿用心的!

  * ## Customization

    客製化內容獨立出來[在此]({% post_url 2018-02-25-develop-jekyll-blog-customization %})

# Deploy

  * ## Github.io

    Infrastructure Level 的需求完全都靠Github解決了!

    而且因為用了Github，因此連Blog的內容都可以版控了XD

    不過目前[部署的步驟](https://github.com/Jchou24/jchou24.github.io/README.md)還是有點繁瑣

    之後再來慢慢把他自動化吧!

