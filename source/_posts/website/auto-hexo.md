---

title: Hexo 博客自动部署系统  
date: 2017-11-25  
updated: 2017-11-25
categories: 网站搭建  
tags: [网站, Hexo, 博客]  

---

![hexo](hexo/hexo.png)

VPS + Dropbox + Nginx + Incrond 实现 Hexo 博客自动部署。

<!-- more -->


# 摘要


```
+--------------+    +----------------+    +-----------------+    +--------+
|              |    |                |    |                 |    |        |
| Write a blog +----> Dropbox to VPS +----> Incrond runhexo +----> hexo g |
|              |    |                |    |                 |    |        |
+--------------+    +----------------+    +-----------------+    +--------+
```


# 安装前的准备

- PuTTY
- Vim


# 配置 VPS

0. 本文的 VPS 由 Vultr（CentOS 7 x64）强力驱动

1. 使用 Putty 登陆 VPS（[Putty 的操作方法](http://blog.csdn.net/liang19890820/article/details/49700465)）

2. 升级 CentOS 内核 `yum -y update`，中间会卡顿半分钟，稍安勿躁

3. 安装 Git `yum install git-core`，并导入 key

```
rpm --import http://download-i2.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-6
```

4. 安装 yum-priorities

```
yum install yum-priorities -y
```

5. 安装好后，输入 `yum repolist`，如果成功的话，输出内容里有 `epel` 字样

6. 安装 Node.js

```
sudo yum install nodejs
sudo yum install npm --enablerepo=epel
```


# 安装 Dropbox

1. 安装

```
cd
wget -O dropbox.tar.gz "http://www.dropbox.com/download/?plat=lnx.x86_64"
tar -xvzf dropbox.tar.gz
```


2. 绑定 Dropbox 账户：`~/.dropbox-dist/dropboxd`。此时会不断刷新一个链接，复制此链接到浏览器即可与 Dropbox 账号进行绑定。

3. 下载 Dropbox 管理脚本

```
wget https://linux.dropbox.com/packages/dropbox.py
```

4. 增加 Dropbox 脚本的权限 `chmod +x ./dropbox.py`

5. 启动 Dropbox `./dropbox.py start`

6. 关闭局域网同步 `./dropbox.py lansync n`

7. 让 Dropbox 自启动 `vi /etc/rc.d/rc.local`

```
touch /var/lock/subsys/local
/root/dropbox.py start
```

8. 查看 Dropbox 工作状态 `./dropbox.py status`



# 安装 Hexo

1. 安装Hexo

```
npm install hexo-cli -g
```

2. 在 Dropbox 文件夹下新建 hexo 文件夹并初始化


```
cd Dropbox
mkdir hexo
cd hexo
hexo init
hexo g
```

3. 查看 Dropbox 有没有同步 hexo 文件

4. 关闭防火墙（永久性生效，重启后不会复原）

```
chkconfig iptables on  # 开启
chkconfig iptables off # 关闭
```


# 安装 Nginx

0. 先将域名解析到 VPS 的 IP 上

| 主机记录 | 记录类型 | 记录值 |
| :------: | :------: | :----: |
|    @     |    A     |   IP   |
|   www    |    A     |   IP   |


1. 安装 oneinstack，对可选择的组件，我们仅安装 Nginx，其余一律选 N

```
yum -y install wget screen curl python
wget http://mirrors.linuxeye.com/oneinstack-full.tar.gz
tar xzf oneinstack-full.tar.gz
cd oneinstack
screen -S oneinstack  # 如果网路出现中断，可以执行命令 screen -r oneinstack 重新连接安装窗口 
./install.sh
```


2. 安装完成后重启 VPS，并添加虚拟主机

```
cd oneinstack
./vhost.sh
```

3. 依照提示添加域名、伪静态、开启访问日志。一般情况下，不启动 SSL，不添加 hotlink。配置完后提示如下


```
#######################################################################
#       OneinStack for CentOS/RadHat 6+ Debian 7+ and Ubuntu 12+      #
#       For more information please visit https://oneinstack.com      #
#######################################################################
Your domain:                  tingtalk.me
Virtualhost conf:             /usr/local/nginx/conf/vhost/tingtalk.me.conf
Directory of:                 /root/Dropbox/hexo/public
Rewrite rule:                 /usr/local/nginx/conf/rewrite/wordpress.conf
```


4. 修改 Nginx 配置文件

```
vim /usr/local/nginx/conf/vhost/tingtalk.me.conf
```


```
server {
  listen 80;
  listen [::]:80;
  server_name tingtalk.me www.tingtalk.me;
  #return 301 https://$server_name$request_uri;
  return 301 https://tingtalk.me$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name www.tingtalk.me;
  ssl_certificate /etc/letsencrypt/live/tingtalk.me/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/tingtalk.me/privkey.pem;
  return 301 https://tingtalk.me$request_uri;
}

server {
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  server_name tingtalk.me;
  root /root/Dropbox/hexo/public;
  add_header X-Frame-Options DENY;
  add_header X-Content-Type-Options nosniff;
  add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";
  ssl_certificate /etc/letsencrypt/live/tingtalk.me/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/tingtalk.me/privkey.pem;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-RC4-SHA:!ECDHE-RSA-RC4-SHA:ECDH-ECDSA-RC4-SHA:ECDH-RSA-RC4-SHA:ECDHE-RSA-AES256-SHA:HIGH:!RC4-SHA:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!CBC:!EDH:!kEDH:!PSK:!SRP:!kECDH;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 60m;

  access_log /data/wwwlogs/tingtalk.me_nginx.log combined;
  index index.html index.htm index.php;

  location ~ [^/]\.php(/|$) {
    #fastcgi_pass remote_php_ip:9000;
    fastcgi_pass unix:/dev/shm/php-cgi.sock;
    fastcgi_index index.php;
    include fastcgi.conf;
```


5. 为 hexo 目录设置权限

```
chmod -R 755 /root/Dropbox/hexo/public
chown www:www /root/Dropbox/hexo/public
chmod +x /root/ /root/Dropbox/ /root/Dropbox/hexo/
```


6. 重启 Nginx：`service nginx restart`


# 安装 Incrond

1. 启动 Incrond 服务并加入开机自启动

```
yum install incron
service incrond start
chkconfig incrond on
```


2. 修改 Incrond 默认编辑器为 vi

```
echo 'editor = vi' >> /etc/incron.conf
```


3. 输入 `incrontab -e` 编辑配置

```
/root/Dropbox/hexo/source/_posts/ IN_MOVE,IN_MODIFY,IN_CREATE,IN_DELETE bash /root/runhexo.sh
/root/Dropbox/hexo/theme/ IN_MODIFY,IN_CREATE,IN_DELETE,IN_MOVE bash /root/runhexo.sh
```

注：
- IN_ACCESS，即文件被访问
- IN_MODIFY，文件被 write
- IN_ATTRIB，文件属性被修改，如 chmod、chown、touch 等
- IN_CLOSE_WRITE，可写文件被 close
- IN_CLOSE_NOWRITE，不可写文件被 close
- IN_OPEN，文件被 open
- IN_MOVED_FROM，文件被移走,如 mv
- IN_MOVED_TO，文件被移来，如 mv、cp
- IN_CREATE，创建新文件
- IN_DELETE，文件被删除，如 rm
- IN_DELETE_SELF，自删除，即一个可执行文件在执行时删除自己
- IN_MOVE_SELF，自移动，即一个可执行文件在执行时移动自己
- IN_UNMOUNT，宿主文件系统被 umount
- IN_CLOSE，文件被关闭，等同于(IN_CLOSE_WRITE | IN_CLOSE_NOWRITE)
- IN_MOVE，文件被移动，等同于(IN_MOVED_FROM | IN_MOVED_TO)
- 注：上面所说的文件也包括目录


4. 创建同步脚本

```
cd
touch runhexo.sh
vi /root/runhexo.sh
chmod -R 777 /root/runhexo.sh
```

内容如下：

```
#!/usr/bin/env bash
exec 200<$0
flock -n 200 || exit 1
sleep 10
cd /root/Dropbox/hexo && hexo clean && hexo generate
```


5. 添加权限 `chmod +x runhexo.sh`


6. 相关命令

```
service incrond stop  
service incrond start  
service incrond status
```

# 尾巴

不管手机还是电脑，只要我往 Dropbox 的 hexo/source/_posts 文件夹丢入写好的文章，即可部署到博客上。让你专注写作，让你妙不可言。