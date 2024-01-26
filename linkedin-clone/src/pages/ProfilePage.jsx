import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SideBarComponent } from '../components/SideBarComponent'
import { MainProfileComponent } from '../components/MainProfileComponent'
import { MyProfileComponent } from '../components/MyProfileComponent'

export default function ProfilePage() {
  return (
    <Container className='my-5'>
      <Row className='gap-1 justify-content-center'>
        <Col xs={12} md={8}>
          {/* <MainProfileComponent /> */}
          <MyProfileComponent/>
        </Col>
        <Col md={3}>
          <SideBarComponent />
        </Col>
      </Row>
    </Container>
  )
}
