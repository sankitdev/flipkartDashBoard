import Icon from "./Icon";
import SearchBar from "./SearchBar";
import ExcelUploader from "./ExcelUploader";

const Nav = ({ toggleSideBar }) => {
  return (
    <>
      <div className="w-auto h-16 shadow-xl flex items-center justify-center">
        <i
          className="ri-menu-line absolute left-56 text-2xl"
          onClick={toggleSideBar}
        ></i>

        <SearchBar />
        {/* <ExcelUploader /> */}
        <Icon />
      </div>
    </>
  );
};

export default Nav;
