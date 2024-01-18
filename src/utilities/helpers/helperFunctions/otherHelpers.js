
//------------------------------------------------------- Grammar, Punctuation Etc. -----------

export const removeMinusSymbol = (numericalStringValue) => {
  return numericalStringValue.replace(/^(-)/, '')
}

export const capitalizeFirstLetterOfString = (string) => {
  if(string.length === 0){
    return;
  }
  return string.charAt(0).toUpperCase() + string.split("").slice(1).join("")
}

//------------------------------------------------------- General Helpers -----------

export const closeOnExternalClick = (event, elementRef, setIsOpenState) => {
  if (elementRef.current && !elementRef.current.contains(event.target)) {
    setIsOpenState(false);
  }
};

export const sortArrayOfObjectsInAlphabeticalOrderOfKeys = (ArrayOfObjects) => {
  return ArrayOfObjects.sort((a, b) => a.category.localeCompare(b.category));
}


export const flattenArrayOfArraysIntoOneArray = (arrayOfArrays) => {
  return arrayOfArrays.reduce((accArr, b) => [...accArr, ...b], []);
}


