function openBox(element) {
    // Verifica se a caixa já está aberta
    if (!element.classList.contains('open')) {
        // Adiciona a classe 'open' para abrir a caixa
        element.classList.add('open');

        // Mostra a mensagem da caixa
        const message = element.getAttribute('data-message');
        setTimeout(() => {
            alert(message); // Exibe a mensagem como um alerta
        }, 500); // Aguarda meio segundo para a animação
    }
}
