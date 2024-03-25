$("document").ready(function(){
    $("#create").click(function(){
        $(".page1").css("display",'none')
        $(".page2").css("display",'block')
    })
    $("#register").click(function(){
        let name=$("#name").val()
        let email=$("#email").val()
        let username=$("#username").val()
        let password=$("#password").val()

        let userdata = localStorage.getItem("userdata")?
        JSON.parse(localStorage.getItem("userdata")):[];
        
        let data ={
            Name: name,
            Email: email,
            Username: username,
            Password: password
        }
        console.log(data)
        userdata.push(data)
        localStorage.setItem("userdata",JSON.stringify(userdata))

    })
   
})