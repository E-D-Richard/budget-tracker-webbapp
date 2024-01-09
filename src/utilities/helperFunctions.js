
//------------------------------------------------------- Form Helpers -----------N

export const valueIsZeroOrBlank = (inputValue) => {
  //if amount is not a number greater than or less than zero, return true (i.e. blank values also return true) 
  return !(inputValue < 0 || inputValue > 0);
}


export const removeUnnecessaryZeros = (inputString) => {
  
  return inputString.replace(/^0+(?:(?=\.)|(\d+))$/, (match, capturedDigits) => capturedDigits || "0");
};



export const handleInputPopUpMessage = (categories, domInputElement, newValue) => {
  //returns true if currentInput is a duplicate. Else, returns false. 
  //This boolean value is used to set an isDuplicate duplicate state inside the function component in use.
  const duplicateFound = categories.includes(newValue);
  const trimmedDuplicateFound = categories.includes(newValue.trim())
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
}


export const createPopUpOnZeroValueInput = (domInputElement, inputValue) => {
  if (valueIsZeroOrBlank(inputValue)) {
    domInputElement.setCustomValidity("empty");
    domInputElement.reportValidity();
  } else {
    domInputElement.setCustomValidity("");
    domInputElement.reportValidity();
  }
}


//------------------------------------------------------- Other Helpers -----------N 

export const closeOnExternalClick = (event, elementRef, setIsOpenState) => {
  if (elementRef.current && !elementRef.current.contains(event.target)) {
    setIsOpenState(false);
  }
}