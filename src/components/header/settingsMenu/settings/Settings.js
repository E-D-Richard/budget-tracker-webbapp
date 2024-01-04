import "./settings.css";
import DeleteCategory from "./DeleteCategory";
import AddCategory from './AddCategory';
import SettingOption from "./SettingOption";

const Settings = () => {
    return (
        <div id="settings-container">
            <SettingOption id={"add-category"} name={"Add Category"} functionComponent={<AddCategory />}/>
            <SettingOption id={"delete-category"} name={"Delete Category"} functionComponent={<DeleteCategory/>}/>
        </div>
    )
}

export default Settings;