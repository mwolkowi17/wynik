var Iwona = [];
var Marcin = [];
var Lucja = [];
var Franek = [];
var a = document.getElementById("klik1");
var b = document.getElementById("klik2");
var c = document.getElementById("klik3");
var d = document.getElementById("klik4");
var z = document.getElementById("probaf");

var wyniki;
var zb = document.getElementById("probai");

function klik1() {
    wyniki = document.getElementById("iwona").value;
    zb.innerHTML = "Iwona: " + wyniki;
    return Iwona.push(parseInt(wyniki));
}

var wynikm;
var zc = document.getElementById("probam");

function klik2() {
    wynikm = document.getElementById("marcin").value;
    zc.innerHTML = "Marcin: " + wynikm;
    return Marcin.push(parseInt(wynikm));
}

var wynikl;
var zd = document.getElementById("probal");

function klik3() {
    wynikl = document.getElementById("lucja").value;
    zd.innerHTML = "Łucja: " + wynikl;
    return Lucja.push(parseInt(wynikl));
}

var wynikf;

function klik4() {
    wynikf = document.getElementById("franek").value;
    z.innerHTML = "Franek: " + wynikf;
    return Franek.push(parseInt(wynikf));
}

a.onclick = klik1;
b.onclick = klik2;
c.onclick = klik3;
d.onclick = klik4;

var sumai;
var sumam;
var sumal;
var sumaf;

function podsumowanie() {
    sumai = _.reduce(Iwona, function (memo, num) {
        return memo + num;
    }, 0);
    sumam = _.reduce(Marcin, function (memo, num) {
        return memo + num;
    }, 0);
    sumal = _.reduce(Lucja, function (memo, num) {
        return memo + num;
    }, 0);
    sumaf = _.reduce(Franek, function (memo, num) {
        return memo + num;
    }, 0);
    alert("Iwona: " + sumai + " Marcin: " + sumam + " Lucja: " + sumal + " Franek: " + sumaf);
    w=Iwona.toString();
    x=Marcin.toString();
    y=Lucja.toString();
    z=Franek.toString();
    tab.innerHTML="Iwona: "+w+"<br> Marcin: "+x+"<br> Łucja: "+y+"<br> Franek: "+z;
localStorage.setItem('Iwona', sumai);
localStorage.setItem('Marcin', sumam);
localStorage.setItem('Łucja', sumal);
localStorage.setItem('Franek', sumaf);
}
var e = document.getElementById("sumowanie");
e.onclick = podsumowanie;

var tab = document.getElementById("tabelka");



function tabelai() {
    console.log("Iwona: ");
    for (let i = 0; i < Iwona.length; i++) {
        console.log(Iwona[i]);
    }
    console.log("Marcin: ");
    for (let i = 0; i < Marcin.length; i++) {
        console.log(Marcin[i]);
    }
    console.log("Łucja: ");
    for (let i = 0; i < Lucja.length; i++) {
        console.log(Lucja[i]);
    }
    console.log("Franek: ")
    for (let i = 0; i < Franek.length; i++) {
        console.log(Franek[i]);
    }
}
var w;
var x;
var y;
var z;

function tabelaw() {
    w=Iwona.toString();
    x=Marcin.toString();
    y=Lucja.toString();
    z=Franek.toString();
    tab.innerHTML="Iwona:"+w+"<br> Marcin:"+x+"<br> Łucja:"+y+"<br> Franek"+z;
}

