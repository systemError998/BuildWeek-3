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
import ProfileInteressiComponent from './ProfileInteressiComponent';// ID di prova:

// nessuna esperienza : "6551f702c55e7e0018f83c10"
// con esperienza: "6551e7bbc55e7e0018f83bfb"

//EDIT ID IN profileId2 (riga 26 aprox.)

export const MainProfileComponent = () => {

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMmU3OTkxM2Y2NTAwMThkMDk1YmEiLCJpYXQiOjE3MDYxNzYxMjEsImV4cCI6MTcwNzM4NTcyMX0.O1zhA65zNqI-ZmpFBTPAmpGJ-zFueo8cw4ei9XuHWXw';

  const[profile, setProfile] = useState([]);
  const[experience, setExperience] = useState([]);


  // const { profileId } = useParams();  USARE QUANDO SARÀ COLEGATO ALLA SIDEBAR

  const profileId2 = "6551e7bbc55e7e0018f83bfb"  ;

  const urlProfile = "https://striveschool-api.herokuapp.com/api/profile/";
  

  useEffect(()=>{
    profileExperienceFetch(profileId2); //cambiare a profileId quando sia colegato a useParams!
    profileListTest() //solo per vedere la lista

  },[])

  function profileListTest(){
    fetch(urlProfile,{
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

  

  function profileExperienceFetch(profileId){

    fetch(urlProfile + profileId,{
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
      
    

      return fetch(`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences`,{
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
      <ProfileDescriptionComponent />
      <ProfileAnalisiComponent />
      <ProfileRisorseComponent />
      <ProfileAttivitaComponent />
      <ProfileEsperienzaComponent experience={experience} />
      <ProfileFormazioneComponent />
      <ProfileCompetenzeComponent />
      <ProfileCorsiComponent />
      <ProfileLingueComponent />
      <ProfileInteressiComponent />
    </>
  );
}