
function init() {
    window.location.assign('#openModal');
    feelSelect();
    hoje();
}

function feelSelect() {
    var x = document.getElementById("orgaos");
    for (var i = 0; i < unidades.length; i++) {
        var option = document.createElement("option");
        option.text = unidades[i].orgao;
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
}

function feel() {
    var x = document.getElementById("orgaos").selectedIndex;
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
    window.location.assign('#close');
}

function hoje() {
    var x = document.getElementById("hoje");
    var h = new Date();
    x.innerHTML = h.getDate() + "/" + (h.getMonth()+1) + "/" + h.getUTCFullYear();
}