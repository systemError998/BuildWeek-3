import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ProfileAttivitaComponent() {
    return (
        <Card className="my-2">
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='fs-4 mb-0'>Attività</h2>
                        <h4 className='fs-6 fw-normal text-primary fw-semibold'>150 follower</h4>
                    </div>
                    <div>
                        <Button
                            variant='outline-primary'
                            className='rounded-pill border border-2 border-primary fw-semibold'>
                            Crea un post
                        </Button>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle ms-2 border border-0'
                        >
                            <i className="bi bi-pencil"></i>
                        </Button>
                    </div>
                </div>
                <div className='d-flex gap-2 mt-2'>
                    <div>
                        <p className='m-0 fw-semibold'>
                            Non hai ancora pubblicato nulla
                        </p>
                        <p className='m-0'>
                            I post che condividi appariranno qui
                        </p>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le attività </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}
