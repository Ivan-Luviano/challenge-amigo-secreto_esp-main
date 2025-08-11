// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");
const amigos = []; // <-- Array para guardar los nombres

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (amigos.length >= 3) {
        alert("Solo puedes añadir hasta 3 amigos.");
        return;
    }

    // Verificar si el nombre ya fue agregado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Guardar en el array
    amigos.push(nombre);

    // Mostrar en la lista visual
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    nuevoElemento.classList.add("nombre-item");
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar input
    inputAmigo.value = "";
    inputAmigo.focus();
}

oki