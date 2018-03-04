---
title: Jekyll highlight syntax break indent
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
excerpt: Jekyll hightlighter 縮排不正常顯示
last_modified_at: 
categories:
- Development
- Jekyll
tags:
- blog
- dev
- syntax hightlighter
---

使用Jekyll 官網範例上的 highlight 的話，有可能會讓indent直接跑掉

[這問題沒想到Stackoverflow上也有人問過了](https://stackoverflow.com/questions/33417792/markdown-display-incorrect-when-add-code-block-in-list/33428127)

最終我找到的解法，就是使用 kramdown + rough

[解法源自於此](https://github.com/jekyll/jekyll/issues/4619)，最終作法很簡單

1. highlight改成使用**```**

    而不要使用{% raw %} **{% highlight %}** {% endraw %}

    如以下範例，將#拿掉就可以了

    ```python
#```python
def helloworld():
    print("Hello, world!")
#```
    ```

2. 在config檔上設定讓kramdown + rough可以正常顯示行號

    範例如下:

    ```yaml
    # Conversion
    markdown: kramdown
    highlighter: rouge

    # Markdown Processing
    kramdown:
      input: GFM
      syntax_highlighter_opts:
        # Rouge Options › https://github.com/jneen/rouge#full-options
        css_class: 'highlight'
        #line_numbers: true # bad idea, spans don't need linenos and would inherit this option
        span:
          line_numbers: false
        block:
          line_numbers: true
          start_line: 1
    ```