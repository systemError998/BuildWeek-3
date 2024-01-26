import React from 'react'
import { Card } from 'react-bootstrap'

export default function EsperienzaDettaglioComponent({ posizione, azienda, descrizione, luogo }) {
    return (
        <>
            <Card.Body className='d-flex gap-2'>
                <div
                    style={{ width: '50px', height: '50px' }}
                    className='d-flex justify-content-center align-items-center'
                >
                    <i class="bi bi-buildings fs-2"></i>
                </div>
                <div>
                    <p className='m-0 fs-5 fw-semibold'>
                        {posizione}
                    </p>
                    <p className='m-0'>
                        {azienda} &#183; <span>Contratto</span>
                    </p>
                    <p className='m-0 text-secondary'>
                        Periodo &#183; {luogo} &#183; In sede
                    </p>
                    <p className='m-0'>
                        {descrizione}
                    </p>
                    <p className='m-0'>
                        <i class="bi bi-gem"></i>
                        <span> Competenze</span>
                    </p>
                </div>

            </Card.Body>
            {/* <hr /> */}
        </>
    )
}
