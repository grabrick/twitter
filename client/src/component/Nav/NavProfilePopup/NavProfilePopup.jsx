import { React, useState } from "react";
import NavPopupRender from "../NavRender/NavPopupRender/NavPopupRender";
import NavLogoutRender from "./NavProfileLogoutRender/NavLogoutRender";
import './NavProfilePopup.css'

function NavProfilePopup({close}) {
    
    const [popup] = useState(false);

    const inactive = "nav__popup";
    const active = "nav__popup_opened";

    return (
      <>
        <div className={popup ? active : inactive} onClick={() => close(false)}>
          <div
            className="nav__popup_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav__popup_container-wrapper">
              <div className="nav__popup_wrapp-fixed">
                <NavPopupRender />
              </div>

              <div className="nav__popup_wrapp-logout" onClick={() => {
                // localStorage.clear()
                localStorage.removeItem('userData')
                }}>
                    <NavLogoutRender />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default NavProfilePopup;