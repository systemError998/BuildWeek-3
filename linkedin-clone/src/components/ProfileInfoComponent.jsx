import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import '../assets/css/MainProfileStyle.css'
import { BtnDisponibileComponent } from './BtnDisponibileComponent'
import { BtnAggiungiSezioneComponent } from './BtnAggiungiSezioneComponent';
import { BtnAltroComponent } from './BtnAltroComponent'
import Banner from '../assets/img/Banner-Profilo-LinkedIn.png'

export const ProfileInfoComponent = ({ profile }) => {

    const [editedData, setEditedData] = useState({
        name: profile.name,
        surname: profile.surname,
        title: profile.title,
        area: profile.area,
        bio: profile.bio
    });

    function editInfo(){
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      })
      .then(response => response.json())
      .then(updatedProfile =>{
        console.log('Updated profile: ', updatedProfile)
        //qui si potrebbe chiudere lo stato del eventuale modal
      })
      .catch(console.error(error))
    }

    const handleChange = (e) => {
        const { fieldName, value } = e.target;
        setEditedData(prevData => ({ ...prevData, [fieldName]: value }));
      };

        //INSERIRE TIPO 
        //value={editedData.name}
        //value={editedData.surname}
        //value={editedData.title}
         //value={editedData.area}
         //value={editedData.bio}
        //Form.control: onChange={handleChange}
        //Button : onClick={handleEdit}

    return (
        <Card className='bg-white w-100'>
            <div className='position-relative mb-3'>
                <div className='position-relative'>
                    <Card.Img
                        variant="top"
                        src={Banner}
                        style={{ height: '250px' }}
                        alt="banner-img"
                    />
                    <Button variant="light" className='position-absolute end-0 rounded-circle m-3'>
                        <i className="bi bi-camera-fill text-primary"></i>
                    </Button>
                </div>
                <img
                    src={profile.image}
                    alt="profile-img"
                    style={{ height: "150px", width: "150px" }}
                    className='rounded-circle position-absolute top-100 start-0 translate-middle custom-margin border border-white border-3'
                />
            </div>
            <Card.Body >
                <div className='d-flex justify-content-between align-items-baseline'>
                    <h2 className='mt-5 fs-3'>{profile.name} {profile.surname}</h2>
                    <Button
                        variant="outline-secondary"
                        className='rounded-circle border-0'
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                </div>
                <Card.Text>
                    <h2 className='fs-6 fw-normal'>{profile.title}</h2>
                    <h3 className='fs-6 fw-normal text-secondary'>{profile.area} &#183;
                        <span className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold'> Informazioni di contatto</span>
                    </h3>
                    <h4 className='fs-6 fw-normal text-primary fw-semibold'>150 collegamenti</h4>
                </Card.Text>
                <div className='d-flex gap-3'>
                    <BtnDisponibileComponent />
                    <BtnAggiungiSezioneComponent />
                    <BtnAltroComponent />
                </div>
            </Card.Body>
        </Card>
    )
}
