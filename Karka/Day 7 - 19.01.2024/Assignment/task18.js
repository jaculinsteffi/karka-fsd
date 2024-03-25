a=[5,2,-7,3,-2,-1]
b=[]
for(i=0;i<=a.length-1;i++){
    if(a[i]<0){
        b.push(a[i])
    }
}
console.log(b)