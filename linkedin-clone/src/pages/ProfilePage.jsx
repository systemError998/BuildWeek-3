import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default function ProfilePage() {
  return (
    <Container>
      <Row className='gap-1 justify-content-around'>
        <Col xs={12} md={8}  className='bg-body-tertiary'>
          <p>Contenuto principale</p>
        </Col>
        <Col md={3} className='bg-body-tertiary'>
          <p>Barra laterale</p>
        </Col>
      </Row>
    </Container>
  )
}
