import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

export default function HomepageMain() {
  return (
    <Row>
        <Col md={3} className='d-flex justify-content-end flex-wrap'>
       <LeftSideBar/>
        </Col>
        <Col md={6}>
        <Card className='w-100'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col md={3}>
          <RightSideBar/>
        </Col>
    </Row>
  )
}
