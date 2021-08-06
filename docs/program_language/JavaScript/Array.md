# Array

## filter|find|reduce 

```js

// filter
const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = numbers.filter(n => n > 3)
console.log(numbers)
console.log(result)

// find (find the first one)

const number = numbers.find( n => n===2)
console.log(number)

// reduce 

const total = numbers.reduce((acc, current) => {
  acc = acc + current;
  return acc;
},0)

console.log(total)



const people = [
  {
    first: 'John0',
    last: "Doe1"
  },
  {
    first: 'John1',
    last: "Doe1"
  },
  {
    first: 'John2',
    last: "Doe2"
  },
  {
    first: 'John3',
    last: "Doe2"
  }
]

const transformed = people.reduce((acc, current)=>{
  if(acc[current.last]) {
    acc[current.last].push(current);
  } else {
    acc[current.last] = [current]
  }
  return acc
},{})

console.log(transformed)

```