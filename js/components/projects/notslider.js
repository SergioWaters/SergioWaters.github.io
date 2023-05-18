export const runNotSlider = () => {
  const slidesArr = document.querySelectorAll(".slide");

  function removeAllActive(arr) {
    arr.forEach((item) => item.classList.remove("active"));
  }

  function addActive(s) {
    s.classList.add("active");
  }

  function switchActive(e, slide) {
    e.stopPropagation();
    removeAllActive(slidesArr);
    addActive(slide);
  }

  slidesArr.forEach((slide) => {
    slide.addEventListener("click", (e) => switchActive(e, slide));
  });
};
