let myobj={
    tamil:89,
    english:90,
    maths:98,
    science:97,
    socialscience:93
}
const total=Object.values(myobj).reduce((accumulator,number)=>{
    return accumulator + number
},0)
console.log(total)

//object.values() convert object to arrays

 