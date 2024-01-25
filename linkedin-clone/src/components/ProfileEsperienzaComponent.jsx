import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EsperienzaDettaglioComponent from './EsperienzaDettaglioComponent'

export default function ProfileEsperienzaComponent() {
    return (
        <Card style={{ width: '100%' }} className='my-2'>
            <ListGroup variant="flush">
                <h2 className='ms-3 mt-3 fs-4'>Esperienza</h2>
                <EsperienzaDettaglioComponent />
            </ListGroup>
        </Card>
    )
}
