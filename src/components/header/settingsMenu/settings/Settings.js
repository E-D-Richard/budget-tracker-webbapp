import "./settings.css";
import DeleteCategory from "./DeleteCategory";
import AddCategory from './AddCategory';
import Setting from "./Setting";

const Settings = () => {
    return (
        <div id="settings-container">
            <Setting id={"add-category"} name={"Add Category"} functionComponent={<AddCategory />}/>
            <Setting id={"delete-category"} name={"Delete Category"} functionComponent={<DeleteCategory/>}/>
        </div>
    )
}

export default Settings;