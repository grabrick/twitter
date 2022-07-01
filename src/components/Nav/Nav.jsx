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
          <NavLink to="/" className="Nav__catalog-link_swipe">
            <div className="Nav__catalog_btn">
              <div className="Nav__catalog_image-home" />
              <li className="Nav__catalog_link">Home</li>
            </div>
          </NavLink>

          <NavLink to="/Message" className="Nav__catalog-link_swipe">
            <div className="Nav__catalog_btn">
              <div className="Nav__catalog_image-messages" />
              <li className="Nav__catalog_link">Messages</li>
            </div>
          </NavLink>

          <NavLink to="/Profile" className="Nav__catalog-link_swipe">
            <div className="Nav__catalog_btn">
              <div className="Nav__catalog_image-profile" />
              <li className="Nav__catalog_link">Profile</li>
            </div>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
