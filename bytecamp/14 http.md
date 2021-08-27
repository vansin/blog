# HTTP使用指南

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161033.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161106.png)



## 初识HTTP

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161217.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161234.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161315.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161538.png)

### 什么是HTTP

- Hyper Text Tranfer Protocol
- 无状态

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161608.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161710.png)



## 协议分析

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161841.png)



### 持续发展 

- HTTP/0.9
- HTTP/1.0
  - 增加Header
  - 有了状态码
  - 支持多种文档状态
- HTTP/1.1
  - 链接复用
  - 缓存
  - 内容协商
- HTTP/2
  - 二进制协议
  - 压缩header
  - 服务器推送
- HTTP/3草案



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818161916.png)



### 报文解析

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818162225.png)



#### Method



| Method  | 描述 |
| ------- | ---- |
| GET     |      |
| POST    |      |
| PUT     |      |
| DELETE  |      |
| HEAD    |      |
| CONNECT |      |
| OPTIONS |      |
| TRACE   |      |
| PATCH   |      |

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818162417.png)

安全的

- GET HEAD OPTIONS
- idempotent(幂等)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818162553.png)

#### 状态码

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818162841.png)



#### RESTful API

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818163110.png)



#### 常用协议头

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818163426.png)



#### 常用响应头

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818163745.png)



### 缓存

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818163902.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818164240.png)

### cookie

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818164508.png)



### HTTP/2概述

- 帧(frame)
- 二进制
- 消息：与逻辑请求或响应消息对应的完整的一系列帧
- 数据流：已建立的连接内的双向字节流，可以承载一条或多条消息
- 可交错发送





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818164831.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818165111.png)

- HTTP/2连接都是永久的，而且仅需要每个来源一个连接
- 流控制：组织发送方向接收方发送大量数据的机制

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818165317.png)



### HTTPS概述

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818165528.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818165740.png)



## 常见场景

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818165847.png)





### 静态资源分析

#### 示例

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818165933.png)

![image-20210818171452328](/home/tml/.config/Typora/typora-user-images/image-20210818171452328.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818171222.png)

#### 缓存+CDN+文件名hash

如果缓存在服务器有内容更新

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818171631.png)



### 登录场景分析



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818172349.png)

![image-20210818172431601](/home/tml/.config/Typora/typora-user-images/image-20210818172431601.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818172628.png)



#### 向什么地址做了什么动作



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818173252.png)



#### 鉴权模式

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818173320.png)



### 视频播放场景分析

#### 视频

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818173621.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818173938.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818174008.png)

#### 直播

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818174412.png)



### 文件上传场景分析

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818174526.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818174640.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175114.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175222.png)

#### 跨域解决方案

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175315.png)





## 实际应用

### 浏览器篇

#### XHR

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175509.png)

#### Fetch

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175739.png)

### Node篇

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175833.png)

### axios库

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175850.png)

### 用户体验

#### 网络优化

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818175949.png)

#### 稳定性

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818180051.png)

## 了解更多



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818180143.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818180307.png)