import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div id="sidebar" className="container">
      <ul class="menu">
        <li class="dropdown dropdown-4">
          Menu
          <ul class="dropdown_menu dropdown_menu-4">
            <li class="dropdown_item-1"><a href="#home">Home</a></li>
            <li class="dropdown_item-2"><a href="#about">About</a></li>
            <li class="dropdown_item-3"><a href="#services">Services</a></li>
            <li class="dropdown_item-4"><a href="#pages">Pages</a></li>
            <li class="dropdown_item-5"><a href="#contact">Contact</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
