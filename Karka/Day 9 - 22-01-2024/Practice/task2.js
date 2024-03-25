arr=[1,0,2,3,0,4,5,0]
b=[]
for(i=0;i<=arr.length-1;i++){
    if(arr[i]==0){
        b.push(0)
    }
    b.push(arr[i])
    if(arr.length==b.length){
        break
    }
}
console.log(b)


