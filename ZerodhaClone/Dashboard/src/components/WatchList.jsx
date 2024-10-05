import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { Grow, Tooltip } from '@mui/material';

const WatchList = () => {
  watchlist
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return (<WatchLi stock={stock} key={index} />)          

        })}
      
      </ul>
     
    </div>
  );
};
const WatchLi=({stock})=>{
  const [showlist,setshowlist]=useState(false);
  const entermouse=()=>{
    setshowlist(true);
  }
  const leavemouse=()=>{
    setshowlist(false);
  }
  console.log(showlist);
  
  return (<li className={`${stock.isDown? 'text-red-600 ':'text-green-600'}`} onMouseEnter={entermouse} onMouseLeave={leavemouse}>

<div className="item ">
  <span>{stock.name}</span>
<div>
  <span className="m-1"> {stock.isDown ?<KeyboardArrowDownIcon/> :<KeyboardArrowUpIcon />}</span>
  <span className="m-1">{stock.price}</span>
  <span className="m-1">{stock.percent}</span>
  
</div>
{showlist && <Action uuid={stock.name} />}

</div>
  </li>)
  

}
const Action=({uuid})=>{
  return (<div>
    <Tooltip title="buy" 
    placement="top"
    arrow
    TransitionComponent={Grow}
    >
      <button className="bg-blue-600 text-white">buy</button>
    </Tooltip>



  </div>)
   
}
export default WatchList;
