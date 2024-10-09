# 系统工具

容器中提供了几个小工具，支持用户创建，密码重置。在 WEB GUI 还没提供这些功能的情况可以使用。

```shell
$ docker ps -a # 查询 docker 进程获取cloudbak的 CONTAINER ID
CONTAINER ID   IMAGE                                          COMMAND                  CREATED        STATUS                   PORTS                                                 NAMES
b30c1bf7f044   likeflyme/cloudbak:0.1.7-preview   "/bin/sh -c 'service…"   8 days ago     Up 8 days                80/tcp, 0.0.0.0:9527->9527/tcp, :::9527->9527/tcp     cloudbak

$ docker exec -it b30c1bf7f044 /bin/bash
$ ls 
decrypt_db  main  user_create  user_password_reset
$ ./user_create # 执行用户创建
$ ./user_password_reset # 执行用户密码重置
```
