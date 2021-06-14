# Hoisting


```js
console.log(x);
let x = 10;
```

```js
console.log(x);
var x = 10;
```


```js
var x;
console.log(x);
var x = 10;
```


```js
foo();
function foo() {
    console.log('called')
}
```

```js
foo(); // Type Error
var foo = function() {
    console.log("called");
}
```