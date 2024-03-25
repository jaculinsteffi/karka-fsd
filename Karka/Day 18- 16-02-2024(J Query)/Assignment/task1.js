$(document).ready(function(){
    $("#buttonAdd").click(function(){
        console.log($("#input").val())
        let input=$("#input").val()
        $("#list").append("<li>" +input+ "</li>")
        console.log($("#input").val(''))
        
    })
})
$('#list').on('dblclick', 'li', function() {
    $(this).remove(); // Remove the double-clicked list item
  });