# 下载

Windows 客户端下载：[cloudbak-desktop.0.1.0.zip](https://wwij.lanzout.com/imkw02ant6ri)

## 版本日志

### 0.1.0

2024年8月26日

Windows: [cloudbak-desktop.0.1.0.zip](https://wwij.lanzout.com/imkw02ant6ri)

同步优化
* 增量同步使用修改时间判断替代hash函数，极大提高增量同步速度
* 支持微信运行时同步（但微信运行时的数据不会同步，原因是数据驻留在内存，退出后写入数据库）
* 需配合docker镜像版本为 0.1.0-preview 以上使用，或直接使用 latest 版本

### 0.0.4

2024年8月26日

Windows: [cloudbak-desktop.0.0.4.zip](http://desktop.cloudbak.org/cloudbak-desktop.0.0.4.zip)

* 优化同步时可能造成界面卡死的问题

### 0.0.3

2024年8月23日

Windows: [cloudbak-desktop.0.0.3.zip](http://desktop.cloudbak.org/cloudbak-desktop.0.0.3.zip)

* 上传超时时间以及修复上一个版本的问题

### 0.0.2

2024年8月23日

Windows: [cloudbak-desktop.0.0.2.zip](http://desktop.cloudbak.org/cloudbak-desktop.0.0.2.zip)

* 日志


### 0.0.1

2024年8月21日

Windows: [cloudbak-desktop.0.0.1.zip](http://desktop.cloudbak.org/cloudbak-desktop.0.0.1.zip)

C#开发的初始版本

* 登录
* 密钥获取
* 文件同步
* 增量同步
