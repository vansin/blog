<!-- # React



```shell
git clone https://github.com/xuchaobei/react-redux-demo
```



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817100600.png)

## 01 React

### 项目创建

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817100747.png)

### JSX

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817101105.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817101408.png)

### 组件

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817101602.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817101653.png)

#### 纯函数

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817101743.png)

#### 函数组件和类组件（列表中的key）

函数组件不需要render



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817102141.png)

#### 组件内部的可变状态

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817102714.png)

render函数中间不能有副作用代码

## 

#### state

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817103236.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817103329.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817103545.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817103745.png)

- 部分修改，而非全量修改

#### Props vs State

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817103847.png)

### 受控组件

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817103951.png)

### 非受控组件

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817104358.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817104854.png)

### React hooks



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817105111.png)

#### State Hook

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817105516.png)



#### Effect Hook

```shell
git checkout effect-hooks
```



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817110510.png)

#### 自定义hooks

```shell
git checkout custom-hooks
```



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817111244.png)

#### 规则

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817111803.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817111815.png)

#### Why Hooks

- 状态管理逻辑封装与复用
- 面向React未来（类组件）

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817111927.png)

## 02 React Router

### 路由分类

- 服务端路由
- 客户端路由

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817113122.png)

### 基础示例

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817113341.png)



### Router

- BrowserRouter
- HashRouter

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817113433.png)

### Route

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817113713.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817113748.png)

### Switch

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817114011.png)

### 路由跳转

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817114037.png)

### Hooks API

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817114134.png)

### 继承React Router

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817114457.png)

## 03 Redux (RTK)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817140214.png)



### Redux 是什么？

- state
- view
- action



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817140229.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817140548.png)

### 什么时候用Redux

- 直接使用localstorage进行数据共享会有什么问题？

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817141109.png)

### Redux术语

#### Store

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817141139.png)

#### Action

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817141309.png)

- Dispatch发送一个Action

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817141547.png)

- Reducer: 根据当前的应用状态，和接收到的action，计算新的状态

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817141635.png)

#### Redux数据流

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817141847.png)

### Redux Toolkit(RTK)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817142028.png)

#### 创建store

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817142118.png)

#### 创建slice模块

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817142355.png)



#### slice示例

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817142618.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817143257.png)



### slice使用

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817143426.png)

### 同步数据流完整示例

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817143714.png)

### 异步数据流完整示例

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817150025.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817150209.png)

- 放在extraReducers中的

#### 创建文章

```shell
redux-async
```



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817150821.png)

- AddPost1

- AddPost2







#### 文章详情页

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817153009.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817153159.png)



### 像设计数据库一样设计Redux状态

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817153632.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817153949.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817154053.png)

不应该在redux做服务端的状态管理



### 其他状态管理方案

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210817155448.png)

- 低代码平台的状态放在redux里面 -->