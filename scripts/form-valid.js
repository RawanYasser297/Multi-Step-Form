export let isValid = [false, false, false];
export let allValid =false

const setError = (input, index, message) => {
  const container = input.parentElement;
  const errorMsg = container.querySelector(".error-message");
  errorMsg.textContent = message;
  input.classList.add("error");
  isValid[index] = false;
};

const clearError = (input, index) => {
  const container = input.parentElement;
  const errorMsg = container.querySelector(".error-message");
  errorMsg.textContent = "";
  input.classList.remove("error");
  isValid[index] = true;
};

export const handleValidation = (nameInput, emailInput, phoneInput) => {
  if (nameInput.value.trim() === "") {
    setError(nameInput, 0, "Title is required");
  } else clearError(nameInput, 0);

  if (emailInput.value.trim() === "") {
    setError(emailInput, 1, "Email is required");
  } else clearError(emailInput, 1);

  if (phoneInput.value.trim() === "") {
    setError(phoneInput, 2, "Phone number is required");
  } else clearError(phoneInput, 2);

   allValid = isValid.every((v) => v === true);
};
