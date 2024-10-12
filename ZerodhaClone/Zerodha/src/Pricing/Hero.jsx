import zero from "../assets/pricing-eq.svg"
import Twenty from "../assets/other-trades.svg"
const Investments=()=>{
    return (<>
    <div className="grid grid-cols-3 ml-32 mr-10 mt-20" >
        <div className="m-5">
            <img src={zero}></img>
            <h1 className="text-2xl">Free equity delivery   </h1>
            <p className="mt-5"> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="m-5">
            <img src={Twenty} ></img>
            <h1 className="text-2xl">Free equity delivery   </h1>
            <p className="mt-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="m-5">
            <img src={zero}></img>
            <h1 className="text-2xl mt-4">Free equity delivery   </h1>
            <p className="mt-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
    </div>
    </>)

}
export default Investments;