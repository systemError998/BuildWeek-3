import { useState } from 'react';
import { Button, Card, Collapse, Form } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { PiHandsClapping } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { useSelector } from 'react-redux';
import LoadingSpinner from "../../LoadingSpinner";
import ImageApi from './ImageApi';

export default function PostHomepageCenter({ post }) {

    const [open, setOpen] = useState(false);
    const loading = useSelector(state => state.homepageUser.loading)
    //console.log(loading);

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
            {loading ? (<div className="d-flex justify-content-center"> <LoadingSpinner /> </div>)
                :
                post && post
                    .slice(5)
                    .sort(() => Math.random() - 0.5)
                    .slice(5, 10)
                    .map((e, index) =>
                        <>
                            <Card className='w-100 my-2' key={index}>
                                <div className='d-flex align-items-center mx-2'>
                                    <img src={e.user.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                                        className='rounded-circle border border-white border-3 postHeight'
                                    />
                                    <div className='w-100 d-flex align-items-center justify-content-between mx-2'>
                                        <div className='d-flex flex-column'>
                                            <h6 className='m-0 mt-2'>{e.user.name} {e.user.surname}</h6>
                                            <p className='d-inline m-0'>{e.user.title}</p>
                                            <p>{e.createdAt.slice(0, 10)} • <i className="bi bi-globe-asia-australia text-secondary"></i></p>
                                        </div>
                                        <Button variant="outline-primary" className='border-0 d-flex align-items-center'><FaPlus className='me-1' />Segui</Button>

                                    </div>
                                </div>
                                <Card.Body className='p-0 pt-1'>
                                    <Card.Text className='px-3'>
                                        {e.text}
                                    </Card.Text>
                                    <ImageApi img={e.text}/>
                                    <div className='d-flex justify-content-between mx-3'>
                                        <div>
                                            <AiFillLike className='text-primary' />
                                            <FcLike className='text-danger' />
                                            <PiHandsClapping className='text-success' />
                                        </div>
                                        <p className='my-1 text-secondary'> {Math.floor(Math.random() * 2000)} commenti • {Math.floor(Math.random() * 2000)} diffusioni post</p>
                                    </div>
                                    <hr className='mx-2 my-2 text-secondary' />
                                    <div className='d-flex flex-row justify-content-around my-1 mx-2'>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><SlLike className='fs-4 me-1' /> Consiglia</Button>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3" onClick={(e) => { e.preventDefault(); setOpen(!open); }}><BiCommentDetail className='fs-4 me-1' /> Commenta</Button>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><HiMiniArrowPathRoundedSquare className='fs-4 me-1' /> Diffondi il post</Button>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><IoIosSend className='fs-4 me-1' /> Invia</Button>
                                    </div>
                                </Card.Body>

                                <Collapse in={open}>

                                    <Card className='w-100 border-0'>
                                        <div className='createPost d-flex align-items-center'>
                                            <img src='https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg' alt="profile-img" style={{ height: "5em", width: "5em" }}
                                                className='rounded-circle border border-white border-3 commentImg ms-2'
                                            />

                                            <div className='d-flex align-items-center w-100 border rounded-5 mx-2'>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder="Aggiungi un commento..."
                                                    className='w-100 border-0 rounded-5 py-2'
                                                />
                                                <FaRegSmile className='me-2 fs-4' />
                                                <SlPicture className='me-4 fs-4' />
                                            </div>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <img src={e.user.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                                                className='rounded-circle border border-white border-3 commentImg ms-2'
                                            />
                                            <Card.Body className='px-1'>
                                                <Card.Text className='commentBg p-2 me-2 rounded'>
                                                    <h6 className='my-1'>{e.user.name} {e.user.surname}</h6>
                                                    {e.text}
                                                </Card.Text>
                                            </Card.Body>
                                        </div>

                                    </Card>
                                </Collapse>
                            </Card>
                        </>
                    )}
        </>
    )
}
