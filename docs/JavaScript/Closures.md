# Closures

闭包没有想象中这么难

## Demo

```js
let x = 10;
function foo() {
  console.log(x)
}
foo(x);
```



```js
function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}
const func = outer();
func();
```

```js
function makePerson(name) {
    const personName = name;
    return {
        getName() {
            return personName;
        }
    }
}

const p = makePerson("Chaim");
console.log(p.getName());

```

## Reference

[video](https://www.youtube.com/watch?v=suxRwX6LvAk&list=PLK0STOMCFms58Tq-U9KmXn88whBsOawZi&index=3)