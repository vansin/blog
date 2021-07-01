# miniVue

理解Vue的设计思想

将视图view的状态和行为抽象化，让我们将视图UI和业务逻辑分开

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210701203307.png)

将数据直接映射到DOM上

MVVM架构的三要素

- 数据响应式
- 模板引起
- 渲染过程

## 数据响应式原理

### 对象


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210701203847.png)


全量更新

- 虚拟DOM


新增一个属性

Vue.set()

### 数组

defineReactive是否生效

a[1] 生效

- push
- pop
- shift
- unshift


### Kvue

- 保存选项
- 对data选项做选项式处理


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210701211327.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210701211339.png)


收集依赖

发布订阅模式

- Kvue

插值解析
正则表达式

获取当前元素的所有属性，并判断他们是不是动态的

编译element
判断 attrName是否式指令或者


```js``````````````````````````````````````````
class Watcher {
    constructor(vm, key, updateFn) {
        this.vm = vm
    }
    update() {
        this.updateFn.call(this.vm, this.vm[this.key])
    }
}

```

## 模板引擎


## 模板