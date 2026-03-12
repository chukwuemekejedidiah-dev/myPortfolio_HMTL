// TYPING ANIMATION
const roles=["Software Developer","Web Developer","Programmer"];
let roleIndex=0,charIndex=0;
function type(){
  const typing=document.querySelector(".typing");
  const current=roles[roleIndex];
  typing.textContent=current.substring(0,charIndex);
  charIndex++;
  if(charIndex>current.length){charIndex=0;roleIndex=(roleIndex+1)%roles.length;}
  setTimeout(type,120);
}
type();

// MOBILE MENU TOGGLE
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
toggle.addEventListener("click",()=>{nav.classList.toggle("active");});

// SCROLL TO FUNCTIONS
function scrollToContact(){document.getElementById("contact").scrollIntoView({behavior:"smooth"});}
function scrollToProjects(){document.getElementById("projects").scrollIntoView({behavior:"smooth"});}

// SCROLL REVEAL ANIMATIONS
ScrollReveal().reveal('.section-title',{distance:'50px',duration:1200,origin:'bottom'});
ScrollReveal().reveal('.project-card',{distance:'40px',duration:1000,interval:200});
ScrollReveal().reveal('.skill',{distance:'30px',duration:800,interval:100});
ScrollReveal().reveal('.about-container',{distance:'50px',duration:1200,origin:'left'});

// PARTICLES BACKGROUND
tsParticles.load("particles",{particles:{number:{value:60},size:{value:3},move:{speed:1},opacity:{value:0.5}}});

// PROJECT CARD 3D TILT EFFECT
const cards = document.querySelectorAll(".project-card");
cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width/2;
    const centerY = rect.height/2;
    const tiltX = ((y - centerY)/centerY)*10;
    const tiltY = ((x - centerX)/centerX)*10;
    card.style.setProperty("--tiltX", `${-tiltX}deg`);
    card.style.setProperty("--tiltY", `${tiltY}deg`);
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.setProperty("--tiltX","0deg");
    card.style.setProperty("--tiltY","0deg");
  });
});