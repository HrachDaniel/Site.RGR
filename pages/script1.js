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
