// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Limpiar el mensaje del resultado anterior al agregar un nuevo jugador
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // Iterar sobre el arreglo y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = amigos[i];
        listaAmigos.appendChild(listItem);
    }
}

// Función para sortear un amigo secreto aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, agregue al menos un nombre.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
    
    // Limpiar la lista de amigos para poder jugar de nuevo
    limpiarLista();
}

// Función para limpiar la lista de amigos después del sorteo
function limpiarLista() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Actualizar la lista visual para que aparezca vacía
    actualizarListaAmigos();
    
    // Limpiar también el campo de entrada por si acaso
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.value = '';
}