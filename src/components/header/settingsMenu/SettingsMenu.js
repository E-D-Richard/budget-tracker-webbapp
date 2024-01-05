import { useEffect, useRef, useState } from "react";
import "./settingsMenu.css";
import { AiFillSetting } from "react-icons/ai";
import Settings from "./settings/Settings";

const SettingsMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      const settingsMenuButtonDomElement = menuRef.current.querySelector("#settings-menu-button");
      setButtonHeight(settingsMenuButtonDomElement.offsetHeight)
    }
    ;
  }, []);



  return (
    <div id="settings-menu-container" className={menuIsOpen ? "open" : ""} ref={menuRef}>
      <div
        className="button-frame"
        style={{ height: `${buttonHeight}px` }}
      ></div>
      <button
        id="settings-menu-button"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <AiFillSetting />
      </button>
      <div id="settings-menu" className={menuIsOpen ? "open" : ""}>
        <Settings />
      </div>
    </div>
  );
};

export default SettingsMenu;
