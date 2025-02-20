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

});

//Carrossel de Noticias
document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide-news', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        gap: 20,
        autoplay: 5000,
        hoverpause: true,
        animationDuration: 800
        }).mount();
    });

//Carrosel Insituições Beneficiadas
document.addEventListener("DOMContentLoaded", function () {
    new Glide(".section-companies--area", {
        type: "carousel",
        autoplay: 2000, // Tempo entre cada troca de slide (em ms)
        hoverpause: false, // Não pausa o autoplay ao passar o mouse
        perView: 4, // Número de slides visíveis ao mesmo tempo
        gap: 20, // Espaçamento entre os slides
        speed: 1300, // Velocidade da transição
        focusAt: 'center', // 🔹 Mantém o slide centralizado quando há poucos itens
        breakpoints: {
            1024: { perView: 3 }, // Em telas até 1024px, exibir 3 slides
            768: { perView: 2 },  // Em telas até 768px, exibir 2 slides
            480: { perView: 1, focusAt: 'center' }  // 🔹 Em telas menores que 480px, exibir 1 slide e centralizá-lo
        }
    }).mount();
});

