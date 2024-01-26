import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function ProfileLingueComponent() {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <h2 className='fs-4'>Lingue</h2>
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

                <div className='mt-3'>
                    <div>
                        <h4 className='fs-5 '>
                            Italiano
                        </h4>
                        <p className='text-secondary m-0'>Conoscenza madrlingua o bilingue</p>
                    </div>
                    <hr />
                    <div>
                        <h4 className='fs-5 '>
                            Inglese
                        </h4>
                        <p className='text-secondary m-0'>Conoscenza lavorativa professionale</p>
                    </div>
                </div>

            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le lingue </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}