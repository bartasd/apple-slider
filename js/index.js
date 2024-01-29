const am = document.getElementsByTagName("a");
const as = Array.from(am);

function setActive(i) {
  as[i].classList.add("active");
}
function removeActive(i) {
  as[i].classList.remove("active");
}
function changeStatus(i) {
  if (as[i].classList.contains("active")) removeActive(i);
  else {
    for (let x = 0; x < 4; x++) removeActive(x);
    setActive(i);
  }
}

as.forEach((indicator, index) => {
  indicator.addEventListener("onmouseover", function () {
    setActive(index);
  });
  indicator.addEventListener("onmouseout", function () {
    removeActive(index);
  });
  indicator.addEventListener("click", function () {
    changeStatus(index);
  });
});
