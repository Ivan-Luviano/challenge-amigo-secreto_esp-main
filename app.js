// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosList = [];

function AgregarAmigo(){
    let nombres = document.getElementById('amigo');
    let amigos = nombres.value.trim();

    if(amigos == ""){
        alert("Agrega un nombre");
        return;
    }
amigosList.push(amigos);
nombres.value = "";

amigosList();
}
function amigosList(){
let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar lista previa

    amigosList.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        ul.appendChild(li);
  });}