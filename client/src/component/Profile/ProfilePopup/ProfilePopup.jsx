import { React, useState } from "react";
import './ProfilePopup.css'

function ProfilePopup({close}) {
    const [popup] = useState(false);

    const inactive = "popup";
    const active = "popup_opened";



    return (
      <>
        <div className={popup ? active : inactive} onClick={() => close(false)}>
          <div
            className="popup__container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup__container_wrapper">
              <div className="popup__wrapp_fixed">
                <div className="popup__wraper">
                  <div className="popup__wrapp_wrapper">
                    <button
                      type="button"
                      className="popup__button-close"
                      onClick={() => close(false)}
                    />
                    <h2 className="popup__title">Edit profile</h2>
                  </div>
                  <input
                    type="submit"
                    className="popup__button-save"
                    value="Save"
                    name="submit"
                  />
                </div>
              </div>
              <form className="popup__form" name="edit-Profile">
                <div className="auth__main_input-user_wrapper">
                  <div className="text-field2 text-field_floating-2 auth__main_input-email_wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Name
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="Bio"
                      name="Bio"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Bio
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="Job"
                      name="Job"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Job
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="Location"
                      name="Location"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Location
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="BirthDate"
                      name="BirthDate"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Birth date
                    </label>
                  </div>

                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="BirthDate"
                      name="BirthDate"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Birth date
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="BirthDate"
                      name="BirthDate"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Birth date
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="BirthDate"
                      name="BirthDate"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Birth date
                    </label>
                  </div>
                  <div className="text-field2 text-field_floating-2 auth__main_input-password_wrapper">
                    <input
                      type="text"
                      id="BirthDate"
                      name="BirthDate"
                      className="text-field__input2 text__field_input"
                    />
                    <label className="text-field__label2 text-lable2">
                      Birth date
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProfilePopup;