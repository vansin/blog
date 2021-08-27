NodeJS基础入门

## Node.js简介

### 版本管理

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818100358.png)

#### n

#### fnm

#### nvm



### 特点

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818100508.png)

#### 异步I/O

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818100530.png)

#### 单线程



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818100740.png)

- 优点
  - 范德萨
- 缺点
  - 无法利用多核CPU
  - 错误

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818100838.png)

#### 跨平台

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818100956.png)

### 应用场景

- 适合I/O密集型

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818101100.png)

## 模块化机制



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818101202.png)

### CommonJS(cjs)

同步机制加载模块

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818101409.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818101621.png)

#### 加载方式

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818101759.png)

#### npm包查找策略

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818101927.png)

#### 缓存

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818102101.png)

### 其他模块规范

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818102401.png)

### 规范之间的关系

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818102513.png)

### 如何执行ES Modules(ESM)

- Babel转义
- .mjs

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818102629.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818103010.png)

### 常用的模块

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818103319.png)

## 包管理工具

### npm介绍

- npm init
- npm config
- npm run [cmd]
- npm install [pkg]
- npm uninstall [pkg]
- npm update [pkg]
- npm info [pkg]

#### 常用命令

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818103450.png)

#### Webpack示例

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818103904.png)

#### 如何写npm版本号 

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818104140.png)

npm semver check



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818104423.png)



#### 私有npm

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818104504.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818104504.png)

 

#### 其他

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818104638.png)

monorepo: 项目里面有子项目问题



## 异步编程

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110037.png)



### callback

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110109.png)

### promise

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110323.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110359.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110524.png)



#### 实现一个promisify

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110549.png)

### await

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110652.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818110737.png)

捕获异常需要try catch

### Event

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111013.png)



## Web应用开发

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111138.png)



### http模块

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111211.png)



### Koa介绍

比较适合看源码

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111348.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111406.png)



### 中间件



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111551.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111647.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111824.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818111944.png)

#### 常用中间件

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818112107.png)

### 基于KOA二次开发的框架

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818112335.png)



## 调试

###  开发调试

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818112614.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818112646.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818112808.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818112853.png)



### 日志调试

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113044.png)



## 线上部署



### 如何利用多核CPU

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113315.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113427.png)

### 多進程的健壯性



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113512.png)

### 進程管理工具

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113605.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113712.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818113747.png)

### 復雜計算問題

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818114119.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818114214.png)

