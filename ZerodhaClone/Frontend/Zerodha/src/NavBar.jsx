import logo from '../src/assets/logo.svg';
import { HiViewList } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between border p-2">
        <div className="logo w-[130px] h-[50px] ml-32 mt-4">
         <Link to="/" ><img src={logo} alt="Logo" /></Link> 
        </div>
        <div className="navbar-items mr-9 mt-4">
          <ul className="flex gap-14 mr-12 text-gray-400 font-semibold cursor-pointer">
            <li className=' hover:text-blue-500'>
              <Link to="/signup">Signup</Link>
            </li>
            <li className=' hover:text-blue-500'>
              <Link to="/about">About</Link>
            </li>
            <li className=' hover:text-blue-500'>
              <Link to="/products">Products</Link>
            </li>
            <li className=' hover:text-blue-500'>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className=' hover:text-blue-500'>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <HiViewList className="text-black font-bold text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
