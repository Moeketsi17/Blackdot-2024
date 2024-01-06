//  toggle navlinks
 let burger = document.querySelector(".burger")
let navLinks = document.querySelector(".navlinks")

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})





gsap.registerPlugin(ScollTrigger)

const myText = new SplitType(".hero-text")

gsap.to('.char', {
    y: 100,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})





