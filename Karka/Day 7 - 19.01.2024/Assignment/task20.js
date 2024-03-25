a=[1,2,3,4,5,0,9,8,7,6]
sum=0
for(i=0;i<=a.length-1;i++){
    sum+=a[i]
    if(a[i]==0){
        console.log("total:",sum)
    }

}
