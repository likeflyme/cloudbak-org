# 如何安装

云朵备份并不提供源码，目前支持 Docker 安装，如果您不了解什么是 Docker，您可以先简单了解一下基本操作。

如果只想安装在 Windows 系统中，可以通过 [Docker Desktop](https://www.docker.com/products/docker-desktop/) 安装云朵备份

## Docker 安装

执行以下命令安装。

```shell
docker run --name=cloudbak --restart=always -d \
    -p 9527:9527 \
    -v /app/data:/app/data \
    likeflyme/cloudbak
```

国内环境由于网络关系的原因可以替换为以下地址，感谢 [@xiaoz](https://blog.xiaoz.org/)：
```shell
docker run --name=cloudbak --restart=always -d \
    -p 9527:9527 \
    -v /app/data:/app/data \
    pub.tcp.mk/likeflyme/cloudbak
```

这里顺便也提供Windows安装方法，首先安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)，
启动后打开 CMD 执行 上面的 Docker 命令，把 `-v /app/data:/app/data` 替换一下，前面的 `/app/data` 替换为 Windows 路径，示例如下：
```shell
docker run --name=cloudbak --restart=always -d \
    -p 9527:9527 \
    -v d:/data/cloudbak:/app/data \
    pub.tcp.mk/likeflyme/cloudbak
```

启动完成后访问 http://ip:9527 ，输入用户名、邮箱和密码完成安装。

第一次登录由于没有上传数据，所以会提示您下载 Windows 同步客户端进行数据备份，下载后解压执行exe文件后登录，完成备份后再次刷新
即可。

## 忘记密码怎么办

执行以下命令，找到 likeflyme/cloudbak 的容器 CONTAINER ID。

```shell
$ docker ps -a
CONTAINER ID   IMAGE          COMMAND                   CREATED      STATUS         PORTS                            NAMES
4992fe3386d7   72fcd621d0b8   "/bin/sh -c 'service…"   8 days ago   Up 6 seconds   80/tcp, 0.0.0.0:9527->9527/tcp   cloudbak
```
执行以下命令进入容器，执行 `user_password_reset` 脚本。

```shell
$ docker exec -it 4992fe3386d7 /bin/bash # 进入运行环境，4992fe3386d7替换为你的ID
$ ./user_password_reset # 执行重置密码脚本，按提示修改密码
请输入用户名: admin
您输入的用户名: admin
请输入密码: xxx
请重复密码：xxx
用户密码修改成功
```
