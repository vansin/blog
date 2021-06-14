# Proxy

```js
 function reactive (raw) {
  return new Proxy(raw, {
    get(target, key) {
      console.log(key)
      // return target[key]
      // dep 我们存储在哪里
      const dep = getDep(target,key)
      dep.depend();
      return Reflect.get(target, key)
    },
    set(target, key, value) {
      //获取
      const dep = getDep(target,key)
      const result = Reflect.set(target, key, value)
      dep.notice();
      return result
    }
  })
}
```


## 实例方法

### get()

### set()

### apply()

### has()

### construct()

### deleteProperty()


## Proxy.revocable()


## this问题