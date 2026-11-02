Hooks.on('renderActorSheet', (app, html, data) => {
    // Garante que só afete fichas do Daggerheart
    if (game.system.id !== "daggerheart") return;

    // Detecta se a largura da tela é de um dispositivo móvel
    if (window.innerWidth <= 800) {
        let windowElement = html.closest('.window-app');
        
        // Adiciona a classe que o CSS vai usar para sobrepor o Swipe VTT
        windowElement.addClass('dh-mobile-fullscreen');

        // Força a readequação de tamanho no momento da renderização
        app.setPosition({
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
});