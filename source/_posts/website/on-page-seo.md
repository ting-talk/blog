---

title: 站内搜索引擎优化（On-Page SEO）   
date: 2019-11-24  
updated: 2019-11-24  
categories: 网站搭建  
tags: 搜索引擎优化  
permalink: on-page-seo  

---

牢牢记住：一切以用户体验为出发。

<!-- more -->

## 整体

- 标题、描述和链接一旦确认，就不要轻易去修改，否则影响网站的排名和权重。如果非要修改，需要慢慢的修改。将新增加的词加在最后，等收录排名稳定后，将这个词慢慢的往前移，排名稳定后，再往前移一点，直到需要到达的位置。
- 集中精力优化首页和产品分类页。
- 优化单页面：除了为 `tingtalk.me` 做优化，还要注意 `tingtalk.me/on-page-tips` 外链和数据变化，农村包围城市。



## 优化项

### 标题

**Tips**

- 英文的书写习惯 是每个标点符号（英文半角）后面加一个空格，
- 常用的标点符号有 `:` `|` `–`，其他少用
- 不要堆砌关键词
- 尽量为每个页面编写独一无二的 Title
- 生动的 Title 会有更高的 SNS 分享率

#### 首页标题

**顺序**

- 核心关键词 + 次要关键词 + 网站名称：越靠前的词所占的权重（Weight）越大
- 如果不做品牌，建议把公司名或缩写放在的 Title 的最后

**字数**

- 控制在 60 个字符（单词 + 空格 + 标点）左右，尽量不要超过 64 字符
- 使用 [WordCounter](https://wordcounter.net/) 检测字符数
- 使用 [Title Tag - Moz](https://moz.com/learn/seo/title-tag) 预览 Title 在搜索引擎结果页面（Search Engine Result Page，SERP）中的显示效果
- 示例：`8-foot Green Widgets - Widgets & Tools | Widget World`



#### Blog 标题

- 在标题最后增加括号
  - (2018)
  - (New Data)
  - (Case Study)
  - (Proven Tips)
  - (2019 Update)
- 在标题中列出具体数字



### 描述

- Description 中可以填入 Title 的近义词，例如 `Supplier` ≈ `Manufacturer`，避免关键词堆砌，增加更多的关键词曝光
- 字符数控制在 158 个字符左右，重要内容务必在前 120 个字符中展现，并使用 [Google SERP Simulator](https://abrankings.com/tools/serp-preview) 检查 SERP 效果
- 不要生搬硬套，堆积关键词，语句要通顺流畅，生动丰富
- 突出你的卖点：质保时间长、价格厚道……
- （尽量）为每个网页使用唯一的 Description
- 杜绝使用引号



### Header

检查你的页面是否只有一个 H1：
1. F12
2. CTRL + F，就能调用出搜索栏
3. 输入`H1`

在 H2 标签中包含带有关键词的副标题

### 关键词

- Meta 中的 Keywords 不用写，详见 Google 官方 2009 年的  [声明](https://webmasters.googleblog.com/2009/09/google-does-not-use-keywords-meta-tag.html)
- 筛选一些（正文中的）关键词（Supporting Page Keywords）主关键词的支撑：
  - what is onpage and offpage seo
  - on page seo checklist 2019
  - on page seo steps
  - on page seo techniques  
- LSI 关键词（Latent Semantic Indexing：潜在语义索引），这种索引方法并不依赖于语言，例如：
    > SEO 和搜索引擎优化（虽然一个是英语，一个是中文）这两个词大量出现在相同的网页中，虽然搜索引擎还不能知道搜索引擎优化或 SEO 指的是什么，但是却可以从语义上把
    > - SEO
    > - 搜索引擎优化
    > - search engine optimization
    > - SEM
    > - ……
    >
    > 等词紧紧的连在一起。by [维基百科](https://zh.wikipedia.org/zh-cn/%E6%BD%9C%E5%9C%A8%E8%AF%AD%E4%B9%89%E7%B4%A2%E5%BC%95)    
- 首段文字必须包含关键词。
- 每个页面只做一个关键词，只优化一个关键词，以达到最高的效率。多个子关键词页面链接到一个主关键词页面，提高这个主关键词页面权重和收录。


**Tools**
- 借助付费工具 [Surfer](https://surferseo.com/)，查看关键词密度建议（未亲测）


### URL

**书写风格**
-  ✔️ 小写英文单词之间用（最短的）连字符（hyphen）`-` 连接：`tingtalk.me/on-page-seo`
-  ❌ 层级过深：`tingtalk.me/categories/seo/on-page-seo`
-  ❌ URL 太长：`tingtalk.me/so-amazing-on-page-seo-tips-ever`
-  ❌ 没有包含关键词：`tingtalk.me/p=1024`

#### https

一定要做，为了用户（保护交换数据的隐私与完整性）和 SEO。



#### non-www 跳转至 www

存疑。



#### sitemap

有准确更新时间（不是同一个更新时间）。



#### 内链

链接是对质量的投票。

1. 用筛选出来的（LSI）子关键词撰写高质量的子页面
  - `tingtalk.me/on-page-seo-checklist`
  - `tingtalk.me/on-page-seo-tools`
  - `tingtalk.me/on-page-seo-techniques`
2.  把这些子页面指向主页面：`tingtalk.me/on-page-seo`
3.  在 `tingtalk.me/on-page-seo`  dofollow 一个权威页面，例如 `backlinko.com/on-page-seo`（待验证）



#### 异常链接

通过 Screaming Frog 检查 301 永久重定向链接和 404 错误。



### 响应式设计

[移动设备适合性测试](https://search.google.com/test/mobile-friendly)：测试访问者在移动设备上访问您网页的轻松程度。



### 加载速度

- 提高网站打开速度（3 秒钟之内）
  - [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
  - [GTmetrix](https://gtmetrix.com/)：PageSpeed Score + YSlow Score ＞ 180%
- [Pagespeed -  Varvy](https://varvy.com/pagespeed/)：提供详细的优化建议
- 压缩图片：小图（缩略图）小于 60KB，大图小于 200KB；可以使用 [TinyPNG](https://tinypng.com/) 压缩图片
- WordPress 优化插件：WPROCKET（推荐）、WPSMUSH、AUTOPTAMIZE（15 个插件以内）



### 内容建设



#### 搜索者意图分析

用户搜索某个关键词的意图（search intent）是什么？是想要读文章，看视频还是买东西，把它丢进 Google 就知道了，然后依次创建对应类型的内容。



#### 文案

- 专业
  - 多查资料，不要欺骗用户，不然迟早被反噬
  - 借鉴同行的文案
- 字数：1000 字左右
- 行文
  - 尽量使用简单的单词（口语化）：能用 `near` 就不用 `proximity`
  - 短句 + 短段落
  - 语法检查：[Grammarly](https://www.grammarly.com/) - free writing assistant
  - 文章可读性：[Hemingway Editor](http://www.hemingwayapp.com/) - makes your writing bold and clear 
- 外包：列出文章大纲，到国外的自由职业平台找老外写
  - 价格较高：[Upwork](https://www.upwork.com/)
    - 新手按照项目付费，不要时薪付费。
    - 在大项目（5 万美金）合作之前，用小项目（50 美金的 Small Project）试水。
  - 价格较低：[Fiverr](https://www.fiverr.com/)
- 添加产品评论（前期可以通过技术手段添加）
- 在产品的详细描述中加粗关键，并添加几个内链
- 使用社交分享按钮


关键阅读：[如何写一篇同时面向人和搜索引擎的文章 - Sukka](https://blog.skk.moe/post/how-to-write-for-seo/)

#### 图片

添加图像的 alt 属性（替代文本）可以提高图片在 Google Image 的排名：

```html
<!-- HTML <img> 标签的 alt 属性 -->
<img src="/i/eg_tulip.jpg"  alt="上海鲜花港 - 郁金香" />
```

假设由于下列原因用户无法查看图像，alt 属性可以提供替代（alternate）的信息作为一种补救措施：

- 网速太慢
- 图像 src 属性错误
- 浏览器禁用图像
- 用户使用屏幕阅读器

#### 摩天楼策略

- [如何有效地执行摩天楼（Skyscraper）策略 - Ahrefs](https://ahrefs.com/blog/zh/skyscraper-technique/)
- [Link Building Case Study: How I Increased My Search Traffic by 110% in 14 Days -  Brian Dean](https://backlinko.com/skyscraper-technique)
