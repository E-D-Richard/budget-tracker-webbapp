import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import NewTransForm from "./NewTransForm";
import { useDispatch, useSelector } from "react-redux";
import { updateDevice, updateDropdownStatus } from "../../features/newTransaction/newTransactionSlice";
import { selectDeviceType, selectDropdownStatus } from "../../features/newTransaction/newTransactionSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const deviceType = useSelector(selectDeviceType);
  const dropdownStatus = useSelector(selectDropdownStatus);
  let isDesktop = window.innerWidth >= 850;
  const [expanded, setExpanded] = useState(isDesktop ? true : false);

  

  const updateBrowserStatus = () => {
    isDesktop = window.innerWidth >= 850;
    if (isDesktop) {
      setExpanded(true);
      dispatch(updateDevice('desktop'));
      dispatch(updateDropdownStatus('desktopMode'));
    } else {
      setExpanded(false);
      dispatch(updateDevice('mobile'));
      // dispatch(updateDropdownStatus('collapsed'))
    }
  };
  //gets screen width upon loading and sends deviceType and dropdownStatus to store
  if(deviceType === "unknown"){
    updateBrowserStatus();
  }


  // useEffect(() => {
  //   window.addEventListener("resize", updateBrowserStatus);
  //   return () => window.removeEventListener("resize", updateBrowserStatus);
  // });


  const handleClick = () => {
    !expanded ? setExpanded(true) : setExpanded(false);
    !expanded ? dispatch(updateDropdownStatus('expanded')) : dispatch(updateDropdownStatus('collapsed'));
  };

  return (
    <section className={`new-trans-container ${deviceType}-${dropdownStatus}`}>
      <h2>New Transaction</h2>
      {!isDesktop ? (
        <div className="dropdown-container">
          <button onClick={handleClick} className="dropdown-btn">
            {!expanded ? (
              <FaAngleUp className="icon" style={{ fontSize: "5rem" }} />
            ) : (
              <FaAngleDown className="icon" style={{ fontSize: "5rem" }} />
            )}
          </button>
          {expanded ? <NewTransForm /> : <h3>New Transaction</h3>}
        </div>
      ) : (
        <NewTransForm />
      )}
    </section>
  );
};

export default Dropdown;
