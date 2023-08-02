// function to select the appropriate CSS class for a card based on its availability.
export const classNameSelector = (availability) => {
  if (availability === "available") {
    // if the card is available, return the class card-available.
    return "card-available";
  } else if (availability === "borrowed") {
    // if the card is borrowed, return the class card-borrowed.
    return "card-borrowed";
  } else {
    // if the availability is neither available nor borrowed, return an empty string.
    return "";
  }
};

// function to select the appropriate CSS class for the second row of a card based on its availability.
export const classNameSelectorRow = (availability) => {
  if (availability === "available") {
    // if the card is available, return the class second-row-available.
    return "second-row-available";
  } else if (availability === "borrowed") {
    // if the card is borrowed, return the class second-row-borrowed.
    return "second-row-borrowed";
  } else {
    // if the availability is neither available nor borrowed, return an empty string.
    return "";
  }
};
