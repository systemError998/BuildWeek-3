import React from 'react'
import { Card } from 'react-bootstrap';
import '../assets/css/MainProfileStyle.css'
import { BtnDisponibileComponent } from './BtnDisponibileComponent'
import { BtnAggiungiSezioneComponent } from './BtnAggiungiSezioneComponent';
import { BtnAltroComponent } from './BtnAltroComponent'
import EditIconComponent from './EditIconComponent';

export const ProfileInfoComponent = () => {
    return (
        <Card className='bg-white w-100'>
            <div className='position-relative mb-3'>
                <Card.Img
                    variant="top"
                    src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                    style={{ height: '250px' }}
                    alt="banner-img"
                />
                <img
                    src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I"
                    alt="profile-img"
                    style={{ height: "150px", width: "150px" }}
                    className='rounded-circle position-absolute top-100 start-0 translate-middle custom-margin border border-white border-3'
                />
            </div>
            <Card.Body >
                <div className='position-relative'>
                    <Card.Title className='mt-5 fs-3'>Nome Cognome</Card.Title>
                    <EditIconComponent />
                </div>
                <Card.Text>
                    <h2 className='fs-6 fw-normal'>Profilo professionale</h2>
                    <h3 className='fs-6 fw-normal text-secondary'>Città, Regione, Paese &#183;
                        <span className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'> Informazioni di contatto</span>
                    </h3>
                    <h4 className='fs-6 fw-normal text-primary'>numero collegamenti</h4>
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