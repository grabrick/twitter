import React, { FC, useState } from "react";
// import { useEffect } from "react";
import backImg from '../../../src/images/backImage.png'
import authLogo from '../../../src/images/nav__logo.svg'
import './AuthUser.css'
import AuthRegisterPopup from "./AuthRegisterPopup/AuthRegisterPopup";
import AuthLoginPopup from "./AuthLoginPopup/AuthLoginPopup";

const AuthUser: FC = () => {
    const [isPopup, setIsPopup] = useState<boolean | string>(false);

    const handlePopupRegistrClick = () => {
        setIsPopup("popupRegistr");
    };

    const handlePopupLoginClick = () => {
        setIsPopup("popupLogin");
    };



    return (
        <div className="auth">
                <div className="auth__main_wrapper">
                        <img src={backImg} alt="img" className="auth__main_image" />
                    <div className="auth__main_input-wrapper">
                        <div className="auth__main_input-logo_wrapper">
                            <img src={authLogo} alt="img" className="auth__main_input-logo" />
                        </div>

                        <div className="auth__main_input-text_wrapper">
                            <p className="auth__main_input-text">You are ready</p>
                            <p className="auth__main_input-title">Then join Twitter right now!</p>

                            <div className="auth__main_input-btn_wrapper">
                                <button className="auth__main_input-signup" onClick={handlePopupRegistrClick}>Register</button>
                                <div className="auth__links_wrapper">
                                    <p className="auth__main_text-info">Регистрируясь, вы соглашаетесь с 
                                        <span id="auth__links"> Условиями предоставления услуг</span> и 
                                        <span id="auth__links"> Политикой конфиденциальности</span>, а также с 
                                        <span id="auth__links"> Политикой использования файлов cookie</span>.
                                    </p>
                                </div>
                            </div>

                            <div className="auth__main_input-btn_wrapper-login">
                                <p className="auth__main_text-login">Have you already registered?</p>
                                <button className="auth__main_input-signin" onClick={handlePopupLoginClick}>To come in</button>
                            </div>
                            {isPopup === "popupRegistr" && <AuthRegisterPopup close={setIsPopup} />}
                            {isPopup === "popupLogin" && <AuthLoginPopup close={setIsPopup} />}
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default AuthUser;