import React from "react";
import "./dbNavbar.css";
import Flag from "../../img/flag.png";
import Profile from "../../img/profile.jpg";
import { BiSearch } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSettings3Line } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";

const DashboardNavbar = ({ toggleState, setToggle }) => {
  const toggle = (e) => {
    e.preventDefault();
    setToggle({
      display: "block",
    });
  };
  return (
    <div className="db-nav">
      <div className="db-title">
        <div
          className="toggle"
          onClick={toggle}
          style={{
            display: toggleState.display === "block" ? "none" : "block",
            marginRight: "10px",
          }}
        >
          <CgMenuLeft className="toggle-icon" color="black" />
        </div>
        <span>Dashboard</span>
      </div>
      <div className="db-link">
        <div className="db-icon-box">
          <BiSearch className="db-icon" />
        </div>
        <div className="db-icon-box">
          <img src={Flag} className="db-img" alt="horse" />
        </div>
        <div className="db-icon-box">
          <AiOutlineAppstore className="db-icon" />
        </div>
        <div className="db-icon-box">
          <IoNotificationsOutline className="db-icon" />
        </div>
        <div className="db-icon-box">
          <RiSettings3Line className="db-icon" />
        </div>
        <div className="db-icon-box">
          <img src={Profile} className="db-profile" alt="horse" />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
