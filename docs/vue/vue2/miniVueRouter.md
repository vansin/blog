# miniVueRouter

本文

## 工程准备

```shell
npm install -g @vue/cli
npm install -g @vue/cli-service-global
```

## VueRouter原理

在实现miniVue之前先了解VueRouter的原理及其步骤。

Vue Router 是 [Vue.js](https://cn.vuejs.org/index.html) 官⽅的路由管理器。它和 Vue.js 的核⼼深度集成，让构建单⻚⾯应⽤变得易如反掌。

### 步骤⼀：使⽤vue-router插件，router.js

```js
import Router from 'vue-router'
Vue.use(Router)
```

### 步骤⼆：创建Router实例，router.js

```js
export default new Router({...})
```

### 步骤三：在根组件上添加该实例，main.js

```js
import router from './router'
new Vue({
 router,
}).$mount("#app");
```

### 步骤四：添加路由视图，App.vue

```js
<router-view></router-view>
```

### 导航

```js
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
this.$router.push('/')
this.$router.push('/about')
```

## miniVueRouter实现

单⻚⾯应⽤程序中，url发⽣变化时候，不能刷新，显示对应视图内容

### 需求分析

- spa ⻚⾯不能刷新
  - hash #/about
  - History api /about
- 根据url显示对应的内容
  - router-view
  - 数据响应式：current变量持有url地址，⼀旦变化，动态重新执⾏render

## 任务

- 实现⼀个插件
  - 实现VueRouter类
    - 处理路由选项
    - 监控url变化，hashchange
    - 响应这个变化
- 实现install⽅法
  - $router注册
  - 两个全局组件


### 实现⼀个插件：创建VueRouter类和install⽅法

创建kvue-router.js

```js
let Vue; // 引⽤构造函数，VueRouter中要使⽤
// 保存选项
class VueRouter {
 constructor(options) {
 this.$options = options;
 }
}
// 插件：实现install⽅法，注册$router
VueRouter.install = function(_Vue) {
 // 引⽤构造函数，VueRouter中要使⽤
 Vue = _Vue;

 // 任务1：挂载$router
 Vue.mixin({
 beforeCreate() {
 // 只有根组件拥有router选项
 if (this.$options.router) {
 // vm.$router
 Vue.prototype.$router = this.$options.router;
 }
 }
 });

 // 任务2：实现两个全局组件router-link和router-view
 Vue.component('router-link', Link)
 Vue.component('router-view', View)
};
export default VueRouter;
```

为什么要⽤混⼊⽅式写？主要原因是use代码在前，Router实例创建在后，⽽install逻辑⼜需要⽤
到该实例

### 创建router-view和router-link

创建krouter-link.js

```js

export default {
 props: {
 to: String,
 required: true
},
 render(h) {
 // return <a href={'#'+this.to}>{this.$slots.default}</a>;
 return h('a', {
 attrs: {
 href: '#' + this.to
 }
 }, [
 this.$slots.default
 ])
 }
}
```

创建krouter-view.js

```js

export default {
 render(h) {
 // 暂时先不渲染任何内容
 return h(null);
 }
}

```

### 监控url变化

定义响应式的current属性，监听hashchange事件


```js
class VueRouter {
 constructor(options) {
 // 定义响应式的属性current
 const initial = window.location.hash.slice(1) || '/'
 Vue.util.defineReactive(this, 'current', initial)
 // 监听hashchange事件
 window.addEventListener('hashchange', this.onHashChange.bind(this))
 window.addEventListener('load', this.onHashChange.bind(this))
 }

 onHashChange() {
 this.current = window.location.hash.slice(1)
 }
}
```

动态获取对应组件，krouter-view.js

```js

export default {
 render(h) {
 // 动态获取对应组件
 let component = null;
 const route = this.$router.$options.routes.find(route => route.path ===
this.$router.current)
 if(route) component = route.component
 return h(component);
 }
}

```

### 提前处理路由表

提前处理路由表避免每次都循环

```js
class VueRouter {
 constructor(options) {
 // 缓存path和route映射关系
 this.routeMap = {}
 this.$options.routes.forEach(route => {
 this.routeMap[route.path] = route
 });
 }
}
```

### 使⽤，krouter-view.js

```js
export default {
 render(h) {
 const {routeMap, current} = this.$router
 const component = routeMap[current] ? routeMap[current].component : null;
 return h(component);
 }
}
```


```shell

docker run image



```