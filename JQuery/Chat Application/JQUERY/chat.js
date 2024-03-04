$(document).ready(function () {
    let empty = []
    $("#signup").click(function () {
        let email = $("#emailid").val()
        let pass = $("#password").val()
        let confirm = $("#confirm").val()
        if (email !== "" && pass !== "" && pass === confirm) {
            let data = {
                email: email,
                password: pass,
                confirm: confirm
            }
            empty.push(data)
            console.log(empty)
        }
        else {
            alert("Details doesn't match")
        }
    })
    $("#loginButton").click(function (event) {
        event.preventDefault()
        let input = $("#floatingInput").val()
        let passLogin = $("#floatingPassword").val()
        for (i = 0; i < empty.length; i++) {
            if (empty[i].email === input && empty[i].password === passLogin) {
                $("#chatapp").css("display", "none")
                $("#page2").css("display", "block")
            }
        }
    })
    function sendMessage(message) {
        $("#section").append('<i class="fa-solid icons fa-user" ></i><div class="main"> <p id="text"> ' + message + ' </p></div> <br></br>')
        // $("#section").append('<span id="text"> ' +message+ ' </span> <br></br>')
        $("#msgbox").val('')
    }
    $("#icon").click(function () {
        let message = $("#msgbox").val()
        if (message !== " ") {
            sendMessage(message)
        }
    })
})