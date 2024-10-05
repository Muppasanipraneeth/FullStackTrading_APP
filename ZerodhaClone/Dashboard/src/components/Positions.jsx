import { positions } from "../data/data";
const Positions = () => {
  console.log(positions);
  
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((pos,index)=>{
            const currvalue=pos.price*pos.qty;
            const isprofit=currvalue-pos.avg*pos.qty >=0.0;
            const profitClass=isprofit ?"profit":"loss";
            const dayClass=pos.isLoss ? "loss":"profit";
            

            return (
              <tr key={index}>
            <td>{pos.product}</td>
            <td> {pos.name}</td>
            <td>{pos.qty}</td>
            <td>{pos.avg.toFixed(2)}</td>
            <td >{currvalue.toFixed(2)}</td>
            <td className={profitClass}>   {(currvalue - pos.avg * pos.qty).toFixed(2)}
            </td>
            <td className={dayClass}>{pos.day}</td>
          </tr>
            )
          })}
         
        </table>
      </div>
    </>
  );
};

export default Positions;
