y=2024
if(y%4==0 && y%100!=0){
    console.log(y,"is leap year")
}
else if(y%400==0){
    console.log(y,"is a leap year")
}
else{
    console.log(y,"is not a leap year")
}