---

title: SwitchyOmega：在浏览器上轻松快捷地管理和切换多个代理
date: 2019-09-18
updated: 2019-10-15  
categories: 翻墙方法   
tags: [突破网络审查, Chrome] 
permalink: switchyomega  

---

![switchyomega](switchyomega/switchyomega.png)

tingtalk.me 因为不可抗力，在中国大陆被遭到屏蔽，此时在 [智能分流（PAC）模式](https://github.com/gfwlist/gfwlist) 下无法正常访问庭说的博客。于是不得不切换为 `全局模式`，但这样一来，其他可以正常访问的网站（例如 sspai.com）也走代理通道了（速度慢，费流量）。所以阅读完我的博客之后，不得不换回 PAC 模式。

这个时候，借助 [SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega/) 可以创建属于自己的规则列表（任意网站，走不走代理通道，你说了算）。

<!-- more -->


SwitchyOmega 不提供代理服务，它只是一个桌面浏览器插件（手机上不适用），但它可以：
- 更便捷地切换全局模式和分流模式
- 快速添加被屏蔽的网站（当 PAC 智能分流模式中的 [GFWList](https://github.com/gfwlist/gfwlist) 未能及时覆盖到被封锁的网站时）



安装 SwitchyOmega 到浏览器后，它就会接管代理规则，此时客户端的代理规则对浏览器不适用。




## 安装

打开 [SwitchyOmega 的项目发布页](https://github.com/FelisCatus/SwitchyOmega/releases)，根据不同的浏览器，选择对应的安装方式。使用 Chrome 的用户，请在 [Chrome 网上应用店](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN) 获取 [SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN)。添加到浏览器后会自动跳出一段介绍性的教程，点击 `跳过教程`。



## 配置

### 界面

- 初始情景模式：`auto switch`


### 导入/导出

- `启用同步`

### proxy

- 代理协议：`SOCKS5`
- 代理服务器：`127.0.0.1`
- 代理端口：`1080`

### auto switch

**导入在线规则列表**
- 规则列表格式：`AutoProxy`
- 规则列表网址：`https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt`
- `立即更新情景模式`

**切换规则**
- 规则列表规则（按照规则列表匹配请求）：`proxy`
- 默认情景模式：`直接连接`


## 启用

左击浏览器右上角的 SwitchyOmega 图标，选择：
- `直接连接`：全部网站不通过代理，直接连接网站
- `系统代理`：通过客户端代理，此时请在客户端开启代理
- `proxy`：全部网站通过代理连接网站
- `auto switch`：根据 GFWList 智能分流，**最常用的模式**
- `添加条件`：把网站加入到自己的规则列表（重启浏览器后依然有效）
- `漏斗图标`：临时切换通道（重启浏览器后失效）



---

关联阅读：[谷歌浏览器（Google Chrome)：插件（扩展程序）清单及使用技巧 - 庭说](https://tingtalk.me/chrome/)