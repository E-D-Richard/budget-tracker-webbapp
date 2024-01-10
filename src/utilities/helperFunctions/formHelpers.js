
//--------------------------------------------------------------------------------- Formatting -----------


export const reformatInputValueForCustomNumberInputElement = (e) => {
  const newAmountStr = e.currentTarget.value;

  // Remove non-numeric characters, except for decimal points and a minus symbols at the beginning
  const cleanedValue = newAmountStr.replace(/[^-\d.]/g, "");
  let decimalCounter = 0;

  const filterFunction = (char, index) => {
    let keepChar = true;
    if (char === "-" && index !== 0) {
      //discard all minus symbols unless they appear at the beginning of the value
      keepChar = false;
    }
    if (char === ".") {
      //there should only be one decimal value. Any additional attempts to add decimal points should be filtered out
      decimalCounter++;
      if (decimalCounter > 1) {
        return false;
      }
    }
    return keepChar;
  };
  const reformattedValue = cleanedValue
    .split("")
    .filter(filterFunction)
    .join("");

  removePopUpOnNumericalValue(e.currentTarget, reformattedValue);
  return {
    valueIsZeroOrBlank: valueIsZeroOrBlank(reformattedValue),
    reformattedValue: reformattedValue,
  };
};


export const removeUnnecessaryZeros = (inputString) => {
  // Pattern to remove extra zeros preceding integers (non floating points):  /^0+(\d+)$/
  //The above pattern returns the actual integer number value minus the preceding zero's. The relevant part of the value is captured in the capturedIntegers functionParam using a regex capture group. The capture group is the part of the expression surrounded by parentheses "(\d+)"

  // Pattern to remove unnecessary preceding zeros (in case of a floating point value, more than one zero):  /^0(\d+\.\d*)$/
  //The above pattern returns all numbers following the decimal point. The relevant part of the value is captured in the capturedDecimals functionParam using a regex capture group. The capture group is the part of the expression surrounded by parentheses "(\d+\.\d*)"

  const myCustomRegex = /^0+(\d+)$|^0(\d+\.\d*)$/;

  const replacer = (match, capturedIntegers, capturedFloatingPoints) => {
    console.log("capturedIntegers: ", capturedIntegers);
    console.log("capturedFloatingPoints: ", capturedFloatingPoints);
    if (capturedIntegers) {
      return capturedIntegers;
    } else if (capturedFloatingPoints) {
      return capturedFloatingPoints;
    } else {
      return "";
    }
  };
  return inputString.replace(myCustomRegex, replacer);
};




//------------------------------------------------------------------------- PopUps -----------

export const handleAddCategoryInputPopUpMessage = (
  categories,
  domInputElement,
  newValue
) => {
  //returns true if currentInput is a duplicate. Else, returns false.
  //This boolean value is used to set an isDuplicate duplicate state inside the function component in use.
  const duplicateFound = categories.includes(newValue);
  const trimmedDuplicateFound = categories.includes(newValue.trim());
  if (duplicateFound) {
    domInputElement.setCustomValidity("duplicate");
    domInputElement.reportValidity();
    return true;
  } else if (trimmedDuplicateFound) {
    domInputElement.setCustomValidity("");
    domInputElement.reportValidity();
    return true;
  } else {
    domInputElement.setCustomValidity("");
    domInputElement.reportValidity();
    return false;
  }
};

export const createPopUpOnZeroValueInput = (domInputElement, inputValue) => {
  if (valueIsZeroOrBlank(inputValue)) {
    domInputElement.setCustomValidity("empty");
    domInputElement.reportValidity();
  } else {
    domInputElement.setCustomValidity("");
    domInputElement.reportValidity();
  }
};

const removePopUpOnNumericalValue = (domInputElement, inputValue) => {
  if (!valueIsZeroOrBlank(inputValue)) {
    domInputElement.setCustomValidity("");
    domInputElement.reportValidity();
  }
};



//------------------------------------------------------------------------- helping the helpers -----------


export const valueIsZeroOrBlank = (inputValue) => {
    //if amount is not a number greater than or less than zero, return true (i.e. blank values also return true)
    return !(Number(inputValue) < 0 || Number(inputValue) > 0);
  };
  