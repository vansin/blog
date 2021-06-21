# slot(插槽)

## 默认插槽


## 具名插槽


```js
    <message ref="msgSuccess" class="success">
      <!-- 命名为title插槽内容 -->
      <template v-slot:title="slotProps">
        <strong>{{slotProps.title}}</strong>
      </template>
      <!-- 默认插槽内容 -->
      <template v-slot:default>
        默认插槽
      </template>
    </message>
```


## 作用域插槽

子组件