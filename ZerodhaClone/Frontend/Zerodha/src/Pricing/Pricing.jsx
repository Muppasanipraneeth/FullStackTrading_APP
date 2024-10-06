import OpenAccount from "../Home/AccountOpen";
import Brokerage from "./Brokarage";
import Investments from "./Hero";
import Price from "./PricingPage";

const Pricing =()=>{
    return (<div>
        <Price />
        <Investments />
        < OpenAccount />
        <Brokerage />
    </div>)
}
export default Pricing;