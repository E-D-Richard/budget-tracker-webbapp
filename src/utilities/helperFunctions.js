export const handleInputPopUpMessage = (categories, domInputElement, newValue) => {
    //returns true if currentInput is a duplicate. Elese, returns false. 
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