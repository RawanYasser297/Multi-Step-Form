import { finishing } from "./finishing";
import { allValid} from "./form-valid";
import { swap } from "./swiper";
import { getUserInfo } from "./userInfo";

export let n = 0;

const next = document.querySelector(".form__btns__next");
const back = document.querySelector(".form__btns__back");
const confirm = document.querySelector(".form__btns__confirm");
const sections = document.querySelectorAll(
  ".main__section > .sections-wrapper > section"
);
const swapperAndBtnsContainer =document.querySelector('.swapperAndBtnsContainer')
const steps = document.querySelectorAll(".steps .step");
const confirmation = document.querySelector(".confirmation-container");
const mainSection = document.querySelector(".main__section");
const btnNext = document.querySelector(".form__btns__next");
const btnBack = document.querySelector(".form__btns__back");
const btnConfirm = document.querySelector(".form__btns__confirm");

function updateSidebarSteps(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

function handleConfirmationDisplay(index) {
  if (confirmation && mainSection) {
    if (index > 3) {
      confirmation.style.display = "flex";
     swapperAndBtnsContainer.style.display = "none";
     
    } else {
      confirmation.style.display = "none";
      swapperAndBtnsContainer.style.display = "";
      
    }
  }
}

function updateButtons(index) {
  if (btnBack) btnBack.style.display = index > 0 && index < 4 ? "block" : "";
  if (btnNext) btnNext.style.display = index < 3 ? "" : "none";
  if (btnConfirm) btnConfirm.style.display = index === 3 ? "block" : "none";
}

function moveSectionsWrapper(index) {
  swap(index)
  updateSidebarSteps(index);
  updateButtons(index);
  handleConfirmationDisplay(index);
  index === 3 && finishing();
}

const nextBtnListener = () => {
  if (n < sections.length - 1) {
    n++;
    moveSectionsWrapper(n);
  } else {
    n++;
    moveSectionsWrapper(n);
  }
};

const isUserDateValid = () => {
  if (n === 0) {
    getUserInfo();
    allValid && nextBtnListener();
  } else if (n > 0) {
    nextBtnListener();
  }
};
export const btnsListener = () => {
  next.addEventListener("click", isUserDateValid);

  if (back)
    back.addEventListener("click", () => {
      if (n > 0) {
        n--;
        moveSectionsWrapper(n);
      }
    });
  if (confirm)
    confirm.addEventListener("click", () => {
      n = 4;
      moveSectionsWrapper(n);
    });
};
