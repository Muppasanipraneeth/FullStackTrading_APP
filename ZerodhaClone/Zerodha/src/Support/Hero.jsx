import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { SiCoinmarketcap } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa6";
import { TbBriefcase2 } from "react-icons/tb";






const Hero=()=>{
    return (<>
            <h1 className="text-3xl mt-2 ml-36 mb-10 font-semibold"> To create a ticket, select a relevant topic</h1>

    <div className="grid grid-cols-3 ml-32">
        <div className="m-5 " >
            <div className="inline-block text-xl"> <span className="flex"><CiCirclePlus className="m-1" /> Account Opening </span></div>
            <ul className="text-blue-500 cursor-pointer mt-5 space-y-3">
                <li>Getting Started</li>
                <li>online</li>
                <li>offline</li>
                <li>charges</li>
                <li>company ,paternship and HUF</li>
                <li>Non Residential Indian(NRI)</li>
            </ul>
        </div>
        <div>
        <div className="inline-block text-xl"> <span className="flex"><MdOutlineAccountCircle className="m-1" /> Your Zerodha Account </span></div>

            <ul className="text-blue-500 cursor-pointer mt-5 space-y-3">
                <li>Login Credentials</li>
                <li> Your Profile</li>
                <li> Account modification and segement additon </li>
                <li>CMR & DP ID</li>
                <li>Nomination</li>
                <li>Transfer and conversion of shares </li>
            </ul>
        </div>
        <div>
        <div className="inline-block text-xl"> <span className="flex"><VscGraph className="m-1" />  Trading and market </span></div>

            <ul className="text-blue-500 cursor-pointer mt-5 space-y-3">
                <li>Trading FAQs</li>
                <li>kite</li>
                <li>Margins</li>
                <li>Product and order types</li>
                <li>Corporate actions</li>
                <li>kite features</li>
            </ul>
        </div>
        <div>
        <div className="inline-block text-xl"> <span className="flex"><TbBriefcase2 className="m-1" /> Funds </span></div>

            <ul className="text-blue-500 cursor-pointer mt-5 space-y-3">
                <li> Funds withdrawal</li>
                <li>Adding Funds</li>
                <li>Adding bank accounts</li>
                <li>eMandates</li>
            </ul>
        </div>
        <div>
        <div className="inline-block text-xl"> <span className="flex"><SiCoinmarketcap className="m-1" /> Console </span></div>

            <ul className="text-blue-500 cursor-pointer mt-5 space-y-3">
                <li>IPO</li>
                <li> Protfolio</li>
                <li>Funds Statement</li>
                <li>Profile</li>
                <li>Report </li>
                <li>Referal Program</li>
            </ul>
        </div>
        <div>
        <div className="inline-block text-xl"> <span className="flex"><FaBitcoin className="m-1" /> Coin </span></div>

            <ul className="text-blue-500 cursor-pointer mt-5 space-y-3">
                <li>Understaning mutual funds and Coin</li>
                <li>Coin app</li>
                <li>Coin Web</li>
                <li>Transactions and reports</li>
                <li>National Pension Secheme (NPS)</li>
            </ul>
        </div>
        <div></div>
    </div>
    </>)
}
export default Hero;