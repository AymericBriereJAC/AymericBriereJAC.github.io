document.addEventListener("DOMContentLoaded", function() {
    // Add fade-in animation to section content
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
    });

    const fadeInOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });
});
