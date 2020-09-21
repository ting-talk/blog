---

title: 装上油猴脚本，你的浏览器才有了灵魂
date: 2020-02-19 
updated: 2020-04-01  
categories: 数字生活   
tags: [Chrome, 网上冲浪指南]

---

![tampermonkey](userscripts/tampermonkey.png)

油猴堪称浏览器扩展程序里的最强王者。如果插件给了浏览器第二春，那么油猴脚本给了第三春。本文以  Chrome 中的 [TemperMoneky](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN) 为例，简单列出我的脚本清单。

<!-- more -->

## 安装油猴

- 有 [番茄](https://tingtalk.me/fq/)，通过 [官网](https://www.tampermonkey.net/) 在线安装
- 无法科学上网，通过 [极简插件](https://chrome.zzzmh.cn/index) 下载 crx 文件，然后 [离线安装](https://chrome.zzzmh.cn/help?token=setup)

相似脚本管理器有 [暴力猴](https://violentmonkey.github.io/get-it/)（Violentmonkey）。相比 Tampermonkey，界面更简洁，管理脚本更方便，适合不喜欢折腾的用户。



## 安装脚本

> 用户脚本是一段代码，它们能够优化您的网页浏览体验。安装之后，有些脚本能为网站添加新的功能，有些能使网站的界面更加易用，有些则能隐藏网站上烦人的部分内容。 

1. 打开 [Greasy Fork](https://greasyfork.org/zh-CN)
2. 搜索脚本，或 [根据脚本生效的网站过滤](https://greasyfork.org/zh-CN/scripts/by-site)
3. 安装脚本（[油猴脚本图文安装教程](https://chrome.zzzmh.cn/help?token=dhdgffkkebhmkfjojejmpbldmpobfkfo)）



## 通用脚本

适用于所有站点。

### [HTML5 视频播放器增强脚本](https://greasyfork.org/zh-CN/scripts/381682-html5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC)

网页播放器增强脚本，支持使用快捷键（Enter）打开全屏、无级倍速调整（0.1 倍速到 16 倍速）、自动记录播放进度和播放倍率、快进快退（30 秒）、开启画中画、逐帧截图等功能。

| 快捷键             | 功能                   |
| ------------------ | ---------------------- |
| `Enter`            | 全屏                   |
| `Space`            | 暂停 / 播放            |
| `Shift` + `Enter`  | 网页全屏               |
| `Shift` + `S`      | 截图                   |
| `Shift` + `P`      | 开启画中画             |
| `Ctrl` + `→` / `←` | 快进 / 进退 30 秒      |
| `N`                | 播放下一集             |
| `C`                | 加速播放（+0.1 倍）    |
| `X`                | 减速播放（+0.1 倍）    |
| `Z`                | 正常速度播放           |
| `D`                | 上一帧（方便精准截图） |
| `F`                | 下一帧（方便精准截图） |
| `Q`                | 图像复位               |

更多特性和快捷键，请参阅：
- [项目地址](https://github.com/xxxily/h5player)
- [小众软件](https://www.appinn.com/h5player-video-control-greasemonkey/)



### [简悦( SimpRead ) · 轻阅版](https://greasyfork.org/zh-CN/scripts/39998-%E7%AE%80%E6%82%A6-simpread-%E8%BD%BB%E9%98%85%E7%89%88)

简悦 · 轻阅版是 [简悦](https://github.com/kenshin/simpread) 的轻量级版本，拥有 [简悦的大部分特性](http://ksria.com/simpread/#feature)，更具有加载速度快 · 只关注阅读模式呈现等特点。





### [Userscript+](https://greasyfork.org/zh-CN/scripts/24508-userscript-show-site-all-userjs) 

- 在当前网站的右下角显示可用脚本（10 秒后自动消失）
- 筛选评分最高的前 50 个脚本



### [Picviewer CE+](https://greasyfork.org/zh-CN/scripts/24204-picviewer-ce)

可以将包含很多图片的网页变成图片浏览器，还能对图片进行翻转、旋转、放大，显示原始大图、收藏、批量保存，聚合所有分页大图，图片在线编辑等操作，功能丰富的不像是一款浏览器脚本，而更像是浏览器里的看图工具。[@Appinn](https://www.appinn.com/picviewer-ce/)



### [显示最高质量的图片](https://greasyfork.org/zh-CN/scripts/2312-resize-image-on-open-image-in-new-tab)

1. 右键点击图片
2. `在新标签页中打开图片` 
3. 自动定位到最高质量图像



### [去繁留简](https://greasyfork.org/zh-CN/scripts/378243-%E5%8E%BB%E7%B9%81%E7%95%99%E7%AE%80-%E7%B9%81%E7%AE%80%E8%BD%AC%E6%8D%A2)

- 自动切换（利用此脚本）：将网页上的繁体中文转为简体中文。
- 手动切换（无需此脚本，Chrome 自带）：在网页的空白位置右键 - `翻译成中文（简体）`



### [为什么你们就是不能加个空格呢？](https://greasyfork.org/zh-CN/scripts/2185-%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%A0%E5%80%91%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%83%BD%E5%8A%A0%E5%80%8B%E7%A9%BA%E6%A0%BC%E5%91%A2)

自动在网页中所有的中文字和半形的英文、数字、符号之间插入空白。（摊手）没办法，处女座都有强迫症。

- Chrome 插件：[为什么你们就是不能加个空格呢？](https://chrome.google.com/webstore/detail/%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%A0%E5%80%91%E5%B0%B1%E6%98%AF%E4%B8%8D%E8%83%BD%E5%8A%A0%E5%80%8B%E7%A9%BA%E6%A0%BC%E5%91%A2%EF%BC%9F/paphcfdffjnbcgkokihcdjliihicmbpd?hl=zh-CN)
- 关联阅读：[文案风格及排版指南 - 庭说](https://tingtalk.me/style-guide/)



### [拒绝二维码登录](https://greasyfork.org/zh-CN/scripts/27183-%E6%8B%92%E7%BB%9D%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%99%BB%E5%BD%95-%E6%B7%98%E5%AE%9D-%E4%BA%AC%E4%B8%9C%E7%AD%89%E7%BD%91%E7%AB%99%E9%BB%98%E8%AE%A4%E5%87%BA%E7%8E%B0%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2)

淘宝、京东、阿里云等网站默认使用账号密码登录，不出现二维码登录界面。



### [复制当前页面标题及网址](https://greasyfork.org/zh-CN/scripts/28056)

截止 2020 年 9 月 21 日，不支持 Markdown 格式的超链接。

脚本发现于 [小众软件](https://meta.appinn.net/t/html-markdown/19166)。





## 特定脚本

只适用特定站点。



### [douban.com](https://greasyfork.org/zh-CN/scripts/by-site/douban.com)



#### [豆瓣资源下载大师](https://greasyfork.org/zh-CN/scripts/329484-%E8%B1%86%E7%93%A3%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E5%A4%A7%E5%B8%88-1%E7%A7%92%E6%90%9E%E5%AE%9A%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1-%E9%9F%B3%E4%B9%90-%E5%9B%BE%E4%B9%A6%E4%B8%8B%E8%BD%BD)

- 聚合数百家资源网站，通过右侧边栏，几秒内告诉你哪些网站能下载对应的资源（FTP、BT、字幕、网盘等）
- 显示 IMDb、Metascore、Rotten Tomatoes（烂番茄）等的评分
- 有资源的站显示绿色，无法访问 / 没登陆的站显示白色，无资源的站显示黄色
- 显示对应的在线视频|在线音频|在线图书
- 显示对应的中英文
- 安装完脚本后，在弹出窗口点击 `总是允许域名`
- Telegram 频道：https://t.me/doubanchannel



#### [在豆瓣电影页面直接搜索电影资源](https://greasyfork.org/en/scripts/30020-%E5%9C%A8%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E9%A1%B5%E9%9D%A2%E7%9B%B4%E6%8E%A5%E6%90%9C%E7%B4%A2%E7%94%B5%E5%BD%B1%E8%B5%84%E6%BA%90) 

by [Cupfox 茶杯狐](https://www.cupfox.com/)

这个脚本可以作为「豆瓣资源下载大师」的补充。



#### [在豆瓣显示微信读书可读](https://greasyfork.org/zh-CN/scripts/394514-%E5%9C%A8%E8%B1%86%E7%93%A3%E6%98%BE%E7%A4%BA%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E5%8F%AF%E8%AF%BB)

微信读书很快要一统江湖了。



### [zhihu.com](https://greasyfork.org/zh-CN/scripts/by-site/zhihu.com)

#### [知乎网页助手](https://greasyfork.org/zh-CN/scripts/384172-%E7%9F%A5%E4%B9%8E%E7%BD%91%E9%A1%B5%E5%8A%A9%E6%89%8B-5%E5%A4%A7%E5%8A%9F%E8%83%BD%E9%9B%86%E4%BA%8E%E4%B8%80%E8%BA%AB)

- 外链直接跳转
- 无广告
- 下视频
- 左键划词自动复制
- 自动显示问题全部信息等



### [baidu.com](https://greasyfork.org/zh-CN/scripts/by-site/baidu.com)

#### [AC-baidu](https://greasyfork.org/zh-CN/scripts/14178-ac-baidu-%E9%87%8D%E5%AE%9A%E5%90%91%E4%BC%98%E5%8C%96%E7%99%BE%E5%BA%A6%E6%90%9C%E7%8B%97%E8%B0%B7%E6%AD%8C%E6%90%9C%E7%B4%A2-%E5%8E%BB%E5%B9%BF%E5%91%8A-favicon-%E5%8F%8C%E5%88%97)

- 去除广告
- 去除百家号
- ……



#### [网盘助手](https://greasyfork.org/zh-CN/scripts/378301-%E7%BD%91%E7%9B%98%E5%8A%A9%E6%89%8B) 

by [哩呵](http://pan.newday.me/)

- 百度网盘分享时自定义提取码
- 百度网盘、腾讯微云、蓝奏云万能钥匙
- 百度网盘生成并展示下载链接，[再配合 IDM 插件](https://www.runningcheese.com/baiduyun)，解决网盘限速问题
- 还有一些 NSFW 相关的脚本，这里就不便提及了



### [weibo.com](https://greasyfork.org/zh-CN/scripts/by-site/weibo.com)

#### [药方](https://greasyfork.org/zh-CN/scripts/3249-yet-another-weibo-filter)

- 根据关键字、作者、话题等过滤微博（及评论）
- 界面清理
- 去广告
- 调整版式



### [youtube.com](https://greasyfork.org/zh-CN/scripts/by-site/youtube.com)

####  [本地 YouTube 下载器](https://greasyfork.org/zh-CN/scripts/369400-local-youtube-downloader)

不需要透过第三方的服务就能下载 YouTube 影片。





## 同步脚本

右击 Tampermonkey - `选项` - `设置`：

1. `通用` - `配置模式`：`高级`
2. `同步脚本` - `启用 TESLA` - `同步类型`：`浏览器同步`
3. `保存`

如此设置，安装的脚本就可以随着你的 Google 账号进行同步。

没有番茄，推荐采用坚果云 WebDAV 同步脚本。

[拒绝从头再来，重装系统之前这样备份你的油猴脚本 - by Eric_hong](https://sspai.com/post/42878)



---



**关联阅读**

- 👍 [浏览器必备，2019 年度最喜欢油猴脚本 - 奔跑中的奶酪](https://www.runningcheese.com/userscripts)：大量精选脚本，任你挑选。
- 💚 [谷歌浏览器（Google Chrome)：插件（扩展程序）清单及使用技巧 - 庭说](https://tingtalk.me/chrome/)
- 🔞 [Sleazy Fork](https://sleazyfork.org/zh-CN)：这是一个提供 [NSFW 脚本](https://jubt.gq/cn/index.html#%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC) 的网站（[新地址发布页](https://jubt.gitlab.io/home/)）。

