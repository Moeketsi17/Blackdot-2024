//  toggle navlinks
 let burger = document.querySelector(".burger")
let navLinks = document.querySelector(".navlinks")

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
});





// GSAP
import gsap from 'gsap';


let tl = gsap.timeline();

tl.to(".hero p", {duration: 1, y: 40,})







