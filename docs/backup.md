# 如何备份


## 客户端下载

将PC端微信数据备份到服务器需要借助我们的客户端，目前支持的客户端仅为 Windows 客户端，[下载客户端](/download-desktop)。


## 备份


### 第一步：初始化
如果您没有初始化服务端，那么访问 http://ip:9527 先初始化，创建初始的用户。
![install](https://static.raining.top/wechat-cloud-bak/org-website/install.png){.centered-image}

### 第二步：登录，创建 session
登录时填写服务器的 http 地址，用户名密码。

![login_pc](https://static.raining.top/wechat-cloud-bak/org-website/login_pc.png){.centered-image}

这里的 session 可以关联一个微信，这样就实现了一个账号可以同步多个微信账户，也可以多个 session 都同步一个微信账户（这在一些情况下是必要的，比如换了电脑，账号数据丢失了需要新建立一个 session 同步新的数据）。
添加 session 时需要微信为登录状态，用于检测微信的数据位置以及其他数据，session 名字随便取，备注选填 session 名必填。 

**重要：当遇到版本号不支持！！！**

如果检测到版本不支持，需要修改软件根目录的 version.json，否则跳过直接看第三步。
version.json 包含获取用户信息的基址（用户名，昵称，手机号，邮箱-已废弃，KEY），提供两种方法获取，当第一种没有满足的版本时，可以通过第二种方式自己尝试获取。

* 第一种：[点击这里获取](https://github.com/xaoyaoo/PyWxDump/blob/master/pywxdump/WX_OFFS.json)
* 第二种：[通过CE获取](https://github.com/xaoyaoo/PyWxDump/blob/master/doc/CE%E8%8E%B7%E5%8F%96%E5%9F%BA%E5%9D%80.md)


![add_session](https://static.raining.top/wechat-cloud-bak/org-website/add-session.png){.centered-image}


### 第三步：同步数据：

选择左侧已经添加好的 session，点击右下角的同步按钮开始同步（**需要退出微信进程**），同步完成后会有文字提示，此时服务端解析数据需要数十秒到一分钟左右不等，等待一会儿刷新浏览器客户端即可查看聊天记录。
同步按钮可以重复使用，文件采用增量同步，对已经同步过的数据将在本地文件留痕，数据库文件将强制重新上传。

![sync](https://static.raining.top/wechat-cloud-bak/org-website/sync.png){.centered-image}

![sync](https://static.raining.top/wechat-cloud-bak/org-website/sync-end.png){.centered-image}


## 手动执行数据解密

点击左下角菜单，点击系统工具弹出框，在系统任务模块中有一个执行数据解密按钮，点击后会会询问是否创建该任务，选择确定后创建任务。

![create](https://static.raining.top/wechat-cloud-bak/org-website/create_task.png)

新创建的任务状态为执行中，可以点击状态右侧的眼睛图标查看执行情况（需自己刷新）,也可以过一段时间点击上面的刷新按钮查看任务执行结果。

![create](https://static.raining.top/wechat-cloud-bak/org-website/create_task_runing.png)

需要注意的是当有正在执行的相同任务时不要重复去创建，否则同时执行解密任务会有冲突。

任务可能会执行失败，可以重新添加一个任务或者重新同步一次。


## 展示

下图是浏览器访问聊天记录的界面截图

![show1](https://static.raining.top/wechat-cloud-bak/org-website/show1.png){.centered-image}

