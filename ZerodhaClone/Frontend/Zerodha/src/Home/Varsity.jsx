import Varsityicon from "../assets/index-education.svg"
import { FaArrowRightLong } from "react-icons/fa6";

const Varsity=()=>{
    return (<>
    <div className="varsity flex mt-10">
        <div className="cursor-pointer p-10">
        <img src={Varsityicon} alt="varsity"></img>
        </div>
        <div className="ml-44 mt-10">
            <h1 className="text-3xl font-semibold"> Free and open market education </h1>
        <p className="text-xl mt-4">
        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.

        </p>
        <a href="ww" className="text-blue-600 text-xl hover:text-black flex items-center">
      varsity <FaArrowRightLong className="ml-2" />    
    </a>  
    <p className="text-xl mt-4">
    TradingQ&A, the most active trading and investment community in India for all your market related queries.

    </p>
    <a href="ww" className="text-blue-600 text-xl hover:text-black flex items-center">
      Trading Q & A <FaArrowRightLong className="ml-2" />    
    </a> 

      </div>
    </div>
    </>)
}
export default Varsity;