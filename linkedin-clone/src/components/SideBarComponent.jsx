import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const SideBarComponent = () => {
  return (
    <>
      {/* <div>
        <h6 className='bg-white my-1 p-2'>Lingua del profilo</h6>
      </div>
      <hr />
      <div>
        <h6 className='bg-white my-1 p-2'>Public profile & URL</h6>
      </div> */}
      
      <Card style={{ width: '18rem' }} >
      <Card.Body className='bg-white rounded'>
        <div className='d-flex bg-white align-items-center justify-content-between'>
        <Card.Title >Lingua del profilo</Card.Title>
        <Button variant='link'><i class="bi bi-pencil bg-white text-black"></i></Button>
        </div>
        <p class="m-0 text-secondary">Italiano</p>
        <hr />
        <div className='d-flex bg-white align-items-center justify-content-between'>
        <Card.Title >Public profile & URL</Card.Title>
        <Button variant='link'><i class="bi bi-pencil bg-white text-black"></i></Button>
        </div>
        <p class="m-0 text-secondary">www.linkedin.com/in/*placeholder*</p>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Body>
        <Card.Title className='mb-3 fs-6 fw-bold'>Altri profili consultati</Card.Title>
        <div class="d-flex">
        <img class='imgCircle' src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1706054400&semt=sph" />
          <div class="d-flex flex-column ms-2 w-75">
            <Card.Text className='fw-bold my-0'>
              Nome Profilo
            </Card.Text>
            <Card.Text class="align-self-start w-100 mb-2">
            Social Media Manager
            </Card.Text>
            <Button variant="outline-dark" className='rndCircle w-75'><i class="bi bi-person-plus-fill"></i> Collegati</Button>
          </div>
        </div>
        <hr />
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Body>
        <Card.Title className='fs-6 fw-bold mb-1'>Persone che potresti conoscere</Card.Title>
        <p class="text-secondary fs-6">Dal tuo settore</p>
        <div class="d-flex">
        <img class='imgCircle' src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1706054400&semt=sph" />
          <div class="d-flex flex-column ms-2 w-75">
            <Card.Text className='fw-bold my-0'>
              Nome Profilo
            </Card.Text>
            <Card.Text class="align-self-start w-100 mb-2">
            Social Media Manager
            </Card.Text>
            <Button variant="outline-dark" className='rndCircle w-75'><i class="bi bi-person-plus-fill"></i> Collegati</Button>
          </div>
        </div>
        <hr />
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Body>
        <Card.Title className='fs-6 mb-1 font-monospace'><i class="bi bi-linkedin text-primary"></i> LEARNING</Card.Title>
        <p class="text-secondary fs-6">Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
        <div class="d-flex">
        <img class='w-25 h-25' src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1706054400&semt=sph" />
          <div class="d-flex flex-column ms-2 w-75">
            <Card.Text className='fw-bold my-0'>
              Gestire lo stress
            </Card.Text>
            <Card.Text class="align-self-start w-100 mb-2 text-secondary">
            13.598 Visualizzazioni
            </Card.Text>
          </div>
        </div>
        <hr />
        <div class="d-flex">
        <img class='w-25 h-25' src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1706054400&semt=sph" />
          <div class="d-flex flex-column ms-2 w-75">
            <Card.Text className='fw-bold my-0'>
              Leadership collaborativa
            </Card.Text>
            <Card.Text class="align-self-start w-100 mb-2 text-secondary">
            13.598 Visualizzazioni
            </Card.Text>
          </div>
        </div>
        <hr />
        <div class="d-flex">
        <img class='w-25 h-25' src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1706054400&semt=sph" />
          <div class="d-flex flex-column ms-2 w-75">
            <Card.Text className='fw-bold my-0'>
              Gestione del burnout
            </Card.Text>
            <Card.Text class="align-self-start w-100 mb-2 text-secondary">
            13.598 Visualizzazioni
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}
