import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/nav__logo.svg";
import Avatar from "../../images/profile.svg"
import MoreLine from "../../images/more-line.svg"
import "./Nav.css";

function Nav() {
  return (
    <section className="Nav">
      <div className="Nav__wrapper_main">
        <div className="Nav__wrapper">
          <div className="Nav__image">
            <img src={Logo} alt="logo" className="Nav__logo" />
          </div>
          <div className="Nav__catalog">
            <ul className="Nav__catalog_wrapper">
              <div className="Nav__catalog_btn">
                <NavLink to="/Home" className="Nav__catalog-link_swipe">
                  <div className="Nav__catalog_image-home" />
                  <li className="Nav__catalog_link">Home</li>
                </NavLink>
              </div>

              <div className="Nav__catalog_btn">
                <NavLink to="/Message" className="Nav__catalog-link_swipe">
                  <div className="Nav__catalog_image-messages" />
                  <li className="Nav__catalog_link">Messages</li>
                </NavLink>
              </div>

              <div className="Nav__catalog_btn">
                <NavLink to="/Profile" className="Nav__catalog-link_swipe">
                  <div className="Nav__catalog_image-profile" />
                  <li className="Nav__catalog_link">Profile</li>
                </NavLink>
              </div>

              <div className="Nav__catalog_btn">
                <NavLink to="/Friends" className="Nav__catalog-link_swipe">
                  <div className="Nav__catalog_image-friends" />
                  <li className="Nav__catalog_link">Friends</li>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
        <div className="Nav__user_main-wrapper">
          <div className="Nav__user_main-wrapper_wrap">
            <img src={Avatar} alt="avatar" className="Nav__user_photo avatar" />
            <div className="Nav__user_wrapper">
              <p className="Nav__user_name">Davide Biscuso</p>
              <span className="Nav__user_id">@biscuttu</span>
            </div>
            <img src={MoreLine} alt="" className="Nav__user_more" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
