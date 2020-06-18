---

title: 如何在小米 6 上安装 Google Camera（谷歌相机）
date: 2020-03-19   
updated: 2020-03-21 
categories: 数字生活  
tags: 网上冲浪指南
permalink: gcam

---

我目前的主力手机是 2017 年 8 月 1 日买的小米 6。为了摆脱续航焦虑，2020 年 3 月 14 日去小米之家，花了 ￥99 换了一个新电池。为了榨干双摄的镜力，2020 年 3 月 19 日我装上了有「夜视仪」之称的的谷歌相机。[如若你不是手机摄影爱好者，就没必要折腾了](https://b23.tv/av48239681)。因为再强大的手机相机，在你手中也只是二维码识别器。



小生未深入研究 Google Camera，不妥之处，敬请斧正。



<!-- more -->

## 💪强大在哪

**HDR+ 增强**

在弱光或背光环境下，拍出「高动态范围」的照片，即看到更多的细节，不至于死黑或者死白。



**夜视（Night Sight）**


 这个当家本领可将所有隐没在黑暗中的美好细节与色彩一一呈现。请看视频演示：[小米 6 安装上谷歌相机竟然变成了夜视仪？！](https://www.bilibili.com/video/av49411443)



**最佳照片**

使用「最佳照片」功能挑选最美瞬间，系统会自动建议最佳照片，确保其中无人眨眼，让照片张张精彩。



鉴于其出色的夜拍表现，开发者将其移植到各种 Android 手机上，其中就包括一代神机小米 6。下面，以 MI 6 为例，开启 Google Camera 移植之旅。不懂之处，请配合视频教程「[可能是最简单的谷歌相机安装教程（免 Root）](https://www.bilibili.com/video/av56697545)」操作。



## 💾备份数据

从开发版 MIUI 10 11.8 伊始，手机不用 Root 也可以安装谷歌相机。所以如果是稳定版 MIUI，切换到开发版 MIUI，手机会被格式化（恢复出厂设置），所以务必备份好所有数据。



## 🤖刷开发版

**方法一**

依次点击 `设置` > `我的设备` > `MIUI 版本` > 右上角的 3 个点：`切换到开发版`。

在下载的同时，可以再检查一次，数据是否都备份好了。

下载好安装包后，根据系统提示，重启，即可刷入开发版 MIUI。



**方法二**

你也可以通过电脑下载 [小米 6 开发版 MIUI 完整安装包](https://www.miui.com/download-330.html)。

在下载的同时，访问 [Google Camera Port Hub](https://www.celsoazevedo.com/files/android/google-camera/developers/)，根据机型（查找的快捷键是 `Ctrl` + `F` ） ，提前下载好谷歌相机的安装包（APK）备用。

下载好开发版 MIUI 安装包后，通过数据线把 MIUI 开发版传输到手机上，接着在 `设置` > `我的设备` > `MIUI 版本` > 右上角的 3 个点：`手动选择安装包` 进行刷机。



## 🍳预装环境

用 Google 的产品，怎么能少了谷歌三件套：Google 服务框架、Google Play 服务、Google Play 商店。

**方法一**

1. 学会 [科学上网](https://tingtalk.me/fq/)。
2. 借助 [GO谷歌安装器](https://www.coolapk.com/apk/com.goplaycn.googleinstall) 一键安装谷歌官方三件套。
3. 在手机上，打开 Play 商店，注册 Google 账号。
4. 下载 [Manual Camera Compatibility Test（相机兼容性测试软件）](https://www.coolapk.com/apk/pl.vipek.camera2_compatibility_test)，安装并启动此 app ，看到全部打绿色的 ✅，说明安装谷歌相机的环境已经准备就绪了。



**方法二（未亲测）**

1. 去 [microG](https://microg.org/download.html) 下载 [Services Core](https://microg.org/fdroid/repo/com.google.android.gms-19420020.apk)，即可安装轻量级的谷歌全家桶（不用科学上网，不用注册 Google 账号），重启手机。
2. 下载 [Manual Camera Compatibility Test（相机兼容性测试软件）](https://www.coolapk.com/apk/pl.vipek.camera2_compatibility_test)，安装并启动此 app ，看到全部打绿色的 ✅，说明安装谷歌相机的环境已经准备就绪了。



## ⚙️开始移植

1. 打开 [Google Camera Port Developers/Modders](https://www.celsoazevedo.com/files/android/google-camera/developers/)，根据机型下载对应谷歌相机的 APK。如果你也是小米 6 钉子户，下方是我为你整理了下载链接（Q 代表 Android 10），选一个即可：
   - 从 QQ 群 `611848044` 下载
   - 从 [网页](https://www.celsoazevedo.com/files/android/google-camera/dev-fu24/) 下载 by fu24
   - 从 [Telegram](https://t.me/alexey070315) 下载 by Alexey070315
   - 从 [网页](https://www.celsoazevedo.com/files/android/google-camera/dev-alexey070315/) 下载 by Alexey070315
2. `设置` > `应用设置` > `应用管理` > 找到刚刚安装好的谷歌 `相机` > 在 `权限管理` 开启必要的选项，例如 `相机`、`录音`、`读写手机存储` 等。
3. 打开 `电话` app，在拨号界面输入 `*#*#0610#*#*`，显示 `Wangzn2016，enable HAL3 test…`，则代表 bulid 里面就添加了 HAL3 代码（我也不懂技术细节），然后重启手机，即可享受谷歌相机强大的拍摄能力。

> 0610 是 开发者 [wangzn2016](https://weibo.com/u/6586011938) 的生日（6 月 10 日）



## 💡变得更强

以下设置，如果不生效，请重启 app（上滑退出 app）或手机。

### HDR

- 相机主界面上方：`HDR+` > `HDR+ 增强`
- `更多` > `设置` > `HDR+ parameters: 36`（不同的 APK，操作路径可能不一样）

### 相机界面右侧的图标

某些 apk 才会显示以下图标：

- `S`
  Sabre（军刀）模式
- `NS`
  Night Shift（夜视）
- `AWB`
  自动白平衡

### 拍摄夜空

1. 进入 `夜视` 拍摄模式
2. 点击右上角的焦点设置 🅾️ 为 `远距离`。更改此设置可让相机对焦到距离超过 4 米的任何位置（例如夜空）。


### Save settings

`更多` > `设置` > `Save settings` > 输入配置的名字，然后 `Save`，便可导出 `配置文件.xml` 到 `内部存储设备\Gcam\Configs`。如此一来，便可分享你的配置文件给其他人，或者 [导入别人的配置文件](https://www.celsoazevedo.com/files/android/google-camera/f/settings09/)。



### FAQ

- [FAQ and Troubleshooting Tips - Google Camera Port Hub](https://www.celsoazevedo.com/files/android/google-camera/troubleshooting/)
- [GCam 各种功能翻译](https://home.gamer.com.tw/creationDetail.php?sn=4449276)
- 更多玩法，请下载酷安 App，进入相应的社区。