const data=setInterval(()=>{
    console.log("this is displayed")
},1000)
setTimeout(()=>{
    clearInterval(data)
    console.log("this is displayed")
},3000)  