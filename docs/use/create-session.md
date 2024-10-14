# 创建/删除会话

有两种方式创建会话，普通用户建议使用第一种，第二种适用于进阶用户。

## 1. 使用云朵同步工具创建会话

### 1.1 下载云朵备份客户端
将PC端微信数据备份到服务器需要借助我们的客户端，目前支持的客户端仅为 Windows 客户端，[点击下载客户端](/download-desktop)。


### 1.2 登录客户端

登录时填写服务器的 http 地址，用户名和密码。

### 1.3 创建会话 / 创建session
一个会话（session）将会关联一个同步的数据源，可以简单理解为某台机上的某个微信的数据，且一旦创建后不能更改数据源。

点击 `添加 session` 按钮，弹出框中选中进程，填写 `Session名`和`描述`，名字用于区分多个session，描述可不填写，最后点击`添加`按钮添加 session
![add_session](https://static.raining.top/wechat-cloud-bak/org-website/add-session.png){.centered-image}

### 1.4 查看会话
添加完成后，点击左侧列表查看会话信息，**注意不要将自己的`KEY`分享给其他人！**

### 1.5 创建会话提示：不支持的版本号（重要）！！！
微信不同的版本号添加会话时需要不同的配置，如果检测到版本不支持，需要修改软件根目录的 version.json，否则跳过直接看第三步。
version.json 包含获取用户信息的基址（用户名，昵称，手机号，邮箱-已废弃，KEY），提供两种方法获取，当第一种没有满足的版本时，可以通过第二种方式自己尝试获取。

* 第一种：[点击这里获取](https://github.com/xaoyaoo/PyWxDump/blob/master/pywxdump/WX_OFFS.json)
* 第二种：[通过CE获取](https://github.com/xaoyaoo/PyWxDump/blob/master/doc/CE%E8%8E%B7%E5%8F%96%E5%9F%BA%E5%9D%80.md)


## 2. 在云朵备份 WEB 端添加会话
访问云朵备份 WEB GUI，点击左上角的 `+` 号按钮，在弹出框中填入信息完成添加。
![add_session_dialog](https://static.raining.top/wechat-cloud-bak/org-website/add-session-dialog.png){.centered-image}

**会话名称和会话备注**

与客户端添加session时的 `session名`和`备注`相同。

**微信KEY（重要）**

云朵备份会通过这个KEY解析聊天文件的数据。
Windows用户可以通过云朵备份Windows客户端创建会话，也可以下载 [cloudbak-key](https://wwij.lanzout.com/iDXOX2chwsvi) 单独获取，cloudbak-key中输入的地址查看 [version](/use/version) 章节，拷贝对应版本的最后一个值，

如 3.9.12.17 版本的值为：93836256

macOS用户目前需要自己找方法获取这个KEY。

**微信id（重要）**

可以通过查看微信文件存储的目录得到这个id，在微信PC端点击：设置 -> 文件管理 -> 打开文件夹，下图中圈出的就是微信id。

![wx_id](https://static.raining.top/wechat-cloud-bak/org-website/wxid2.png){.centered-image}

**微信昵称和微信号**

这个不用多说都知道

## 3. 删除会话
访问云朵备份 WEB GUI，点击需要删除的会话，在类微信界面左下角点击三根横线，点击`删除会话`按钮，弹出框中确认过是需要删除的会话后，
点击`确认删除`。需要注意的是删除会话为硬删除，数据将在后台静默删除。

![wx_id](https://static.raining.top/wechat-cloud-bak/org-website/delete-session1.png){.centered-image}

![wx_id](https://static.raining.top/wechat-cloud-bak/org-website/delete-session2.png){.centered-image}