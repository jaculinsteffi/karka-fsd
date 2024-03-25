$(document).ready(function(){
    let serial = 0
    $("#buttonAdd").click(function(){
        console.log($("#input").val())
        let input=$("#input").val()
        console.log($("#input").val(''))
        row(input)
    })
    function row(input){
         let newrow = "<tr>"
         newrow += ("<td>" + serial++ + "</td>")
         newrow += ("<td>" + input + "</td>")
         newrow += ("<td>" + '<button click="edit()">Edit</button>' + "</td>")
         newrow += ("<td>" + '<button click="delete()">Delete</button>' + "</td>")
         $("#tbody").append(newrow)
    }
    $(document).on('click', '.editBtn', function(){
        
        let row = $(this).closest('tr');
        let rowData = row.find('td:nth-child(2)').text(); 
    });

   
    $(document).on('click', '.deleteBtn', function(){
        
        $(this).closest('tr').remove();
})
})