//for of loop
//array
let arr =[1,2,3,4]
for(let element of arr)
console.log(element)
//string
const str='hello'
for(const char of str)
console.log(char)
//map
const map=[['a',1],['b',2]]
for(const [key,value] of map){
console.log(key,value)
}

const newmap=[['a',1],['b',2]]
for(const [key1] of newmap){
console.log(key1)
}
//set
const set=([1,2,3,4,5,3])
for(const element of set)
console.log(element)

//for in

const obj={
    name:"jaculin",
    age:26,
    degree:"EEE"
}
for(const key in obj){
    console.log(key + ':' + obj[key])
}

 