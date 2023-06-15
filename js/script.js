const leftScroll = document.querySelector(".left-scroll");
const rightScroll = document.querySelector(".right-scroll");
const slides = document.querySelectorAll(".slides");
const standardRoom = document.querySelector(".standard-room");

leftScroll.addEventListener( 'click', ()=>{
    alert();
slides[1].style.display="block";
slides[0].style.display="none"
// slides.classList.add("slides");
// standardRoom.classList.add('slides');

});

console.log(slides);

rightScroll.addEventListener( 'click', ()=>{
    alert();
});



