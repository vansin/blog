# Vue组件命名最佳实践

## 单文件组件如何命名

### 单文件组件的文件名大小写

正确示例

```shell
MyComponent.vue
my-component.vue
```

### 基础组件命名


应用特定样式和约定的基础组件（展示类的、无逻辑的或无状态的组件）

- HTML元素
- 其他基础组件
- 第三方UI组件库

> 好处如下

- 当编辑器中以字母顺序排序时，应用的组件会全部排列在一起，这样更容易识别
- 组件始终是多个单词，这样做可以避免在包裹简单的组件时随意选择前缀
- 因为这些组件会被频繁使用，所以可以把他们放到全局而不是各处分别导入他们。使用相同的前缀可以让webpack这样工作

```javascript
var requireComponent = require.context("./src", true, /^Base[A-Z])
```


不好的例子

```shell
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

好的例子

```shell
components/
|- BaseMyButton.vue
|- BaseVueTable.vue
|- BaseIcon.vue
```

### 单例组件命名
> 

### 紧密耦合的组件名

### 组件名中的单词顺序

### 完整单词的组件名

### 组件名为多个单词

### 模板中的组件名大小写

### JS/JSX中的组件名大小