let hoverCount = 0;
const button = document.querySelector('button');

button.addEventListener('mouseenter', function (e) {
    if (hoverCount < 4) {
        hoverCount++;
        // Gera posições aleatórias dentro da janela
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Aplica a posição ao botão
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
    // Na quinta vez, não faz nada ao passar o mouse
});

button.addEventListener('click', function () {
    if (hoverCount >= 4) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});