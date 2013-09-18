
function init() {
    window.location.assign('#openModal');
    fillSelect();
    hoje();
}

function fillSelect() {
    var x = document.getElementById("series");
    for (var i = 0; i < unidades.length; i++) {
        var option = document.createElement("option");
        option.text = unidades[i].serie;
        try
        {
            // for IE earlier than version 8
            x.add(option, x.options[null]);
        }
        catch (e)
        {
            x.add(option, null);
        }
    }
    if (sessionStorage.unis) {
        document.getElementById("tarea").value = fillTextArea();
    }
}

function fillDocument() {
    var x = document.getElementById("series").selectedIndex;
    document.getElementsByClassName("orgao")[0].innerHTML = unidades[x].orgao;
    document.getElementsByClassName("orgao")[1].innerHTML = unidades[x].orgao;
    document.getElementsByClassName("logradouro")[0].innerHTML = unidades[x].logradouro;
    document.getElementsByClassName("logradouro")[1].innerHTML = unidades[x].logradouro;
    document.getElementsByClassName("bairro")[0].innerHTML = unidades[x].bairro;
    document.getElementsByClassName("bairro")[1].innerHTML = unidades[x].bairro;
    document.getElementsByClassName("localidade")[0].innerHTML = unidades[x].localidade;
    document.getElementsByClassName("localidade")[1].innerHTML = unidades[x].localidade;
    document.getElementsByClassName("cep")[0].innerHTML = unidades[x].cep;
    document.getElementsByClassName("cep")[1].innerHTML = unidades[x].cep;
    document.getElementById("pib").innerHTML = unidades[x].pib;
    document.getElementById("serie").innerHTML = unidades[x].serie;
    if (sessionStorage.unis) {
        sessionStorage.unis += "Item " + sessionStorage.count++ + " - PIB:" + unidades[x].pib + " - Série:" + unidades[x].serie + "\u2008" + unidades[x].orgao + "\n";
    } else {
        sessionStorage.count = 1;
        sessionStorage.unis = "Item " + sessionStorage.count++ + " - PIB:" + unidades[x].pib + " - Série:" + unidades[x].serie + "\u2008" + unidades[x].orgao + "\n";
    }
    document.getElementById("tarea").value = fillTextArea();
    window.location.assign('#close');
}

function fillTextArea() {
    var lines = sessionStorage.unis.split("\n");
    var orgaos = [];
    for (var ii = 0; ii < lines.length; ii++) {
        orgaos[ii] = " pb - " + lines[ii].slice(40);
    }
    var toEmail = "\n" + orgaos.join();
    var replaced = toEmail.replace(/,/g,";");
    return sessionStorage.unis + replaced.toLowerCase();
}

function hoje() {
    var x = document.getElementById("hoje");
    var h = new Date();
    x.innerHTML = h.getDate() + "/" + (h.getMonth() + 1) + "/" + h.getUTCFullYear();
}

