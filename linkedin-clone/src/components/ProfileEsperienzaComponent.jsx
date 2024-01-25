import React from 'react'
import { Button, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import EsperienzaDettaglioComponent from './EsperienzaDettaglioComponent'

export default function ProfileEsperienzaComponent() {
    return (
        <Card className='my-2 w-100'>
            <ListGroup variant="flush">
                <div className='position-relative'>
                    <h2 className='ms-3 mt-3 fs-4'>Esperienza</h2>
                    <Button
                        variant="outline-secondary"
                        className='position-absolute top-0 end-0 rounded-circle mt-2 me-3'
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                </div>
                <EsperienzaDettaglioComponent />
            </ListGroup>
        </Card>
    )
}