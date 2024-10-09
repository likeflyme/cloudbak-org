# 使用其他同步工具

云朵客户端有两个功能，第一是获取微信相关数据，第二是数据同步。第一个功能能够很好的完成用户的任务，但同步功能较弱，
只能够完成基本的同步与增量同步功能，甚至目前只支持 Windows 而不支持 macOS，这让急于备份 macOS 的用户相当难受。

但好消息是云朵备份在升级到`0.1.7-preview`后已支持用户使用自己熟悉的同步软件同步，好处是可以享受其他同步工具
完善成熟的同步能力，并且可以不限操作系统，macOS 用户也能在没有客户端的情况下开始使用云朵备份。

这里分享我用 [FreeFileSync](https://freefilesync.org/) 同步数据的例子，以下简称FFS，注意 FFS 只支持 SFTP 和 FTP，
需要使用其他协议的用户请自行发掘同步工具，这里仅作为方法的演示。

## 1. 创建会话

使用其他备份工具仍然需要创建会话，这个步骤请查看 [创建/删除会话](/use/create-session) 的第二章，在 WEB 端添加会话。

使用云朵客户端创建的会话也可以用其他工具同步，所以如果你已经在用云朵客户端备份，并且想切换到其他同步软件做备份，也完全没有问题。

![add-session](https://static.raining.top/wechat-cloud-bak/org-website/add-session-dialog2.png)

## 2. 下载安装 FFS

访问下载链接下载 FreeFileSync：[https://freefilesync.org/download.php](https://freefilesync.org/download.php)，
该软件支持 Windows, macOS, Linux，安装过程不再赘述。

## 3. 查看数据路径

同步软件需要将微信的数据 A 同步到服务器或NAS B，所以有两个路径需要确定下来：
* A 微信的数据路径
* B 云朵备份的会话路径

**A 路径获取方式：** 微信客户端点击左下角三根横线 -> 设置 -> 文件管理 -> 打开文件夹，打开的文件夹路径即为数据路径。

![wxpath](https://static.raining.top/wechat-cloud-bak/org-website/wxpath.png)

**B 路径获取方式：** 云朵备份中切换到对应的会话，点击聊天界面左下角三根横线 -> 系统工具 -> 会话信息，在会话信息中的 `服务端数据目陆` 就是数据路径。
该路径为 /app/data 开头，通常情况下这个路径由docker映射到你的真实路径，如果这个路径没有创建，需要先手动创建这个文件夹。

![session-path](https://static.raining.top/wechat-cloud-bak/org-website/session-path2.png)

## 4. FFS 单次同步

打开 FFS，主界面第一步点击新建，第二步点击浏览选择微信目录，也就是上述的路径A，第三步点击云朵图标选择云朵备份会话目录，也就是上述路径B。

![session-path](https://static.raining.top/wechat-cloud-bak/org-website/ffs1.png)

选择路径 B 时我这里使用SFTP，填写服务器地址，用户名密码，之后浏览服务器的目录，也就是以上步骤中的路径 B，
我这里将 /app/data 映射的 /data/cloudbak，所以应该选择 /data/cloudbak 下的目录，设置好后点击确定即可。
如果没有B这个目录，需要手动创建这个目录并注意 SFTP 权限问题。

![session-path](https://static.raining.top/wechat-cloud-bak/org-website/ffs2.png)

**设置好SFTP后，这里一定要选更新模式**，由于云朵备份在解析完数据后会在文件夹下生成新的文件，所以备份工具不能删除这些文件，只能新增和修改。

![session-path](https://static.raining.top/wechat-cloud-bak/org-website/ffs3.png)

同步完成后窗口自动关闭，最后在云朵备份 WEB 端[启动数据解析任务](/use/decrypt)即可。

## 5. FFS 实时同步

上一步中新建的同步任务可以保存成批处理作业文件，点击另存为批处理作业，进度对话框选择以最小化运行且自动关闭，忽略错误，我这里命名为 sync1.ffs_batch。

![session-path](https://static.raining.top/wechat-cloud-bak/org-website/ffs5.png)

FFS 的安装目录下还有一个程序叫做 RealTimeSync.exe，这是FFS的实时同步程序，执行这个程序。

要监视变化的文件夹选择微信的数据文件，检测到变化后要执行的命令行这样写：
```text
"F:\FreeFileSync\FreeFileSync.exe" "C:\Users\Administrator\Desktop\batch\sync1.ffs_batch"
```

* F:\FreeFileSync\FreeFileSync.exe 为 FFS 执行文件路径
* C:\Users\Administrator\Desktop\batch\sync1.ffs_batch 为保存的批处理文件路径

![session-path](https://static.raining.top/wechat-cloud-bak/org-website/ffs6.png)

设置完成点击开始按钮最小化运行，FFS会在检测到微信文件变化时同步数据到 SFTP，计算机开机时会自动启动实时同步，
搭配定时解析功能实现无感同步。

## 6. 设置 FFS 过滤器

某些不必要的文件可以不用同步，避免频繁变化导致上传。点击主界面漏斗形状的图标配置过滤器，在排除中填入如下配置：
```text
\System Volume Information\
\$Recycle.Bin\
\RECYCLE?\
\Recovery\
*\thumbs.db
\Applet\
\FileStorage\Cache\
*\*.db-shm
*\*.db-wal
```



