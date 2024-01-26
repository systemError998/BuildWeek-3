import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SideBarComponent } from '../components/SideBarComponent'
import { MainProfileComponent } from '../components/MainProfileComponent'
import { MyProfileComponent } from '../components/MyProfileComponent'
import { useParams } from 'react-router-dom'

export default function ProfilePage() {
  const { profileId } = useParams();

  return (
    <Container className='my-5'>
      <Row className='gap-1 justify-content-center'>
        <Col xs={12} md={8}>
        {profileId ? (
            <MainProfileComponent profileId={profileId} />
          ) : (
            /* se non ce profileId, vediamo il Mio Profilo*/
            <MyProfileComponent />
          )}
        </Col>
        <Col md={3}>
          <SideBarComponent />
        </Col>
      </Row>
    </Container>
  )
}
