

# Web安全攻防



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150536.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150602.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150622.png)

## 攻击篇

### XSS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150650.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150704.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150721.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150750.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150827.png)



#### Stored XSS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150854.png)

#### Reflect额度 XSS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150932.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818150942.png)

DOM-based XSS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151009.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151027.png)



#### Reflected vs DOM-based

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151050.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155613.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151148.png)



### CSRF

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151253.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151325.png)



#### CSRF--GET





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151419.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151509.png)





### Injection

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155503.png)

#### Injection demo 1

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151603.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151633.png)

Infection 不止于SQL

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151657.png)

#### injection demo 2

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155514.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818151814.png)

#### SSRF demo

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155523.png)



### DoS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152008.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152034.png)



#### ReDoS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152219.png)

#### DDoS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152352.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152434.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152452.png)

### 中间人攻击

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152606.png)



## 防御篇



### XSS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152724.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152759.png)

#### 字符串生成DOM

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152828.png)

#### 用户上环svg

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152851.png)

#### 

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152916.png)

#### 用户自定义样式

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818152938.png)



#### 同源策略

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153041.png)



#### CSP

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153144.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153215.png)



### CSRF的防御

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153245.png)

#### token

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153335.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153418.png)

#### iframe攻击

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153602.png)



#### CSRF anti-pattern



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153708.png)



#### SameSite Cookie

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153759.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818153829.png)

#### 防御CSRF的正确姿势

在中间件中防御CSRF

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154047.png)

### Injection



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154136.png)

#### Injection beyond SQL

- 最小权限原则
- 建立允许名单+过滤
- 对URL类型参数进行协议、域名、ip等限制

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154221.png)

### DDos

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154328.png)



### 防御中间人

HTTPS

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154453.png)



#### HTTPS的一些特性

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154545.png)

- 非对称加密
- 对称加密

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154616.png)

#### 完整性

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154704.png)

#### 数字签名

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154757.png)



#### 不可抵赖：数字签名

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818154859.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155010.png)



#### 成也证书 败也证书

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155047.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155136.png)



### SRI

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155348.png)



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155319.png)

## 补充内容



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155446.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155556.png)





![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210818155716.png)