let pass="seraphina12"
if(pass.length<8){
   console.log("password is weak")
}
let uppercase=false
let lowercase=false
let digit=false
let special=false

for(i=0;i<pass.length-1;i++){
    if(/[A-Z]/.test(pass[i])){
        uppercase=true
    }
    else if(/[a-z]/.test(pass[i])){
        lowercase=true
    }
    else if(/\d/.test(pass[i])){
        digit=true
    }
    else if(/[!@#$%^&*]/.test(pass[i])){
        special=true
    }}
    
   let x = uppercase && lowercase && digit && special
   if(x==true){
    console.log("password is strong")
   }
   else{
    console.log("condition not satisfied")
}

