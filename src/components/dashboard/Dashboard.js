import React from "react";
import DashboardNavbar from "../dbnavbar/DashboardNavbar";
import TopBox from "../topbox/TopBox";
import "./dashboard.css";
import { BiSearch } from "react-icons/bi";
import DbRight from "../dbRight/DbRight";
import DbLeftMid from "../dbLeftMid/DbLeftMid";
import DBLMLeft from "../dblm-left/DBLMLeft";
import DBLBmid from "../dblb-mid/DBLBmid";
import DBlbRight from "../dblb-right/DBlbRight";

const Dashboad = ({toggleState,setToggle}) => {
  return (
    <div className="dashboard">
      <DashboardNavbar toggleState={toggleState}  setToggle={setToggle}/>
      <div className="db-container">
        <div className="db-left">
          <div className="db-top">
            <div className="tb-box">
              <TopBox
                icon={<BiSearch className="tb-icon" />}
                text={"Revenue"}
                money={"21,456"}
                percent={"+2.65"}
              />
            </div>
            <div className="tb-box">
              <TopBox
                icon={<BiSearch className="tb-icon" />}
                text={"Revenue"}
                money={"21,456"}
                percent={"+2.65"}
              />
            </div>
            <div className="tb-box">
              <TopBox
                icon={<BiSearch className="tb-icon" />}
                text={"Revenue"}
                money={"21,456"}
                percent={"+2.65"}
              />
            </div>
          </div>
          <div className="db-mid">
            <DbLeftMid/>
          </div>
          <div className="db-bottom">
            <div><DBLMLeft/></div>
            <div><DBLBmid/></div>
            <div><DBlbRight/></div>
            
            
          </div>
        </div>
        <div className="db-right">
          <DbRight/>
        </div>
      </div>
    </div>
  );
};

export default Dashboad;
