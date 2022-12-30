import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/nav__logo.svg";
import "./Nav.css";
import NavRender from "./NavRender/NavRender";

const Nav: FC = (props: any) => {
  // const [show, setShow] = React.useState<string>("Home")

  // const handleHomeClick = () => {
  //   setShow("Home");
  // }

  // const handleMessageClick = () => {
  //   setShow("Message");
  // }

  // const handleProfileClick = () => {
  //   setShow("Profile");
  // }

  // const handleFriendsClick = () => {
  //   setShow("Friends");
  // }

  // const activeColor = "nav__active";

  // const inactiveColor = "nav__inactive";

  // className={show === "Home" ? activeColor : inactiveColor} onClick={handleHomeClick}

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
                <div className={props.classHome}>
                  <NavLink to="/Home" className="Nav__catalog-link_swipe">
                    <div className="Nav__catalog_image-home" />
                    <li className="Nav__catalog_link">Home</li>
                  </NavLink>
                </div>
              </div>

              <div className="Nav__catalog_btn">
                <div className={props.classMessage}>
                  <NavLink to="/Message" className="Nav__catalog-link_swipe">
                    <div className="Nav__catalog_image-messages" />
                    <li className="Nav__catalog_link">Messages</li>
                  </NavLink>
                </div>
              </div>

              <div className="Nav__catalog_btn">
                <div className={props.classProfile}>
                  <NavLink to="/Profile" className="Nav__catalog-link_swipe">
                    <div className="Nav__catalog_image-profile" />
                    <li className="Nav__catalog_link">Profile</li>
                  </NavLink>
                </div>
              </div>

              <div className="Nav__catalog_btn">
                <div className={props.classFriends}>
                  <NavLink to="/Friends" className="Nav__catalog-link_swipe">
                    <div className="Nav__catalog_image-friends" />
                    <li className="Nav__catalog_link">Friends</li>
                  </NavLink>
                </div>
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
