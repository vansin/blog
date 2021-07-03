# 源码剖析

--sourcemap

entry-runtime-with-compiler.js

esm 
browser

render>template>el

- 入口文件
- 扩展$mount

src/platforms/web/entry-runtime-with-compiler.js

### src/platforms/web/runtime/index.js

- Vue.prototype.__patch__ = inBrowser ? patch : noop

安装一个平台特有的patch函数，patch函数是将vdom转换为dom

- init，完成创建
- update,diff,oldvalue,newvalue


实现了挂载方法

### src/core/index.js

初始化全局api

初始化所有的全局API

初始化
src/core/instance/init.js


一个组件一个Watcher，力度变大了

render->vdom
patch->dom