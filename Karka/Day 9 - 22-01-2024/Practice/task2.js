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




input=[3,6,5,2,1]
sum=0
for(i=0;i<input.length;i++){
    sum+=input[i]
}
console.log(sum)


