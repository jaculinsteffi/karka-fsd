a=[0,1,0,3,12]
b=[]
for(i=0;i<=a.length-1;i++){
    if(a[i]!=0){
        b.push(a[i])
    }
}
len=a.length-b.length
for(i=0;i<=len-1;i++){
    b.push(0)

}
console.log(b)