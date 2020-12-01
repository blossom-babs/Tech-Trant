const year = document.getElementById("footer__year");
const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");

const hamOne = document.getElementById("hamone");
const hamTwo = document.getElementById("hamtwo");
const hamThree = document.getElementById("hamthree");

hamburger.addEventListener("click", function () {
  links.classList.toggle("active");

  hamOne.classList.toggle("fl-active");
  hamTwo.classList.toggle("sl-active");
  hamThree.classList.toggle("tl-active");
});

const date = new Date().getFullYear();
year.innerHTML = date;
