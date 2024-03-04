$(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault()
        let name = $("#firstname").val()
        let pass = $("#password").val()
        let date = $("#date").val()
        let gender = $("input[name='gender']:checked").val();
        let education = [];
        $("input[name='education']:checked").each(function(){;
            education.push($(this).val());
        });

        let place = $("#place").val();
         let userdata = {
            firstname: name,
            password: pass,
            date: date,
            gender:gender,
            education:education,
            place: place

         }
            console.log(userdata)
    })
})