import logo from "../src/assets/logo.svg";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaWhatsappSquare, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DetailsFooter from "./Footerde";

const Footer = () => {
  return (
    <>
      <div className="Footer   border shadow-sm mt-16 bg-[#fbfbfb]">
        <div className="flex">
        <div className="mt-4 ml-16">
          <div>
            <img src={logo} className="w-[150px] " alt="logo" />
          </div>
          <div>
            © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="social grid grid-cols-4 gap-4 m-4 text-2xl">
            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
            <FaWhatsappSquare />
            <FaTelegram />
          </div>
        </div>

        {/* Company Section */}
        <div className="ml-24 mt-4">
          <h1 className="text-xl font-semibold">Company</h1>
          <ul className="text-xl text-[#424242] font-light hover:text-blue-500">
            <li>About</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Referral Program</li>
            <li>Careers</li>
            <li>Zerodha.team</li>
            <li>Press & Media</li>
            <li>Zerodha Cares (CRS)</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="ml-32 mt-4">
          <h1 className="text-xl font-semibold">Support</h1>
          <ul className="text-xl text-[#424242] font-light hover:text-blue-500">
            <li>Contact Us</li>
            <li>Support Portal</li>
            <li>Z-connect Blog</li>
            <li>List of Charges</li>
            <li>Downloads & Resources</li>
            <li>Videos</li>
            <li>Market Overview</li>
            <li>How to File a Complaint?</li>
            <li>Status of the Complaint</li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="ml-32 mt-4 mr-8">
          <h1 className="text-xl font-semibold">Account</h1>
          <ul className="text-xl text-[#424242] font-light hover:text-blue-500">
            <li>Open an Account</li>
            <li>Fund Transfer</li>
          </ul>
        </div>
        </div>
        <DetailsFooter />

      </div>
    </>
  );
}

export default Footer;
