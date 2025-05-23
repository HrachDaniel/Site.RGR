document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо елементи DOM
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;

    // Ініціалізація слайдера
    function initSlider() {
        updateSliderPosition(); // Початкове розташування слайда
        updateDots();
        startAutoSlide();
    }

    // Оновлення позиції слайдера
    function updateSliderPosition() {
        slider.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }

    // Перехід до конкретного слайду
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSliderPosition();
        updateDots();
    }

    // Перехід до наступного слайду
    function nextSlide() {
        if (currentSlide === slideCount - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }

    // Перехід до попереднього слайду
    function prevSlide() {
        if (currentSlide === 0) {
            goToSlide(slideCount - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }

    // Оновлення індикаторів (крапок)
    function updateDots() {
        dots.forEach(function(dot, index) {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Запуск автоматичної зміни слайдів
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    // Скидання таймера автоматичної зміни
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Обробники подій
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoSlide();
    });

    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            var slideIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(slideIndex);
            resetAutoSlide();
        });
    });

    // Зупинка автоматичної зміни при наведенні
    slider.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });

    // Відновлення автоматичної зміни
    slider.addEventListener('mouseleave', function() {
        startAutoSlide();
    });

    // Ініціалізація слайдера
    initSlider();
});
