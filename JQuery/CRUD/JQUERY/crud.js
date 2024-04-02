$(document).ready(function(){
    let edited = false
    $("#submit").click(function(){ 
        if(edited == false){
        let name=$("#name").val()
        let email=$("#email").val()
        let password=$("#password").val()
        let gender=$("input[name='gender']:checked").val()
        let place = $("#place").val()
        let skills=[]
         $("input[name='skills']:checked").each(function(){
            skills.push($(this).val())
         })
         let userdata={
            Name:name,
            Email:email,
            Password:password,
            Gender:gender,
            Place:place,
            Skills:skills
         }
         console.log(userdata)
       addData(userdata)
       $("#name").val("")
       $("#email").val("")
       $("#password").val("")
       $("input[name='gender']").prop('checked',false)
       $("input[name='skills']").prop('checked',false)
       $("#place").val("")

        }
      })

    
    function addData(userdata){
    var row =$(".editing")
    if(row.length>0){
        row.find('td:eq(0)').text(userdata.Name)
        row.find('td:eq(1)').text(userdata.Email)
        row.find('td:eq(2)').text(userdata.Password)
        row.find('td:eq(3)').text(userdata.Gender)
        row.find('td:eq(4)').text(userdata.Skills)
        row.removeClass("editing")
        edited = false
    }
    else{
         var tbody=$("#table")
         if(userdata.Name !== ""){
            var newrow=$('<tr>')

            newrow.append('<td>' + userdata.Name + '</td>')
            newrow.append('<td>' + userdata.Email + '</td>')
            newrow.append('<td>' + userdata.Password + '</td>')
            newrow.append('<td>' + userdata.Gender + '</td>')
            newrow.append('<td>' + userdata.Skills + '</td>')
            newrow.append("<td>" + '<button class="edit">Edit</button>' + "</td>")
            newrow.append("<td>" + '<button class="delete">Delete</button>' + "</td>")

            tbody.append(newrow)
         }
    }
    }
    
    $("#table").on('click','.edit',function(){
    if(edited == false){
      var row = $(this).closest('tr')
        row.addClass("editing")
      var name = row.find('td:eq(0)').text()
      var email = row.find('td:eq(1)').text()
      var password = row.find('td:eq(2)').text()
      var gender = row.find('td:eq(3)').text()
      var skills = row.find('td:eq(4)').text().split(' , ')

         $("#name").val(name)
           $("#email").val(email)
           $("#password").val(password) 
           $("input[name='gender'][value='" + gender + "']").prop('checked', true)
           $("#place").val(place)
         $("input[name='skills'][value='" + skills + "']").prop('checked', true)
    }
   }) 

    $("#table").on('click','.delete',function(){
        $(this).closest('tr').remove()
})
   
})
