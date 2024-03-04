$(document).ready(function(){
   

    $("#submitButton").click(function(e){
        e.preventDefault()
        let username=$("#name").val()
        let password=$("#password").val()
        let data = {
            name: username,
            password: password
        }
        console.log(data)
    })
})