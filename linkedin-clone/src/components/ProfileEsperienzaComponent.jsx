import React from 'react'
import { Button, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import EsperienzaDettaglioComponent from './EsperienzaDettaglioComponent'

export default function ProfileEsperienzaComponent({ experience }) {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <h2 className='fs-4'>Esperienza</h2>
                    <Button
                        variant="outline-secondary"
                        className='rounded-circle border-0'
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                </div>

                {experience.map((exp, key) => (
                    <EsperienzaDettaglioComponent posizione={exp.role} azienda={exp.company} luogo={exp.area} descrizione={exp.description} />
                ))}
            </Card.Body>
        </Card>
    )
}
