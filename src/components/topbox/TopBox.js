import React from "react";
import "./topbox.css";

import { BiSearch } from "react-icons/bi";

const TopBox = ({icon,text,money,percent}) => {
  return (
    <div className="topbox">
      <div className="tb-box-icon">{icon}</div>
      <div className="tb-text">
        <p style={{color:'gray',fontSize:'15px'}}>{text}</p>
        <h3 style={{fontSize:'bold'}}>${money}</h3>
      </div>
      <div className="tb-pogress">{percent}%</div>
    </div>
  );
};

export default TopBox;
