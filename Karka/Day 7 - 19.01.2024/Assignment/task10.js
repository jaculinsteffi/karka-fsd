input="Adam is a boy and Adam loves to play cricket"
a=input.split(" ")
b="Adam"
count=0
for(i=0;i<=a.length;i++){
    if(a[i]==b){
        count=count+1
    }
}
console.log(count)


a=[1,3,3,4,3,2,3]
b=3
count=0
for(i=0;i<=a.length;i++){
    if(a[i]==b){
        count=count+1
    }
}
console.log(count)