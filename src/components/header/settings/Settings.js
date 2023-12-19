import { AiFillSetting } from "react-icons/ai";
import CustomizeCategories from "../../../features/customizeCategories/CustomizeCategories";
import "./settings.css";
import { useState } from "react";

const Settings = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div id="settings-container" className={menuIsOpen ? "open" : ""} >
      <button id="settings-button" onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <AiFillSetting />
      </button>
      <div id="settings" className={menuIsOpen ? "open" : ""}>
        <CustomizeCategories menuIsOpen={menuIsOpen} />
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
        <p>random text</p>
      </div>
    </div>
  );
};

export default Settings;
