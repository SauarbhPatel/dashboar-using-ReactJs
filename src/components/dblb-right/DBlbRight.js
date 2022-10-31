import React from "react";
import "./dblbRight.css";

import { BiChevronDown } from "react-icons/bi";

const DBlbRight = () => {
  return (
    <div className="dblbr-container">
      <div className="chart-head">
        <span>User Activity</span>
        <span style={{ color: "gray", fontSize: "12px" }}>
          Weekly <BiChevronDown />
        </span>
      </div>

      <div className="dblbr-box">
        <div style={{display:"flex"}}>
          <div className="number-box">#1</div>
          <div className="dblbr-containt">
            <div style={{ color: "gray", fontSize: "15px" }}>
              Weekly Polo blue T-shit
            </div>
            <span>$ 25.4</span>
          </div>
        </div>
        <span className="dblbr-money">3.82k</span>
      </div>

      <div className="dblbr-box">
        <div style={{display:"flex"}}>
          <div className="number-box">#2</div>
          <div className="dblbr-containt">
            <div style={{ color: "gray", fontSize: "15px" }}>
              Hoodie for man
            </div>
            <span>$ 25.4</span>
          </div>
        </div>
        <span className="dblbr-money">3.14k</span>
      </div>

      <div className="dblbr-box">
        <div style={{display:"flex"}}>
          <div className="number-box">#3</div>
          <div className="dblbr-containt">
            <div style={{ color: "gray", fontSize: "15px" }}>
              Red color Cap
            </div>
            <span>$ 25.4</span>
          </div>
        </div>
        <span className="dblbr-money">2.82k</span>
      </div>
      <div className="dblbr-box">
        <div style={{display:"flex"}}>
          <div className="number-box">#4</div>
          <div className="dblbr-containt">
            <div style={{ color: "gray", fontSize: "15px" }}>
              Pocket T-shit
            </div>
            <span>$ 22.4</span>
          </div>
        </div>
        <span className="dblbr-money">2.06k</span>
      </div>
    </div>
  );
};

export default DBlbRight;
