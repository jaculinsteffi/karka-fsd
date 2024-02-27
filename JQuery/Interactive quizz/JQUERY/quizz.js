$(document).ready(function(){
    let empty = []
    $("#submitButton").click(function(){
        let a = $("#username").val()
        let b = $("#typepassword").val()
        let c = $("#reenter").val()
      
        
        if(a!=="" && b!=="" && b === c){
            let userdata ={
                username: a,
                typepassword: b
            }
            empty.push(userdata)
            console.log(empty)

            $("#page1").css("display","block")
        }
        else{
            alert("password do not match")
        }
    })
    

    $("#email").click(function () {
        console.log($("#email").val())
    })
    $("#password").click(function () {
        console.log($("#password").val())
    })
    $("#create").click(function () {
        $("#page1").css("display", "none")
        $("#page2").css("display", "block")
    })
    $("#login").click(function (event) {
        event.preventDefault()
        let emailLogin=$("#email").val()
let passLogin=$("#password").val()
        for (let i=0;i<empty.length;i++){
            if(empty[i].username == emailLogin && empty[i].typepassword == passLogin){
                $("#page1").css("display", "none")
                $("#page2").css("display", "none")
                $("#page3").css("display", "block")
            }
        }
        // $("#page1").css("display", "none")
        // $("#page2").css("display", "none")
        // $("#page3").css("display", "block")
    })
    $("#sports").click(function () {
        $("#page3").css("display", "none")
        $("#sportsquestion").css("display", "block")

    })
    $("#back").click(function(event){
        event.preventDefault()
        $("#page3").css("display","block")
        $("#page1").css("display", "none")
        $("#sportsquestion").css("display","none")
    })
    $("#agriculture").click(function () {
        $("#page3").css("display", "none")
        $("#agriquestion").css("display", "block")

    })
    $("#back1").click(function(event){
        event.preventDefault()
        $("#page3").css("display","block")
        $("#page1").css("display", "none")
        $("#agriquestion").css("display","none")
    })
    $("#space").click(function () {
        $("#page3").css("display", "none")
        $("#spacequestion").css("display", "block")

    })
    $("#back2").click(function(event){
        event.preventDefault()
        $("#page3").css("display","block")
        $("#page1").css("display", "none")
        $("#spacequestion").css("display","none")
    })
    $("#world").click(function () {
        $("#page3").css("display", "none")
        $("#worldquestion").css("display", "block")

    })
    $("#back3").click(function(event){
        event.preventDefault()
        $("#page3").css("display","block")
        $("#page1").css("display", "none")
        $("#worldquestion").css("display","none")
    })
    $("#underwater").click(function () {
        $("#page3").css("display", "none")
        $("#underwaterquestion").css("display", "block")

    })
    $("#back4").click(function(event){
        event.preventDefault()
        $("#page3").css("display","block")
        $("#page1").css("display", "none")
        $("#underwaterquestion").css("display","none")
    })

})

$(document).ready(function () {
    $('#check').click(function () {
        var correctAnswers = {
            question1: "Perth", 
            question2: "Rafael Nadal", 
            question3: "Football", 
            question4: "Karnam Malleswari", 
            question5: "Brazil" 
        }
    
    var score = 0;

    for (var question in correctAnswers) {
        var userAnswer = $('input[name="' + question + '"]:checked');
        var correctAnswer = correctAnswers[question];
        if (userAnswer.length > 0) {
            if (userAnswer.val() === correctAnswer) {
                score++;   
                $('input[value="' + correctAnswer + '"]').next('label').addClass("correct"); 
            } else {
                userAnswer.next('label').addClass("wrong"); 
            }
        }
    }
    alert("Your score is: " + score + "/5");
});
    $("#check").click(function (event) {
        event.preventDefault()
        $(".correct1").css("display", "block")

    })
})
$("#back").click(function(event){
    event.preventDefault()
    $("#page3").css("display","block")
    $("#sportsquestion").css("display","none")
})
$(document).ready(function(){
    $("#check1").click(function(){
        var correctAnswer1 = {
            question1: "Photosynthesis", 
            question2: "Carbon dioxide (CO2)", 
            question3: "Crop rotation", 
            question4: "Organic farming", 
            question5: "Drip irrigation"

        }
        var score = 0
        
        for (var question in correctAnswer1) {
            var userAnswer1 = $('input[name="' + question + '"]:checked');
            var correctA = correctAnswer1[question];
            if (userAnswer1.length > 0) {
                if (userAnswer1.val() === correctA) {
                    score++;
                    $('input[value="' + correctA + '"]').next('label').addClass("correct"); 
                }
                 else {
                   userAnswer1.next('label').addClass("wrong"); 
                }
            }
        }
        alert("Your score is: " + score + "/5");
    });
    $("#check1").click(function (event) {
        event.preventDefault()
        $(".correct2").css("display", "block")

    })

    })
    $(document).ready(function(){
        $("#check2").click(function(){
            var correctAnswer1 = {
                question1: "Mars", 
                question2: "Titan", 
                question3: "Neil Armstrong", 
                question4: "Hubble Space Telescope", 
                question5: "New Horizons"
    
            }
            var score = 0
            
            for (var question in correctAnswer1) {
                var userAnswer1 = $('input[name="' + question + '"]:checked');
                var correctA = correctAnswer1[question];
                if (userAnswer1.length > 0) {
                    if (userAnswer1.val() === correctA) {
                        score++;
                        $('input[value="' + correctA + '"]').next('label').addClass("correct"); 
                    }
                     else {
                       userAnswer1.next('label').addClass("wrong"); 
                    }
                }
            }
            alert("Your score is: " + score + "/5");
        });
        $("#check2").click(function (event) {
            event.preventDefault()
            $(".correct3").css("display", "block")
    
        })
    })
        $(document).ready(function(){
            $("#check3").click(function(){
                var correctAnswer1 = {
                    question1: "Pacific Ocean", 
                    question2: "Canberra", 
                    question3: "Russia", 
                    question4: "Nile River", 
                    question5: "Himalayas"
        
                }
                var score = 0
                
                for (var question in correctAnswer1) {
                    var userAnswer1 = $('input[name="' + question + '"]:checked');
                    var correctA = correctAnswer1[question];
                    if (userAnswer1.length > 0) {
                        if (userAnswer1.val() === correctA) {
                            score++;
                            $('input[value="' + correctA + '"]').next('label').addClass("correct"); 
                        }
                         else {
                           userAnswer1.next('label').addClass("wrong"); 
                        }
                    }
                }
                alert("Your score is: " + score + "/5");
            });
            $("#check3").click(function (event) {
                event.preventDefault()
                $(".correct4").css("display", "block")
        
            })
        
    
        })
        $(document).ready(function(){
            $("#check4").click(function(){
                var correctAnswer1 = {
                    question1: "Great Barrier Reef", 
                    question2: "Mariana Trench", 
                    question3: "Whale Shark", 
                    question4: "Photosynthesis", 
                    question5: "Tundra"
        
                }
                var score = 0
                
                for (var question in correctAnswer1) {
                    var userAnswer1 = $('input[name="' + question + '"]:checked');
                    var correctA = correctAnswer1[question];
                    if (userAnswer1.length > 0) {
                        if (userAnswer1.val() === correctA) {
                            score++;
                            $('input[value="' + correctA + '"]').next('label').addClass("correct"); 
                        }
                         else {
                           userAnswer1.next('label').addClass("wrong"); 
                        }
                    }
                }
                alert("Your score is: " + score + "/5");
            });
            $("#check4").click(function (event) {
                event.preventDefault()
                $(".correct5").css("display", "block")
        
            })
        
    
        })


