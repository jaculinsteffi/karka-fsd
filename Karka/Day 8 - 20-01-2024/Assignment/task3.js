
a=[1, 2, 2, 3, 4, 4, 5]
b=[]

for(i=0;i<=a.length-1;i++){
    duplicate=true
    for(j=0;j<=b.length-1;j++){
        if(a[i]===b[j]){
            duplicate=false
        }
    }
    if(duplicate==true){
        b.push(a[i])
    }
} console.log(b)

