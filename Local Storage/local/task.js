$(document).ready(function(){
    
    // let arr =[]
    $("#addButton").click(function(){
        let input =$("#text").val()
        let itemArray=localStorage.getItem("item")?
        JSON.parse(localStorage.getItem("item")): [];
        itemArray.push(input)
        localStorage.setItem("item",JSON.stringify(itemArray))
        // let get=JSON.parse(localStorage.getItem("item"))
        // console.log(get)
       displays()
            // arr.push(input)
            $("#text").val("")
        
        // localStorage.setItem('array',JSON.stringify(arr))
})

function displays(){
    let list = $("#ul")
    list.empty() 
    let getlist=JSON.parse(localStorage.getItem("item"))
    for(i=0;i<getlist.length;i++){
    const li=$('<li>'+getlist[i]+"</li>")  
    list.append(li)
    }
}
$("#clearButton").click(function(){
    // localStorage.removeItem("item")
    $("#ul").remove()


})

})