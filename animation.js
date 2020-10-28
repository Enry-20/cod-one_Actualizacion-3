let enlace= document.getElementsByClassName("liga1");
function preesme(){
  window.location.href="https://getbootstrap.com/docs/4.5/components/collapse/"
}
enlace.onclick= preesme;

// Scroll fuctions 
let nav = document.getElementById("navbar")
function scrolled(){
  let fondo= window.pageYOffset
  
  if(fondo>770){
  nav.classList.add("active0")}
  else{nav.classList.remove("active0")}
}
window.addEventListener("scroll", scrolled)


// let jordan= document.getElementById("imagen6")
// function JordanScrolled(){
//   let fondo= window.pageYOffset
  
//   if(fondo>=2000){
//   jordan.classList.add("fixed-bottom")}
//   else{nav.classList.remove("fixed-bottom")}
// }
// window.addEventListener("scroll", JordanScrolled);
// Scroll animations

// Method1
ScrollReveal().reveal("#navbar", {delay: 500})
ScrollReveal().reveal(".carousel", {delay: 300})
ScrollReveal().reveal(".subback", {delay: 400})
ScrollReveal().reveal("#text-novelties", {delay: 500})
ScrollReveal().reveal(".galery-two", {delay: 700})


// Method2
Window.sr= ScrollReveal();
Window.sr.reveal(".imagen4", {
  duration: 800,
  origin: "left",
  distance: "300px"
})

Window.sr.reveal("#imagen5", {
  duration: 1300,
  origin: "right",
  distance: "300px"
})
Window.sr.reveal("#imagen6", {
  duration: 1300,
  origin: "bottom",
  distance: "300px"
})





// SCROLL TRIES
// Window.sr = ScrollReveal();
// sr.reveal("#navbar", {
//   duration: 2000,
//   origin: "bottom"
// });
// window.onscroll= function(){slowdown}
// // let navegation= document.getElementById("navbar")
// // let cuerpo=document.querySelectorAll("body")

// function slowdown(){
//   if( document.nav.scrollTop>80 || document.body.scrollTop>80){
//     document.getElementById("navbar2").style.background= "black"
//     document.getElementById("navbar2").style.padding= "35px"
//   }
//   else { document.getElementById("navbar2").style.background="none"
// document.getElementById("navbar2").style.padding= "0px"}
// }

