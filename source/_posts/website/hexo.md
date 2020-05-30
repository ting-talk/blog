---

title: Hexo 静态博客优化清单  
date: 2017-07-17  
updated: 2020-02-24
categories: 网站搭建  
tags: Hexo  
permalink: hexo  
---

是 Hexo + NexT 让我重拾笔杆子，感谢开发者们和维护者们。

<!-- more -->

## 🍊[Gridea](https://gridea.dev/)

一个静态博客写作客户端：适合喜欢安安静静写博客的人。



## 👨‍💻[Easy Hexo](https://easyhexo.com/)

轻松入门 Hexo：适合喜欢折腾博客的人。



## 🤖[YAML 教程](http://www.ruanyifeng.com/blog/2016/07/yaml.html)

YAML 语言（/ˈjæməl/ ）的基本规则：
- 大小写敏感
- 使用缩进表示层级关系
- 缩进时不允许使用 `Tab` 键，只允许使用空格
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
- `#` 表示注释，从这个字符一直到行尾，都会被解析器忽略


## 🔧优化 URL

默认的 URL 是 `https://tingtalk.me/2019/08/17/Hexo使用技巧`

- **层级太深**：斜杠太多不利于搜索引擎的抓取。
- **包含中文**：URL 只能使用英文、数字和一些标点符号。如果包含中文，分享出现的链接可能是 `https://tingtalk.me/2019/08/17/Hexo%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7`，中文强制被转码成十六进制编码，又臭又长。

优化步骤如下：

1. 修改 `站点 _config.yml` 的 `permalink`（永久链接）为 `:title/`

    ```markdown
    # URL
    permalink: :title/ 
    ```

2. 在文章的 `Front Matter` 增加 `permalink: ` 的定义

    ```markdown
    ---
    
    title: Hexo Tips  
    date: 2019-08-17  
    categories: 博客  
    permalink: hexo-tips   
    
    ---
    
    让 Hexo 更优雅的小技巧。
    
    <!-- more -->
    
    ## Permalink 
    
    - 不要用中文
    - 用小写代替大写
    - 把 the、a、an 等去掉
    - 用连字符代替标点和空格
    
    ```

3. 优化之后的 URL 是 `https://tingtalk.me/hexo-tips`，简短有力，清晰明了。
4. 顺手把 Markdown 文档也命名为 `hexo-tips.md`。



## 🔧 优化分类


1. 在 `站点 _config.yml` 的 `category_map` 增加一个 `博客: blog ` 的分类

    ```yaml
    ---
    
    category_map:
      教程: tutorials
      日志: diaries
      生活: life
      科学上网: bypass-gfw
      数字生活: digital-life
      排版: typography
      博客: blog
    ```
    
2. 在文章 `Front Matter` 的 `categories: ` 直接用中文分类名 `博客`，就可以映射到 `https://tingtalk.me/categories/blog/`

    ```yaml
    ---
    
    title: Hexo Tips  
    date: 2019-08-17  
    categories: 博客  
    permalink: hexo-tips   
    
    ---
    
    ```

如果不在 `category_map` 定义 `博客: blog`，分享出去的链接就会是 `https://tingtalk.me/categories/%E5%8D%9A%E5%AE%A2/`，不雅观。



## 🐞半角标点

如何显示正确的英文半角标点符号，不被错误显示成中文全角标点符号，请在站点配置文件加上如下语句：

```
# Fix issue: halfwidth quotation marks rendered to fullwidth
## Reference: https://github.com/hexojs/hexo/issues/1981#issuecomment-229309844
marked:
  smartypants: false
```



## 🔒文章加密

你可能需要写一些私密的博客，通过密码验证的方式让人不能随意浏览。为了解决这个问题, 让我们有请 [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt/blob/master/ReadMe.zh.md)。

但是解密速度好像差强人意，可能是因为我的电脑和手机性能不足的原因。



## 👉Netlify 重定向

在 hexo 分支 `source` 下新建 `netlify.toml` 文件：

```
[[redirects]]
  from = "https://tingtalk.netlify.com/*"
  to = "https://tingtalk.me/:splat"
  status = 301
  force = true
```

部署之后，tingtalk.netlify.com 即可重定向至 tingtalk.me，有利于 SEO。



## 🗺️站点地图

1. 安装 [hexo-generator-seo-friendly-sitemap](https://github.com/ludoviclefevre/hexo-generator-seo-friendly-sitemap)
2. 向 [Google Search Console](https://search.google.com/search-console/) 提交找点地图：https://tingtalk.me/`sitemap.xml`



## 🔍Local Search

[hexo-generator-searchdb](https://github.com/theme-next/hexo-generator-searchdb): Seach data generator plugin for Hexo.






## 📰RSS

[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed): Feed generator for Hexo.





## 🖼️把图片放在 `_posts`

[hexo-asset-link](https://github.com/liolok/hexo-asset-link): Convert base-relative asset links to root-relative ones, so that user can insert assets like images in markdown way. 

教程：[如何为 Hexo 博文加入图片](https://liolok.github.io/zh-CN/How-to-Add-Image-to-Hexo-Blog-Post/#Hexo-文章资源文件夹)




## 💚修改 NexT

### 🖼️图片居中

打开 `themes/next/source/css/_schemes/Mist/_posts-expand.styl` 文件，找到 `.posts-expand` 中的 `.post-body img { margin: 0; }`，将之修改为 `.post-body img { margin: 0 auto; }` 即可：

```
 .post-body img {
    margin: 0 auto;
  }
```



### 📖阅读时长 

[hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time): Symbols count and time to read of articles plugin for Hexo.



### ⚡️quicklink

[quicklink](https://github.com/GoogleChromeLabs/quicklink): Faster subsequent page-loads by prefetching in-viewport links during idle time

