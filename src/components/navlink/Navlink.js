import React from 'react'
import "./navlink.css";


const Navlink = ({firstIcon,text,lastIcon}) => {
  return (
    <div className="box">
    <div className="flex">
      <div className="icon">
        {firstIcon}
      </div>
      <div className="text">{text}</div>
    </div>
    <div className="icon" style={{display:lastIcon===""?"none":"block"}}>
      {lastIcon}
    </div>
  </div>
  )
}

export default Navlink