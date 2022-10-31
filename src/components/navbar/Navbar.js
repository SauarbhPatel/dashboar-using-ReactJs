import React from "react";
import "./navbar.css";
import Navlink from "../navlink/Navlink";

import { AiOutlineAppstore } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { FiBox,FiCodesandbox } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";
import { SlCalender,SlHandbag } from "react-icons/sl";
import { BsFillChatDotsFill, BsFillFileZipFill } from "react-icons/bs";
import { MdOutlineStorefront, MdEmail } from "react-icons/md";
import { BiChevronDown ,BiBookAlt,BiWifi,BiPencil} from "react-icons/bi";
const Navbar = ({toggleState,setToggle}) => {
  const toggle = (e)=>{
    e.preventDefault()
    setToggle({
      display:'none'
    })

  }
  return (
    <div className="navbar" style={{display:toggleState.display==='block'?'block':'none'}}>
      <div className="head">
        <div className="title">
          <h5>TITLE</h5>
        </div>
        <div className="toggle" onClick={toggle}>
          <CgMenuLeft className="toggle-icon" />
        </div>
      </div>
      <div className="menu" >
        <h5 className="tag" >MENU</h5>
        <Navlink firstIcon={<AiOutlineAppstore className="icon" />} text="Dashboards" lastIcon={<BiChevronDown className="icon" />}  />
        <div style={{marginLeft:"15px"}}>
        <Navlink  text="Ecommerce" />
        <Navlink  text="Saas" />
        <Navlink  text="Crypto" />

        </div>

        
      </div>
      <div className="applications">
        <h5 className="tag">APPLICATION</h5>
      
        <Navlink firstIcon={<SlCalender className="icon" />} text="Calender" />
        <Navlink firstIcon={<BsFillChatDotsFill className="icon" />} text="Chat" />
        <Navlink firstIcon={<BsFillFileZipFill className="icon" />} text="File Manager" />
        <Navlink firstIcon={<MdOutlineStorefront className="icon" />} text="Ecommerce" lastIcon={<BiChevronDown className="icon" />}/>
        <Navlink firstIcon={<MdEmail className="icon" />} text="Email" lastIcon={<BiChevronDown className="icon" />}/>
        <Navlink firstIcon={<BiBookAlt className="icon" />} text="Invoices" lastIcon={<BiChevronDown className="icon" />}/>
        <Navlink firstIcon={<SlHandbag className="icon" />} text="Projects" lastIcon={<BiChevronDown className="icon" />}/>
        <Navlink firstIcon={<BiWifi className="icon" />} text="Contacts" lastIcon={<BiChevronDown className="icon" />}/>
       
      </div>
      <div className="layouts">
        <h5 className="tag">LAYOUTS</h5>
      </div>
      <div className="pages">
        <h5 className="tag">PAGES</h5>

        <Navlink firstIcon={<FaUserCheck className="icon" />} text="Authentication" lastIcon={<BiChevronDown className="icon" />}/>
        <Navlink firstIcon={<FiBox className="icon" />} text="Utility" lastIcon={<BiChevronDown className="icon" />}/>

      </div>
      <div className="components">
        <h5 className="tag">COMPONENTS</h5>
        <Navlink firstIcon={<FiCodesandbox className="icon" />} text="UI Elements" lastIcon={<BiChevronDown className="icon" />}/>
        <Navlink firstIcon={<BiPencil className="icon" />} text="Forms" lastIcon={<BiChevronDown className="icon" />}/>

      </div>
    </div>
  );
};

export default Navbar;
