import { handleValidation} from "./form-valid";
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");

export const userInfo = {};

export const getUserInfo = () => {
  const valid = handleValidation(nameInput, emailInput, phoneInput);
  let name = nameInput.value;
  let email = emailInput.value;
  let phone = phoneInput.value;

  if (valid) {
    userInfo[email] = { name, email, phone };
  }
};
