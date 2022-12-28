import React, {useContext, useState} from "react";
import './AuthLoginPopup.css'
import {AuthContext} from "../../../context/AuthContext";
import { useHttp } from "../../../hooks/http.hook";

const AuthLoginPopup = ({close}) => {
    const [popup] = useState(false);
    const auth = useContext(AuthContext)
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
      email: "",
      password: "",
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            
        }
    }

    // const inactive = "auth__popup_login-main";
    // const active = "auth__popup_opened";

    const inactive = "popup__login";
    const active = "popup__login_opened";

    return (
      <>
        <div className={popup ? active : inactive}>
          <div
            className="auth__popup_login_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup__login_container-wrapper">
              <div className="auth__popup_login-wrapp_fixed">
                <div className="auth__popup_login-wrapper">
                  <div className="auth__popup_wrapp-wrapper">
                    <button
                      type="button"
                      className="popup__button-close"
                      onClick={() => close(false)}
                    />
                    <h2 className="popup__title">Login</h2>
                  </div>
                </div>
              </div>
              <form className="popup__form" name="edit-Profile">
                <div className="auth__main_login-input__user_wrapper">
                  <div className="auth__main_log-input__user_wrapper">
                    <div className="text-field-login text-field_floating-login auth__main_input-email_wrapper">
                      <input
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        className="text-field__input-login auth__main_input-email"
                        onChange={changeHandler}
                      />
                      <label className="text-field__label-reg text-lable-reg">
                        Email
                      </label>
                    </div>
                    <div className="text-field-login text-field_floating-login auth__main_input-password_wrapper">
                      <input
                        type="password"
                        placeholder="password"
                        id="password"
                        name="password"
                        className="text-field__input-login auth__main_input-password"
                        onChange={changeHandler}
                      />
                      <label className="text-field__label-reg text-lable-reg">
                        Password
                      </label>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="popup__button_login-save"
                    value="Save"
                    name="submit"
                    onClick={loginHandler}
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default AuthLoginPopup;