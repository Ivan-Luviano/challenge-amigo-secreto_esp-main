// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function agregarAmigo(){
let NuevoAmigo = document.querySelector("#amigo").value.trim();

if(NuevoAmigo == ""){
    alert("Ingrese nombre");
}else {
    if(Amigos.includes(NuevoAmigo)){
        alert("Nombre ya existente intente con otro");
    }else{
        Amigos.push(NuevoAmigo);
        ActualizarList();
        limpiarCaja();
    }
}}

function sortearAmigo(){
    nombre = Math.floor(Math.random()*Amigos.length);
    if (Amigos == ""){
        alert("no hay amigos para sortear");
    }else{
    let sorteo = document.getElementById("resultado")
    sorteo.textContent = Amigos[nombre]};
}

 function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function ActualizarList() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < Amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = Amigos[i];
        listaAmigos.appendChild(elemento);
    }
}

function reiniciarAmigo(){
    Amigos = [];
    limpiarCaja();
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").textContent = "";
    document.querySelector('#Reiniciar').setAttribute('disabled','true');
    alert("Juego reiniciado");
}
