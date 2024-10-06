import { watchlist } from "../data/data";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { Grow, Tooltip } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
  
  return (<li onMouseEnter={entermouse} onMouseLeave={leavemouse}>
    <div className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent m-1">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDownIcon className="down m-1" />
        ) : (
          <KeyboardArrowUpIcon className="up m-1" />
        )}
        <span className="price m-1">{stock.price}</span>
      </div>
    </div>
    {showlist && <Action uid={stock.name} />}
  </li>)
  

}
const Action=({uuid})=>{
  return (<span className="actions">
    <span>
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <BarChartIcon className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHorizIcon className="icon" />
        </button>
      </Tooltip>
    </span>
  </span>)
   
}
export default WatchList;
