import React, { useState } from "react";
import "./header.css";
import DropdownMenu from "./dropdown.js";
import { Link } from "react-router-dom";

function Header() {
  const [openToggle,setToggle] = useState(false);

  return (
    <header className="header-container">
      <Link to="/">
      <div className="logo-container">
        <div className="logo-img">
          
          <img src="logo.png" alt="logo" />
        </div>
        <span className="logo-titie">COZ Shopping</span>
      </div>
      </Link>
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