const leftScroll = document.querySelectorAll(".left-scroll");
const rightScroll = document.querySelectorAll(".right-scroll");
const slides = document.querySelectorAll(".slides");
const standardRoom = document.querySelector(".standard-room");

let start = 0;
let end = slides.length - 1;
console.log(end);
let mid = Math.round((start + end - start) / 2);

slides[mid].classList.remove("slides");

leftScroll.forEach((element) => {
  element.addEventListener("click", () => {
    if (mid > start) {
      slides[mid].classList.add("slides");

      mid = mid - 1;

      slides[mid].classList.remove("slides");
      console.log(mid);
    } else if (mid === start) {
      slides[mid].classList.add("slides");
    //   slides[mid].classList.add('slider');

      mid = end;
      slides[mid].classList.remove("slides");
    } else {
      return;
    }
  });
});

console.log(slides);

rightScroll.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(mid);
    if (mid < end) {
    //   await (slides[mid].classList.add('slider'));

      slides[mid].classList.add("slides");

      mid = mid + 1;

      slides[mid].classList.remove("slides");
    //   await (slides[mid].classList.add('slider'));

      console.log(mid);
    } else if (mid === end) {
      slides[mid].classList.add("slides");
    //   slides[mid].classList.add('slider');

      mid = start;
    //   slides[mid].classList.add('slider');

      slides[mid].classList.remove("slides");
    } else {
      return;
    }
  });
});
