# docker

## docker run

```shell
docker run -d --name container1 ubuntu:latest /bin/sh -c "while true; do echo hello world; sleep 1; done"
```

dockerrun并查看container状态

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210706161504.png)



## 挂载

```shell
docker run -d --name container_mount_demo  -v /home/tml/boo/data:/opt ubuntu:latest /bin/sh -c "while true; do echo hello world; sleep 1; done"
```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210706161820.png)

### 验证挂载

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210706163121.png)

进入容器

```shell
docker exec -it container_mount_demo bash
```
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210706162226.png)


## dockerfile安装net-tools

```dockerfile
FROM ubuntu:latest

RUN apt-get update \
    && apt-get install -y net-tools 
```

```shell
docker build -t ubuntu:net_tools . 
```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210706162825.png)