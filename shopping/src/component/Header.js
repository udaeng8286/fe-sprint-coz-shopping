import React, { useState } from "react";
import "./header.css";
import DropdownMenu from "./dropdown.js";

function Header() {
  const [openToggle,setToggle] = useState(false);

  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo-img">
          <img src="logo.png" alt="logo" />
        </div>
        <span className="logo-titie">COZ Shopping</span>
      </div>
      <div className="menu-comtainer">
        <img 
          className="hamburgerIcon" 
          src="hamburger.png" 
          alt="hamburger menu"
          onClick={()=>setToggle(!openToggle)}  
        />
        {openToggle && <DropdownMenu/>}
      </div>
    </header>
  );
}

export default Header;