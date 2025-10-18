const addons = document.querySelectorAll(".addon");

export let selectedAddons = {};

const addonsPrices={
   'Online service': 1,
   'Larger storage':2,
   'Customizable profile':2
}

export const addonsListener = () => {
  addons.forEach((addon, index) => {
    addon.addEventListener("click", () => {
      const addonTitle = addon.querySelector(".addon__name").textContent.trim();
      const checkbox = addon.querySelector('input[type="checkbox"]');

      // Toggle state
      checkbox.checked = !checkbox.checked;
      addon.classList.toggle("selected", checkbox.checked);
      console.log(addonTitle)
      if (checkbox.checked) {
        // Add or update the entry
        selectedAddons[index] = { title: addonTitle, price:addonsPrices[addonTitle] };
      } else {
        // Remove it
        delete selectedAddons[index];
      }

      console.log(selectedAddons);
    });
  });
};
