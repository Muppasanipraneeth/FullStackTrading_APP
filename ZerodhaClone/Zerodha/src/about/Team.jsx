import nithinKamath from "../assets/nithinKamath.jpg"
import Nikhilamath from "../assets/Nikhil.jpg"
import kailash from "../assets/Kailash.jpg"
import Venu from "../assets/Venu.jpg"
import Hanan from "../assets/Hanan.jpg"
import seema from "../assets/Seema.jpg"
import karthik from "../assets/karthik.jpg"
import Austin from "../assets/Austin.jpg"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";

const Team = () => {
  const [activeBio, setActiveBio] = useState(null); // Store the active bio index

  const handleToggle = (index) => {
    setActiveBio(activeBio === index ? null : index); // Toggle the bio of the clicked member
  };

  const teamMembers = [
  { name: "Nikhil Kamath", title: "Co-founder", imgSrc: Nikhilamath, bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." },
    { name: "Kailash Nadh", title: "CTO", imgSrc: kailash, bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day" },
    { name: "Venu Madhav", title: "COO", imgSrc: Venu, bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha" },
    { name: "Hanan", title: "CCO", imgSrc: Hanan, bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free tim" },
    { name: "Seema Patil", title: "Director", imgSrc: seema, bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast." },
    { name: "Karthik Rangappa", title: "Chief of Education", imgSrc: karthik, bio: "Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography" },
    { name: "Austin", title: "Director Strategy", imgSrc: Austin, bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches." },
  ];

  return (
    <>
    <div>
        <h1 className="text-center align-middle justify-center text-4xl font-normal">People</h1>
        <div className="ml-48 mt-20 mr-5 flex">
            <div className="w-[550px]" >
                <img src={nithinKamath} className="rounded-full "></img>
                <h2 className="text-xl text-center items-center m-2">Nithin Kamath</h2>
                <h4 className="text-l text-center items-center m-2">Founder,CEO</h4>
            </div>
            <div className="ml-32 mr-20 text-xl">
        <p>
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</ p>
<p><br />
He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</ p>
<br />
<p>
Playing basketball is his zen.</p><br />
<p>
<span className="text-blue-600">Connect on Homepage</span > / <span className="text-blue-600"> TradingQnA</span > / <span className="text-blue-500"> Twitter</span>
        </p><br />
            </div>
            </div>
            </div>
        <div>
      <h1 className="text-center align-middle justify-center text-4xl font-normal">People</h1>
      <div className="grid grid-cols-3 ml-20 mt-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-[350px] m-5">
            <img src={member.imgSrc} className="rounded-full w-[240px] ml-14" alt={member.name}></img>
            <h2 className="text-xl text-center items-center m-2">{member.name}</h2>
            <h4 className="text-l text-center items-center m-2">{member.title}</h4>
            <div className="flex text-xl text-center justify-center" onClick={() => handleToggle(index)}>
              Bio {activeBio === index ? <RiArrowDropUpLine className="text-3xl" /> : <RiArrowDropDownLine className="text-3xl" />}
            </div>
            {activeBio === index && <p className="mt-2 text-center">{member.bio}</p>}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Team;
