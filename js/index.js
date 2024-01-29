const am = document.getElementsByTagName("a");
const as = Array.from(am);
let active = false;
function setActive(i) {
  as[i].classList.add("active");
}
function removeActive(i) {
  if (i != active) as[i].classList.remove("active");
}
function changeStatus(i) {
  active = i;
  for (let x = 0; x < 4; x++) removeActive(x);

  setActive(i);
}

as.forEach((indicator, index) => {
  indicator.addEventListener("pointerover", function () {
    setActive(index);
  });
  indicator.addEventListener("pointerout", function () {
    removeActive(index);
  });
  indicator.addEventListener("click", function () {
    changeStatus(index);
  });
});
