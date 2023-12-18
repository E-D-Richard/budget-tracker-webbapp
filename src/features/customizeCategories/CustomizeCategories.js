import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";
import "./customizeCategories.css";

const CustomizeCategories = ({menuIsOpen}) => {
  return menuIsOpen ? (
    <div id="customize-categories">
      <AddCategory />
      <DeleteCategory />
    </div>
  ) : "";
};

export default CustomizeCategories;
