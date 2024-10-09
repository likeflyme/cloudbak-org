# 如何备份


## 同步数据

选择左侧已经添加好的 session，点击右下角的同步按钮开始同步（**需要退出微信进程**），同步完成后会有文字提示，此时服务端解析数据需要数十秒到一分钟左右不等，等待一会儿刷新浏览器客户端即可查看聊天记录。
同步按钮可以重复使用，文件采用增量同步，对已经同步过的数据将在本地文件留痕，数据库文件将强制重新上传。

![sync](https://static.raining.top/wechat-cloud-bak/org-website/sync.png){.centered-image}

![sync](https://static.raining.top/wechat-cloud-bak/org-website/sync-end.png){.centered-image}


## 重要：添加数据时提示不支持的版本号！！！

如果检测到版本不支持，需要修改软件根目录的 version.json，否则跳过直接看第三步。
version.json 包含获取用户信息的基址（用户名，昵称，手机号，邮箱-已废弃，KEY），提供两种方法获取，当第一种没有满足的版本时，可以通过第二种方式自己尝试获取。

* 第一种：[点击这里获取](https://github.com/xaoyaoo/PyWxDump/blob/master/pywxdump/WX_OFFS.json)
* 第二种：[通过CE获取](https://github.com/xaoyaoo/PyWxDump/blob/master/doc/CE%E8%8E%B7%E5%8F%96%E5%9F%BA%E5%9D%80.md)



## 展示

下图是浏览器访问聊天记录的界面截图

![show1](https://static.raining.top/wechat-cloud-bak/org-website/show1.png){.centered-image}

