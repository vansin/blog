# ubuntu下高效写作


## markdown表格技巧

### 表格转换工具

https://tableconvert.com/

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210802194312.png)


## 高效截图和标注

在markdown技术文档的写作过程中，不可避免的需要使用图片，下面是使用picgo+阿里云OSS+Flameshot高效使用的最佳实践

### 安装xclip

```shell
sudo apt-get update -y
sudo apt-get install -y xclip
```

### 安装picgo

https://github.com/Molunerfinn/PicGo/releases/  

https://github.com/Molunerfinn/PicGo/releases/download/v2.3.0-beta.6/PicGo-2.3.0-beta.6.AppImage

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210622161459.png)


右键属性中设置为可执行文件，点击即可使用


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210622161622.png)

修改文件名为picgo，并把所在目录添加到PATH环境变量，在terminal中运行以下代码即可打开软件

```shell
picgo
```



#### 配置图床（阿里云OSS为例）

- 注册阿里云账号
- 开通阿里云OSS服务
- copy相应配置

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210622162737.png)

###  安装Flameshot

#### 安装命令

```shell
sudo apt install flameshot
```

#### 快捷键设置

进入系统设置中的“键盘设置”  
页面中会列出所有现有的键盘快捷键，拉到底部就会看见一个 “+” 按钮  
点击 “+” 按钮添加自定义快捷键并输入以下两个字段：  
“名称”： 任意名称均可。  
“命令”： /usr/bin/flameshot gui  


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210622161051.png)

#### 软件截图

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210622162427.png)

### 快捷方式使用

- Ctrl+Q 截图
- Ctrl+C 保存到剪切板
- Ctrl+Shift+P 上传到OSS并返回 markdown相应字符串


## 其他成熟产品

  
掘金、语雀也是非常好的工具

