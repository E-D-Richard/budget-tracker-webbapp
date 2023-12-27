import { useEffect, useRef, useState } from "react";
import "./settingsMenu.css";
import { AiFillSetting } from "react-icons/ai";
import Settings from "./settings/Settings";

const SettingsMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = useRef();

  useEffect(() => {
    setButtonHeight(buttonRef.current.offsetHeight);
  }, []);

  return (
    <div id="settings-menu-container" className={menuIsOpen ? "open" : ""}>
      <div
        className="button-frame"
        style={{ height: `${buttonHeight}px` }}
      ></div>
      <button
        id="settings-menu-button"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        ref={buttonRef}
      >
        <AiFillSetting />
      </button>
      <div id="settings-menu" className={menuIsOpen ? "open" : ""}>
        <Settings/>
      </div>
    </div>
  );
};

export default SettingsMenu;
