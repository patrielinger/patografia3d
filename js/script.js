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
});