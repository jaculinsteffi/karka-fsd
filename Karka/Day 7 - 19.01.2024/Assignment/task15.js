x=[2,3,5,6,7,88,66,65,45,79,70,90,38]
a=[]
b=[]
for(i=0;i<=x.length-1;i++){
if(x[i]%2==0){
    a.push(x[i])
}
else{
    b.push(x[i])
}
}
console.log(a)
console.log(b)