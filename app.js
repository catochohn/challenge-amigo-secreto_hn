let amigos = [];

// ===============================
// Función para mostrar mensajes
// ===============================
function mostrarMensaje(texto, tipo = "error") {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto;

    // Resetear clases
    mensaje.className = "mensaje";

    if (tipo === "error") {
        mensaje.classList.add("error");
    } else if (tipo === "exito") {
        mensaje.classList.add("exito");
    }

    // Mostrar mensaje con fade-in
    mensaje.classList.add("visible");

    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
        mensaje.classList.remove("visible");
        // limpiar texto al finalizar fade-out
        setTimeout(() => {
            mensaje.textContent = "";
        }, 500);
    }, 3000);
}

// ===============================
// Agregar un amigo a la lista
// ===============================
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar entrada vacía
    if (nombreAmigo === '') {
        mostrarMensaje("⚠️ Por favor, inserte un nombre.", "error");
        return;
    }

    // Normalizar para evitar duplicados
    const nombreNormalizado = nombreAmigo.toLowerCase();
    const existe = amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado);

    if (existe) {
        mostrarMensaje(`⚠️ El nombre "${nombreAmigo}" ya está en la lista.`, "error");
        inputAmigo.value = '';
        return;
    }

    // Agregar amigo
    amigos.push(nombreAmigo);
    actualizarListaAmigos();

    // Mostrar mensaje de éxito
    mostrarMensaje(`✅ Se agregó "${nombreAmigo}" a la lista.`, "exito");

    // Limpiar input
    inputAmigo.value = '';
    document.getElementById('resultado').innerHTML = '';
}

// ===============================
// Actualizar lista visual
// ===============================
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// ===============================
// Sortear amigo
// ===============================
function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje("⚠️ No hay amigos en la lista.", "error");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;

    mostrarMensaje("", ""); // limpiar cualquier mensaje previo
    limpiarLista();
}

// ===============================
// Limpiar lista
// ===============================
function limpiarLista() {
    amigos = [];
    actualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

// ===============================
// Permitir agregar con Enter
// ===============================
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});
