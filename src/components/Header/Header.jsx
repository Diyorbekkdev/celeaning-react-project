import React from "react";
import logo from "../../assets/images/logo.svg";
import cartGif from "../../assets/images/cart.gif";
import Button from "../Button/Button";
import Style from "./header.module.scss";

function Header() {
  return (
    <header className={Style.header}>
      <div className="header__container container">
        <nav className={`${Style.nav} header__nav`}>
          <div className={Style.nav__left}>
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
            <ul className={Style.nav_list}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#pages">Pages</a>
              </li>
            </ul>
            <li>
              <a className={Style.contact} href="#contact">
                Contact
              </a>
            </li>
          </div>
          <div className={Style.nav__right}>
            <a href="#cart" className={Style.cart}>
              <i className={Style.cart_gif}>
                <img src={cartGif} alt="" />
              </i>{" "}
              Cart (0)
            </a>
            <Button text="Get a free quote" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
