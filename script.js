// Приклад простого слайдера (потребує доопрацювання для кращої функціональності)
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
                // Розташовуємо слайди в ряд
                slides.forEach(function(slide, index) {
                    slide.style.transform = 'translateX(' + (index * 100) + '%)';
                });
                
                // Запускаємо автоматичну зміну слайдів
                startAutoSlide();
            }
            
            // Перехід до конкретного слайду
            function goToSlide(slideIndex) {
                slider.style.transform = 'translateX(-' + (slideIndex * 100) + '%)';
                currentSlide = slideIndex;
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
                slideInterval = setInterval(nextSlide, 6000);
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
            
            // Скидання таймера автоматичної зміни
            function resetAutoSlide() {
                clearInterval(slideInterval);
                startAutoSlide();
            }
            
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