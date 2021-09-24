# Linux

## Linux常用命令

```shell
cp
ln: 建立软链接
```





```shell
docker run -d --name wechat --device /dev/snd --ipc=host \
-v /tmp/.X11-unix:/tmp/.X11-unix \
-v $HOME/WeChatFiles:/WeChatFiles \
-e DISPLAY=unix$DISPLAY \
-e XMODIFIERS=@im=fcitx \
-e QT_IM_MODULE=fcitx \
-e GTK_IM_MODULE=fcitx \
-e AUDIO_GID=`getent group audio | cut -d: -f3` \
-e GID=`id -g` \
-e UID=`id -u` \
bestwu/wechat
```



```shell
docker run -d --name qq \
--device /dev/snd --ipc=host \
-v $HOME/TencentFiles:/TencentFiles \
-v /tmp/.X11-unix:/tmp/.X11-unix \
-e XMODIFIERS=@im=fcitx \
-e QT_IM_MODULE=fcitx \
-e GTK_IM_MODULE=fcitx \
-e DISPLAY=unix$DISPLAY \
-e AUDIO_GID=`getent group audio | cut -d: -f3` \
-e VIDEO_GID=`getent group video | cut -d: -f3` \
-e GID=`id -g` \
-e UID=`id -u` \
bestwu/qq:latest
```



```shell
docker start wechat
docker start qq
```

