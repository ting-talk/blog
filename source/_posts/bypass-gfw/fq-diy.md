---

title: 番茄种植指南（梯子搭建教程）  
date: 2017-10-11  
updated: 2019-12-03  
categories: 翻墙方法   
tags: 突破网络审查  

---

![tomato](fq-diy/tomato.png)

在墙大的国家机器面前，我推荐 99% 的人直接去 [菜市场](https://github.com/387099/SSR/issues/1) 购买 [现成的番茄](https://tingtalk.me/fq/)。倘若动手能力不错，可以买一块地（VPS），自己种番茄。

<!-- more -->

## 术语解释

非技术出身，不妥之处，敬请斧正。



### [VPN](https://zh.wikipedia.org/zh-hans/%E8%99%9B%E6%93%AC%E7%A7%81%E4%BA%BA%E7%B6%B2%E8%B7%AF)

- 全称：Virtual Private Network（虚拟私人网络）。
- 因为本来是用于企业内网传输，被用来翻墙后，效果并不理想，而且不能分流（系统（全局）层面）。
- 但是以 VPN 已经成为是翻墙的代名词。



### SS

- 全称：Shadowsocks(R)。
- 但 SS 只是一口锅，你需要把番茄（翻墙）放进去，稍作炒制（设置），才能烹饪出可口的番茄。番茄可以自己种，也可以去菜市场（俗称机场，因为 SS 的图标是小飞机）买。
- 在电脑上代理软件，只有浏览器才能上外网，其他软件，例如 [Telegram](https://tingtalk.me/telegram/)，需要额外配置。
- 在手机上是 VPN 软件，连接之后在状态栏有 VPN 的标识，因此手机上的浏览器、YouTube、Instgram、Twitter 无需单独设置，即可访问海外网站。
- 因为 SS 诞生之初就是为了翻墙，所以此法至今健在。



**Shadowsocks(R) 各客户端的区别**

Shadowsocks(R) 简称为 SS(R)，俗称酸酸（乳）。因为图标是小飞机，所以番茄商（说法来自庭说）也叫机场。

| 客户端                                                 | 注释                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| [Shadowsocks](https://github.com/shadowsocks)          | 原版客户端，但不支持订阅，不过更新勤快。                     |
| [ShadowsocksD](https://github.com/TheCGDF)             | 在 Shadowsocks 的基础上增加了订阅功能，更新勤快，但对系统挑剔。 |
| [ShadowsocksR](https://github.com/shadowsocksr-backup) | Shadowsocks 的分支，原生支持**订阅**功能，但停止更新了。     |
| [ShadowsocksRR](https://github.com/shadowsocksrr/)     | ShadowsocksR 的继承者，推荐使用。                            |



### 线路选择

- 直连：翻墙客户端 --> 公网（GFW） --> 翻墙服务端
- BGP：翻墙客户端 --> 国内中转服务器（BGP） --> 公网（GFW） --> 翻墙服务端
- IPLC：翻墙客户端 --> 专线内网（IPLC） --> 翻墙服务端

价格和稳定性依次递进。



关联阅读：[一份不负责任的机场使用手册 - DuyaoSS](https://www.duyaoss.com/archives/1086/) 






## 购买 VPS

VPS 是英文 Virtual Private Servers （虚拟专用服务器）的缩写，你可以粗浅地理解为一台不关机的电脑。借助 VPS 这个「跳板」，我们就可以访问被屏蔽的网站。

如果有外币单标国际信用卡，可以 [免费申请 Google Cloud Platform](https://tingtalk.me/gcp/) 作为你的 VPS。

如果薅不到 Google 的羊毛，可以试试 [Vultr](www.vultr.com/?ref=7230883) 按小时计费的 Cloud Compute，纵使被当局「封印」了，换一台即可，相比于月付和年付，灵活稳妥。但是开出没有「前科」的 IP 需要一点时间，所以普通用户（包括我）还是直接 [买番茄](https://tingtalk.me/fq/) 吧。




### 注册

- 访问 [Vultr](https://www.vultr.com/?ref=7230883)
- 点击 `Creat Account`，注册账户并验证邮箱

### 充值

- `Log in`（登录）后台
- 点击 `Billing`（账单）
- 选择 `Alipay`（支付宝）或 `WeChat Pay` （微信支付）并支付 $10



### 部署

- 选择 `Servers`（服务器）
- 默认进入 `Vultr Cloud Compute (VC2)` 选购页面
- 选择 `Server Location`（服务器地区）
  - 不同运营商，不同地区的出口带宽不一样，请 [实测](https://www.vultr.com/faq/) 为准
  - Server 按小时付费，搭建完不满意或 [测试](https://ipcheck.need.sh/) 已被墙，Deploy 一台新的 Server 即可，再把之前的服务器 Destroy 掉，换机成本低至 $0.01
- `Server Type`（操作系统）：推荐 `Cent OS 7 × 64`
- `Server Size`（配置）：`$5/mo`
  - 优先选择低于 `$5/mo` 的配置（`$2.5/mo`、`$3.5/mo` 经常售罄）
  - 请勿选择 `IPv6 ONLY` 的配置
- `Additional Features`（附加特性）：免费的都可以勾上
- `Deploy Now`
- 当服务器的状态 `Status` 由红色的 `Installing` 变为绿色的 `Running`，代表你购买的 VPS 已经启动了



## 连接 VPS

使用 SSH（Secure Shell）客户端可以远程控制你的刚刚购买的 VPS。

- [Windows 用户可以使用 PuTTY（读 [ˈpʌti] ）连接 VPS](https://tingtalk.me/putty/)。
- macOS 用户可以使用苹果电脑自带的终端（Terminal）连接 VPS.



## 部署 VPS



目前比较流行的番茄种植技术有：

- Shadowsocks
  - 2012 年 4 月 20 日诞生
  - 主流种植技术，但种出来番茄保质期越来越短了
  - 变体有 ShadowsocksR 和 ShadowsocksRR
- V2Ray
  - 2015 年 11 月 30 日发布 1.0 正式版
  - 新兴种植技术，可以救活被网管砸坏的番茄
  - 种植技术较复杂



### Shadowsocks

**搭建流程**

1. 在 VPS（服务器）上安装 Shadowsocks 服务端
2. 在电脑 / 手机上安装 Shadowsocks 客户端
3. 启动客户端，输入服务器地址、端口、密码和加密方式等，不出意外，即可访问 Google



#### 安装 Shadowsocks 服务端

根据不同的系统，复制下面的 Shadowsocks 一键安装脚本（四合一），右键粘贴到 PuTTY 的 `[root@vultr ~]#` 后面：

**CentOS**

```shell
wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
chmod +x shadowsocks-all.sh
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
```



**Debian/Ubuntu**

```shell
wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-libev-debian.sh
chmod +x shadowsocks-libev-debian.sh
./shadowsocks-libev-debian.sh 2>&1 | tee shadowsocks-libev-debian.log
```





回车:

```
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
```

回车:

```
Which Shadowsocks server you'd select:
1) Shadowsocks-Python
2) ShadowsocksR
3) Shadowsocks-Go
4) Shadowsocks-libev 
Please enter a number (Default Shadowsocks-Python):
```

输入 `4` 选择 Shadowsocks-libev，回车：

```
You choose = Shadowsocks-libev

Please enter password for Shadowsocks-libev
(Default password: teddysun.com):
```

输入 `密码`（推荐先在记事本写好密码，再粘贴进来），回车：

```
password = ********

Please enter a port for Shadowsocks-libev [1-65535]
(Default port: *****):
```

输入一个喜欢的 `端口号`（推荐五位数），回车：

```
port = *****

Please select stream cipher for Shadowsocks-libev:
1) aes-256-gcm
2) aes-192-gcm
3) aes-128-gcm
4) aes-256-ctr
5) aes-192-ctr
6) aes-128-ctr
7) aes-256-cfb
8) aes-192-cfb
9) aes-128-cfb
10) camellia-128-cfb
11) camellia-192-cfb
12) camellia-256-cfb
13) xchacha20-ietf-poly1305
14) chacha20-ietf-poly1305
15) chacha20-ietf
16) chacha20
17) salsa20
18) rc4-md5
Which cipher you'd select(Default: aes-256-gcm):
```

加密方式选择支持 AEAD Ciphers 的算法：

- 用的是新款手机，选择 `3) aes-128-gcm`（旧款手机用这个加密方法，开销很大）
- 小白直接选择更普适的 `13) xchacha20-ietf-poly1305`（[Why](https://download.libsodium.org/doc/secret-key_cryptography/aead#tldr-which-one-should-i-use)）

回车：

```
cipher = xchacha20-ietf-poly1305

Do you want install simple-obfs for Shadowsocks-libev? [y/n]
(default: n):

```

输入 `n`，回车：

```
You choose = n

Press any key to start...or Press Ctrl+C to cancel

```

回车，稍等几分钟：

```
Congratulations, Shadowsocks-libev server install completed!
Your Server IP        :  44.55.666.777
Your Server Port      :  *****
Your Password         :  ********
Your Encryption Method:  xchacha20-ietf-poly1305

Your QR Code: (For Shadowsocks Windows, OSX, Android and iOS clients)
 ss://eGNoYWNoYTIwLWlldGYt**9seTEzMDU6NjM4OTAyMDM4OC5ANDUuNz**MTYwLjIwOTo1NTY2Ng==
Your QR Code has been saved as a PNG file path:
 /root/shadowsocks_libev_qr.png

Welcome to visit: https://teddysun.com/486.html
Enjoy it!

```

**为 Shadowsocks 加把劲（可选）**

这一步是开启 Google BBR 来提升网络速度（开挂）。具体操作如下：

1. 在 `[root@vultr ~]#:` 后粘贴以下代码：

   ```
   wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
   ```

   回车：

   ```
   Press any key to start...or Press Ctrl+C to cancel
   ```

   回车……

2. 安装完成后，脚本会提示需要重启 VPS，输入 `y`，回车后重启

3. 重连 SSH，验证 BBR 是否安装成功

4. 输入 `uname -r`，有 `4.13.0` 以上就表示内核更新成功



**扩展知识**

一般来说，AES-GCM 系列算法的内存使用低于 ChaCha20-Ietf-Poly1305 系列算法

ARM v8 之后加入了 AES 指令，在 ARM v8 平台上的设备，AES 方式反而比 ChaCha20-Ietf-Poly1305 方式更快，性能更好，这样可减少加密解密所产生的数据量，使得性能更好。


对于精简指令集的 ARM 平台，由于没有 AES-NI 指令集，ChaCha20-Ietf-Poly1305 在同等配置的手机中表现是 AES 的 4 倍，这样可减少加密解密所产生的数据量，使得性能更好。一般在近几年的手机/软路由 CPU 中都内置了AES-NI 指令集。

by [Dler Cloud](https://t.me/dlercloud_news/1446)



#### 安装 Shadowsocks 客户端

参考 [番茄食用指南](https://tingtalk.me/fq/) 中的「吃番茄」章节。



### V2Ray

未实践过。



---



**翻墙往事**

第一阶段：2016 年，我刚开始翻墙的时候，在搜索引擎输入关键词「翻墙」，循着蛛丝马迹，找到了 [赛风](https://psiphon.ca/zh/index.html)，接着用 [GoAgent](https://zh.wikipedia.org/zh-hans/GoAgent) ，但是速度都很慢。看到 [Fenng 的博客](https://dbanotes.net/siteinfo.html) 推荐 GreenVPN，买了一年，只用了半年，2017 年 6 月 22 日就被封了，也没有退款。

第二阶段：既然别人靠不住，不如自己动手。2017 年 10 月 11 日，用一键脚本 [在 Vultr 搭建了 Shadowsocks](https://tingtalk.me/fq-diy/)。

第三阶段：可是 GFW 的封锁技术日新月异，因为种植技术一般，种出来的番茄（翻墙）越来越难吃了，回到 [购买番茄](https://tingtalk.me/fq) 的路子上。



若批评不自由，则赞美无意义。如果只允许一种声音存在，那么唯一存在的那个声音，基本上就是谎言。因为饭里有几粒沙子，从此以后就不吃饭，还不准全国人民吃，这就是中国特色。



**特别鸣谢**

营造清朗网络环境的第一步是让信息充分流动，但是在「泥泞的中文互联网」上，我们都是信息难民。感谢那些教我们 [种番茄](https://tingtalk.me/fq-diy/) 的先驱：特别是秋水逸冰，他的 Shadowsocks 四合一一键安装脚本和 [BBR 一键安装脚本](https://teddysun.com/489.html) 极大地改善了我们的 [数字生活](https://tingtalk.me/categories/digital-life/)。


智者建桥，愚者建墙。脚著谢公屐，身登青云梯。愿大家永远坚强，永远懂得如何飞翔。



**关联阅读**

- [科学上网 - 左耳朵](https://haoel.github.io/)
- [记录一下 SS 的前世今生，以及一个简单的教程总结](https://github.com/JadaGates/ShadowsocksBio/blob/master/readme.md)
- [个人使用 VPN「翻墙」是否违法？基于规范性法律文件、案例以及相关计算机技术的分析与讨论 - 王宇扬](https://mp.weixin.qq.com/s/cndzW_oXClkSdwOtam0qUw) | [存档](https://web.archive.org/web/20200521014852/https://mp.weixin.qq.com/s/cndzW_oXClkSdwOtam0qUw)