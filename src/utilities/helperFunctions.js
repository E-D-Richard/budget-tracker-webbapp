

//------------------------------------------------------- Other Helpers -----------

export const closeOnExternalClick = (event, elementRef, setIsOpenState) => {
  if (elementRef.current && !elementRef.current.contains(event.target)) {
    setIsOpenState(false);
  }
};
