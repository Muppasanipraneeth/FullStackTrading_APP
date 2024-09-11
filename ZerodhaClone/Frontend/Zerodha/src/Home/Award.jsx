import largesBroker from "../assets/largestBroker.svg"
import pressl from "../assets/pressLogos.png"
const Award=()=>{
    return (<>
    <div className="flex mt-10">
        <div className="ml-10 p-5">
        <img src={largesBroker} alt="larges"></img>
        </div>
        <div className="ml-20 mt-5">
<h1 className="font-semibold text-4xl m-2 mb-5">Largest Broker in India</h1>
<p className="text-l m-2 mb-5"> 2+ million zerodha clients contribute over 15% of all retails order volumes in India daily by trading and investing in:</p>
<ul className="flex flex-wrap text-l font-medium">
  <li className="p-2 w-1/2">Future and Options</li>
  <li className="p-2 w-1/2">Commodity derivatives</li>

  <li className="p-2 w-1/2">Currency derivatives</li>
  <li className="p-2 w-1/2">Stocks & IPOs</li>

  <li className=" p-2 w-1/2">Direct mutual Funds</li>
  <li className="p-2 w-1/2">Bonds and Growth</li>
</ul>
<div className="mt-10 w-[400px] ml-20 cursor-pointer">
    <img src={pressl}></img>
</div>

        </div>
    </div>
    </>)
}
export default Award;