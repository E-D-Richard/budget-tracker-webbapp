import { useEffect, useRef, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import CustomizeCategories from "./customizeCategories/CustomizeCategories";
import "./settings.css";

const Settings = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = useRef();

  useEffect(() => {
    setButtonHeight(buttonRef.current.offsetHeight);
  }, []);

  return (
    <div id="settings-container" className={menuIsOpen ? "open" : ""}>
      <div
        className="button-frame"
        style={{ height: `${buttonHeight}px` }}
      ></div>
      <button
        id="settings-button"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        ref={buttonRef}
      >
        <AiFillSetting />
      </button>
      <div id="settings" className={menuIsOpen ? "open" : ""}>
        <CustomizeCategories menuIsOpen={menuIsOpen} />
      </div>
    </div>
  );
};

export default Settings;
