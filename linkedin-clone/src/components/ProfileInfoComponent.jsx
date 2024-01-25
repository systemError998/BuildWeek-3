import React from 'react'
import { Card, Button } from 'react-bootstrap';
import '../assets/css/MainProfileStyle.css'
import { BtnDisponibileComponent } from './BtnDisponibileComponent'
import { BtnAggiungiSezioneComponent } from './BtnAggiungiSezioneComponent';
import { BtnAltroComponent } from './BtnAltroComponent'
import Banner from '../assets/Banner-Profilo-LinkedIn.png'

export const ProfileInfoComponent = ({ profile }) => {
    return (
        <Card className='bg-white w-100'>
            <div className='position-relative mb-3'>
                <Card.Img
                    variant="top"
                    src={Banner}
                    style={{ height: '250px' }}
                    alt="banner-img"
                />
                <img
                    src={profile.image}
                    alt="profile-img"
                    style={{ height: "150px", width: "150px" }}
                    className='rounded-circle position-absolute top-100 start-0 translate-middle custom-margin border border-white border-3'
                />
            </div>
            <Card.Body >
                <div className='position-relative'>
                    <h2 className='mt-5 fs-3'>{profile.name} {profile.surname}</h2>
                    <Button
                        variant="outline-secondary"
                        className='position-absolute top-0 end-0 rounded-circle mt-2 me-2'
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
