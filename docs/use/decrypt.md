# 数据解密

通常情况下，数据解密任务在客户端同步完成后会自动执行，但有一些特殊情况或进阶功能需要手动创建解密任务，
例如自动同步任务中断或报错，使用其他同步工具同步数据后创建解密任务。

点击聊天界面左下角菜单的三根横线，点击系统工具弹出框，在系统任务模块中有一个执行数据解密按钮，点击后会会询问是否创建该任务，选择确定后创建任务。

![create](https://static.raining.top/wechat-cloud-bak/org-website/create_task.png){.centered-image}

新创建的任务状态为执行中，可以点击状态右侧的眼睛图标查看执行情况（需自己刷新）,也可以过一段时间点击上面的刷新按钮查看任务执行结果。

![create](https://static.raining.top/wechat-cloud-bak/org-website/create_task_runing.png){.centered-image}

需要注意的是当有正在执行的相同任务时不要重复去创建，否则同时执行解密任务会有冲突。

任务可能会执行失败，可以重新添加一个任务或者重新同步一次。
