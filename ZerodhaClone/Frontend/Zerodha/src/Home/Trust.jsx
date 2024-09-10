import products from "../assets/ecosystem.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Trust=()=>{
    return (<>
    <div className="trust flex mt-20">
        <div className="ml-28 w-[500px]">
<div>
<h1 className="text-4xl m-2">Trust with confidence
</h1>
</div>
<div className="mt-9">
    <h3 className="text-2xl m-2">    costumers always
    </h3>
    <p className="text-lg font-thin">
    Thats why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
    </p>
</div>
<div className="mt-9">
    <h3 className="text-2xl m-2">    No spam or gimmicks
    </h3>
    <p className="text-lg font-thin">
    No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like.
    </p>
</div>
<div className="mt-9">
    <h3 className="text-2xl m-2">   The Zerodha universe
    </h3>
    <p className="text-lg font-thin">
    Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
    </p>
</div>
<div className="mt-9">
    <h3 className="text-2xl m-2">    Do better with money
    </h3>
    <p className="text-lg font-thin">
    With initiatives like Nudge and Kill Switch, we dont just facilitate transactions, but actively help you do better with your money.
    </p>
</div >
        </div>
        <div className="flex flex-col" >
        <div className="cursor-pointer mr-5 ml-10 w-[600px]">
        <img src={products}></img>
        </div>
        <div className="flex">
  <div className="m-5 flex">
    <a href="ww" className="text-blue-600 text-xl hover:text-black flex items-center">
      Explore our Products <FaArrowRightLong className="ml-2" />
    </a>
    <a href="ww" className="text-blue-600 text-xl ml-10 hover:text-black flex items-center">
      Try Kite Demo <FaArrowRightLong className="ml-2" />
    </a>
  </div>
</div>

        </div>
    </div>
    
    
    </>)
}
export default Trust;