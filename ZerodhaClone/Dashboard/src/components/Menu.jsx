import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Menu = () => {
  const [menu, setMenu] = useState(0);
  const [isProfile, setIsProfile] = useState(false);

  const handleProfileClick = () => {
    setIsProfile(!isProfile);
  };

  const handleMenu = (index) => {
    setMenu(index);
  };

  const baseMenuClass = "text-gray-700";
  const activeMenuClass = "text-orange-500";

  return (
    <div className="menu-container flex-grow h-full p-[10px_20px] box-border flex items-center justify-between">
      <img src={logo} alt="Logo" style={{ width: "50px" }} />
      <div className="menus flex items-center justify-evenly">
        <ul className="list-none flex space-x-8">
          <li>
            <Link
              to="/"
              className={`${menu === 0 ? activeMenuClass : baseMenuClass } hover:text-orange-500`}
              onClick={() => handleMenu(0)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className={`${menu === 1 ? activeMenuClass : baseMenuClass } hover:text-orange-500`}
              onClick={() => handleMenu(1)}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              className={`${menu === 2 ? activeMenuClass : baseMenuClass } hover:text-orange-500`}
              onClick={() => handleMenu(2)}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              className={`${menu === 3 ? activeMenuClass : baseMenuClass } hover:text-orange-500`}
              onClick={() => handleMenu(3)}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className={`${menu === 4 ? activeMenuClass : baseMenuClass } hover:text-orange-500`}
              onClick={() => handleMenu(4)}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              className={`${menu === 5 ? activeMenuClass : baseMenuClass } hover:text-orange-500`}
              onClick={() => handleMenu(5)}
            >
              Apps
            </Link>
          </li>
        </ul>
        <hr className="border-l-[0.8px] border-l-gray-200 h-[30px] mx-4" />
        <div className="profile flex items-center cursor-pointer" onClick={handleProfileClick}>
          <div className="avatar w-[30px] h-[30px] flex justify-center items-center text-center text-[0.7rem] font-normal text-pink-300 rounded-full bg-pink-100 mr-2">
            ZU
          </div>
          <p className="username text-[0.8rem] font-light">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
