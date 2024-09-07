import logo from '../src/assets/logo.svg';
import { HiViewList } from "react-icons/hi";


const Navbar = () => {
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50  flex justify-between   border p-2 ">
        <div className="logo w-[130px] h-[50px] ml-32 mt-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-items mr-9 mt-4">
          <ul className="flex gap-14 mr-12 text-gray-400 font-semibold">
            <li>Signup</li>
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Support</li>
            <li><HiViewList className='text-black font-bold text-xl' /></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
