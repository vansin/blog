# 对象、类与面向对象编程

## 创建对象

### 概述

ECMAScript5.1并没有正式支持面向对象的结构，巧妙的运用原型式继承可以成功模拟同样的行为  
ES6的类旨在完全覆盖之前规范设计基于原型的继承模式（ES6仅仅是封装了ES5.1构造函数加原型继承的语法糖而已）

### 工厂模式

```js
function createPerson(name, age, job) {
    let o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function () {
        console.log(this.name)
    }
    return o;
}

let person1 = createPerson("Nicholas", 29, 'Software Engineer')
let person1 = createPerson("Greg", 27, "Doctor")
```
未解决对象标识问题（即新建的对象是什么类型）

### 构造函数模式

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName()
person2.sayName()
```

相比工厂模式

- 没有显式地创建对象
- 属性和方法直接赋值给了this
- 没有return

函数名Person的首字母大写了。构造函数名称的首字母都是要大写的。非构造函数则以小写字母开头。

要创造Person的实例，应使用new操作符。以这种方式调用构造函数会执行如下操作
1. 在内存中创造一个新对象
2. 这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性
3. 构造函数内部的this被赋值为这个新对象（即this指向新对象）
4. 执行构造函数内部的代码（给新对象添加熟悉）
5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的对象。

```js
console.log(person1.constructor == Person); // true
console.log(person2.constructor == Person); // true
```

```js
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true
```

赋值给变量的函数表达式也可以表示构造函数

```js
let Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}
```

```js
let person1 = createPerson("Nicholas", 29, 'Software Engineer')
let person1 = createPerson("Greg", 27, "Doctor")
person1.sayName()
person2.sayName()

console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true
```

#### 构造函数也是函数

```js
// 作为构造函数
let person = Person("Nicholas", 29, "Software Engineer")
person.sayName()
```

```js
// 作为函数调用
Person("Greg", 27, "Doctor")
window.sayName();
```

```js
// 在另一个对象的作用域中调用
let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); // "Kristen"
```

#### 构造函数问题

构造函数的主要问题在于,其定义的方法会在每个实例上都创建一遍  

我们知道,ECMAScipt中的函数是对象,因此每次定义函数时,都会初始化一个对象 逻辑上讲,这个构造函数实际上是这样的:

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function("console.log(this.name)"); // 大写的Function第一次见
}
```
每个Person实例都会有自己的Function实例用户显示name属性。不同实例上的函数虽然同名但是**不相等**：

```js
console.log(person1.sayName == person2.sayName);//false
```

因为都是做的同一件事情，没有必要定义两个不同的Function实例。况且，this对象可以把函数与对象的绑定推迟到运行时。  
要解决这个问题，可以把函数定义转移到构造函数外部。  

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name)
}
```

```js
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName();//Nicholas
person2.sayName(); //Greg
```
在这里，sayName()被定义在了构造函数外部。在构造函数外部，sayName属性等于全局sayName()函数。  
全局作用域杯搞乱了，因为那个函数实际上只能在一个对象上调用。如果这个对象需要多个方法，那么就要在全局作用域中定义多个函数。这会导致自定义类型
不能很好的聚集在一起。  
这个问题可以通过原型模式来解决。

### 原型模式
每个函数都会创建一个prototype属性，这个属性是一个对象，包含应该由特定引用类型的实例共享的属性和方法。

好处：在原型对象上面定义的属性和方法可以被对象实例共享。原来在构造函数中直接赋给对象实例的值，可以直接赋值给它们的原型。

```js
function Person() {}
```

```js
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name)
};

let person1 = new Person();
person1.sayName(); // "Nicholas";

let person2 = new Person();
person2.sayName(); // "Nicholas"

console.log(person1.sayName == person2.sayName); // true
```

使用函数表达式也可以
```js
Person =  function() {}
```
这个所有属性和sayName()方法都直接添加到了Person的prototype属性上面，构造函数体中什么也没有。
但这样定义之后，调用构造函数创建的新对象仍然拥有相应的属性和方法。与构造函数模式不同，
**使用这种原型模式定义的属性和方法是由所有实例共享的**。要理解这个过程，就必须理解ECMAScript中原型的本质。

#### 理解原型

- 无论何时，只要创建一个函数，就会按照特定的规则为这个函数创建一个prototype属性（指向原型对象）
- 默认情况下，所有原型对象自动获得一个名为constructor的属性，指回与之关联的构造函数（对于前面的例子而言Person.prototype.constructor
指向Person。然后因构造函数而异，可能会给原型对象添加其他属性方法。）
- 在自定义**构造函数**时，原型对象默认只会活得 constructor 属性

```js
// 实例与构造函数原型之间有直接的联系，但实例与构造函数之间没有

/**
 * 构造函数可以是函数表达式
 * 也可以是函数声明，因此以下两种形式都可以
 * funciont Person() {}
 * let Person = function() {}
 */
function Person() {}
/**
 * 声明之后，构造函数就有了一个
 * 与之关联的原型对象：
 */
console.log(typeof Person.prototype)
console.log(Person.prototype)

```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210531071405.png)

```js
/** 
 * 如前所述，构造函数有一个 prototype 属性
 * 引用其原型对象，而这个原型对象也有一个
 * constructor 属性，引用这个构造函数
 * 换句话说，两者循环引用：
 */
console.log(Person.prototype.constructor == Person);
```

```js
/** 
 * 正常的原型链都会终止于 Object 的原型对象
 * Object 原型的原型是 null 
 */
console.log(Person.prototype.__proto__ === Object.prototype); // true 
console.log(Person.prototype.__proto__.constructor === Object); // true 
console.log(Person.prototype.__proto__.__proto__ === null); // true 
console.log(Person.prototype.__proto__); 
// { 
// constructor: f Object(), 
// toString: ... 
// hasOwnProperty: ... 
// isPrototypeOf: ... 
// ... 
// }

```

```js
let person1 = new Person(), 
 person2 = new Person(); 
/** 
 * 构造函数、原型对象和实例
 * 是 3 个完全不同的对象：
 */ 
console.log(person1 !== Person); // true 
console.log(person1 !== Person.prototype); // true 
console.log(Person.prototype !== Person); // true 
/** 
 * 实例通过__proto__链接到原型对象，
 * 它实际上指向隐藏特性[[Prototype]] 
 * 
 * 构造函数通过 prototype 属性链接到原型对象
 * 
 * 实例与构造函数没有直接联系，与原型对象有直接联系
 */ 
console.log(person1.__proto__ === Person.prototype); // true 
conosle.log(person1.__proto__.constructor === Person); // true
```


```js
/** 
 * 同一个构造函数创建的两个实例
 * 共享同一个原型对象：
 */ 
console.log(person1.__proto__ === person2.__proto__); // true 
/** 
 * instanceof 检查实例的原型链中
 * 是否包含指定构造函数的原型：
 */ 
console.log(person1 instanceof Person); // true 
console.log(person1 instanceof Object); // true 
console.log(Person.prototype instanceof Object); // true
```
对于前面例子中的 Person 构造函数和 Person.prototype，可以通过图 8-1 看出各个对象之间的关系。
![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210531073234.png)

图 8-1 展示了 Person 构造函数、Person 的原型对象和 Person 现有两个实例之间的关系。注意，
Person.prototype 指向原型对象，而 Person.prototype.contructor 指回 Person 构造函数。原
型对象包含 constructor 属性和其他后来添加的属性。Person 的两个实例 person1 和 person2 都只
有一个内部属性指回 Person.prototype，而且两者都与构造函数没有直接联系。另外要注意，虽然这两
个实例都没有属性和方法，但 person1.sayName()可以正常调用。这是由于对象属性查找机制的原因。

```js
console.log(Person.prototype.isPrototypeOf(person1)); // true 
console.log(Person.prototype.isPrototypeOf(person2)); // true
```
这里通过原型对象调用 isPrototypeOf()方法检查了 person1 和 person2。因为这两个例子内
部都有链接指向 Person.prototype，所以结果都返回 true。

ECMAScript 的 Object 类型有一个方法叫 Object.getPrototypeOf()，返回参数的内部特性
[[Prototype]]的值。例如：

```js
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true 
console.log(Object.getPrototypeOf(person1).name); // "Nicholas"
```

第一行代码简单确认了 Object.getPrototypeOf()返回的对象就是传入对象的原型对象。第二
行代码则取得了原型对象上 name 属性的值，即"Nicholas"。使用 Object.getPrototypeOf()可以
方便地取得一个对象的原型，而这在通过原型实现继承时显得尤为重要（本章后面会介绍）。

Object 类型还有一个 setPrototypeOf()方法，可以向实例的私有特性[[Prototype]]写入一
个新值。这样就可以重写一个对象的原型继承关系

```js
let biped = { 
 numLegs: 2 
}; 
let person = { 
 name: 'Matt' 
}; 
Object.setPrototypeOf(person, biped); 
console.log(person.name); // Matt 
console.log(person.numLegs); // 2 
console.log(Object.getPrototypeOf(person) === biped); // true
```




::: warning WARNING
警告 Object.setPrototypeOf()可能会严重影响代码性能。Mozilla 文档说得很清楚：
“在所有浏览器和 JavaScript 引擎中，修改继承关系的影响都是微妙且深远的。这种影响并
不仅是执行 Object.setPrototypeOf()语句那么简单，而是会涉及所有访问了那些修
改过[[Prototype]]的对象的代码。”
:::

为避免使用 Object.setPrototypeOf()可能造成的性能下降，可以通过 Object.create()来创
建一个新对象，同时为其指定原型：

```js
let biped = { 
 numLegs: 2 
}; 
let person = Object.create(biped); 
person.name = 'Matt'; 
console.log(person.name); // Matt 
console.log(person.numLegs); // 2 
console.log(Object.getPrototypeOf(person) === biped); // true
```

#### 原型层级

#### 原型和in操作符

#### 属性枚举顺序

## 继承

## 类
