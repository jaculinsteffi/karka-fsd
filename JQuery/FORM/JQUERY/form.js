$(document).ready(function(){
    $("#submitbutton").click(function(){
        let name = $("#name").val()
        let email = $("#email").val()
        let number = $("#number").val()
        let address = $("#address").val()
        let skills = []
        $("input[type='checkbox']:checked").each(function(){
            skills.push($(this).val())
        })
        let objectives = $("#objectives").val()
        let hobbies = ($("#hobbies").val()).split(",")
        let fathername =$("#fathername").val()
        let mothername =$("#mothername").val()
        let sibilingname =$("#sibilingname").val()
        let maritalstatus =$("#maritalstatus").val()
        let name1 =$("#name1").val()
        let institute1 =$("#institute1").val()
        let year1 =$("#year1").val()
        let mark1 =$("#mark1").val()
        let name2 =$("#name2").val()
        let institute2 =$("#institute2").val()
        let year2 =$("#year2").val()
        let mark2 =$("#mark2").val()
        let name3 =$("#name3").val()
        let institute3 =$("#institute3").val()
        let year3 =$("#year3").val()
        let mark3 =$("#mark3").val()
            
        let userdata={
            Name: name,
            Email: email,
            Number: number,
            Address: address,
            Skills: skills,
            Objectives: objectives,
            Hobbies: hobbies,
            Education :[
                person1={
                    Name: name1,
                    Institute: institute1,
                    Years: year1,
                    Marks: mark1
                },
                person2={
                    Name: name2,
                    Institute: institute2,
                    Years: year2,
                    Marks: mark2
                },
                person3={
                    Name: name3,
                    Institute: institute3,
                    Years: year3,
                    Marks: mark3
                }
            ],
            PersonalDetails:{
                FathernName:fathername,
                MotherName:mothername,
                SibilingName:sibilingname,
                MaritalStatus:maritalstatus


        }

        }
        console.log(userdata)
    })
})