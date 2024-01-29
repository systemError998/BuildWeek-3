import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { SlLike } from "react-icons/sl";





export default function CenterHomepage() {
  return (
    <>
        <Card className='w-100'>
            <div className='createPost d-flex align-items-center justify-content-around'>
                <img src='https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg' alt="profile-img" style={{ height: "5em", width: "5em" }}
                                    className='rounded-circle border border-white border-3 postHeight'
                    />
                <Button variant="outline-secondary searchBtn">Avvia un post</Button>
            </div>
            <div className='d-flex align-items-center justify-content-around mb-3'>
                <a href="#" className='text-decoration-none text-secondary fs-6'><i class="bi bi-image text-primary fs-5 me-1"></i> Contenuti multimediali</a>
                <a href="#" className='text-decoration-none text-secondary fs-6'><i class="bi bi-calendar3 text-warning fs-5 me-1"></i> Evento</a>
                <a href="#" className='text-decoration-none text-secondary fs-6'><i class="bi bi-card-text text-danger fs-5 me-1"></i> Scrivi un articolo</a>
            </div>
        </Card>

        <Card className='w-100'>
        <div className='d-flex align-items-center mx-2'>
                <img src='https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg' alt="profile-img" style={{ height: "5em", width: "5em" }}
                                    className='rounded-circle border border-white border-3 postHeight'
                    />
                <div className='w-100 d-flex align-items-center justify-content-between mx-2'>
                    <div className='d-flex flex-column'>
                    <h6 className='m-0 mt-2'>Pinco Pallino</h6>
                    <p className='d-inline m-0'>Junior Front-End Developer | HTML5 | CSS | Javascript</p> 
                    <p>3 giorni • <i className="bi bi-globe-asia-australia text-secondary"></i></p>
                    </div>
                    <Button variant="outline-primary" className='border-0 d-flex align-items-center'><FaPlus className='me-1' />Segui</Button>
                    
                </div>
            </div>
        <Card.Body className='p-0 pt-1'>
        <Card.Text className='px-3'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Card.Img variant="top" className='rounded-0' src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg" />
        <div>
            <p className='my-1 mx-2'>Diffusioni post</p>
        </div>
        <hr className='mx-2 my-2 text-secondary'/>
        <div className='d-flex flex-row justify-content-around my-1 mx-2'>
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><SlLike className='fs-4 me-1'/> Consiglia</Button>
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><BiCommentDetail className='fs-4 me-1'/> Commenta</Button>
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><HiMiniArrowPathRoundedSquare className='fs-4 me-1'/> Diffondi il post</Button>
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><IoIosSend className='fs-4 me-1'/> Invia</Button>
        </div>
        </Card.Body>
        </Card>
    </>
  )
}
