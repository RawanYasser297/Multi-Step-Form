const prices = document.querySelectorAll(".price");
const yearlyOffer = document.querySelectorAll(".price--yearly");
const checkbox = document.querySelector("#billingSwitch");
const plans = document.querySelectorAll(".plan");

const monthlyPrice = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};
const yearlyPrice = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

export let userPlan = {
    type:'monthly',
    plan:'Arcade',
    price:9,
}

const offer = ["2 months free", "2 months free", "2 months free"];

const planType = (type) => {
  if (type === "yearly") {
    prices.forEach((price) => {
      if (price.classList.contains("arcade-price")) {
        price.textContent = `$${yearlyPrice.arcade}/yr`;
      } else if (price.classList.contains("advanced-price")) {
        price.textContent = `$${yearlyPrice.advanced}/yr`;
      } else if (price.classList.contains("pro-price")) {
        price.textContent = `$${yearlyPrice.pro}/yr`;
      }
    });
  } else {
    prices.forEach((price) => {
      if (price.classList.contains("arcade-price")) {
        price.textContent = `$${monthlyPrice.arcade}/mo`;
      } else if (price.classList.contains("advanced-price")) {
        price.textContent = `$${monthlyPrice.advanced}/mo`;
      } else if (price.classList.contains("pro-price")) {
        price.textContent = `$${monthlyPrice.pro}/mo`;
      }
    });
  }
};

const offerDisplay = (type) => {
  if (type === "yearly") {
    yearlyOffer.forEach((offerText, index) => {
      offerText.textContent = offer[index];
      offerText.style.display = "block";
    });
  } else {
    yearlyOffer.forEach((offerText) => {
      offerText.style.display = "none";
    });
  }
};
export const toggleListener = () => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked === true) {
      planType("yearly");
      offerDisplay("yearly");
        userPlan.type="yearly"
    } else {
      planType("monthly");
      offerDisplay("monthly");
    }
  });
};

export const choosePlan=()=>{
    plans.forEach((plan,index) => {
      plan.addEventListener("click", () => {
        plans.forEach((p) => p.classList.remove("active"));
        plan.classList.add("active");
        if (index === 0) {
            userPlan.plan="Arcade"
            userPlan.price= userPlan.type==="yearly"?yearlyPrice.arcade:monthlyPrice.arcade
        } else if (index === 1) {
            userPlan.plan="Advanced"
            userPlan.price= userPlan.type==="yearly"?yearlyPrice.advanced:monthlyPrice.advanced
        } else if (index === 2) {
            userPlan.plan="Pro"
            userPlan.price= userPlan.type==="yearly"?yearlyPrice.pro:monthlyPrice.pro
        }

        console.log(userPlan);

      });
})}


