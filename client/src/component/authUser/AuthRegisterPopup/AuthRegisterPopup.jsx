import React, { useState } from "react";  
import './AuthRegisterPopup.css'
import { useHttp } from "../../../hooks/http.hook";

function AuthRegisterPopup({close}) {
    const [popup] = useState(false);
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
      name: "",
      bio: "",
      email: "",
      password: "",
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form})
            console.log("Data", data);
        } catch (e) {
            
        }
    }

    // const inactive = "auth__popup_register-main";
    // const active = "auth__popup_opened";

    const inactive = "popup__register";
    const active = "popup__register_opened";

    return (
      <>
        <div className={popup ? active : inactive} onClick={() => close(false)}>
          <div
            className="auth__popup_register_container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup__register_container-wrapper">
              <div className="auth__popup_register-wrapp_fixed">
                <div className="auth__popup_register-wrapper">
                  <div className="auth__popup_wrapp-wrapper">
                    <button
                      type="button"
                      className="popup__button-close"
                      onClick={() => close(false)}
                    />
                    <h2 className="popup__title">Register</h2>
                  </div>
                </div>
              </div>
              <form className="popup__form" name="edit-Profile">
                <div className="auth__main_register-input__user_wrapper">
                  <div className="auth__main_reg-input__user_wrapper">
                  <p className="auth__main_reg-text">Create an account</p>
                    <div className="text-field-reg text-field_floating-reg auth__main_input-email_wrapper">
                      <input
                        type="text"
                        placeholder="name"
                        id="name"
                        name="name"
                        className="text-field__input-reg auth__main_input-name"
                        onChange={changeHandler}
                      />
                      <label className="text-field__label-reg text-lable">
                        Name
                      </label>
                    </div>
                    <div className="text-field-reg text-field_floating-reg auth__main_input-email_wrapper">
                      <input
                        type="text"
                        placeholder="Bio"
                        id=""
                        name="bio"
                        className="text-field__input-reg auth__main_input-bio"
                        onChange={changeHandler}
                      />
                      <label className="text-field__label-reg text-lable">
                        Bio
                      </label>
                    </div>
                    <div className="text-field-reg text-field_floating-reg auth__main_input-email_wrapper">
                      <input
                        type="email"
                        placeholder="email"
                        id="email"
                        name="email"
                        className="text-field__input-reg auth__main_input-email"
                        onChange={changeHandler}
                      />
                      <label className="text-field__label-reg text-lable">
                        Email
                      </label>
                    </div>
                    <div className="text-field-reg text-field_floating-reg auth__main_input-password_wrapper">
                      <input
                        type="password"
                        placeholder="password"
                        id="password"
                        name="password"
                        className="text-field__input-reg auth__main_input-password"
                        onChange={changeHandler}
                      />
                      <label className="text-field__label-reg text-lable-reg">
                        Password
                      </label>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="popup__button_register-save"
                    value="Register"
                    name="submit"
                    onClick={registerHandler}
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

export default AuthRegisterPopup;