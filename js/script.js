document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.item');
  
    carousels.forEach(item => {
      const images = item.querySelectorAll('.carousel-image');
      const leftArrow = item.querySelector('.left-arrow');
      const rightArrow = item.querySelector('.right-arrow');
  
      if (!images.length || !leftArrow || !rightArrow) return;
  
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
