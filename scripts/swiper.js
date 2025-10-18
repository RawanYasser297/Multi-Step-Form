const sectionsWrapper = document.querySelector(".sections-wrapper");
// const sections = document.querySelectorAll(
//   ".main__section > .sections-wrapper > section"
// );
export const swap = (index) => {
  if (sectionsWrapper) {
    const sectionWidth =
      sectionsWrapper.querySelector("section")?.offsetWidth || 0;
    sectionsWrapper.style.transform = `translateX(-${
      index * (sectionWidth + 160)
    }px)`;
    sectionsWrapper.style.transition =
      "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  }
};
//index =>is the section number 0->3
//gap => 10rem => * 16 px => 160px
