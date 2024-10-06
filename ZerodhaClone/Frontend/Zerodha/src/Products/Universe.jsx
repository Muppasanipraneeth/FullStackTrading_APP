import ZerodhaFund from "../assets/zerodhaFundhouse.png";
import sensibull from "../assets/sensibullLogo.svg"
import Tojori from "../assets/tijori.svg"
import Streak from "../assets/tijori.svg"
import Smallcase from "../assets/smallcaseLogo.png"
import dito from "../assets/dittoLogo.png"

const Universe = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">The Zerodha Universe</h1>
        <p className="text-lg mb-8">
          Extend your trading and investment experience even further with our partner platforms.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 justify-center items-center ml-20  mr-20 p-5">
        {/* Image 1 */}
        <div className="p-5">
          <img src={ZerodhaFund} alt="Zerodha Fundhouse" className="w-full p-5" />
          <p className="text-l font-thin">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
        </div>

        {/* Image 2 */}
        <div className="p-5">
          <img src={sensibull} alt="Zerodha Fundhouse" className="w-full p-5" />
          <p className="text-l font-thin">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
        </div>

        {/* Image 3 */}
        <div className="p-5">
          <img src={Tojori} alt="Zerodha Fundhouse" className="w-full p-5" />
          <p className="text-l font-thin">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
        </div>

        {/* Image 4 */}
        <div className="p-5">
          <img src={Streak} alt="Zerodha Fundhouse" className="w-full p-5" />
          <p className="text-l font-thin">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
        </div>

        {/* Image 5 */}
        <div className="p-5">
          <img src={Smallcase} alt="Zerodha Fundhouse" className="w-full p-5" />
          <p className="text-l font-thin" >Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
        </div>

        {/* Image 6 */}
        <div className="p-5">
          <img src={dito} alt="Zerodha Fundhouse" className="w-full p-5" />
          <p className="text-l font-thin">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
        </div>
      
      </div>
      <div className="flex justify-center ">
  <button className="bg-blue-600 text-white w-[250px] h-[60px] text-center text-2xl hover:bg-black">
    SignUp
  </button>
</div>
    </>
  );
};

export default Universe;
