# 问题排查

遇到无法解决的问题时请发邮件，发邮件时请详细描述问题，带上截图，日志等信息供排查。

邮件：likeflyme@gmail.com

## 日志在哪里

客户端日志：exe 文件同级 Log 目录
服务端日志：数据目录下 logs 目录

## 数据不展示或只展示左侧的聊天不显示聊天详情

如果是刚同步完需要等数据库解密完成，数据较多则解密需要花费一段时间，暂时可查看服务端日志是否还在打印任务信息，没有在执行任务则完成了解密。

如果已经同步完很长时间了还是看不到消息：
查看数据目录下 sessions/X/微信id/Msg/Multi/decoded_MSG12.db 文件是否存在，这是解密后的数据库文件， 12代表第12个库， 同时可以查看 decoded_MSGxx.db 数据库是否都存在   。

如果存在decoded_MSGxx.db 文件，可能的原因是微信正在写入库文件，但同时将文件同步到服务端后造成解密后的文件不可用，可能需要重新同步，需要退出微信等一分钟左右再同步。问题仍然存在提供更完整的客户端服务端日志。

如果不存在 decoded_MSGxx.db 文件，可能的原因有：

1. 解密失败：排查方式是重新点击同步，客户端同步完成后服务端解密，这个时候查看日志是否有解密失败的情况（概率较小）。
2. 不存在 MSGxx.db 原文件

不存在 MSGxx.db 源文件可能的原因为上传失败，请检查上传失败的原因，是不是网络问题或自行安装了 nginx 等软件限制了文件上传的大小。

## 飞牛NAS无限重启

经使用飞牛NAS的用户测试，需要将高级设置中的命令删除才能正常启动。

![删除命令](https://static.raining.top/wechat-cloud-bak/org-website/feiniunas.png)

## 客户端 Request failed with status code Forbidden

客户端点击退出后重新登录。

## 总是解析失败或出现 database disk image is malformed

下版本修复。

目前的解决方法是：`数据目录/sessions/id/微信/Msg` 下有一些 `decoded_` 开头的文件，删除这些文件后手动重新解析即可。

如果在点击消息时出现 database disk image is malformed 错误，删除`数据目录/sessions/id/微信/Msg/Multi` 下的 `decoded_` 开头的文件。


