import React from 'react'
import { Card, Button } from 'react-bootstrap';
import '../assets/css/MainProfileStyle.css'
import { BtnDisponibileComponent } from './BtnDisponibileComponent'
import { BtnAggiungiSezioneComponent } from './BtnAggiungiSezioneComponent';
import { BtnAltroComponent } from './BtnAltroComponent'
import Banner from '../assets/img/Banner-Profilo-LinkedIn.png'

export const ProfileInfoComponent = ({ profile }) => {
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
                    <p className='fs-3 fw-semibold mt-5 mb-0'>{profile.name} {profile.surname}</p>
                    <Button
                        variant="outline-secondary"
                        className='rounded-circle border-0'
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                </div>
                <Card.Text>
                    <p className='m-0'>{profile.title}</p>
                    <p className='m-0 text-secondary'>{profile.area} &#183;
                        <span className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold'> Informazioni di contatto</span>
                    </p>
                    <p className='m-0 fw-semibold text-primary'>
                        150 collegamenti
                    </p>
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
