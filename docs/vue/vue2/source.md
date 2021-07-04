# 【Vue2源码剖析】Vue初始化

## 下载源码

```shell
git clone https://github.com/vuejs/vue.git
```

## 一步一步找初始化源码
### 分析package.json

我们打开任何一个前端工程，第一件事情是打开**package.json**文件

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210704220059.png)


- 在scripts的dev中添加 --sourcemap, 方便在rollup打包出来的vue上源码调试
- **npm run dev**执行的是**scripts/config.js** 携带参数 **web-full-dev**

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210704213110.png)




我们到 **scripts/config.js** 找到 **web-full-dev**


![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210704220328.png)

此处我们并不能直接跳转到 **web/entry-runtime-with-compiler.js**,顺着resolve函数和**aliases**

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210704220707.png)

发现以下代码，此时可以确定 **resolve('web/entry-runtime-with-compiler.js')** 的地址前缀还应该加上**src/platforms/web**

```js
//路径: scripts/alias.js

const path = require('path')

const resolve = p => path.resolve(__dirname, '../', p)

module.exports = {
  vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
  compiler: resolve('src/compiler'),
  core: resolve('src/core'),
  shared: resolve('src/shared'),
  web: resolve('src/platforms/web'), // web对应前缀
  weex: resolve('src/platforms/weex'),
  server: resolve('src/server'),
  sfc: resolve('src/sfc')
}
```

### src/platforms/web/entry-runtime-with-compiler.js

src/platforms/web/entry-runtime-with-compiler.js  

src/platforms/web/runtime/index.js  

src/core/index.js  

src/core/instance/index.js  

src/core/instance/init.js  




## Vue初始化的流程

### Vue初始化源码

```js
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm) // 例如$parent/$children实例属性
    initEvents(vm) // 初始化自定义事件
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```

## 
