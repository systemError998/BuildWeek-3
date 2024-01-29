import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import CenterHomepage from './CenterHomepage'

export default function HomepageMain() {
  return (
    <Row>
        <Col md={3} className='d-flex justify-content-end flex-wrap'>
       <LeftSideBar/>
        </Col>
        <Col md={6}>
          <CenterHomepage />
        </Col>
        <Col md={3}>
          <RightSideBar/>
        </Col>
    </Row>
  )
}
