function login() {
    let username = prompt("What's your username?");
    let check = false;
    var names = ["Tiago", "Luis", "Leandro", "Admin", "Miguel"];
    var email = ["tiagoserafimsousasantos@hotmail.com", "luisp.gama.alves@gmail.com", "leomadeira@gmail.com", "admin@falchionFlakes.com", "miguelcorreia@esmad.ipp.pt"];


    for (var i = 0; i < names.length; i++) {
        if (username == names[i]) {
            check = true;
            var password = ["Santos", "Alves", "Madeira", "Admin", "Correira"];

            let enter = prompt("Tell us your email!");
            if (email[i] == enter) {
                let pass = prompt("What's your password?");
                if (pass == password[i]) {
                    alert("Successfull login.");
                    window.location.href = "Partner.html";
                } else {
                    alert("Oops, wrong password.");
                    window.location.href = "index.html";
                }
            } else {
                alert("Oops, wrong password.");
                window.location.href = "index.html";
            }

        }


    }
    if (Boolean(check == false) == true) {
        alert("Oops, you can't access this area!");
        window.location.href = "index.html";
    }

}