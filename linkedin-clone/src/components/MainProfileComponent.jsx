import React, { useEffect, useState } from 'react';
import { ProfileInfoComponent } from './ProfileInfoComponent';
import ProfileAnalisiComponent from './ProfileAnalisiComponent'
import ProfileRisorseComponent from './ProfileRisorseComponent'
import ProfileEsperienzaComponent from './ProfileEsperienzaComponent';

export const MainProfileComponent = () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMmU3OTkxM2Y2NTAwMThkMDk1YmEiLCJpYXQiOjE3MDYxNzYxMjEsImV4cCI6MTcwNzM4NTcyMX0.O1zhA65zNqI-ZmpFBTPAmpGJ-zFueo8cw4ei9XuHWXw';

  const[profile, setProfile] = useState([]);
  const[experience, setExperience] = useState([]);

  const urlProfile = "https://striveschool-api.herokuapp.com/api/profile/";
  

  useEffect(()=>{
    profileExperienceFetch(urlProfile);

  },[])

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
      console.log(data[0]);
      setProfile(data[100]);
      

      return fetch(`https://striveschool-api.herokuapp.com/api/profile/${data[100]._id}/experiences`,{
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


  return (
    <>
      <ProfileInfoComponent profile={profile} />
      <ProfileEsperienzaComponent experience={experience} />
    </>
  );
}