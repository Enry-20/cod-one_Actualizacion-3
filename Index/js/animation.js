// COLOR-BARRA-DE-TAREAS
let nav = document.getElementById("navbar");
function scrolled() {
  let fondo = window.pageYOffset
  if (fondo > 50) {
    nav.classList.add("active0");
  }
  else {
    nav.classList.remove("active0")
  }
}
window.addEventListener("scroll", scrolled);


//SEARCH BAR
let lupa = document.getElementById("lupa");
let cuerpo = document.getElementById("carouselExampleControls")
let child = document.getElementById("uel")
let child2 = document.getElementById("car")
//SEARCH-BAR-FUNCIONES

//ACTIVE EVENTS
lupa.addEventListener("click", function input() {
  let box = document.getElementsByClassName("search-box")[0];
  //FONDO
  let background = document.createElement("div");
  background.setAttribute("class", "background");
  box.appendChild(background)
  cuerpo.style.filter = "blur(5px)"
  //INPUT
  let newInput = document.createElement("input");
  newInput.setAttribute("class", "form-control mr-sm-2");
  newInput.setAttribute("id", "input-search");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "Search");
  box.appendChild(newInput)
  //LUPA
  box.appendChild(lupa)
  lupa.classList.add("activelupa")
  //REMOVE CHILDS
  let cerrar = document.createElement("button");
  cerrar.setAttribute("class", "fas fa-window-close")
  cerrar.setAttribute("id", "close")
  cerrar.setAttribute("style", "background: none; border: none")
  box.appendChild(cerrar)

  cerrar.addEventListener("click", function closer() {

    box.removeChild(cerrar)
    box.removeChild(newInput)
    box.removeChild(background)
    lupa.classList.remove("activelupa")
    cuerpo.style.filter = "none"
  })
})

//GALLERY


//CARDS

//ANIMATIONS

anime()





// Scroll animations
// Method1
ScrollReveal().reveal("#navbar", { delay: 500 })
ScrollReveal().reveal(".carousel", { delay: 300 })
ScrollReveal().reveal(".subback", { delay: 400 })
ScrollReveal().reveal("#text-novelties", { delay: 500 })
ScrollReveal().reveal(".galery-two", { delay: 300 })
ScrollReveal().reveal("#navbar", { delay: 700 })
// Method2
Window.sr = ScrollReveal();
Window.sr.reveal(".imagen4",
  {
    duration: 800,
    origin: "left",
    distance: "300px"
  })
Window.sr.reveal("#imagen5",
  {
    duration: 1300,
    origin: "right",
    distance: "300px"
  })
Window.sr.reveal("#imagen6",
  {
    duration: 1300,
    origin: "bottom",
    distance: "300px"
  })
Window.sr.reveal(".img0",
  {
    duration: 1200,
    origin: "top",
    distance: "300px"
  })
Window.sr.reveal(".img1",
  {
    duration: 1800,
    origin: "top",
    distance: "300px"
  })
Window.sr.reveal(".img2",
  {
    duration: 1500,
    origin: "top",
    distance: "300px"
  })

// TRIES
// let enlace= document.getElementsByClassName("liga1");
// function preesme(){
//   window.location.href=""
// }
// enlace.onclick= preesme;

// let jordan= document.getElementById("imagen6")
// function JordanScrolled(){
//   let fondo= window.pageYOffset

//   if(fondo>=2000){
//   jordan.classList.add("fixed-bottom")}
//   else{nav.classList.remove("fixed-bottom")}
// }
// window.addEventListener("scroll", JordanScrolled);







// function slowdown(){
//   if( document.nav.scrollTop>80 || document.body.scrollTop>80){
//     document.getElementById("navbar2").style.background= "black"
//     document.getElementById("navbar2").style.padding= "35px"
//   }
//   else { document.getElementById("navbar2").style.background="none"
// document.getElementById("navbar2").style.padding= "0px"}
// }


