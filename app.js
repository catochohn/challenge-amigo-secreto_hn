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