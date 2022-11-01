import React from 'react'
import "./dbright.css";
import Profile from "../../img/profile.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";


const DbRight = () => {
  return (
    <>
    <div className="dbr-first">
      <div className="dbr-img">
        <div className="dbr-icon">...</div>
        <div className="dbr-profile"   style={{ backgroundImage: `url(${Profile})` }}></div>
      </div>
      <div className="dbr-name">Jennifer Bennett</div>
      <div className="dbr-Prof">Product Designer</div>
      <div className="dbrf-box">
        <div className="dbr-box-first">
          <span>1,269</span>
          <span>Products</span>
        </div>
        <div className="dbr-box-last">
          <span> 5.2k</span>
          <span>Followers</span>
        </div>
      </div>
    </div>
    <div className="dbr-mid">
      <div className="dbrm-top">
        <span>Earning</span>
        <span>
          <AiOutlineInfoCircle />
        </span>
      </div>
      <div className="dbrm-p-box">
        <div className="dbrm-progress" style={{ "--value": "76" }}></div>
      </div>
      <div className="tb-text dbrm-text">
        <h3 style={{ fontSize: "bold" }}>$26,256</h3>
        <p style={{ color: "gray", fontSize: "15px" }}>
          Earning this Month
        </p>
        <div className="dbrm-bottom">
          <div className="tb-pogress">+2.65%</div>
          <p style={{ color: "gray", fontSize: "15px" }}>
            From previous period
          </p>
        </div>
      </div>
    </div>
    <div className="dbr-bottom">
        <span>Recent Activity</span>
        <div className="dbrb-container">
          <div className="dbrb-box">
            <span>12</span>
            <span>Sep</span>
          </div>
          <div className="dbrb-text-box">
            <div className="dbrb-text">Responded to need "Volunteer Activities"</div>
          </div>
        </div>
        <div className="dbrb-container">
          <div className="dbrb-box">
            <span>11</span>
            <span>Sep</span>
          </div>
          <div className="dbrb-text-box">
            <div className="dbrb-text">Everyone realizes would be desirable..."</div>
            <span>Read more</span>
          </div>
        </div>
        <div className="dbrb-container">
          <div className="dbrb-box">
            <span>10</span>
            <span>Sep</span>
          </div>
          <div className="dbrb-text-box">
            <div className="dbrb-text">Joined the group "Boardsmanship Furum"</div>
          </div>
        </div>
    </div>
  </>
  )
}

export default DbRight