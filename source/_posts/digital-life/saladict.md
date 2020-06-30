---

title: 沙拉查词：浏览器上最强大的划词翻译插件
date: 2020-02-17  
updated: 2020-03-10  
categories: 数字生活   
tags: [Chrome, 网上冲浪指南, 英语]
permalink: saladict

---

![saladict](saladict/saladict.png)

Saladict（沙拉查词）是一款聚合了大量权威词典的划词翻译插件（扩展程序），多个查词引擎可以交叉验证查词结果，助你全方位掌握外文词汇（涵盖中、英、日、韩、法、德、西语等），支持网页翻译、生词本、快捷键唤醒查词面板等功能，完全满足了我对查词插件所有的期望。

<!-- more -->

## 介绍

- **大量词典**：大量权威词典涵盖中、英、日、韩、法、德、西语；同时对比多个词典快速掌握词义。
- **个性定制**：个人按需配置（删除、添加、排序）词典，可以加快查询速度以及提升阅读效率。
- **无所不翻**：多个主流机器翻译，除了翻译单词，还可以翻译长句。
- **查词历史**：查词记录可导出到其它记忆软件（例如 Anki）中强化记忆。单词本可以通过 WebDAV 跨设备同步。
- **生态丰富**：配合其它工具可实现浏览器外划词，OCR 查词（图片文字识别）。基于浏览器，不限于浏览器
- **论文模式**：配合侧边栏模式的独立窗口查词面板，母亲手织毛衣的温暖，熬夜在沙拉查词上读论文时也能感受到。
- **网页翻译**：支持有道网页翻译与谷歌网页翻译。
- **自动发音**：还有真人发音。
- **排版清爽**：带给你舒适的阅读效果。



![pin](https://saladict.crimx.com/images/pin.gif)



更多细节，请参阅 [Saladict 沙拉查词的官网](https://saladict.crimx.com/)。



## 安装

如何下载安装 [最新发布版本](https://github.com/crimx/ext-saladict/releases)：

- Google Chrome（谷歌浏览器）
  - 具备 [科学上网](https://tingtalk.me/fq/) 的环境，直接 [从 Chrome 网上应用店安装沙拉查词](https://chrome.google.com/webstore/detail/%E6%B2%99%E6%8B%89%E6%9F%A5%E8%AF%8D-%E8%81%9A%E5%90%88%E8%AF%8D%E5%85%B8%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/cdonnmffkdaoajfknoeeecmchibpmkmg?hl=zh-CN)
  - 否则，从 [Chrome Extension Downloader](https://chrome-extension-downloader.com/) / [Crx4Chrome](https://www.crx4chrome.com/extensions/cdonnmffkdaoajfknoeeecmchibpmkmg/) / [网盘](https://tc5.us/dir/23997303-37182549-ea7ae1) 下载 crx 文件，使用开发者模式安装沙拉查词（请勿解压）。
- Firefox：[火狐浏览器扩展商店](https://addons.mozilla.org/zh-CN/firefox/addon/ext-saladict/)
- Microsoft Edge：[扩展商店](https://microsoftedge.microsoft.com/addons/detail/idghocbbahafpfhjnfhpbfbmpegphmmp?hl=zh-CN&gl=CN)



## 配置

以下是我的配置心得。更多细节，请参阅 [沙拉查词使用教程（官方完整版）](https://saladict.crimx.com/manual.html)。



### 情景模式

我只配置了一个 `默认模式`，因为查词时懒得切换其他模式。所以，以下的「改造」都是在同一个情景模式下。



### 查词面板

因为经常翻译长句，所以 `保持展开` `自动展开多行搜索框`。

自定义查词面板样式 by [CaliforniaDream](https://congjinyebaiya.wang/2020/02/03/%E6%B2%99%E6%8B%89%E6%9F%A5%E8%AF%8D%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9F%A5%E8%AF%8D%E9%9D%A2%E6%9D%BFcss%E5%88%86%E4%BA%AB/)：

```css
.dictPanel-Root { border-radius: 5px; }
.menuBar { background-color: #019425; }
.dictItemHead { padding: 5px; cursor: pointer; box-shadow: rgba(0,0,0,.3) 0 -10px 15px -8px; }
.mtaBox-TextArea { font-family: Consolas, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif; }
.mtaBox-DrawerBtn, .waveformBox-DrawerBtn { height: 20px; }
```

我把顶部菜单栏的背景颜色换成 [庭说绿](https://tingtalk.me/brand/) `#019425`：学习英文要保持绿意盎然、生机勃勃的好奇心



### 词典设置

`波形控制按钮` 在词典面板最下方显示音频控制面板展开按钮 `∧`：

- Loop：音频 AB 循环（循环播放发音）。



**我的 `已选词典` 排序如下：**

- 双语例句：真人发音，地道得不能再地道；但一些发音无法播放。
- 人人词典：提供原汁原味的中英文字幕学习场景。
- 维基百科：网络百科全书；有些词语配有插图。
- 朗文词典：英英词典（用英语解释英语，才能掌握英语思维）；有些单词配有插图。
- 英汉双语词典
  - 剑桥词典
  - 柯林斯高阶
- 配置多个长句翻译词典，便于交叉验证：
  - 彩云小译
  - 谷歌翻译
  - 搜狗翻译
  - 腾讯翻译君
  - 百度翻译
  - 有道翻译（不推荐）
- 谷歌词典：查看词形（过去式、过去分词、现在分词和第三人称单数等）。
- 有道词典：附带词义辨析。


**其他词典（按需添加）：**

- Urban：解释英语俚语词汇。
- Etymonline：解释英语单词的起源。
- 韦氏学习词典：详细的英英学习词典。
- 小鸡词典：网络流行语词典。



### PDF 设置

开启 `默认用本扩展浏览 PDF` 后，既可在 PDF 上进行划词翻译。

1. 右键点击沙拉查词，选择 `管理扩展程序` > `允许访问文件网址`
2. 把 PDF 文件拖拽到 Chrome 或右键点击 PDF > `打开方式` > `Google Chrome`
3. 哪里不会划哪里

详情请参阅 [支持 PDF 划词的 Saladict 沙拉查词](https://saladict.crimx.com/manual.html#pdf)。



### 右键菜单

除了添加已有的 `必应搜索` 和 `百度搜索`（万不得已），我还自定义了以下链接：

豆瓣电影：查看电影评分

```
https://movie.douban.com/subject_search?search_text=%s
```

海词词典：查看单词的「释义常用度分布图」

```
http://dict.cn/%s
```



### 快捷查词 

`启用快捷键` 后，将弹出独立词典界面：

- Windows：连续按三次 `Ctrl`
- macOS：连续按三次 `⌘ Command`
- 设置浏览器键盘快捷键：Chrome 的设置入口是 `chrome://extensions/shortcuts`

我的习惯是：把文档放左边，独立词典窗口放右边。这样查单词，体验非常好。



### 导入导出

定期备份你精心配置好的沙拉查词，切换到新设备时，导入设定，即可享用。



## 技巧

### 右键点击图标

- 谷歌网页翻译
- 有道网页翻译



### 当前页面二维码

1. 点击（右上方地址栏旁的）沙拉查词的图标，打开查词面板
2. 鼠标移动到左下方的二维码图标，即可显示当前页面的二维码
3. 使用手机扫描二维码，即可把当前浏览的网页传送到手机上



### 多行搜索框

位于顶栏搜索框下面，使用输入大段文字。

- `Enter` 换行
- `Ctrl + Enter` 开始搜索



### 钉住与拖动查词面板

- **钉住**：点击查词面板绿色任务栏上的 📌 即可「钉住」面板，面板不会消失，除非点击面板的 ❌。
- **拖动**：按住绿色任务栏中间的空白部分可以拖动面板。



### [与 Quicker 联动](https://github.com/crimx/ext-saladict/issues/493)

- 全局文本翻译
- 截图翻译（OCR 图像识别查词）
- 复制翻译

注：Windows 用户独占以上功能。



### [浏览器外划词](https://saladict.crimx.com/native.html)

**Windows**

- [Quicker](https://github.com/crimx/ext-saladict/issues/493)：支持 OCR 图片文字识别；支持一边标注 PDF 一边使用沙拉查词翻译；支持鼠标手势操作。
- [PantherBar](https://github.com/crimx/ext-saladict/issues/605)

**macOS**

- [Alfred Workflows](https://github.com/crimx/ext-saladict/issues/509)
- [Popclip](https://github.com/crimx/ext-saladict/issues/463)



### [配合 Anki 使用](https://saladict.crimx.com/anki.html)

许多人疑惑添加生词为何不自动添加翻译（现已提供了上下文翻译）。与其它词典不一样，本扩展添加生词的方式是基于 Anki 和 SuperMemo 理念设计的，认为添加生词的过程也是记忆的一个环节。这刻意与当前流行的「尽可能省事」的设计相抵触，以避免迷失在信息流的漩涡中，产生「收藏既获得」的错觉。

关联阅读：[记单词，神器再升级 - 山海青](https://mp.weixin.qq.com/s/6ptl09YpnoF1M1ywD9gObA)



---



**关联阅读**：

- [达达划词翻译 - Chrome](https://chrome.google.com/webstore/detail/%E8%BE%BE%E8%BE%BE%E5%88%92%E8%AF%8D%E7%BF%BB%E8%AF%91/cajhcjfcodjoalmhjekljnfkgjlkeajl)
  - 自带「生词簿」，可与扇贝、有道单词本同步
  - 基于记忆曲线的「吐司弹词」
  - 基于牛津字典的「英英翻译」、「例句」
  - 外链「词根词缀」
  - 好看
- [彩云小译 - 网页翻译插件](https://fanyi.caiyunapp.com/#/web)：同时显示网页原文和翻译。
- [谷歌浏览器（Google Chrome)：插件（扩展程序）清单及使用技巧 - 庭说](https://tingtalk.me/chrome/)



