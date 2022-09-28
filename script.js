submitBtn = document.getElementById("submitBtn")

submitBtn.onclick = sendMail

function sendMail() {
    name = document.getElementById("nameTextbox").value 
    email = document.getElementById("emailTextbox").value 
    if(validateEmail(email) != true) {
        document.getElementById("emailTextbox").value = ""
        return
    }
    message = document.getElementById("messageTextbox").value 

    /*Email.send({
        Host: "smtp.outlook.com",
        Username: "ariactech@gmail.com",
        Password: "ariac123",
        To: 'ariactech@gmail.com',
        From: "ariactech.com",
        Subject: "New Message From PortFolio",
        Body: `${name}\n${email}\n${message}`,
    })

    .then(function (message) {
          alert("mail sent successfully")
    });*

    /*var result ="<?php php_func(); ?>"
    document.write(result);*/
}

function validateEmail(email)  {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}