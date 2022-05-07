function geraUsuario() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://randomuser.me/api');
    req.onload = function() {
        if (req.status == 200) {
            usuarioTxt = req.response;
            usuarioObj = JSON.parse(usuarioTxt);
            addUsrPag(usuarioObj);
        } else {
            console.log('deu algum erro de status' + req.status);
        }
    };
    req.send();
}

function addUsrPag(respObj) {
    var usr = respObj.results[0];
    var nameNode = genNodeName(usr);
    var emailNode = genNodeEmail(usr);
    var usrDiv = document.querySelector(".usr");
    usrDiv.innerHTML = "";
    usrDiv.appendChild(nameNode);
    usrDiv.appendChild(emailNode);
    console.log(usr)
}

function genNodeName(usr) {
    var usrName = document.createElement("h2");
    usrName.textContent = `${usr.name.first} ${usr.name.last}`;
    return usrName;
}

function genNodeEmail(usr) {
    var usrEmail = document.createElement("h4");
    usrEmail.textContent = `${usr.email}`;
    return usrEmail;
}
