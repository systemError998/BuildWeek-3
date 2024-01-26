import React from 'react'
import { Card } from 'react-bootstrap'

export default function EsperienzaDettaglioComponent({ posizione, azienda, descrizione, luogo, startDate, endDate }) {

    const startDateFormatted = new Date(startDate).toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'short',
      });

    const endDateFormatted = endDate
      ? new Date(endDate).toLocaleDateString('it-IT', {
          year: 'numeric',
          month: 'short',
        })
      : 'Presente';

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
                    <h4 className='fs-5 '>
                        {posizione}
                    </h4>
                    <h5 className='fs-6 fw-normal'>
                        {azienda} &#183; <span>Contratto</span>
                    </h5>
                    <h6 className='fs-6 fw-normal text-secondary'>
                        {startDateFormatted} - {endDateFormatted} &#183; {luogo} &#183; In sede
                    </h6>
                    <p className='fs-6 fw-normal'>
                        {descrizione}
                    </p>
                    <h6 className='fs-6'>
                        <i class="bi bi-gem"></i>
                        <span> Competenze</span>
                    </h6>
                </div>

            </Card.Body>
            {/* <hr /> */}
        </>
    )
}
