import React from "react";
import DblmBar from "../dbl-mid-bar/DblmBar";
import "./dbleftmid.css";
import { BiChevronDown } from "react-icons/bi";


const DbLeftMid = () => {
  return (
    <>
      <div className="dblm-container">
        <div className="dblm-left">
          <div className="dblm-head">Overview</div>
          <div>
            <p style={{ color: "gray", fontSize: "15px" }}>This month</p>
            <div className="dblm-money">
              <h3 style={{ fontSize: "23px" }}>$26,256</h3>
              <div className="tb-pogress">+2.65%</div>
            </div>
          </div>
          <div className="dblm-box">
            <div className="dblm-item">
              <p style={{ color: "gray", fontSize: "15px" }}>Order</p>
              <h4 style={{ fontWeight: "800" }}>5,643</h4>
            </div>
            <div className="dblm-item">
              <p style={{ color: "gray", fontSize: "15px" }}>Sales</p>
              <h4 style={{ fontWeight: "800" }}>16,273</h4>
            </div>
            <div className="dblm-item">
              <p style={{ color: "gray", fontSize: "15px" }}>Order Value</p>
              <h4 style={{ fontWeight: "800" }}>12.03 %</h4>
            </div>
            <div className="dblm-item">
              <p style={{ color: "gray", fontSize: "15px" }}>Customers</p>
              <h4 style={{ fontWeight: "800" }}>21,456</h4>
            </div>
            <div className="dblm-item">
              <p style={{ color: "gray", fontSize: "15px" }}>Income</p>
              <h4 style={{ fontWeight: "800" }}>$35,652</h4>
            </div>
            <div className="dblm-item">
              <p style={{ color: "gray", fontSize: "15px" }}>Expenses</p>
              <h4 style={{ fontWeight: "800" }}>$12,248</h4>
            </div>
          </div>
        </div>
        <div className="dblm-right">
          <div className="dblm-right-text">
            Sort By: <span style={{color:'gray'}}>Yearly <BiChevronDown/> </span>
          </div>

          <DblmBar />
        </div>
      </div>
    </>
  );
};

export default DbLeftMid;
