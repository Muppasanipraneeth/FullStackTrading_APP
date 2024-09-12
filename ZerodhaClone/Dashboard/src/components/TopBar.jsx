
import Menu from "./Menu";

const TopBar = () => {
  return (
<div className="w-full h-[10vh] flex items-center shadow-[0px_0px_4px_2px_rgb(236,235,235)] box-border z-9">
<div className="flex flex-[0_0_32%] justify-around items-center box-border px-[20px] py-[10] h-full">
<div className="nifty flex flex-basis[40%] items-center justify-evenly z-[-2]">
          <p className=" mr-2 text-[0.8rem] font-medium uppercase text-gray-600 whitespace-nowrap">NIFTY 50</p>
          <p className="index-points mr-2 text-[0.8rem] font-medium text-red-500">{100.2} </p>
          <p className="percent mr-2 text-[0.8rem] font-normal text-gray-500"> </p>
        </div>
        <div className="sensex flex flex-basis[40%] items-center justify-evenly">
          <p className= "mr-2 text-[0.8rem] font-medium uppercase text-gray-600 whitespace-nowrap">SENSEX</p>
          <p className="index-points mr-2 text-[0.8rem] font-medium text-red-500">{100.2}</p>
          <p className="percent mr-2 text-[0.8rem] font-normal text-gray-500"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
