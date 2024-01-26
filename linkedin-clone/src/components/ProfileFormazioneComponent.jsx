import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function ProfileFormazioneComponent() {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <h2 className='fs-4'>Formazione</h2>
                    <div>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle border-0'
                        >
                            <i className="bi bi-plus"></i>
                        </Button>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle ms-2 border-0'
                        >
                            <i className="bi bi-pencil "></i>
                        </Button>
                    </div>
                </div>
                <div className='d-flex gap-2 mt-3'>
                    <div
                        style={{ width: '50px', height: '50px' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <i class="bi bi-buildings fs-2"></i>
                    </div>
                    <div>
                        <h4 className='fs-5 '>
                            Istituto
                        </h4>
                        <h5 className='fs-6 fw-normal'>
                            Titolo di studio
                        </h5>
                        <h6 className='fs-6 fw-normal text-secondary'>
                            Periodo &#183; Città, Regione, Paese
                        </h6>
                        <p className='fs-6 fw-normal'>
                            Descrizione
                        </p>
                        <h6 className='fs-6'>
                            <i class="bi bi-gem"></i>
                            <span> Competenze</span>
                        </h6>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutti i titoli di studio </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}