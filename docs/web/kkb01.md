# 20210629

## 前提知识

- Vue plugin
- 渲染函数
- 数据响应式 Vue.util
- ES6语法

## 

紧密vue的功能

## Vuex

Vuex集中式存储管理应用的所有组件的状态。

在store中存在的数据 应该是 响应式的。


### 核心概念

- state
- mutation
- action

- commit
- dispatch

### 实现

- 实现插件install方法
- 实现一个Store类
  - 维持一个响应式状态state
  - 实现commit()
  - 实现dispatch

只要响应式，不要代理


```js
// Store: 统一存储state，并且是响应式的，
// 它提供给用户一些api：commit/dispatch
let Vue

class Store {
  constructor(options) {
    // 0.保存选项
    this._mutations = options.mutations
    this._actions = options.actions

  
    // 1.对state做响应式处理
    // Vue.util.defineReactive(this, 'state', {})
    // _vm 希望不要直接访问它
    // this._vm.foo = 'fooooooo'
    this._vm = new Vue({
      data() {
        return {
          // 只做响应式，不做代理
          $$state: options.state,
        }
      },
    })


    // getters
    // 可否结合计算属性
    
    // 绑定this
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
    
    // setInterval(() => {
    //   this.state.counter++
    // }, 1000);
  }

  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('请使用repalceState重置state');
  }

  // store.commit('add', 2)
  commit(type, payload) {
    // 根据type从用户配置的mutations中获取那个函数
    const entry = this._mutations[type]
    if (!entry) {
      console.error('unknown mutation！');
      return 
    }
    entry(this.state, payload)
  }
  dispatch(type, payload) {
    const entry = this._actions[type]
    if (!entry) {
      console.error('unknown action!');
      return 
    }
    // dispatch的上下文是Store实例
    entry(this, payload)
  }
}

function install(_Vue) {
  Vue = _Vue
  
  // 注册$store
  Vue.mixin({
    beforeCreate() {
      // 此处this指的是组件实例
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

// 导出对象是Vuex
export default { Store, install }
```

### 实现getters

在kvuex中实现getters

### 思考拓张

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210629222044.png)

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210629222104.png)


- 嵌套路由问题