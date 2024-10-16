const Brokerage = () => {
    return (
      <>
        <div className="flex ml-32 p-5">
          <div className="w-1/2 p-5">
            <h1 className="text-xl mt-5 mb-5 text-blue-500 cursor-pointer">Brokerage Calculator</h1>
            <ul className="list-disc list-inside space-y-2">
              <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
              <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
              <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
              <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul>
          </div>
          <div className="w-1/2 p-5">
            <h1 className="text-xl text-blue-400 ml-32 cursor-pointer">List of charges</h1>
          </div>
        </div>
      </>
    );
  };
  
  export default Brokerage;
  