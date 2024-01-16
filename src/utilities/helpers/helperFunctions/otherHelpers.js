

//------------------------------------------------------- General Helpers -----------

export const closeOnExternalClick = (event, elementRef, setIsOpenState) => {
  if (elementRef.current && !elementRef.current.contains(event.target)) {
    setIsOpenState(false);
  }
};

export const sortArrayOfObjectsInAlphabeticalOrderOfKeys = (ArrayOfObjects) => {
  return ArrayOfObjects.sort((a, b) => a.category.localeCompare(b.category));
}

export const removeMinusSymbol = (numericalStringValue) => {
  return numericalStringValue.replace(/^(-)/, '')
}

export const flattenArrayOfArraysIntoOneArray = (arrayOfArrays) => {
  return arrayOfArrays.reduce((accArr, b) => [...accArr, ...b], []);
}


