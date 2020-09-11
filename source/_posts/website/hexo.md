---

title: 如何优化 Hexo（静态博客）
date: 2017-07-17  
updated: 2020-05-29
categories: 网站搭建  
tags: [网站, Hexo, 博客]    
---

![hexo](hexo/hexo.png)

是 Hexo + NexT 让我重拾笔杆子，感谢开发者们和维护者们。

<!-- more -->



## 🤖[YAML 教程](http://www.ruanyifeng.com/blog/2016/07/yaml.html)

YAML 语言（/ˈjæməl/ ）的基本规则：
- 大小写敏感。
- 使用缩进表示层级关系。
- 缩进时不允许使用 `Tab` 键，只允许使用空格。
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可。
- `#` 表示注释，从这个字符一直到行尾，都会被解析器忽略。




## 🔧优化 URL

默认的 URL 是 `https://tingtalk.me/2019/08/17/Hexo使用技巧`

- **层级太深**：斜杠太多不利于搜索引擎的抓取。
- **包含中文**：URL 只能使用英文、数字和连字符（hyphen）`-`。如果包含中文，分享出现的链接可能是 `https://tingtalk.me/2019/08/17/Hexo%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7`，中文强制被转码成十六进制编码，又臭又长。

URL 很重要，确立 URL 之前要深思熟虑，一旦新文章发出后，请不要随意修改。

### 以文件名称为 URL

1. 修改站点配置文件 `_config.yml` 的 `permalink`（永久链接）为 `:name/ `。

    ```markdown
    # URL
    permalink: :name/ 
    ```

2. 把 Markdown 文档命名为 `hexo-tips.md`。

    ```markdown
    ---
    
    title: Hexo Tips  
    date: 2019-08-17  
    categories: 博客  
     
    ---
    
    让 Hexo 更优雅的小技巧。
    
    <!-- more -->
    
    ## Permalink 
    
    - 不要用中文
    - 大写字母用小写字母代替
    - 删除所有特殊字符，只用连字符；连字符代替空格
    - 尽可能简短，删除 the、a、an、for、and、if 、or 等虚词
    
    ```

3. 优化之后的 URL 是 `https://tingtalk.me/hexo-tips`，简短有力，清晰明了。



### 在 Front Matter 定义

1. 不用修改站点配置文件 `_config.yml` 的 `permalink`（永久链接）`permalink: :year/:month/:day/:title/`。

2. 每次在文章的 Front Matter 中加上 permalink 字段，例如 `hexo-tips/`，就会 [覆盖文章网址](https://hexo.io/zh-cn/docs/front-matter.html)，无视站点配置文件的 permalink 设置。

   ```markdown
   ---
   title: Hexo Tips  
   date: 2019-08-17  
   categories: 博客  
   permalink: hexo-tips/
   ---
   
   如果 Hexo 版本在 5.0 以上，hexo-tips 后面一定要加上斜线 /。
   
   <!-- more -->
   
   正文。
   ```

3. 优化之后的 URL 是 `https://tingtalk.me/hexo-tips`。Front Matter 的 permalink 具有最高优先级，所以文件名是否一样，是否有中文，都没有关系。

以上 2 种设定 permalink 的方法，都可以在 `_posts` 创建分类（category）文件夹，例如我可以把 `hexo-tips.md` 放在 `_posts/website`,方便管理文章。但 URL 中又不会包含 category，保持 URL 的简洁可爱。

不推荐使用插件 [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) 生成唯一永久链接，一串无意义的数字让 URL 变得不可读且不方便记忆。而且每次分享文章时，都要打开博客才能把网址复制出来。

**🔗关联阅读**

- [Clean URL - Wikipedia](https://en.wikipedia.org/wiki/Clean_URL)
- [永久链接（Permalinks）| Hexo](https://hexo.io/zh-cn/docs/permalinks.html)



## 🔧优化分类


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

教程：[如何为 Hexo 博文加入图片](https://liolok.github.io/How-to-Add-Image-to-Hexo-Blog-Post/zh-Hans/)




## 💚修改 NexT

### 🖼️图片居中

最新的版本（Mimi）已默认居中。

1. 在 `hexo-site\source` 新建一个名为 `_data` 的文件夹。
2. 把 `hexo-site\themes/next/source/css/_schemes/Mist` 的 `_posts-expand.styl` 复制到 `_data`，并把名字修改为 `styles.styl`。
3. 打开 `_data` 的 `styles.styl`，修改以下代码：
    ```
     .post-body img {
        margin: 0 auto;
      }
    ```
4. 打开主题配置文件 `hexo-site\themes/next/_config.yml`，取消对 `styles.styl` 的注释：
    ```yaml
    custom_file_path:
      #head: source/_data/head.njk
      #header: source/_data/header.njk
      #sidebar: source/_data/sidebar.njk
      #postMeta: source/_data/post-meta.njk
      #postBodyEnd: source/_data/post-body-end.njk
      #footer: source/_data/footer.njk
      #bodyEnd: source/_data/body-end.njk
      #variable: source/_data/variables.styl
      #mixin: source/_data/mixins.styl
      style: source/_data/styles.styl
    ```



### 📖阅读时长 

[hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time): Symbols count and time to read of articles plugin for Hexo.



### ⚡️quicklink

[quicklink](https://github.com/GoogleChromeLabs/quicklink): Faster subsequent page-loads by prefetching in-viewport links during idle time

在 Front-matter 中写法是：

```yaml
quicklink: enable
```



## 📡连接 GitHub

`Win` + `S` 打开搜索，输入 `Git Bash`，或者在电脑任意位置右键打开 `Git Bash`，然后根据 GitHub 账号，修改下面的命令并复制到 `Git Bash`，Enter：

```shell
git config --global user.name "ting-talk"
git config --global user.email "******@gmail.com"
ssh-keygen -t rsa -C "******@gmail.com"
```

出现：

```shell
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/***/.ssh/id_rsa):
```

Enter：

```shell
Created directory '/c/Users/***/.ssh'.
Enter passphrase (empty for no passphrase):
```

Enter：

```shell
Enter same passphrase again:
```

Enter:

```shell
Your identification has been saved in /c/Users/***/.ssh/id_rsa
Your public key has been saved in /c/Users/***/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:FehU/******gwvkE+kkm7******96CaYSoFo+****** ******@gmail.com
The key's randomart image is:
+---[RSA 3072]----+
|         +o..+   |
|     . .o..o* + .|
|.. o . ..+ *o.+ o|
|E.o + . S ooo    |
|.o o . . .o o    |
|   .  o.o.o      |
|    .. .oo       |
+----[SHA256]-----+
```

登录 [GitHub](https://github.com/)，依次点击右上角的头像 - `Settings` - `SSH and GPG keys` - `New SSH key`：

`Title` 自定义即可。

在 `Git Bash` 输入：

```shell
cat ~/.ssh/id_rsa.pub
```

左键复制结果，粘贴在 `Key` 里，最后点击 `Add SSH key`。

在 `Git Bash` 输入：

```shell
ssh -T git@github.com
```

Enter：

```shell
The authenticity of host 'github.com (13.229.188.59)' can't be established.
RSA key fingerprint is SHA256:nThbg6******WGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```

输入 `yes`，Enter：

```shell
Warning: Permanently added 'github.com,13.229.188.59' (RSA) to the list of known hosts.
Hi ting-talk! You've successfully authenticated, but GitHub does not provide shell access.
```

如果有你的 GitHub 用户名（`Hi ting-talk!`），则代表与 GitHub 连接成功。

## 🚀推送到 GitHub

在博客文件夹，右键打开 `Git Bash`，复制以下命令（可能要删除主题的 `.git`）：

```shell
git init
```

添加远程仓库：

```shell
git remote add origin git@github.com:ting-talk/blog.git
```

克隆远程仓库：

```shell
git clone git@github.com:ting-talk/blog.git
```

推送：

```shell
git add .
git commit -m "first push"
git push origin master
```

本地分支强制覆盖远程分支：

```shell
git push origin master --force
```



## 🎸博客搭建

### 🍊[Gridea](https://gridea.dev/)

一个静态博客写作客户端：适合喜欢安安静静写博客的人。



### 👨‍💻[Easy Hexo](https://easyhexo.com/)

轻松入门 Hexo：适合喜欢折腾博客的人。