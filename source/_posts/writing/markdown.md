---

title: Markdown 入门教程及书写风格指南    
date: 2016-03-15    
updated: 2020-11-10    
categories: 写作技巧
tags: [排版, 写作]

---

![markdown](markdown/markdown.png)现代汉语就像用脏了的人民币，要用 Markdown 洗一洗。Markdown 是一种轻量级标记语言。你不需要关心标题多大字号，段前距多少，列表缩进几格，只要在**纯文本**前后增加一些标记符号（例如 `#` `-` `*` `>`），就能毫不费力地写出工整精美的文章。毫不夸张地说，Markdown 是比特世界赠与写作者的「笔」。

<!-- more -->

## 优势

掐指一算，使用 Markdown 写文章三年有余了。它的好，目前谁都比不了。


### 易学易记

只要几分钟就可以 [学会 Markdown](https://commonmark.org/help/tutorial/)，然后你可能再也不想碰 Word 了。



### 专注写作

富文本编辑器（例如 Word）是通过点击图形化的功能按钮来实现排版，而 Markdown 则是通过标记字符去赋予文字不同格式。**易读易写**（easy-to-read and easy-to-write），让任何与文字打交道的人专注于写作，不用操心排版。



### 格式统一

同一份 Word 文档，在

- 不同的设备：Windows、macOS、Android、iOS
- 不同的版本：旧版 Word 、新版 Word
- 不同的软件：Microsoft Office、WPS

可能显示不一样的效果。而 Markdown 可以 Write once, export everywhere。不管在电脑上，还是手机上，用 Markdown 写出来的文章都能带来舒适、统一、美好的阅读体验。



### 向外兼容

可以导出 PDF、 Word、HTML、图片等格式分享给没有安装 Markdown 编辑器的人。


## 入门

一开始你只要记住以下符号（英文半角状态），就能写出排版清爽的文章了。

| 标记符号         | 标记结果 |
| ---------------- | -------- |
| `#` + `空格` + `文本` | 一级标题 |
| `##` + `空格` + `文本` | 二级标题 |
| `###` + `空格` + `文本` | 三级标题 |
| `-` + `空格` + `文本`      | 无序列表 |
| `1` + `.` + `空格` + `文本` | 有序列表 |
| `>` + `空格` + `文本`        | 引用     |

如果有些文字需要特殊说明：

| 标记符号               | 标记结果 |
| ---------------------- | -------- |
| `**` + `加粗` + `**` | **加粗** |
| `*` + `斜体` + `*`       | *斜体* |
| `~~` + `删除线` + `~~` | ~~删除线~~ |

是不是手痒了？下载一个 [Markdown 编辑器](https://sspai.com/tag/Markdown)， Keep calm and Markdown。目前我使用 [有道云笔记](https://note.youdao.com/) + [Typora](https://typora.io/)。

- Windows 用户推荐 [Typora](https://typora.io/)。
- Android 用户推荐 [纯纯写作。](https://writer.drakeet.com/)
- 苹果用户（iOS 和 macOS）可以在 App Store 搜索「Markdown」下载（没用过苹果产品，没有发言权）。

![What You See Is What You Mean](https://i.loli.net/2019/07/15/5d2b601b5f46477978.gif)

## 进阶

以上就是最基础的 Markdown 语法，普通用户看到这里就可以开始动笔尝试了。下面介绍一些 Markdown 的书写风格，让你的源码和文档更精美，更有条理。你不必一下子全部记住，需要实现哪个功能再来查阅或者问 [Google](https://tingtalk.me/fq/) 也不迟。

### 标题


**层级**
- 正文的标题从 `##` 开始，`#` 要留给整篇文章的标题（也可以不写）。这样的大纲结构也可以很方便地转换为思维导图（Markdown to [Xmind](https://www.xmind.cn/) / [MindNode](https://mindnode.com/) / [幕布](https://mubu.com/) / [百度脑图](http://naotu.baidu.com/)……），也符合 SEO（搜索引擎优化）的规则。

    ```markdown
    # 一级标题（h1）：文章的标题
    
    ## 二级标题（h2）：正文的大标题
    
    ### 三级标题（h3）：正文的小标题
    ```
    
- 虽然 Markdown 最大支持 `######` 六级标题，为了保持层级的简单，防止出现过于复杂的章节，请谨慎使用四级标题（除非是长文章）。如果三级标题下有并列性的内容，可以使用加粗、有序列表或无序列表代表末级标题。
    ```markdown
    
    短文章的标题层级
    
    ### 正文的小标题
    
    **三级标题 A**
    - 论据 1（五级标题） 
      - 细分论据 1（六级标题） 
      - 细分论据 2（六级标题） 
      - 细分论据 3（六级标题） 
    - 论据 2 
    - 论据 3
    
    
    **三级标题 B**
    1. 论据
    2. 论据
    3. 论据
    
    
    **三级标题 C**
    - 论据 1 
    - 论据 2 
    - 论据 3
    
    
    ---
    
    长文章的标题层级
    
    ### 正文的小标题 
    
    #### 正文的三级标题 A
    
    #### 正文的三级标题 B
    
    #### 正文的三级标题 C
    
    ```
- 二级标题下，不能直接出现四级标题。
- 标题要避免孤立编号（即同级标题只有一个）。
- 标题要简短，结尾不带标点符号。
- （源码上）标题前后空一行（段前距和段后距）。
- 大标题和小标题之间要有内容过渡（引出或概括下文）。  
    ```markdown
    # Title
    
    开门见山地告诉读者这篇文章讲什么？
    
    一级标题作为文章的（页面）标题（H1），并且尽可能和文件名称保持一致。
    
    如果文章很长，使用 [TOC] 生成目录。
    
    ## What
    
    先定义问题是什么？……
    
    正文从二级标题开始。
    
    ## Why
    
    为什么会出现这样的问题？……
    
    ## How
    
    下一步该怎么办？……
    
    ## See also
    
    文末别忘了贴上参考链接。
    
    * https://link-to-more-info
    ```

### 列表

#### 无序列表

使用 `‐` 或 `*` 或 `+` 并跟随 1 个空格来表示无序列表。建议使用 `‐`（连字符，hyphen）。

```
- 我是谁
- 我从哪里来
- 我到哪里去
```

**不建议**

```
* 我是谁
* 我从哪里来
* 我到哪里去

---

+ 我是谁
+ 我从哪里来
+ 我到哪里去
```

**为什么**

- 星号 `*` 可能和加粗和斜体符号产生混淆。
- 加号 `+` 不流行。



**与其他语法结合使用**

```markdown
- **《春日》**：等闲识得东风面，万紫千红总是春。
- **《春草》**：萋萋总是无情物，吹绿东风又一年。
- **《墨梅》**：犹恨东风无意思，更吹烟雨暗黄昏。
```

**预览**

- **《春日》**：等闲识得东风面，万紫千红总是春。
- **《春草》**：萋萋总是无情物，吹绿东风又一年。
- **《墨梅》**：犹恨东风无意思，更吹烟雨暗黄昏。

#### 有序列表

##### **语法一（手动排序）**

```markdown
1. 斜月沉沉藏海雾，碣石潇湘无限路。
2. 不知乘月几人归，落月摇情满江树。
3. 春江潮水连海平，海上明月共潮生。
```

**预览**

1. 斜月沉沉藏海雾，碣石潇湘无限路。
2. 不知乘月几人归，落月摇情满江树。
3. 春江潮水连海平，海上明月共潮生。

对于比较短的、很少修改的有序列表，请按顺序标号，保持源码的可读性。

##### **语法二（自动排序）**

对于比较长的、可能会修改的列表（尤其是很长的嵌套列表），请使用「懒人编号法」。纵使有新的列表项「插队」，把序号弄乱了也没关系，Markdown 编辑器自动会对序号进行纠错。

```markdown
1.  Foo.
1.  Bar.
    1. Foofoo.
    1. Barbar.
    1. Gargar
1.  Baz.
```

**预览**

1.  Foo.
1.  Bar.
    1. Foofoo.
    1. Barbar.
    1. Gargar
1.  Baz.



#### 嵌套列表

缩进 2 ~ 4 个空格或一个 Tab（推荐），可以嵌套列表。

**示例一**

```markdown
1.  不知乘月几人归，落月摇情满江树。
	- 与君吟弄风月，端不负平生。
	- 对秋深，离恨苦，数夜满庭风雨。
	- 五月畲田收火米，三更津吏报潮鸡。
2.  人姝丽，粉香吹下，夜寒风细。
	- 弓弦抱汉月，马足践胡尘。
	- 寒月悲笳，万里西风瀚海沙。
	- 东堂坐见山，云风相吹嘘。
3.  沅溪夏晚足凉风，春酒相携就竹丛。
	- 白发渔樵江渚上，惯看秋月春风。
	- 归来独卧逍遥夜，梦里相逢酩酊天。
	- 致君尧舜上，再使风俗淳。
```

**预览**

1. 不知乘月几人归，落月摇情满江树。
	- 与君吟弄风月，端不负平生。
	- 对秋深，离恨苦，数夜满庭风雨。
	- 五月畲田收火米，三更津吏报潮鸡。
2. 人姝丽，粉香吹下，夜寒风细。
	- 弓弦抱汉月，马足践胡尘。
	- 寒月悲笳，万里西风瀚海沙。
	- 东堂坐见山，云风相吹嘘。
3. 沅溪夏晚足凉风，春酒相携就竹丛。
	- 白发渔樵江渚上，惯看秋月春风。
	- 归来独卧逍遥夜，梦里相逢酩酊天。
	- 致君尧舜上，再使风俗淳。

**示例二**

```markdown
- 庭说栏目
	> - 排版美学
	> - 数字生活    
	> - 日志随笔
- 联系方式
	> - Email：tingtalk.me(at)gmail.com
	> - Telegram：t.me/tingtalkgroup  
	> - WeChat：804 976 336
```

**预览**

- 庭说栏目
	> - 排版美学
	> - 数字生活    
	> - 日志随笔
- 联系方式
	> - Email：tingtalk.me(at)gmail.com
	> - Telegram：t.me/tingtalkgroup  
	> - WeChat：804 976 336



**Tips**

- `Tab` 缩进一级
- `Shift + Tab` 提升一级



#### 任务列表

**语法**

```markdown
- [ ] 纯牛奶
- [x] 西瓜
- [ ] 鸡蛋
- [x] 保鲜膜
- [ ] 猪肉（暂时买不起）
```

**预览**

- [ ] 纯牛奶
- [x] 西瓜
- [ ] 鸡蛋
- [x] 保鲜膜
- [ ] 猪肉（暂时买不起）



### 引用

在每一行使用 `>` 符号，包括换行的句子。

```
> 我们是为人民服务的，所以，我们如果有缺点，就不怕别人批评指出。
> by 毛泽东：《为人民服务》（1944 年 9 月 8 日）
```

> 我们是为人民服务的，所以，我们如果有缺点，就不怕别人批评指出。
> by 毛泽东：《为人民服务》（1944 年 9 月 8 日）



### 表格

**语法**

```
| 左对齐           |                      居中对齐                      | 右对齐 |
| :--------------- | :------------------------------------------------: | -----: |
| **加粗**         |          [插入链接](https://tingtalk.me/)          |  ￥5.7 |
| `换行`<br />下一行 | ![插入图片](https://tingtalk.me/uploads/avatar.png) | ￥10.4 |
```

**预览**

| 左对齐             |                      居中对齐                      | 右对齐 |
| :----------------- | :------------------------------------------------: | -----: |
| **加粗**           |          [插入链接](https://tingtalk.me/)          |  ￥5.7 |
| `换行`<br />下一行 | ![插入图片](https://tingtalk.me/images/avatar.png) | ￥10.4 |

**注释**
- Markdown 是轻量级的标记语言，所以不支持合并和拆分单元格。对于复杂表格，你可以在 Markdown 编辑器中使用 HTML 的 `<table>` 标签标记。
- 输入 `<br />` 可以换行（但不建议使用）。
- 把 Excel 表格复制粘贴到某些 Markdown 编辑器（例如 Typora）可以直接转换为 Markdown 形式的表格。 


### 链接

**语法**
```markdown
[庭说](https://tingtalk.me/)
```

**预览**：[庭说](https://tingtalk.me/)



### 图片 

**语法**

```markdown
![庭说 Avatar](https://tingtalk.me/images/avatar.png)
```

**预览**

![庭说 Avatar](https://tingtalk.me/images/avatar.png)



Markdown 是一种纯文本标记语言，图片功能注定是它的弱项。

**网络图床**

但谁能保证哪个图床服务不倒闭？所以我在写作的时候，力求用文字把事情解释清楚，能不插入图片就不插入图片。我偶尔会用到的 [图床](https://sspai.com/search/article?q=%E5%9B%BE%E5%BA%8A) 是 `sm.ms`（免费）。

**本地图片**

Typora 支持插入本地图片，但是更改图片的路径和名称，图片就失效了。如果文章已经完稿了，可以把 Markdown 导出为 PDF 文档（这样图片就嵌入进去了）。



### 代码

#### 行内代码

**用 2 个重音符 `（backtick，在 Tab 键上方）包裹**
```markdown
`Markdown` 是一种轻量级标记语言。
```

**预览**

`Markdown` 是一种轻量级标记语言。



用两个 `` ` `` 包裹  `` ` ``，才能显示 `` ` ``：

```markdown
A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
```

**预览**
A single backtick in a code span: `` ` ``
A backtick-delimited string in a code span: `` `foo` ``



**重音符前后空一格**

```markdown
- 推荐：使用键盘快捷键 `Ctrl + D` 可以将当前网页保存为书签。
- 反对：使用键盘快捷键`Ctrl+D`可以将当前网页保存为书签。
```

**预览**
- 推荐：使用键盘快捷键 `Ctrl + D` 可以将当前网页保存为书签。
- 反对：使用键盘快捷键`Ctrl+D`可以将当前网页保存为书签。



#### 代码块

将 3 个重音符 ` 置于代码块的首行和末行。首行的重音符后面可接代码语言名称，例如 `````python``，以达到相应的代码高亮效果。

<pre>
```python
print "Hello, Python!"
```
</pre>
**预览**

```python
print "Hello, Python!"
```

**[diff 代码对比](https://blog.alispit.tel/create-a-git-diff-in-markdown/)**

<pre>
```diff
function addTwoNumbers (num1, num2) {
-  return 1 + 2
+  return num1 + num2
}
```
<pre>
**预览**

```diff
function addTwoNumbers (num1, num2) {
-  return 1 + 2
+  return num1 + num2
}
```





### 换行

> 以下键盘快捷键（语法）可能仅支持 Typora。

`Enter` = 换行 + 空行 = (`Shift` + `Enter`) × 2。

即按下回车键创建一个新段落（段与段之间加入空行）。



#### 软换行

`Shift` + `Enter` = 换行（但是不会产生空行）。


```markdown
`enticing` [ɪn'taɪsɪŋ] （事物）诱人的，有吸引力的；迷人的
- Her neck was short but rounded and her arms plump and enticing. `Shift` + `Enter`
  她的脖子短，但浑圆可爱；两臂丰腴，也很动人。by 《飘》 `Enter`

- This was enticing to Wozniak, even more than any prospect of getting rich. `Shift` + `Enter`
  这句话对沃兹尼亚克的诱惑太大了，比变成富人的诱惑还要大。by 《乔布斯传》 `Enter`
```

`enticing` [ɪn'taɪsɪŋ] （事物）诱人的，有吸引力的；迷人的

- Her neck was short but rounded and her arms plump and enticing.
  她的脖子短，但浑圆可爱；两臂丰腴，也很动人。by 《飘》

- This was enticing to Wozniak, even more than any prospect of getting rich.
  这句话对沃兹尼亚克的诱惑太大了，比变成富人的诱惑还要大。by 《乔布斯传》




#### 硬换行

在行末使用空格（两个以上） + 换行（Enter），就可以实现强制换行，此语法适用于大部分 Markdown 编辑器。

硬换行在文档被导出时将被保留，且没有换段的段后距。

```markdown
假如生活欺骗了你，  （2 个空格）
不要悲伤，不要心急！  （2 个空格）
忧郁的日子里须要镇静：  （2 个空格）（2 个空格）
相信吧，快乐的日子将会来临！  （2 个空格）
心儿永远向往着未来；  （2 个空格）
现在却常是忧郁。  （2 个空格）
一切都是瞬息，一切都将会过去；  （2 个空格）
而那过去了的，就会成为亲切的怀恋。   （2 个空格）
by 普希金
```



假如生活欺骗了你，  
不要悲伤，不要心急！  
忧郁的日子里须要镇静：  
相信吧，快乐的日子将会来临！  
心儿永远向往着未来；  
现在却常是忧郁。  
一切都是瞬息，一切都将会过去；  
而那过去了的，就会成为亲切的怀恋。   
by 普希金






### 其他

| 名称     | 语法                            | 备注              |
| -------- | ------------------------------- | ----------------- |
| 分割线   | `---`、`***`、`+++`             | 不常用            |
| 内容目录 | [TOC]                           | Table of Contents |


## 应用

Markdown 的用途很广。Write once, export everywhere：写博客、写邮件、排推文、做 PPT 等。

### 公众号排版

- [Markdown Nice](https://mdnice.com/)：让微信排版变 Nice，支持自定义主题 CSS。
- [微信 Markdown 编辑器](https://doocs.github.io/md/)：高度简洁。
- [可能吧公众号 Style 一键转换器](https://knb.im/mp/)：老司机禅叔出品。



### 简历排版

- [冷熊简历](http://cv.ftqq.com/#)
- [resume.mdnice.com](https://resume.mdnice.com/)
- [Resumd](https://resumd.t9t.io/)




### 邮件排版

[Markdown Here](https://markdown-here.com/) 是一个浏览器扩展插件，可以将浏览器中编辑器（例如 email 正文）里的 Markdown 文本转换成渲染过后的 HTML，并且支持自定义 CSS。详情移步 [在富文本在线编辑器中使用 Markdown](https://sspai.com/post/47189)。



### 转换为 Word

- 安装 Pandoc 后，Typora 可以导出 Word



### 转换为 Mind Map

- 对于 [Xmind](https://www.xmind.cn/) / [MindNode](https://mindnode.com/)  / [百度脑图](http://naotu.baidu.com/) 等思维导图工具，直接导入 md 文档。
- 对于幕布，可以用 Typora 导出 opml 格式，再导入。
- [Markmap](https://markmap.js.org/)：`Mark`down + Mind`map`，使用思维导图可视化 Markdown。



### 从网页导出 md 格式


借助浏览器插件 [简约](https://chrome.google.com/webstore/detail/simpread-reader-view/ijllcpnolfcooahcekpamkbidhejabll) 导出 md 格式的网页，不用 手动添加标记符号。



**参考**

- [Markdown 完全入门（上）](https://sspai.com/post/36610)
- [Markdown 完全入门（下）](https://sspai.com/post/36682)
- [Markdown Syntax - Daring Fireball](https://daringfireball.net/projects/markdown/syntax)
- [为知笔记 Markdown 新手指南](https://www.wiz.cn/feature-markdown.html)
- [Markdown 合集 - 少数派](https://sspai.com/tag/Markdown)
- [Google Markdown 书写风格指南](https://www.jianshu.com/p/3beac9fd6496)
- [Markdown Style Guide by Google](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md)
- [Typora 完全使用详解 - liquid617](https://sspai.com/post/54912) 



**关联阅读**

- [文案风格及排版指南](https://tingtalk.me/style-guide/)


```

```

```

```