a=[1,0,2,3,0,4,5,0]
b=[]
for(i=0;i<=a.length-1;i++)
{
    if(a[i]==0){
        b.push(0)
    }
    b.push(a[i])
    if(a.length==b.length){
        break
    }
  
}
console.log(b)