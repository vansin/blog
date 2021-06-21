# for循环

## 

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```

## for in 


```js
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}

```

输出如下

```shell
Prints:
0
1
2
3
4
5
6
7
8
9
function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}

```

太可怕！这就是为何在循环访问数组时，不建议使用 for...in 循环。


## forEach

注意： forEach 循环 是另一种形式的 JavaScript 循环。但是，forEach() 实际上是数组的方法，因此只能用在数组中。另外，forEach 循环也无法停止或退出，如果你的循环中希望出现这种行为，则需要使用基本的 for 循环。


## for of 


```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

- 你可以随时停止或退出 for...of 循环。


```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

- 不用担心向对象中添加新的属性。for...of 循环将只循环访问对象中的值。

```js
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```