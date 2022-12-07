import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/nav__logo.svg";
import "./Nav.css";
import NavRender from "./NavRender/NavRender";

const Nav: FC = () => {
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

        <NavRender name={""} photo={""} id={""} /> {/* Render маленького профиля */}

      </div>
    </section>
  );
}

export default Nav;
