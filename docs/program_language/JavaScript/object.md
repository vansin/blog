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

在通过对象访问属性时，会按照这个属性的名称开始搜索。搜索开始于对象实例本身。如果在这个
实例上发现了给定的名称，则返回该名称对应的值。如果没有找到这个属性，则搜索会沿着指针进入原
型对象，然后在原型对象上找到属性后，再返回对应的值。因此，在调用 person1.sayName()时，会
发生两步搜索。首先，JavaScript 引擎会问：“person1 实例有 sayName 属性吗？”答案是没有。然后，
继续搜索并问：“person1 的原型有 sayName 属性吗？”答案是有。于是就返回了保存在原型上的这
个函数。在调用 person2.sayName()时，会发生同样的搜索过程，而且也会返回相同的结果。这就是
原型用于在多个对象实例间共享属性和方法的原理。


注意 前面提到的 constructor 属性只存在于原型对象，因此通过实例对象也是可以访
问到的。

虽然可以通过实例读取原型对象上的值，但不可能通过实例重写这些值。如果在实例上添加了一个
与原型对象中同名的属性，那就会在实例上创建这个属性，这个属性会遮住原型对象上的属性。下面看
一个例子：

```js
function Person() {} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function() { 
 console.log(this.name); 
}; 
let person1 = new Person(); 
let person2 = new Person(); 
person1.name = "Greg"; 
console.log(person1.name); // "Greg"，来自实例
console.log(person2.name); // "Nicholas"，来自原型
```

在这个例子中，person1 的 name 属性遮蔽了原型对象上的同名属性。虽然 person1.name 和
person2.name 都返回了值，但前者返回的是"Greg"（来自实例），后者返回的是"Nicholas"（来自
原型）。当 console.log()访问 person1.name 时，会先在实例上搜索个属性。因为这个属性在实例
上存在，所以就不会再搜索原型对象了。而在访问 person2.name 时，并没有在实例上找到这个属性，
所以会继续搜索原型对象并使用定义在原型上的属性。

只要给对象实例添加一个属性，这个属性就会遮蔽（shadow）原型对象上的同名属性，也就是虽然
不会修改它，但会屏蔽对它的访问。即使在实例上把这个属性设置为 null，也不会恢复它和原型的联
系。不过，使用 delete 操作符可以完全删除实例上的这个属性，从而让标识符解析过程能够继续搜索
原型对象。

```js
function Person() {} 
Person.prototype.name = "Nicholas";
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function() { 
 console.log(this.name); 
}; 
let person1 = new Person(); 
let person2 = new Person(); 
console.log(person1.hasOwnProperty("name")); // false 
person1.name = "Greg"; 
console.log(person1.name); // "Greg"，来自实例
console.log(person1.hasOwnProperty("name")); // true 
console.log(person2.name); // "Nicholas"，来自原型
console.log(person2.hasOwnProperty("name")); // false 
delete person1.name; 
console.log(person1.name); // "Nicholas"，来自原型
console.log(person1.hasOwnProperty("name")); // false
```

在这个例子中，通过调用 hasOwnProperty()能够清楚地看到访问的是实例属性还是原型属性。
调用 person1.hasOwnProperty("name")只在重写 person1 上 name 属性的情况下才返回 true，表
明此时 name 是一个实例属性，不是原型属性。图 8-2 形象地展示了上面例子中各个步骤的状态。（为简
单起见，图中省略了 Person 构造函数。）

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210531083450.png)

注意 ECMAScript 的 Object.getOwnPropertyDescriptor()方法只对实例属性有
效。要取得原型属性的描述符，就必须直接在原型对象上调用 Object.getOwnPropertyDescriptor()。

#### 原型和in操作符

有两种方式使用 in 操作符：单独使用和在 for-in 循环中使用。在单独使用时，in 操作符会在可
以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上。来看下面的例子：

```js
function Person() {} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function() { 
 console.log(this.name); 
}; 
let person1 = new Person(); 
let person2 = new Person(); 
console.log(person1.hasOwnProperty("name")); // false 
console.log("name" in person1); // true 
person1.name = "Greg"; 
console.log(person1.name); // "Greg"，来自实例
console.log(person1.hasOwnProperty("name")); // true 
console.log("name" in person1); // true 
console.log(person2.name); // "Nicholas"，来自原型
console.log(person2.hasOwnProperty("name")); // false 
console.log("name" in person2); // true 
delete person1.name; 
console.log(person1.name); // "Nicholas"，来自原型
console.log(person1.hasOwnProperty("name")); // false 
console.log("name" in person1); // true
```

在上面整个例子中，name 随时可以通过实例或通过原型访问到。因此，调用"name" in persoon1
时始终返回 true，无论这个属性是否在实例上。如果要确定某个属性是否存在于原型上，则可以像下
面这样同时使用 hasOwnProperty()和 in 操作符：

```js
function hasPrototypeProperty(object, name){ 
 return !object.hasOwnProperty(name) && (name in object); 
}
```

只要通过对象可以访问，in 操作符就返回 true，而 hasOwnProperty()只有属性存在于实例上
时才返回 true。因此，只要 in 操作符返回 true 且 hasOwnProperty()返回 false，就说明该属性
是一个原型属性。来看下面的例子：

```js
function Person() {} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() { 
 console.log(this.name); 
}; 
let person = new Person(); 
console.log(hasPrototypeProperty(person, "name")); // true 
person.name = "Greg"; 
console.log(hasPrototypeProperty(person, "name")); // false
```

在这里，name 属性首先只存在于原型上，所以 hasPrototypeProperty()返回 true。而在实例
上重写这个属性后，实例上也有了这个属性，因此 hasPrototypeProperty()返回 false。即便此时
原型对象还有 name 属性，但因为实例上的属性遮蔽了它，所以不会用到。

在 for-in 循环中使用 in 操作符时，可以通过对象访问且可以被枚举的属性都会返回，包括实例
属性和原型属性。遮蔽原型中不可枚举（[[Enumerable]]特性被设置为 false）属性的实例属性也会
在 for-in 循环中返回，因为默认情况下开发者定义的属性都是可枚举的。

要获得对象上所有可枚举的实例属性，可以使用 Object.keys()方法。这个方法接收一个对象作
为参数，返回包含该对象所有可枚举属性名称的字符串数组。比如：

```js
function Person() {} 
Person.prototype.name = "Nicholas"; 
Person.prototype.age = 29; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function() { 
 console.log(this.name); 
}; 
let keys = Object.keys(Person.prototype); 
console.log(keys); // "name,age,job,sayName" 
let p1 = new Person(); 
p1.name = "Rob"; 
p1.age = 31; 
let p1keys = Object.keys(p1); 
console.log(p1keys); // "[name,age]"
```

这里，keys 变量保存的数组中包含"name"、"age"、"job"和"sayName"。这是正常情况下通过
for-in 返回的顺序。而在 Person 的实例上调用时，Object.keys()返回的数组中只包含"name"和
"age"两个属性。

如果想列出所有实例属性，无论是否可以枚举，都可以使用 Object.getOwnPropertyNames()：

```js
let keys = Object.getOwnPropertyNames(Person.prototype); 
console.log(keys); // "[constructor,name,age,job,sayName]"
```

注意，返回的结果中包含了一个不可枚举的属性 constructor。Object.keys()和 Object. 
getOwnPropertyNames()在适当的时候都可用来代替 for-in 循环。

在 ECMAScript 6 新增符号类型之后，相应地出现了增加一个 Object.getOwnPropertyNames()
的兄弟方法的需求，因为以符号为键的属性没有名称的概念。因此，Object.getOwnPropertySymbols()方法就出现了，这个方法与 Object.getOwnPropertyNames()类似，只是针对符号而已：

```js
let k1 = Symbol('k1'), 
k2 = Symbol('k2');

let o = { 
 [k1]: 'k1', 
 [k2]: 'k2' 
}; 
console.log(Object.getOwnPropertySymbols(o)); 
// [Symbol(k1), Symbol(k2)]
```


#### 属性枚举顺序

for-in 循环、Object.keys()、Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()以及 Object.assign()在属性枚举顺序方面有很大区别。for-in 循环和 Object.keys()
的枚举顺序是不确定的，取决于 JavaScript 引擎，可能因浏览器而异。

Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()和 Object.assign()
的枚举顺序是确定性的。先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中
定义的键以它们逗号分隔的顺序插入。

```js
let k1 = Symbol('k1'), 
 k2 = Symbol('k2'); 
let o = { 
 1: 1, 
 first: 'first', 
 [k1]: 'sym2', 
 second: 'second', 
 0: 0 
}; 
o[k2] = 'sym2'; 
o[3] = 3; 
o.third = 'third'; 
o[2] = 2; 
console.log(Object.getOwnPropertyNames(o)); 
// ["0", "1", "2", "3", "first", "second", "third"] 
console.log(Object.getOwnPropertySymbols(o)); 
// [Symbol(k1), Symbol(k2)]
```

### 对象迭代

在 JavaScript 有史以来的大部分时间内，迭代对象属性都是一个难题。ECMAScript 2017 新增了两
个静态方法，用于将对象内容转换为序列化的——更重要的是可迭代的——格式。这两个静态方法
Object.values()和 Object.entries()接收一个对象，返回它们内容的数组。Object.values()
返回对象值的数组，Object.entries()返回键/值对的数组。

下面的示例展示了这两个方法：

```js
const o = { 
 foo: 'bar', 
 baz: 1, 
 qux: {} 
}; 
console.log(Object.values(o));


// ["bar", 1, {}] 
console.log(Object.entries((o))); 
// [["foo", "bar"], ["baz", 1], ["qux", {}]] 
```

注意，非字符串属性会被转换为字符串输出。另外，这两个方法执行对象的浅复制：

```js
const o = { 
 qux: {} 
}; 
console.log(Object.values(o)[0] === o.qux); 
// true 
console.log(Object.entries(o)[0][1] === o.qux); 
// true 
符号属性会被忽略：
const sym = Symbol(); 
const o = { 
 [sym]: 'foo' 
}; 
console.log(Object.values(o)); 
// [] 
console.log(Object.entries((o))); 
// []

```


## 继承

## 类

## 