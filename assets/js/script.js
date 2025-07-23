// Aguarda o DOM estar pronto para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", () => {

    const leftFlower = document.querySelector('.background-left');
    const rightFlower = document.querySelector('.background-right');

    // Verifica se os elementos foram encontrados antes de adicionar o evento
    if (leftFlower && rightFlower) {
        window.addEventListener('scroll', () => {
            // Pega a posição atual da rolagem vertical
            const scrollY = window.scrollY;
    
            // Aplica a rotação. Multiplique por um valor maior/menor para mudar a velocidade.
            // Um valor positivo e um negativo criam o efeito de rotação em direções opostas.
            leftFlower.style.transform = `translateY(-50%) rotate(${scrollY * 0.1}deg)`;
            rightFlower.style.transform = `translateY(-50%) rotate(${scrollY * -0.1}deg)`;
        });
    }

});