import { selectedAddons } from "./addons";
import { userPlan } from "./plans";
const container = document.querySelector(".user-plan");

const totalCost = () => {
  const addons = Object.values(selectedAddons);

  if (!addons.length) return userPlan.price;

  const addonsTotal = addons.reduce((sum, addon) => sum + addon.price, 0);
  return userPlan.price + addonsTotal;
};


export const finishing = () => {
  let addons = Object.values(selectedAddons)
    .map(
      (addon) => `<div class="summary__addon">
                                <span>${addon.title}</span>
                                <span>+$${addon.price}/mo</span>
                            </div>`
    )
    .join("");
  let content = `
  <div class="summary__box">
                        <div class="summary__plan">
                            <div>
                                <h3 class="summary__plan-name">${
                                  userPlan.plan
                                } (${userPlan.type})</h3>
                                <a href="#" class="summary__change">Change</a>
                            </div>
                            <span class="summary__price">$${userPlan.price}/${
    userPlan.plan === "monthly" ? "mo" : "yr"
  }</span>
                        </div>

                        <div class="summary__addons">
                        
                        </div>
                    </div>

                    <div class="summary__total">
                        <span class="summary__total-period">Total (per ${
                          userPlan.price
                        }/${
    userPlan.plan === "monthly" ? "monthly" : "yearly"
  })</span>
                        <span class="summary__total-price">+${totalCost()}/${
    userPlan.plan === "monthly" ? "mo" : "yr"
  }</span>
                    </div>
  `;
  container.innerHTML = content;
  const summaryAddons = document.querySelector(".summary__addons");
  summaryAddons.innerHTML = addons;
  console.log("total" + totalCost);
};
