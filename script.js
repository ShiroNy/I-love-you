function openBox(element) {
    // Fecha outras caixas abertas
    const openBoxes = document.querySelectorAll('.box.open');
    openBoxes.forEach((box) => {
        box.classList.remove('open');
    });

    // Adiciona a classe 'open' para abrir a caixa
    element.classList.add('open');

    // Ajusta a grade para afastar as caixas não abertas
    const grid = document.querySelector('.grid');
    grid.classList.add('open');

    // Mostra a mensagem da caixa
    const message = element.getAttribute('data-message');
    const messageElement = element.querySelector('.message');
    messageElement.textContent = message; // Insere a mensagem na página
}
