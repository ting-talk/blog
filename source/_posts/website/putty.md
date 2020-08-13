---
title: 使用 SSH（Secure Shell）客户端（PuTTY）远程连接 VPS  
date: 2020-06-29  
updated:  2020-06-29
categories: 网站搭建  
tags: [网站, VPS]  
---

![ssh](putty/ssh.png)

- Windows 用户可以使用 PuTTY（读 [ˈpʌti] ）连接 VPS。
- macOS 用户可以使用苹果电脑自带的终端（Terminal）连接 VPS。

<!-- more -->



## [下载 PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

3.0 M 左右。

- 32 位系统：[putty-0.74-installer.msi](https://the.earth.li/~sgtatham/putty/latest/w32/putty-0.74-installer.msi)
- 64 位系统：[putty-64bit-0.74-installer.msi](https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.74-installer.msi)



**PuTTY 中如何复制粘贴**

- 要将复制的文本**粘贴**到终端（PuTTY 的 SSH 登录后的界面）里，只需要右键单击就行了
- 要从终端中**复制**文本，只需要用鼠标左键拖拉选中即可





## 使用 PuTTY

- Host Name (or IP address)：输入 VPS 的 IP Address（以 44.55.666.777 为例）
- Port：22
- Connection type：SSH
- Save
- Open：弹出 PuTTY Security Alert，选择 `是`
- login as：root
- root@44.55.666.777's Password：复制 VPS 的 Password，鼠标右键粘贴（界面上不会显示任何内容），回车。显示 `[root@vultr ~]#` 则代表连接成功（第一次登录的时候，会出现安全警告，单击 `是（Y）`）



**快捷登录**

右键 PuTTY 的快捷方式，依次选择「属性」 - 「快捷方式」 - 「目标」 - 在 `"*:\Program Files\PuTTY\putty.exe"` 后面 `空一格` 输入 `root@IP Address -pw "Password"`，完整展示如下：

```
"D:\Program Files\PuTTY\putty.exe" root@44.55.666.777 -pw "FuckGFW"
```


