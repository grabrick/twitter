import React from "react";
import ProfileComponent from "../ProfileCompanent/ProfileComponent";
import { useAppSelector } from "../../../hooks/redux.hook";

function ProfileRender() {
  const Profile = useAppSelector(state => state.profileUsers.users);

  const profileElement = Profile.map((usersProfile:
    { name: string, id: string, photo?: string, backImage?: string, bio?: string, job: string, location: string, hbInfo: string, following: number, followers: number }
  ) => (
    <ProfileComponent
      name={usersProfile.name}
      id={usersProfile.id}
      photo={usersProfile.photo}
      backImage={usersProfile.backImage}
      bio={usersProfile.bio}
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