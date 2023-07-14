import React from "react";
// import useDetectClose from "../hooks/useDetectClose";
// import { Link } from "react-router-dom";
import './dropdown.css';
const DropdownMenu = () => {
    return (
        <div className="dropdown_container">
        <div className="dropdownItem">
        <ul>
          <li>
            <span>송유정님, 안녕하세요!</span>
          </li>
          <li>
            <img src="productListPage.png" alt=""/>
                상품리스트 페이지
          </li>
          <li>
          <img src="bookMarkPage.png" alt=""/>
                북마크 페이지
          </li>
        </ul>
        </div>
      </div>
    );
};

export default DropdownMenu;