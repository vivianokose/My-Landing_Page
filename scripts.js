document.addEventListener('DOMContentLoaded', function() {
    // JavaScript code to make the landing page interactive
    // For example, you could add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

