import { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPosition] = useState([]); 
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/allPositions");
        setPosition(response.data);       } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };

    fetchPositions();
   }, []);
  console.log(positions);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, index) => {
              const currvalue = pos.price * pos.qty;
              const isprofit = currvalue - pos.avg * pos.qty >= 0.0;
              const profitClass = isprofit ? "profit" : "loss";
              const dayClass = pos.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{pos.product}</td>
                  <td>{pos.name}</td>
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{currvalue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currvalue - pos.avg * pos.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{pos.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
