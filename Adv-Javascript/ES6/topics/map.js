let num=[1,2,3,4,5,6]
const newdata=num.map(num=>num%2==0)
console.log(newdata)



let array = ["sajin","indhuja","alen"]
array.map((data,index)=>{
    console.log(data,index)
})

let myarray = ["sajin","indhuja","alen"]
myarray.map((_,index)=>{
    console.log(index)
})