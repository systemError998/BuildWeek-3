import React, { useEffect, useState } from 'react';
import { ProfileInfoComponent } from './ProfileInfoComponent';
import ProfileEsperienzaComponent from './ProfileEsperienzaComponent';

export const MainProfileComponent = () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMmU3OTkxM2Y2NTAwMThkMDk1YmEiLCJpYXQiOjE3MDYxNzYxMjEsImV4cCI6MTcwNzM4NTcyMX0.O1zhA65zNqI-ZmpFBTPAmpGJ-zFueo8cw4ei9XuHWXw';

  const[profile, setProfile] = useState([]);

  useEffect(()=>{
    fetch("https://striveschool-api.herokuapp.com/api/profile/",{
      method: 'GET',
      headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
      setProfile(data[55]);
    })
    .catch(error=>{
      console.error(error)
    })
  },[])
  return (
    <>
      <ProfileInfoComponent profile={profile} />
      <ProfileEsperienzaComponent />
    </>
  );
}