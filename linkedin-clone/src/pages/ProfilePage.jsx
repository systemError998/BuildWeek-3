import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SideBarComponent } from '../components/SideBarComponent'
import { MainProfileComponent } from '../components/MainProfileComponent'

export default function ProfilePage() {
  return (
    <Container>
      <Row className='gap-1 justify-content-around'>
        <Col xs={12} md={8} className='bg-body-tertiary'>
          <MainProfileComponent />
        </Col>
        <Col md={3} className='bg-body-tertiary'>
          <SideBarComponent />
        </Col>
      </Row>
    </Container>
  )
}
