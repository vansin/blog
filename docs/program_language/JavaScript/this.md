# this

## 普通情况


一般情况下在那个作用域调用，this就指向哪个作用域

```js
var name = "John";
const person = {
    name: "Chaim",
    walk: function() {
        console.log(`${this.name} is walking`)
    }
};

person.walk();//Chaim is walking
const walk = person.walk;
walk();//John is walking


const walkBind = person.walk.bind(person)
walkBind()//Chaim is walking


```

## 箭头函数

```js
var name = "John";
const person = {
    name: "Chaim",
    walk: () => {
        console.log(`${this.name} is walking`)
    }
};

person.walk();//John is walking

// const walk = person.walk;
// walk();//John is walking

const walkBind = person.walk.bind(person)
walkBind()//John is walking
```
