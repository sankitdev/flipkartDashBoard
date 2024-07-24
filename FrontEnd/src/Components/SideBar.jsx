import DashBoard from "./DashBoard";

const SideBar = ({ isVisible }) => {
  return (
    <>
      <div
        className={`h-screen bg-blue-950 text-white transition-all duration-300 ease-in-out ${
          isVisible ? "w-80" : "w-0 overflow-hidden"
        }`}
      >
        <h1 className="text-center text-3xl font-bold p-4 ">
          Seller DashBoard
        </h1>
        <div className="h-0.5 w-2/3 bg-white m-auto"></div>
        <div className="flex flex-col items-center justify-center mt-4 text-xl w-full min-h-20">
          <button className="w-full py-2 hover:bg-slate-500">DashBoard</button>
          <button className="w-full py-2 hover:bg-slate-500">Inventory</button>
          <button className="w-full py-2 hover:bg-slate-500">Pricing</button>
          <button className="w-full py-2 hover:bg-slate-500">Orders</button>
          <button className="w-full py-2 hover:bg-slate-500">
            Performance
          </button>
          <button className="w-full py-2 hover:bg-slate-500">
            Manage Return
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
