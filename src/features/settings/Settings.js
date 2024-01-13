import "./settings.css";
import DeleteCategory from "./settingOptions/DeleteCategory";
import AddCategory from "./settingOptions/AddCategory";
import Setting from "./Setting";
import SelectCurrency from "./settingOptions/SelectCurrency";

const Settings = () => {
  return (
    <div id="settings-container">
      <Setting
        id={"select-currency"}
        name={"Select Currency"}
        functionComponent={<SelectCurrency />}
      />
      <Setting
        id={"add-category"}
        name={"Add Category"}
        functionComponent={<AddCategory />}
      />
      <Setting
        id={"delete-category"}
        name={"Delete Category"}
        functionComponent={<DeleteCategory />}
      />
    </div>
  );
};

export default Settings;
