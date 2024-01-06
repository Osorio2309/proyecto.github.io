function toggleAnswer(element) {
    // Cambia la clase "active" para el elemento clicado
    element.classList.toggle('active');

    // Obtiene el elemento de respuesta dentro del elemento clicado
    var respuestaElement = element.querySelector('.respuesta');
    
    // Obtiene el elemento de signo dentro del elemento clicado
    var plusSign = element.querySelector('.plus-sign');

    // Muestra u oculta la respuesta
    if (respuestaElement.style.display === 'block') {
        respuestaElement.style.display = 'none';
        plusSign.innerHTML = '+';
    } else {
        respuestaElement.style.display = 'block';
        plusSign.innerHTML = 'x';
    }
}
