import React from 'react'
import { ListGroup } from 'react-bootstrap'
import ImgAzienda from '../assets/img/Img-azienda.gif'

export default function EsperienzaDettaglioComponent({ posizione, azienda, descrizione, luogo }) {
    return (
        <ListGroup.Item className='d-flex gap-2'>
            <div
                style={{ width: '50px', height: '50px' }}
                className='d-flex justify-content-center align-items-center'
            >
                <i class="bi bi-buildings fs-2"></i>
            </div>
            <div>
                <h4 className='fs-5 '>
                    {posizione}
                </h4>
                <h5 className='fs-6 fw-normal'>
                    {azienda} &#183; <span>Contratto</span>
                </h5>
                <h6 className='fs-6 fw-normal text-secondary'>
                    Periodo &#183; {luogo} &#183; In sede
                </h6>
                <p className='fs-6 fw-normal'>
                    {descrizione}
                </p>
                <h6 className='fs-6'>
                    <i class="bi bi-gem"></i>
                    <span> Competenze</span>
                </h6>
            </div>
        </ListGroup.Item>
    )
}
