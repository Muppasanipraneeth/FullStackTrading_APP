import Hero from "./Hero";
import LeftImg from "./LeftImg";
import kite from "../assets/kite.png";
import coin from "../assets/coin.png"
import RightImg from "./RightImg";
import Console from "../assets/console.png"
import kiteconnect from "../assets/kiteconnect.png"


const Product =()=>{
    return (<>
    <div>
        <Hero />
        <LeftImg imageSrc={kite} title="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices" />
        <RightImg imageSrc={Console} title="Console " description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." exploreLink="Learnmore" ></RightImg>
        <LeftImg imageSrc={coin} title="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." />
        <RightImg imageSrc={kiteconnect} title="Kite Connect API " description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." exploreLink="KiteConnect" ></RightImg>

    </div>
    </>)
}
export default Product;