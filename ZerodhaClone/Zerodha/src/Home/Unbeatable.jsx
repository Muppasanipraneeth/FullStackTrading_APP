import Price1 from "../assets/pricing-eq.svg";
import price2 from "../assets/pricing-eq (1).svg";
import othertrader from "../assets/other-trades.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Unbeatable = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full mt-20 p-5">
        <div className="flex-1 mr-8 ml-8">
          <h1 className="text-5xl font-semibold mb-2">Unbeatable Pricing</h1>
          <p className="text-lg mb-4">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="ww" className="text-blue-600 text-xl hover:text-black flex items-center">
            See Pricing <FaArrowRightLong className="ml-2" />
          </a>
        </div>

        <div className="flex-1 flex justify-around items-center mr-6">
          <div className="flex items-center">
            <img className="w-[125px] mr-4" src={Price1} alt="Pricing 1" />
            <p className="text-lg font-light">Free account opening</p>
          </div>
          
          <div className="flex items-center">
            <img className="w-[125px] mr-4" src={price2} alt="Pricing 2" />
            <p className="text-lg font-light">Free equity delivery and direct mutual funds</p>
          </div>
          
          <div className="flex items-center">
            <img className="w-[125px] mr-4" src={othertrader} alt="Other Trader" />
            <p className="text-lg font-light">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unbeatable;
