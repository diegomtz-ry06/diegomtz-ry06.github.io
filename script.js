// --- Smooth scrolling para los enlaces del menú ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// --- Animación de "fade-in" al hacer scroll (Intersection Observer) ---
// Esta es una API moderna mucho más eficiente que escuchar el evento 'scroll'
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    root: null, // Observa en relación al viewport
    threshold: 0.1 // Se dispara cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // si el elemento está en el viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Dejar de observar el elemento una vez que ya se mostró
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cada elemento
revealElements.forEach(el => {
    observer.observe(el);
});