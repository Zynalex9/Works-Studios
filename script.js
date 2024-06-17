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
var tl = gsap.timeline()
tl.to("#loader .yellow-section",{
  y:"-100%",
  duration:0.3,
  delay:0.3
})
tl.to("#loader video",{
  y:"-100%",
  duration:0.3
})
tl.to("#loader .yellow-section1",{
  y:"-100%",
  duration:0.2,
})
setTimeout(() => {
  document.getElementById("loader").remove();
}, 1000);