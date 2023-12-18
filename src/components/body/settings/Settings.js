import { AiFillSetting } from "react-icons/ai";
import CustomizeCategories from "../../../features/customizeCategories/CustomizeCategories";

const Settings = () => {
  return (
    <div id="settings">
      <button>
        <AiFillSetting />
      </button>
      <CustomizeCategories />
    </div>
  );
};

export default Settings;
