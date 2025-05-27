document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    const slideCount = slides.length;
    let slideInterval;

    function initSlider() {
        updateSliderPosition();
        updateDots();
        startAutoSlide();
    }

    function updateSliderPosition() {
        slider.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSliderPosition();
        updateDots();
    }

    function nextSlide() {
        if (currentSlide === slideCount - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide === 0) {
            goToSlide(slideCount - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }

    function updateDots() {
        dots.forEach(function(dot, index) {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

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

    slider.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });

    slider.addEventListener('mouseleave', function() {
        startAutoSlide();
    });

    initSlider();


const hamburgerBtn = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.header .menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                }
            });
        });
    }
});
