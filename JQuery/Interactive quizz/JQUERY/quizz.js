$(document).ready(function(){
    $("#email").click(function(){
        console.log($("#email").val())
    })
    $("#password").click(function(){
        console.log($("#password").val())
    }) 
    $("#create").click(function(){
        $("#page1").css( "display","none")
        $("#page2").css( "display","block")
    })
    $("#login").click(function(event){
        event.preventDefault()
        $("#page1").css( "display","none")

        $("#page3").css( "display","block")
    })
    $("#sports").click(function(){
        $("#page3").css("display","none")
        $("#sportsquestion").css("display","block")
    
    })
})


    
