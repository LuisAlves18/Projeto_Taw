
var form = document.getElementById('LoginForm');
var email = document.getElementById('InputEmail2');
var pass = document.getElementById('exampleInputPassword2');
let check = false;



form.addEventListener('submit', function(e) {
    // alerta o valor do email
  
    alert(email.value);
    alert(pass.value);
    
     	if (email.value == "Tiago" || email.value == "Luis" || email.value == "Leandro")
     	{
     		alert("entrou no mail");
     		if (email.value == "Tiago")
     		{
     			if(pass.value == "Santos")
     			{
     				alert("Login efetuado com sucesso.");
     				window.location.href = "socio.html";
     				check = true;
     			}
     		}
     		else if (email.value == "Luis")
     		{
     			if(pass.value == "Alves")
     			{
     				alert("Login efetuado com sucesso.");
     				window.location.href = "socio.html";
     				check = true;
     			}
     		}
     		else if (email.value == "Leandro") 
     		{
     			if(pass.value == "Madeira")
     			{
     				alert("Login efetuado com sucesso.");
     				window.location.href = "socio.html";
     				check = true;
     			}
     		}

     	}
     	else
     	{
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

