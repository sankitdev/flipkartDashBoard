import Icon from "./Icon";
import SearchBar from "./SearchBar";

const Nav = ({ toggleSideBar }) => {
  return (
    <>
      <div className="w-auto h-16 shadow-xl flex items-center justify-center">
        <i
          className="ri-menu-line absolute left-56 text-2xl"
          onClick={toggleSideBar}
        ></i>
        <SearchBar />
        <Icon />
      </div>
    </>
  );
};

export default Nav;
