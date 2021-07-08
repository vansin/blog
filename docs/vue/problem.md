# Vue常见面试题

## v-if v-for

1. v-if和v-for哪个优先级更高？如果两个同时出现，应该怎么优化得 到更好的性能？ 

源码中找答案compiler/codegen/index.js  

```html
<p v-for="item in items" v-if="condition"> 
```

做个测试如下 

```html
<!DOCTYPE html> <html> 

<head> 
    <title>Vue事件处理</title> </head> 

<body> 
    <div id="demo"> 
        <h1>v-for和v-if谁的优先级高？应该如何正确使用避免性能问题？</h1> 
        <!-- <p v-for="child in children" v-if="isFolder">{{child.title}}</p> --> 
        <template v-if="isFolder"> 
            <p v-for="child in children">{{child.title}}</p> 
        </template> 
    </div> 
    <script src="../../dist/vue.js"></script> 
    <script> 
        // 创建实例 
        const app = new Vue({ 
            el: '#demo', 
            data() { 
                return { 
                    children: [ 
                        {title:'foo'}, 
                        {title:'bar'}, 
                    ] 
                } 
            }, 
            computed: { 
                isFolder() { 
                    return this.children && this.children.length > 0                  } 
            }, 
        }); 
        console.log(app.$options.render); 
    </script> 
</body> 
</html> 
```


结论： 

1. 显然v-for优先于v-if被解析（把你是怎么知道的告诉面试官）  
2. 如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能   
3. 要避免出现这种情况，则在外层嵌套template，在这一层进行v-if判断，然后在内部进行v-for循环   
4. 如果条件出现在循环内部，可通过计算属性提前过滤掉那些不需要显示的项   


## 2

2. Vue组件data为什么必须是个函数而Vue的根实例则没有此限制？  

## 3

3. 你知道vue中key的作用和工作原理吗？说说你对它的理解。


## 4

4. 你怎么理解vue中的diff算法？


## 5

5. 谈一谈对vue组件化的理解？	  


## 6.

6. 谈一谈对vue设计原则的理解？	  


## 7.

7. 谈谈你对MVC、MVP和MVVM的理解？	  


## 

8. 你了解哪些Vue性能优化方法？


## 

9. 你对Vue3.0的新特性有没有了解？


## 

10. vue中组件之间的通信方式？


## 

11. vue-router 中的导航钩子由那些？	  



## 

12. 说一说vue响应式理解？	  



## 


13. vue为什么要求组件模版只能有一个根元素?



## 14. 你知道nextTick的原理吗?

14. 你知道nextTick的原理吗?	  