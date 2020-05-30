---

title: Google Cloud Platform 注册和使用指南
date: 2019-04-27  
updated: 2020-05-08  
categories: 翻墙方法   
tags: 突破网络审查   
permalink: gcp  
---

感谢 Google Cloud Platform（GCP，谷歌云）赠予 $300 和 12 个月免费试用期。

<!-- more -->


## 准备工作

- [科学上网环境](https://tingtalk.me/fq/)：首先要具备访问 Google 的条件。先买一个月的 [Just My Socks](https://justmysocks1.net/members/aff.php?aff=1010)（下单优惠码 `JMS9272283`）或者其他免费的加速服务过渡一下
- 外币单标信用卡：要求没有银联标志，只有 Visa、Mastercard、American Express……，例如招商银行的 [外币单标国际信用卡](http://market.cmbchina.com/ccard/uniqbk/)（有效期内免年费）
- Google 账号
    - 在 YouTube（手机网页版）注册新账号可以验证国内的手机号码（`2019-03-01` 可能已失效）
    - 或在有 Google 服务框架的 Android 手机上注册 `2019-05-02`



## 开始申请

- [申请地址](https://cloud.google.com/free/)
- 账号类：个人
- 申请国家：美国（因为没得选）
- 借助 [地址生成器](https://www.fakeaddressgenerator.com/World/us_address_generator) 获得美国地址，优选免税州（State）：Delaware / Montana / New Hampshire / Oregon
- 邮寄地址：与注册地址一致，或填写真实的地址
- 去邮箱查看激活邮件并上传身份证和银行卡，一般 10 分钟内解封
- Google 会从信用卡扣除 1 美元用于验证，验证完成后会退还到账户
- 不要点击页面的 `升级` 或 `激活` 按钮，否则会从免费试用升级到付费帐号


## 创建防火墙规则

导航菜单 > VPC 网络 > 防火墙规则 > [创建防火墙规则](https://console.cloud.google.com/networking/firewalls/list)

- 名称：随意
- 说明：随意
- 日志：默认 `关闭`
- 网络：默认 `Default`
- 优先级：默认 `1000`
- 流量方向：默认 `入站`
- 对匹配项执行的操作：默认 `允许`
- 目标：`网络中的所有实例`
- 来源过滤条件：`IP 地址范围`
- 来源 IP 地址范围：`0.0.0.0/0`
- 次要来源过滤条件：`无`
- 协议和端口：`全部允许`
- 执行（决定是否对关联目标应用规则）：`已启用`


## 创建实例

导航菜单 > Compute Engine > VM（虚拟机）实例

- `创建`
- 名称：随意
- 区域：`asia-east1（台湾）`
    - 不知道选哪个区域的 VM 实例，可以在 www.gcping.com 分别测试宽带网络和数据网络对 GCP 的延迟情况
- 地区：`asia-east1-c`
    - a 和 b 也无妨
- 机器类型：`微型（1 个共享 vCPU）`
    - `0.6 GB 内存，f1-micro` 对搭梯完全够用
    - 选择这个配置，每个月大概有 86 GB 加速流量可用
- 启动磁盘：`Debian GNU/Linux 9 (stretch)`
- 身份和 API 访问权限：默认
- 防火墙：勾选 `允许 HTTP 流量` 和 `允许 HTTPS 流量`
- 展开 `管理、安全、磁盘、网络、单独租用`
    - `网络`
        - `网络接口` - `外部 IP` - `创建 IP 地址` - `保留新的静态 IP 地址` - `保留`


## 部署科学上网工具

- 找到对应的示例，选择 `SSH` - `在浏览器窗口中打开`
- 输入 `sudo -i` 切换到 root（开启管理员权限）
- 接下来的步骤请移步 [番茄种植指南](https://tingtalk.me/fq-diy/)



## 到期后如何再次申请

1. 注册一个全新的谷歌账号
2. 绑定同一张信用卡（也可不同）
3. 按照以上步骤执行



亲测时间 2020 年 5 月 9 日。

