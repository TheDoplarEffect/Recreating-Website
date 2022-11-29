const buttons = document.querySelector(".twosections").querySelectorAll("p");
const cardArea = document.querySelector(".photogrid");
const nextbutts = document.querySelector(".Testy").querySelectorAll("p");

const Data = {
  prompts: [
    "grid-All",
    "grid-Trending",
    "grid-Popular",
    "grid-Features",
    "grid-Recomended",
    "grid-Tour",
  ],
  previous: [0, 0, 2],
  map_buttons: function () {
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", (event) => {
        buttons[this.previous[0]].classList.toggle("blue");
        event.currentTarget.classList.toggle("blue");
        this.previous[0] = i;
        cardArea.classList.toggle(this.prompts[this.previous[1]]);
        cardArea.classList.toggle(this.prompts[i]);
        this.previous[1] = i;
      });
    }
  },
  map_numbers: function () {
    for (let i = 0; i < nextbutts.length; i++) {
      const button = nextbutts[i];
      button.addEventListener("click", (event) => {
        nextbutts[this.previous[2]].classList.toggle("blue");
        console.log(this.previous);
        event.currentTarget.classList.toggle("blue");
        this.previous[2] = i;
        console.log(this.previous);
      });
    }
  },
};
Data.map_buttons();
Data.map_numbers();
