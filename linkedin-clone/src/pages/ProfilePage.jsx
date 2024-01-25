import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SideBarComponent } from '../components/SideBarComponent'
import { MainProfileComponent } from '../components/MainProfileComponent'

export default function ProfilePage() {
  return (
    <Container className='my-5'>
      <Row className='gap-1 justify-content-around'>
        <Col xs={12} md={8}>
          <MainProfileComponent />
        </Col>
        <Col md={3}>
          <SideBarComponent />
        </Col>
      </Row>
    </Container>
  )
}
