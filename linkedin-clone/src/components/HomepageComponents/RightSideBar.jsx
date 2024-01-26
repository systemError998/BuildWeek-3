import { useState, useRef } from 'react';
import { Button, Card, Collapse, ListGroup } from 'react-bootstrap'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default function RightSideBar() {

    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card className='w-100 p-0'>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title className='fs-6 fw-bold m-0'>LinkedIn Notizie</Card.Title>
                        <Button variant='nav-link' className='pt-0' ref={target} onClick={() => setShow(!show)}>
                            <i class="bi bi-info-square-fill"></i>
                        </Button>
                        <Overlay target={target.current} show={show} placement="left">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Queste sono le principali notizie e conversazioni del giorno. Scopri come vengono selezionate.
                                </Tooltip>
                            )}
                        </Overlay>
                    </div>
                    <Card.Text>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0'>
                                <ul>
                                    <li>
                                        <a href="" className='text-decoration-none text-dark fw-bold'>Ciao</a>
                                        <p className='text-secondary'>ciaiocaocoacao</p>
                                    </li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item action variant='ligth p-0'>
                                <ul>
                                    <li>
                                        <a href="" className='text-decoration-none text-dark fw-bold'>Ciao</a>
                                        <p className='text-secondary'>ciaiocaocoacao</p>
                                    </li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item action variant='ligth p-0 mb-0'>
                                <ul>
                                    <li>
                                        <a href="" className='text-decoration-none text-dark fw-bold'>Ciao</a>
                                        <p className='text-secondary mb-0'>ciaiocaocoacao</p>
                                    </li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <div id="collapse-right">
                        <Collapse in={open}>
                            <div>
                                <hr className='m-0 p-0 text-secondary' />
                                <ListGroup className='list-group-flush p-0'>
                                    <ListGroup.Item action variant='ligth p-0'>
                                        <ul>
                                            <li>
                                                <a href="" className='text-decoration-none text-dark fw-bold'>Ciao</a>
                                                <p className='text-secondary'>ciaiocaocoacao</p>
                                            </li>
                                        </ul>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant='ligth p-0'>
                                        <ul>
                                            <li>
                                                <a href="" className='text-decoration-none text-dark fw-bold'>Ciao</a>
                                                <p className='text-secondary'>ciaiocaocoacao</p>
                                            </li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Collapse>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='nav-link text-center'
                            variant='light'
                        >
                            Mostra altro
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className='mt-2'>
                <Card.Img src="https://citynews-reggiotoday.stgy.ovh/~media/horizontal-hi/3284318627482/il-mac-64.jpg" className='imgRightSideBar' />
            </Card>

        </>
    )
}
