import { CiSearch } from "react-icons/ci";

const Ticket = () => {
  return (
    <>
      <div className="bg-blue-500 w-full h-[450px] flex text-white">
        <div className="flex flex-col items-start w-1/2 ml-32">
        <h1 className="text-2xl font-semibold mt-32 m-5">Support Portal</h1>
          <p className="m-4  text-xl font-semibold">
            Search for an answer or browse help topics to create a ticket
          </p>
          <form className="relative w-full max-w-lg m-4">
            <input
              type="text"
              placeholder="How do I activate F&O? Why is my order getting rejected?....."
              className="w-full p-4 pr-10 rounded-md bg-white text-black "
            />
            {/* The Search Icon */}
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" size={24} />
          </form>
          <div className="m-4 cursor-pointer">
            <span className="underline "> Track account Opening</span>
            <span className="underline m-5"> Track segement activation</span>
            <span className="underline ">Intraday margins</span>
            <span className="underline m-5 mt-10"> kite user manual</span>
          </div>
        </div>
        <div className="w-1/2">
            <h3 className="underline ml-96 mt-10 text-l">Track Ticket</h3>
            <h1 className="text-2xl  m-10 mt-20"> Featured</h1>
            <p className="text-l  m-10">The IPO mandate requests may be delayed due to high volumes across brokers. Please make sure to accept the mandate by 5 PM on the final IPO day. Alternatively, you can also use net banking ASBA. <span className="underline">Learn more.</span></p>
        </div>
      </div>
    </>
  );
};

export default Ticket;
