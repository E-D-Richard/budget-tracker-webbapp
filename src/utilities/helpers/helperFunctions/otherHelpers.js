

//------------------------------------------------------- General Helpers -----------

export const closeOnExternalClick = (event, elementRef, setIsOpenState) => {
  if (elementRef.current && !elementRef.current.contains(event.target)) {
    setIsOpenState(false);
  }
};

export const sortArrayOfObjectsInAlphabeticalOrderOfKeys = (ArrayOfObjects) => {
  return ArrayOfObjects.sort((a, b) => a.category.localeCompare(b.category));
}
