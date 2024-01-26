import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SideBarComponent } from '../components/SideBarComponent'
import { MainProfileComponent } from '../components/MainProfileComponent'
import FooterProfile from '../components/FooterProfile'

export default function ProfilePage() {
  return (
    <Container className='mt-3'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <MainProfileComponent />
        </Col>
        <Col md={3}>
          <SideBarComponent />
        </Col>
      </Row>
      <FooterProfile />
    </Container>
  )
}
