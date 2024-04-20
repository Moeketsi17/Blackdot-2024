//  toggle navlinks
let burger = document.querySelector(".burger")
let navLinks = document.querySelector(".navlinks")

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
});



// GSAP animattions
gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.text-slide').forEach(textSlide => {
      gsap.from(textSlide, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textSlide,
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        }
      });
    });










