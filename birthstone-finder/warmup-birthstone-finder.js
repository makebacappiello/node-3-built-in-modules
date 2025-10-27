/* -------------------------
💎 Birthstone Finder
----------------------------
Create a program that determines the birthstone for a month inputted by the user. 

Check the README.md file for instructions.
------------------------- */

// birthstone data object
const birthstones = {
  January: "Garnet",
  February: "Amethyst",
  March: "Aquamarine",
  April: "Diamond",
  May: "Emerald",
  June: "Pearl, Alexandrite, or Moonstone",
  July: "Ruby",
  August: "Peridot",
  September: "Sapphire",
  October: "Opal or Tourmaline",
  November: "Topaz or Citrine",
  December: "Tanzanite, Zircon, or Turquoise",
};
let month = process.argv[2];
function getBirthstone() {
  if (!birthstones[month]) {
    console.log("Invalid month. Please enter a valid month name.");
  } else {
    console.log(`The birthstone for ${month} is ${birthstones[month]}.`);
  }
}
getBirthstone();
