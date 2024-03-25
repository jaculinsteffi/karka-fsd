a=[3,2,2,3]
b=3
c=[]
d=[]
for(i=0;i<=a.length-1;i++){
    if(a[i]==b){
      c.push(a[i])
    }
    else{
    d.push(a[i])
    }
}
console.log(d)


a=[3,2,2,3]
b=[3]
// c=[]
for(i=0;i<=a.length-1;i++){
  if(a[i]==b){
    a[i]="*"
    // c.push(a[i])


  }
}
console.log(a)

// a=[3,2,2,3]
// b=[3]
// c=[]
// for(i=0;i<=a.length-1;i++){
//   if(a[i]!=3){
//     c.push(a[i])
//   }
// }
// // console.log(c)
// length=a.length-c.length
// // console.log(length)
// for(i=0;i<=length-1;i++){
//   c.push("*")
// }

// console.log(c)


a=[3,2,2,3]
b=[3]
c=[]
for(i=0;i<=a.length-1;i++){
  if(a[i]!=b){
    c.push(a[i])
  }
}
length=a.length-c.length
for(i=0;i<=length-1;i++){
  c.push("*")
}
console.log(c)