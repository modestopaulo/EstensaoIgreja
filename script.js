document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // Ativa quando 50% da seção estiver visível
    );
  
    observer.observe(aboutSection);
  });