"use-strict";

const questions = document.querySelectorAll(".card__list--item-question");

const arrows = document.querySelectorAll(".card__list--item-arrow");

const answers = document.querySelectorAll(".card__list--item-answer-text");

const previous = [];

questions.forEach((q, index) => {
  q.addEventListener("click", () => {
    previous.push(index);
    arrows[index].classList.toggle("spin");
    answers[index].classList.toggle("show");

    if (previous.length > 1 && previous[previous.length - 2] !== index) {
      arrows[previous[previous.length - 2]].classList.remove("spin");
      answers[previous[previous.length - 2]].classList.remove("show");
    }
  });
});
