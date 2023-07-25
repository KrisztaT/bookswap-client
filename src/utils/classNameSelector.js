
export const classNameSelector = (availability) => {
   
    if (availability === "available") {
      return "card-available";
    } else if ((availability === "borrowed")){
      return "card-borrowed";
    }else {
      return "";
    }
  };

  export const classNameSelectorRow = (availability) => {
   
    if (availability === "available") {
      return "second-row-available";
    } else if ((availability === "borrowed")){
      return "second-row-borrowed";
    }else {
      return "";
    }
  };