let numbers=[1,2,3,4]
 let number1=[2,4,5]
 const newdata = [...numbers,...number1]
 console.log(newdata)
 console.log(...newdata)

let num=[1,2,3,4,5,6]
const copy=[...num,4]
console.log(copy)
num.push(4)
console.log(copy)