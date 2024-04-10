const num=[1,2,3,4]
const sum=num.reduce((accumulator,number)=>accumulator+number,0)
console.log(sum)

//another method

const numb =[1,2,3,4]
let result=numb.reduce((accumulator,number)=>{
    return accumulator+number
},0)
console.log(result)

//example


const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
  ];
  
 
  const totalPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0); 
  
  console.log(totalPrice); 
  