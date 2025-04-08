document.addEventListener('DOMContentLoaded', () => {
    const imgContainers = document.querySelectorAll('.img-container');

    imgContainers.forEach((imgContainer) => {
        const images = imgContainer.querySelectorAll('.carousel-image');
        const leftArrow = imgContainer.querySelector('.left-arrow');
        const rightArrow = imgContainer.querySelector('.right-arrow');
        let currentIndex = 0;

        const updateCarousel = () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        };

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        updateCarousel(); // Initialize the carousel
    });

    const textos = [
        "Bienvenido a Patografía 3D",
        "Soluciones rápidas y efectivas",
        "Trabajos personalizados",
        "Desde San Salvador de Jujuy",
        "Diseños únicos para cada cliente",
        "Contáctanos para tu idea"
    ];

    let index = 0;
    const textElement = document.getElementById("text");

    function cambiarTexto() {
        // Cambiar el texto
        textElement.textContent = textos[index];

        // Incrementar el índice y reiniciarlo si llega al final
        index = (index + 1) % textos.length;
    }

    // Cambiar el texto cada 3 segundos (sincronizado con la animación CSS)
    cambiarTexto(); // Mostrar el primer texto inmediatamente
    setInterval(cambiarTexto, 3000);
});
