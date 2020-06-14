---

title: 互联网百宝箱
date: 2019-03-20  
updated: 2020-03-30
categories: 数字生活   
tags: 网上冲浪指南
permalink: digital-life-tips  

---


这是一个信息爆炸的时代，如何在网络上体面地「冲浪」？我有我的方法。

<!-- more -->



## 将 Gmail 的所有未读邮件标记为已读

1. 打开 [Gmail](https://mail.google.com)
2. 在搜索栏输入 `in:inbox is:unread`，筛选出收件箱中的所有未读邮件。
3. 点击左上角的 `选择全部`（搜索框的左侧下方）。
4. 鼠标平行右移，找到 `更多操作` > `标记为已读`

太棒了！收件箱里一封未读邮件都没有，太清爽了。



## 无法连接局域网打印机

### 原因一

可能是因为没有启动 `Workstation` 服务：

> 使用 SMB 协议创建并维护客户端网络与远程服务器之间的连接。如果此服务已停止，这些连接将无法使用。如果此服务已禁用，任何明确依赖它的服务将无法启动。

1. `Win` + `S` 打开搜索：`服务`
2. 右击 `Workstation`，选择 `属性`
    - `启动类型`：`自动`
    - `服务状态`：`正在运行`，否则点击 `启动`



### 原因二

当使用内网 IP（例如 `192.168.1.56`）无法连接打印机时，试试通过 `计算机名` 添加打印机：

1. 右键单击 `我的电脑（计算机）` - `属性`
2. `计算机名、域和工作组设置` - `更改设置`
3. 复制 `计算机全名`

或者：

1. `Win` + `S` 打开搜索：`查看电脑名称`
2. 复制 `设备名称`



## 笔记本电脑无法开机

按下电源键（开机键）毫无反应，怎么办？

1. 把电池拔掉，放置一段时间。
2. 长按电源键 15 秒以上。
3. 插上电源（不插电池）。
4. 也许就可以开机了。



## 文件下载

**如何直接下载百度网盘的文件（无需登录账号）**

- 方法：在 `baidu` 后面加 `wp`（网盘 / 我呸的拼音首字母）
- 例如：`pan.baidu.com/s/1dyGdFw` > `pan.baiduwp.com/s/1dyGdFw`

## 压制 B 站视频

- 编码器：H.264
- 码率模式
  - 二次编码模式（2pass）
    - 视频码率：1150 Kbps ~ 1350 Kbps
    - 音频码率：320 Kbps / 128 Kbps
    - 平均码率：两者加起来，小于 1500 Kbps（1400 Kbps ~ 1450 Kbps 为佳）
  - 固定质量模式（CRF）
    - 视频质量：23~26 CRF（越小质量越好，大于 18 为佳
- 封装（容器）两次，第一次先压制成 MP4 格式，第二次再封装成 FLV。分辨率：960×540

其他：


- [在线旋转视频](https://www.aconvert.com/cn/video/rotate/)：点击文件链接，右键另存为即可下载到电脑上（视频文件大小限制为 200M）

## 头像生成软件

- [FaceYourManga](https://www.faceyourmanga.com/)
    - Dr_Ting 的头像就是在这个网站「捏」出来的
    - 下载高清头像需要付费
- [Avataaars Generator](https://getavataaars.com)：可下载 SVG 文件
- [Gopherize.me](https://gopherize.me/)：A Gopher（地鼠） pic that's as unique as you
- [SuperMii酷脸](https://www.supermii.cn/)：没有网页版，需下载 app
- [Robohash](https://robohash.org/)：Make robot/alien/monster/kitten gravatar for any text（CC BY 3.0）



## 文件命名

- 如果需要分隔文件名的关键词，用下划线，而不是空格。
- 如果需要以英文字母命名，使用小写字母，而不是大小写混用。
- 临时输入大写字母：Shift + 小写字母。




## 国家标准查阅

- [国家标准全文公开系统](http://www.gb688.cn/bzgk/gb/)
- [全国标准信息服务平台](http://www.std.gov.cn/)



## 中国地图

[下载链接](https://www.lanzous.com/iaxgdob) by [卷毛WEAPON](https://www.bilibili.com/video/BV1aC4y147T7)

包含 `.ai`、`.psd`、`.jpg`、`.png`



## 心理学

**拆屋效应**
- 先提出一个很夸张的要求，再提出一个合理的要求
- NO：屋子暗，开个天窗
- OK：屋子暗，拆掉屋顶，NO，那开个天窗吧


**框架效应**
- NO：1 块钱的冰棍，现金支付，加 5 毛
- OK：2 块钱的冰棍，微信支付，减 5 毛



## [如何设计强壮的密码](https://www.haikebang.org/passphrase.html)

- `@)!(` 是由 shift + `2019` 输出的
- `t@)!(b` 首字母 `t` 和尾字母 `b` 代表“淘宝”
- `!doGyMhO` 是 `OhMyGod!` 的反转
- `G@o)o!g(l!e)` 是 `Google` 和 shift + `201910` 的穿插组合
- 银行卡的密码——前四位和最后两位数的和、特别日期 MMDD 加上卡号首尾两位或末两位等……





## 降低 PayPal 手续费

- [更改币种兑换程序](https://www.paypal.com/c2/cgi-bin/webscr?cmd=_profile-merchant-pull-funding&buyer_hub) 从而降低手续费：`用 PayPal 的兑换程序完成使用我的卡币种的交易` 改成 `在给我的账单中使用卖家列出的币种。`





## 其他

- [Witeboard](https://witeboard.com)：打开即用的免费在线白板工具
- 心情烦躁，使用 [潮汐冥想](https://tide.fm/meditation/) 安抚焦虑的情绪
- [奶牛快传](https://cowtransfer.com/)：文件传输服务
- [让 Excel 表格自动更新日期](https://support.office.com/zh-cn/article/today-%E5%87%BD%E6%95%B0-5eb3078d-a82c-4736-8930-2f51a028fdd9)
  - 日期 + 星期：`=TEXT(TODAY,"YYYY 年 MM 月 DD 日 AAAA")`
  - 日期 + 7 天：`=TEXT(TODAY()+7,"YYYY 年 MM 月 DD 日 AAAA")`
  - 添加前缀：`="INV"&TEXT(TODAY(),"YYYY-MM-DD")`
- [爱达杂货铺](https://adzhp.cn/)
- [资源搜索 - 虫部落](http://magnet.chongbuluo.com/)
- [大力盘搜索](https://www.dalipan.com/) 或 [大圣盘搜索](https://www.dashengpan.com/)
- [假装 Windows 升级界面](http://fakeupdate.net/)：用假的 Windows 升级界面骗你的同事和朋友吧，以此达到此时无法工作的假象。
- [OCR 图片识别文字工具 - 蛙蛙在线工具](https://www.iamwawa.cn/ocr.html)
- [中国失踪人口档案库](http://zgszrkdak.cn/)
- [公交线路辐射图（周边公交通向哪）](https://bus.daibor.com/#/)：作者的介绍：[做完这个网站，终于知道任意位置的公交都通向哪里了](https://sspai.com/post/59229)
- [舔狗日记](http://tg.94275.cn/)
- [在线 DOS 游戏合集](https://dos.zczc.cz/)
- [QQ 空间导出助手](https://github.com/ShunCai/QZoneExport)：落叶随风，青春，稍纵即逝，QQ 空间，一个承载了很多人的青春的地方。万一腾讯倒闭，记录着我们的青春的数据怎么办？数据，还是掌握到自己手里的好，QQ 空间导出助手，可以导出备份 QQ 空间的日志、私密日志、说说、相册、留言板、QQ 好友、视频、收藏夹为文件，便于永久保存与迁移。
- [方方格子](http://www.ffcell.com/index.aspx)：一个专注 Excel 学习交流、资源下载的网站。
- [小恐龙公文排版助手 for Word/WPS](https://gw.xkonglong.com/#/)



关联阅读：[数字独立与自由](https://www.zmonster.me/2020/03/07/digital-independence-and-freedoom.html)