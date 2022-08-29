import React, {useState} from "react";
import ProfilePopup from "../ProfilePopup/ProfilePopup";


function ProfileComponent(state) {
  const [isPopup, setIsPopup] = useState(false);

  const handlePopupClick = () => {
    setIsPopup("popupEdit");
  };

  return (
    <div className="profile__main_info">
      <div className="profile__main_header">
        <div className="profile__avatar_wrapper">
          <img src={state.photo} alt="" className="profile__main_logo avatar" />
        </div>
        <button className="profile__main_btn" onClick={handlePopupClick}>Edit profile</button>
      </div>

      <div className="profile__main_subtitle">
        <div className="profile__main_element1">
          <p className="profile__main_name">{state.name}</p>
          <span className="profile__main_login">{state.id}</span>
        </div>

        <div className="profile__main_element2">
          <p className="profile__main_discription">{state.discr}</p>
          <p className="profile__main_job">{state.job}</p>
          <span className="profile__main_location">{state.location}</span>
          <span className="profile__main_hb-info">{state.hbInfo}</span>
        </div>

        <div className="profile__main_element3">
          <p className="profile__main_following">
            {state.following}
            <span className="profile__main-following_span">following</span>
          </p>
          <p className="profile__main_Followers">
            {state.followers}
            <span className="profile__main-Followers_span">Followers</span>
          </p>
        </div>
        {isPopup === "popupEdit" && <ProfilePopup close={setIsPopup} />}
      </div>
    </div>
  );
}

export default ProfileComponent;