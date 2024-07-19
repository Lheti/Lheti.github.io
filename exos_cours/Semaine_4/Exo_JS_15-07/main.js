var compteur = document.getElementById("compteur");
var bouton = document.getElementById("btn");
var bouton2 = document.getElementById("btn2");
var toggledark = document.getElementById("dark");
var nombre = 0;

bouton.addEventListener('click', ajouter);
bouton2.addEventListener('click', soustraire);
toggledark.addEventListener('click', darktheme);

function ajouter() {
    nombre = nombre + 1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == 10) {
        compteur.style.color = "red";
        compteur.style.fontSize = "50px";
    }
}

function soustraire() {
    nombre = nombre - 1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == -10) {
        compteur.style.color = "green";
        compteur.style.fontSize = "50px";
    }
}

function darktheme() {
    var element = document.getElementById("compteur");
    element.classList.toggle("styledark");
}