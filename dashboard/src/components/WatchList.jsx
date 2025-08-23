import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material"
import { watchlist } from "../data/data";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material"
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
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
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistOptions, setShowWatchlistOptions] = useState(false);

  const handleMouseEnter = (event) => {
    setShowWatchlistOptions(true);
  }

  const handleMouseLeave = (event) => {
    setShowWatchlistOptions(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />)
            : (<KeyboardArrowUp className="up" />
            )}
          <span className="price">{stock.price}</span>

        </div>
      </div>
      {showWatchlistOptions && <WatchListActions uid={stock.name} />}
    </li>
  )
}

const WatchListActions = ({ uid }) => {
   const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (b)"
          placement="top" arrow TransitionComponent={Grow}
            onClick={handleBuyClick}>
          <button className="buy" >Buy</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Sell (s)"
          placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Analytics (s)"
          placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><BarChartOutlined className="icon" /></button>
        </Tooltip>
      </span>

      <span>
        <Tooltip title="Sell (s)"
          placement="top" arrow TransitionComponent={Grow}>
          <button className="action"><MoreHoriz className="icon" /></button>
        </Tooltip>
      </span>

    </span>
  )
}
