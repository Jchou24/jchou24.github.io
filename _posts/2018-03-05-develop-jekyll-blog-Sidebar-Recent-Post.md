---
layout: post
title: Develop Jekyll Blog - Sidebar Recent Post
excerpt: 在Sidebar加入新增文章的顯示
last_modified_at: 
categories:
- Development
- Jekyll
tags:
- blog
- dev
- Sidebar
- Recent Post
header:
  overlay_color:
  overlay_image: 
  image: 
  caption: 
sidebar:
  nav: ''
  image: ''
---

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