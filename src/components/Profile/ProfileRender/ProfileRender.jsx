import React from "react";
import ProfileComponent from "../ProfileCompanent/ProfileComponent";
import { useSelector } from "react-redux/es/exports";

function ProfileRender(state) {
    const ownerProfile = useSelector(state => state.profileUsers.ownUsers);
    const allUsers = useSelector(state => state.profileUsers.allUsers);

    // const switcher = () => {
    //     if(state.allUsers.id !== state.ownUsers.id) {
    //         ownerProfile()
    //     } else {
    //         allUsers()
    //     }
    // }
    
    const profileElement = ownerProfile.map(usersProfile => <ProfileComponent 
        name={usersProfile.name} 
        id={usersProfile.id} 
        job={usersProfile.job} 
        location={usersProfile.location} 
        hbInfo={usersProfile.hbInfo} 
        following={usersProfile.following} 
        followers={usersProfile.followers} />
        )
        
    return (
        <>
            {profileElement}    
        </>
    );
}

export default ProfileRender;