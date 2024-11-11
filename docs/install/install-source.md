# 源码安装

源码地址：https://github.com/likeflyme/cloudbak

## 环境要求

未经严格测试，使用开发环境的版本作为参考：

* node: 22.4.0
* python: 3.9.19
* nginx：自行安装

## 部署服务端


```shell
# 克隆源码
$ git clone https://github.com/likeflyme/cloudbak-backend.git
$ cd cloudbak-backend
 # 创建虚拟环境
$ python -m venv venv
# 运行，服务器将默认监听 8000 端口
$ uvicorn main:app --reload
```

自定义配置文件修改数据目录，创建 .env 文件放到项目根目录下：

```text
# 默认为项目跟目录的 data 目录
APP_SYS_DIR=/app/data 
# 日志目录，相对于 APP_SYS_DIR
APP_LOG_DIR=logs

APP_SERVER_HOST=0.0.0.0
APP_SERVER_PORT=8000
```

## 部署前端

```shell
# 克隆源码
$ git clone https://github.com/likeflyme/cloudbak-frontend.git
$ cd cloudbak-frontend
# 安装依赖
$ npm install
# 构建
$ npm run build
```

nginx 配置 server 指向 cloudbak-fontend/dist 目录：

```text
server {
    listen 9527;

    client_max_body_size 0;

    # dist 路径，改成自己的
    root /cloudbak-fontend/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://127.0.0.1:8000;
    }

    location /head {
        root /app/data;
    }

    location /image {
        proxy_pass http://127.0.0.1:8000/api/msg/image;
    }

    location /file {
        proxy_pass http://127.0.0.1:8000/api/msg/file;
    }

    location /video {
        proxy_pass http://127.0.0.1:8000/api/msg/video;
    }
}
```

## 访问安装

浏览器访问 http://127.0.0.1:9527 完成安装，127.0.0.1 替换为自己的IP。
