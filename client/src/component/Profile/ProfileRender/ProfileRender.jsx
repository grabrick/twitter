import React from "react";
import ProfileComponent from "../ProfileCompanent/ProfileComponent";
import { useSelector } from "react-redux/es/exports";

function ProfileRender() {
    const Profile = useSelector(state => state.profileUsers.users);
    
    const profileElement = Profile.map((usersProfile) => (
      <ProfileComponent
        name={usersProfile.name}
        id={usersProfile.id}
        photo={usersProfile.photo}
        backImage={usersProfile.backImage}
        discr={usersProfile.discr}
        job={usersProfile.job}
        location={usersProfile.location}
        hbInfo={usersProfile.hbInfo}
        following={usersProfile.following}
        followers={usersProfile.followers}
      />
    ));
        
    return (
        <>
            {profileElement}
        </>
    );
}

export default ProfileRender;