# 群辉NAS安装

使用群辉 Container Manager 安装云朵备份。

## 安装

打开 Container Manager，注册表中搜索关键词 `cloudbak` ，选择 `likeflyme/cloudbak`后点击下载。

![install1](https://static.raining.top/wechat-cloud-bak/org-website/install-synology1.png)

在`映象`选项卡中点击刚下好的映象，点击运行。

![install1](https://static.raining.top/wechat-cloud-bak/org-website/install-synology2.png)

接下来使用默认配置点击下一步。

![install1](https://static.raining.top/wechat-cloud-bak/org-website/install-synology3.png)


最后一步需要注意两个地方：
1. 端口设置的第二个必须为 9527
2. 存储空间设置第二个参数为 /app/data，这是容器的数据目录

设置好后剩下的配置不用修改，点击下一步创建完后启动。

![install1](https://static.raining.top/wechat-cloud-bak/org-website/install-synology4.png)

## 初始化

安装成功后访问 `http://群辉ip:9527` ，初始访问需要输入用户名、邮箱和密码初始化，之后的操作查看[使用文档](/use/create-session) 
