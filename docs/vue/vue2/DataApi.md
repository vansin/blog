# 数据相关 API


## Vue.set (Reactivity in Depth)

### For Objects

```js
var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` is now reactive

vm.b = 2
// `vm.b` is NOT reactive
```

## Vue.delete

> 与Vue.set类似