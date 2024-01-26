import React from 'react'
import { Button, Card, Nav } from 'react-bootstrap';
import EpicodeLogo from '../assets/img/epicodeschool_logo.jpeg'

export default function ProfileInteressiComponent() {
    return (
        <Card className='w-100'>
            <Card.Header className='bg-white'>
                <h2 className='fs-4 my-2'>Interessi</h2>
                <Nav variant="tabs" defaultActiveKey="#first" className='mt-3'>
                    <Nav.Item>
                        <Nav.Link href="#first">Aziende</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Scuole o università</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body className='d-flex gap-2'>
                <img src={EpicodeLogo} style={{ width: '50px', height: '50px' }} />
                <div>
                    <Card.Title>EPICODE</Card.Title>
                    <Card.Text>
                        12.934 follower
                    </Card.Text>
                    <Button
                        variant='outline-secondary'
                        className='rounded-pill border-2 fw-semibold'
                    >
                        <i class="bi bi-check2"></i>
                        <span> Già segui</span>
                    </Button>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutti gli interessi </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}