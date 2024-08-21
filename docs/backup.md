# 如何备份


## 客户端下载

将PC端微信数据备份到服务器需要借助我们的客户端，目前支持的客户端仅为 Windows 客户端，[下载客户端](/download-desktop)。


## 备份


### 第一步：初始化
如果您没有初始化服务端，那么访问 http://ip:9527 先初始化，创建初始的用户。
![install](https://static.raining.top/wechat-cloud-bak/org-website/install.png)

### 第二步：登录，创建 session
登录时填写服务器的 http 地址，用户名密码。

![login_pc](https://static.raining.top/wechat-cloud-bak/org-website/login_pc.png)

这里的 session 可以关联一个微信，这样就实现了一个账号可以同步多个微信账户，也可以多个 session 都同步一个微信账户（这在一些情况下是必要的，比如换了电脑，账号数据丢失了需要新建立一个 session 同步新的数据）。
添加 session 时需要微信为登录状态，用于检测微信的数据位置以及其他数据，session 名字随便取，备注选填 session 名必填。 

![add_session](https://static.raining.top/wechat-cloud-bak/org-website/add-session.png)


### 第三步：同步数据：

选择左侧已经添加好的 session，点击右下角的同步按钮开始同步（**需要退出微信进程**），同步完成后会有文字提示，此时服务端解析数据需要数十秒到一分钟左右不等，等待一会儿刷新浏览器客户端即可查看聊天记录。
同步按钮可以重复使用，文件采用增量同步，对已经同步过的数据将在本地文件留痕，数据库文件将强制重新上传。

![sync](https://static.raining.top/wechat-cloud-bak/org-website/sync.png)

![sync](https://static.raining.top/wechat-cloud-bak/org-website/sync-end.png)


## 展示

下图是浏览器访问聊天记录的界面截图

![show1](https://static.raining.top/wechat-cloud-bak/org-website/show1.png)


