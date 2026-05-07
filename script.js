/* FADE-IN ANIMATION ON PAGE LOAD */
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function (el) {
        el.classList.add('animated');
    })
})
/* ACTIVE NAV LINK HIGHLIGHTER */
document.addEventListener('DOMContentLoaded', function () {
    const navlinks = document.querySelectorAll('.nav-link');
    navlinks.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    })
})
/* CONTACT FORM VALIDATION */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const errorMsg = document.getElementById('error');
        const successMsg = document.getElementById('submited');

        errorMsg.classList.add('d-none');
        successMsg.classList.remove('d-none');

        if (name === '' || email === '' || message === '') {
            errorMsg.classList.remove('d-none');
            return;
        }
        successMsg.textContent = 'THANK YOU, ' + name + '! Your message has been received.';
        successMsg.classList.remove('d-none')
        contactForm.reset();
    });
}
/*  BACK TO THE TOP BOTTON */
window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    if (btn) {
        if (window.scrolly > 300) {
            btn.style.display = 'block';
        }
        else {
            btn.style.display = 'none';
        }
    }
});
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}