const elems = document.querySelectorAll(".elem");
const section2 = document.querySelector("#section2")
elems.forEach((elem) => {
elem.addEventListener('mouseenter',()=>{
    var bgimg= elem.getAttribute('data-img')
    section2.style.backgroundImage = `url(${bgimg})`

})
});
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
