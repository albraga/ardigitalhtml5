var objetos = new Array();

function Objeto(orgao, logradouro, bairro, localidade, cep, pib, serie, identificador) {
	this.orgao = orgao;
	this.logradouro = logradouro;
	this.bairro = bairro;
	this.localidade = localidade;
	this.cep = cep;
	this.pib = pib;
	this.serie = serie;
        this.identificador = identificador;
}

function fillObjetos() {
    var tAreaUnidades = document.getElementById("tAreaUnidades");
    var tmp = tAreaUnidades.value.split(",");
    var c = 0;
    for (var x = 0; x < (tmp.length/8); x++) {
        objetos.push(new Objeto(tmp[c], tmp[c + 1], tmp[c + 2], tmp[c + 3], tmp[c + 4], tmp[c + 5], tmp[c + 6], tmp[c + 7]));
        c += 8;
    }  
}

function showTermo() {
    var cbox = document.querySelector("#cBoxTermo");
    if(cbox.checked) {
    document.getElementById("termo").style.visibility="visible";
} else {
    document.getElementById("termo").style.visibility="hidden";
}
}
function carregar() {
    fillObjetos();
    fillSelect();
}

function init() {
    window.location.assign('#openModal');
    hoje();
}

function fillSelect() {
    var x = document.getElementById("series");
    for (var i = 0; i < objetos.length; i++) {
        var option = document.createElement("option");
        option.text = objetos[i].serie;
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
    document.getElementsByClassName("orgao")[0].innerHTML = objetos[x].orgao;
    document.getElementsByClassName("orgao")[1].innerHTML = objetos[x].orgao;
    document.getElementsByClassName("logradouro")[0].innerHTML = objetos[x].logradouro;
    document.getElementsByClassName("logradouro")[1].innerHTML = objetos[x].logradouro;
    document.getElementsByClassName("bairro")[0].innerHTML = objetos[x].bairro;
    document.getElementsByClassName("bairro")[1].innerHTML = objetos[x].bairro;
    document.getElementsByClassName("localidade")[0].innerHTML = objetos[x].localidade;
    document.getElementsByClassName("localidade")[1].innerHTML = objetos[x].localidade;
    document.getElementsByClassName("cep")[0].innerHTML = objetos[x].cep;
    document.getElementsByClassName("cep")[1].innerHTML = objetos[x].cep;
    document.getElementById("pib").innerHTML = objetos[x].pib;
    document.getElementById("serie").innerHTML = objetos[x].serie;
    document.getElementById("divCodBarras").innerHTML = objetos[x].identificador;
    if (sessionStorage.unis) {
        sessionStorage.unis += "Item " + sessionStorage.count++ + " - PIB:" + objetos[x].pib + " - Série:" + objetos[x].serie + "\u2008" + objetos[x].orgao + "\u2008" + "(" + objetos[x].cep + ")" + "\n";
    } else {
        sessionStorage.count = 1;
        sessionStorage.unis += "Item " + sessionStorage.count++ + " - PIB:" + objetos[x].pib + " - Série:" + objetos[x].serie + "\u2008" + objetos[x].orgao + "\u2008" + "(" + objetos[x].cep + ")" + "\n";
    }
    document.getElementById("objeto").innerHTML = document.getElementById("obj").value;
    document.getElementById("contrat").innerHTML = document.getElementById("contra").value;
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

