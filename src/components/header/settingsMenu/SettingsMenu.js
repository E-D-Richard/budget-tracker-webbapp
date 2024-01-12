import { useEffect, useRef, useState } from "react";
import "./settingsMenu.css";
import { AiFillSetting } from "react-icons/ai";
import Settings from "./settings/Settings";
import { closeOnExternalClick } from "../../../utilities/helpers/helperFunctions/otherHelpers";

const SettingsMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const menuRef = useRef();


  useEffect(() => {
    //close settingsMenu on external click outside of menu
    const eventHandler = (e) => closeOnExternalClick(e, menuRef, setMenuIsOpen);
    document.addEventListener('click', eventHandler);

    return () => {
      document.removeEventListener('click', eventHandler);
    };
  }, []);


  useEffect(() => {
    //get and set button offsetHeight to use for setting height of div.buttonFrame
    if (menuRef.current) {
      const settingsMenuButtonDomElement = menuRef.current.querySelector("#settings-menu-button");
      setButtonHeight(settingsMenuButtonDomElement.offsetHeight)
    };
  }, []);


  return (
    <div id="settings-menu-container" className={menuIsOpen ? "open" : ""} ref={menuRef}>
      <div
        className="button-frame"
        style={{ height: `${buttonHeight}px` }}
      ></div>
      <button
        id="settings-menu-button"
        name="settings-menu-button"
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
