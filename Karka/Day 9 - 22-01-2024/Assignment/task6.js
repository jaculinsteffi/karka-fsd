a=38
while(a>=10){
sum=0
b=a.toString()

for(i=0;i<=b.length-1;i++){
    sum += parseInt(b[i])
//   console.log(sum)
}
a=sum
}
console.log(a)