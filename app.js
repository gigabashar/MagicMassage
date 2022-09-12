const questions = document.querySelectorAll(".question");
const seeAll = document.querySelector(".see-all");

questions.forEach(function (question) {
  question.addEventListener("click", function (event) {
    question.classList.toggle("question-active");
    event.currentTarget.parentElement.classList.toggle("show-answer");
  });
});

seeAll.addEventListener("click", function () {
  questions.forEach(function (question) {
    question.classList.add("question-active");
    question.parentElement.classList.add("show-answer");
  });
});

const reviewCardsCont = document.querySelector(".costumer-review-cards");
const circles = document.querySelectorAll(".circle");
const reviewCards = document.querySelectorAll(".costumer-review-card");
const cardWidth = 260;

function clearActiveCircles() {
  circles.forEach((circle) => circle.classList.remove("active"));
}

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    clearActiveCircles();

    circle.classList.add("active");

    reviewCardsCont.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  });
});

reviewCardsCont.addEventListener("scroll", () => {
  let nthCircle = Math.floor(reviewCardsCont.scrollLeft / cardWidth);

  if (nthCircle >= circles.length) return;

  clearActiveCircles();

  circles[nthCircle].classList.add("active");
});
