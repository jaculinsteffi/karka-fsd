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
$(document).ready(function(){
    $("#check").click(function(){
     answer = {
      question1: "Perth", 
      question2: "Rafael Nadal", 
      question3: "Football",
      question4: "Karnam Malleswari",
      question5: "Indian Premier League" 
      }
     score = 0 
      for(question  in answer){
        output = $('input[name="'+ question + '"]:checked')
        if(output.length){
if(output.val() === answer[question]){
    output.parent().addClass("correct")
    score++
  
}
        }  
           
    
        else{
        
          output.parent().addClass("wrong")
           
        }
      }
     
      alert("your score is: " + score + "/5")
    })
    $("#check").click(function(event){
        event.preventDefault()
        $(".correct1").css("display","block")
        
    })
    // $("#back").click(function(event){
    //     event.preventDefault()
    //     $(".").css("display","block")
    // })
})


    
