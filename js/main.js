function soma(n1,n2){
    result = n1 + n2;
    return document.getElementById("resultado").innerHTML = "<b> Resultado da soma: </b>" + result
}

function facebook(){
    window.location.href = "https://www.facebook.com"
}

function trocar(){
    return document.getElementById("onmouseover").innerHTML = "Ta cagando"
}

function select(elemento){
    console.log(elemento.value);
}


//var nome = "lucas";
//var idade = 23;
//alert(nome.replace("lucas", "douglas") + " tem " + idade + " idade");

//var lista = ["item1", "item2", "item3"];
//lista.push("item4");
//console.log(lista.join(" - "));

/*var idade = prompt("qual sua idade?");

if (idade >= 18){
    alert("de maior");
}else {
    alert("de menor");
}

var d = new Date();
alert(d.getDay());*/

