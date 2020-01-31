var check = false;
document.getElementById("submit").addEventListener("click", function(e) {
    // alerta o valor do email
    var form = document.getElementById('form');
    var email = document.getElementById('InputEmail2').value;
    var pass = document.getElementById('exampleInputPassword2').value;
    alert(email);
    alert(pass);

    if (email == "Tiago" || email == "Luis" || email == "Leandro") {
        alert("entrou no mail");
        if (email == "Tiago") {
            if (pass == "Santos") {
                alert("Login efetuado com sucesso.");
                window.location.href = "socio.html";
                check = true;

            }
        } else if (email == "Luis") {
            if (pass == "Alves") {
                alert("Login efetuado com sucesso.");
                window.location.href = "socio.html";
                check = true;

            }
        } else if (email == "Leandro") {
            if (pass == "Madeira") {
                alert("Login efetuado com sucesso.");
                window.location.href = "socio.html";
                check = true;

            }
        }

    } else {
        alert("Não tem conta!");
        window.location.href = "Partner.html";
    }



    // impede o envio do form
    e.preventDefault();

    if (Boolean(check == false) == true) {
        alert("Não tem conta!");
        window.location.href = "Partner.html";
    }


});