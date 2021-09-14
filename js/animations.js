const $header = document.querySelector("header");

//Evento scroll modifico estilos en header.
let scrolling = window.addEventListener("scroll", () => {
  //Atajo la posición de window
  let position = this.scrollY;

  if (position > 50) {
    $header.style.transition = "ease .6s";
    $header.style.padding = "10px 40px";
    $header.style.boxShadow = "0px 0px 30px #222";
  } else {
    $header.style.padding = "20px 40px";
    $header.style.removeProperty = "0px 0px 0px #222";
  }
});
