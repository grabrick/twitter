import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/nav__logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <section className="Nav">
      <div className="Nav__image">
        <img src={Logo} alt="logo" className="Nav__logo" />
      </div>
      <div className="Nav__catalog">
        <ul>
          <div className="Nav__catalog_btn">
            <div className="Nav__catalog_image-home" />
            <NavLink to="/Home"><li className="Nav__catalog_link">Home</li></NavLink>
          </div>

          {/* <div className="Nav__catalog_btn">
            <div className="Nav__catalog_image-messages" />
            <li className="Nav__catalog_link">Messages</li>
          </div> */}

          <div className="Nav__catalog_btn">
            <div className="Nav__catalog_image-profile" />
            <NavLink to="/Profile"><li className="Nav__catalog_link">Profile</li></NavLink>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
