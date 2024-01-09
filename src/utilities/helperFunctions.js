//------------------------------------------------------- Form Helpers -----------N

export const valueIsZeroOrBlank = (inputValue) => {
  //if amount is not a number greater than or less than zero, return true (i.e. blank values also return true)
  return !(inputValue < 0 || inputValue > 0);
};

export const removeUnnecessaryZeros = (inputString) => {
  // Pattern to remove extra zeros preceding integers (non floating points):  /^0+(\d+)$/
  //The above pattern returns the actual integer number value minus the preceding zero's. The relevant part of the value is captured in the capturedIntegers functionParam using a regex capture group. The capture group is the part of the expression surrounded by parentheses "(\d+)"

  // Pattern to remove unnecessary preceding zeros (in case of a floating point value, more than one zero):  /^0(\d+\.\d*)$/
  //The above pattern returns all numbers following the decimal point. The relevant part of the value is captured in the capturedDecimals functionParam using a regex capture group. The capture group is the part of the expression surrounded by parentheses "(\d+\.\d*)"

  // const matchExtraZerosBeforeDecimalValues = /^00+(\.\d*)$/;
  const myCustomRegex = /^0+(\d+)$|^0(\d+\.\d*)$/;

  const replacer = (match, capturedIntegers, capturedFloatingPoints) => {    
    console.log("capturedIntegers: ", capturedIntegers);
    console.log("capturedFloatingPoints: ", capturedFloatingPoints);

    if(capturedIntegers){
      return capturedIntegers;
    } else if (capturedFloatingPoints){
      return capturedFloatingPoints
    } else {
      return ""
    }

  };

  return inputString.replace(myCustomRegex, replacer);
};

export const handleInputPopUpMessage = (
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

//------------------------------------------------------- Other Helpers -----------N

export const closeOnExternalClick = (event, elementRef, setIsOpenState) => {
  if (elementRef.current && !elementRef.current.contains(event.target)) {
    setIsOpenState(false);
  }
};
