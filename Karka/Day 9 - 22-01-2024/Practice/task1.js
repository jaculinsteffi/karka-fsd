var nums=[3,2,2,3,5]
var b=[]
for(i=0;i<=nums.length-1;i++){
    if(nums[i]!=3){
        b.push(nums[i])
    }
}
len=nums.length-b.length
for(i=0;i<=len-1;i++){
    b.push(0)
}
console.log(b)