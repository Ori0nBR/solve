document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const pointers = document.querySelectorAll(".pointer");
    const slider = document.querySelector(".sliders");
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Função para atualizar a posição do carrossel
    function updateSlidePosition() {
        slider.style.transition = "margin-left 1s ease-in-out"; // Transição suave
        slider.style.marginLeft = `-${currentIndex * 100}%`; // Desloca os slides de acordo com o índice
        // Atualiza os indicadores (pointers)
        pointers.forEach((pointer, index) => {
            pointer.classList.toggle("active", index === currentIndex);
        });
    }

    // Função para mostrar o próximo slide (com transições limitadas)
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Avança para o próximo slide, voltando ao primeiro quando alcançar o último
        updateSlidePosition();
    }

    // Alterna os slides apenas 2 vezes antes de voltar ao primeiro
    let transitions = 0;
    const maxTransitions = 2; // Número de transições antes de voltar para o primeiro

    function limitedTransitions() {
        if (transitions < maxTransitions) {
            showNextSlide();
            transitions++;
        } else {
            currentIndex = 0; // Volta para o primeiro slide
            updateSlidePosition();
            transitions = 0; // Reinicia a contagem de transições
        }
    }

    // Alterna os slides a cada 5 segundos
    setInterval(limitedTransitions, 5000);

    // Adiciona evento de clique nos pointers para navegação manual
    pointers.forEach((pointer, index) => {
        pointer.addEventListener("click", () => {
            currentIndex = index;
            updateSlidePosition();
        });
    });
});