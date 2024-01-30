import React, { useEffect, useState } from 'react';
import { ProfileInfoComponent } from './ProfileInfoComponent';
import ProfileDescriptionComponent from './ProfileDescriptionComponent';
import ProfileAnalisiComponent from './ProfileAnalisiComponent'
import ProfileRisorseComponent from './ProfileRisorseComponent'
import ProfileAttivitaComponent from './ProfileAttivitaComponent';
import ProfileEsperienzaComponent from './ProfileEsperienzaComponent';
import ProfileFormazioneComponent from './ProfileFormazioneComponent';
import ProfileCompetenzeComponent from './ProfileCompetenzeComponent';
import ProfileCorsiComponent from './ProfileCorsiComponent';
import ProfileLingueComponent from './ProfileLingueComponent';
import ProfileInteressiComponent from './ProfileInteressiComponent';
import PostFinto from './PostFinto';




export const MyProfileComponent = () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMmU3OTkxM2Y2NTAwMThkMDk1YmEiLCJpYXQiOjE3MDYxNzYxMjEsImV4cCI6MTcwNzM4NTcyMX0.O1zhA65zNqI-ZmpFBTPAmpGJ-zFueo8cw4ei9XuHWXw';

  const[profile, setProfile] = useState([]);
  const[experience, setExperience] = useState([]);
  const [updateProfile, setUpdateProfile] = useState(false);



  const urlMyProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
  

  useEffect(()=>{
    profileExperienceFetch(urlMyProfile); 
    profileListTest() //solo per vedere la lista

  },[updateProfile])

  function profileListTest(){
    fetch("https://striveschool-api.herokuapp.com/api/profile/",{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);

    
    })
    .catch(error=>{
      console.error(error)
    })

  }

  

  function profileExperienceFetch(urlProfile){

    fetch(urlProfile,{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log("This is profile data", data);
      setProfile(data);
      
    

      return fetch(`https://striveschool-api.herokuapp.com/api/profile/${data._id}/experiences`,{
         method: 'GET',
         headers:{
           'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
         }
       })
       .then(response => response.json())
       .then(exp => {
         console.log("this is experience fetch:", exp);
         setExperience(exp);
         
      })
    })
    .catch(error=>{
      console.error(error)
    })

  }

  function updateMyProfile(){
   
      setUpdateProfile(true);
    
}






  return (
    <>
    <PostFinto />
      <ProfileInfoComponent profile={profile} updateMyProfile={updateMyProfile}/>
      <ProfileDescriptionComponent bio={profile.bio} />
      <ProfileAnalisiComponent />
      <ProfileRisorseComponent />
      <ProfileAttivitaComponent />
      <ProfileEsperienzaComponent experience={experience} profileId={profile._id} updateMyProfile={updateMyProfile} />
      <ProfileFormazioneComponent />
      <ProfileCompetenzeComponent />
      <ProfileCorsiComponent />
      <ProfileLingueComponent />
      <ProfileInteressiComponent />
    </>
  );
}