import React from 'react'
import { Navbar, Container, Nav, Form, Dropdown } from 'react-bootstrap';
import { TiHome } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import Logo from '../assets/logo.png';
import { useState, useEffect, useRef } from 'react';

export default function MyNavbar() {

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleOpen = () => setOpen(!open);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <>
    <Navbar
    bg="white"
    data-bs-theme="light"
    className='py-0 my-0 border border-bottom-secondary'
    >
        <div
        className='d-flex justify-content-start align-items-center my-0 py-0'
        fluid style={{width: 'auto', margin: 'auto'}}>
          {/*Contenitore della barra di navigazione + menù Navbar*/} 
          <div
          className='d-flex justify-content-between align-items-center my-0 py-0'
          style={{
            width: '90%',
          }}
          >
              {/*Barra di ricerca e logo*/}
              <div className='d-flex justify-content-between align-items-center my-0 py-0'>
                <img src={Logo} alt="logo" className='me-2' style={{width: '2.5rem'}}/>
                <div
                className='d-flex justify-content-between align-items-center rounded-1'
                style={{background: '#EDF3F8',
                border: 'none',}}>
                  <IoSearch className='navbarIcon ms-3' />
                  <Form.Control
                      type="text"
                      placeholder= "Cerca"
                      className="searchNav mr-sm-2"
                      style={{
                      background: '#EDF3F8',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none',
                      }}
                    />
                </div>
              </div>
              {/*Voci del menù della Navbar*/}
              <div>
                <Nav
                  className="d-flex justify-content-between align-items-baseline me-3"
                  style={{width: '30rem'}}>
                  <div className='text-center'>
                    <div className='d-flex flex-column justify-content-center'>
                      <Nav.Link className='testoNavbar'>
                        <TiHome className='navbarIcon' />
                        <p className='mb-0'>Home</p>
                      </Nav.Link>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='d-flex flex-column justify-content-center'>
                      <Nav.Link className='testoNavbar'>
                        <IoPeople className='navbarIcon' />
                        <p className='mb-0'>Rete</p>
                      </Nav.Link>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='d-flex flex-column justify-content-center'>
                      <Nav.Link className='testoNavbar'>
                        <MdOutlineWork className='navbarIcon' />
                        <p className='mb-0'>Lavoro</p>
                      </Nav.Link>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='d-flex flex-column justify-content-center'>
                      <Nav.Link className='testoNavbar'>
                        <AiFillMessage className='navbarIcon' />
                        <p className='mb-0'>Messaggistica</p>
                      </Nav.Link>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='d-flex flex-column justify-content-center'>
                      <Nav.Link className='testoNavbar'>
                        <FaBell className='navbarIcon' />
                        <p className='mb-0'>Notifiche</p>
                      </Nav.Link>
                    </div>
                  </div>
                  {/*SOTTO: Profilo personale - bisogna aggiunger un dropdown e
                  l'immagine del profilo che si aggiorna dinamicamente*/}
                  <div className='text-center'>
                    <div className= 'm-0 p-0'>
                      <img onClick={handleOpen} src={Logo} alt="Profile Picture" style={{height: '1.7rem', width: '1.7rem', borderRadius: '50%', margin: '0', padding: '0'}}/>
                      <Dropdown show={open} onClick={handleOpen} ref={ref}>
                        <Dropdown.Toggle as={Nav.Link} className='testoNavbar m-0 p-0'>
                          <span>Tu</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='mt-3 dropdown-menu dropdown-menu-end'>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Nav>
              </div>
          </div>
          {/*Voci del menù per le Aziende + Passa a Premium*/}     
          <div
          className='d-flex align-items-center py-1 ps-2'
          style={{
            borderLeft: '1px solid #666666',
            height: '100%',
          }}
          >
            {/*SOTTO: Bisogna aggiungere un Offcanvas per la voce seguente (vedi sito originale)*/}
            <div className='text-center'>
              <div className='d-flex flex-column justify-content-center'>
                <Nav.Link className='testoNavbar'>
                  <CgMenuGridR className='navbarIcon' />
                  <p className='mb-0'>Per le Aziende</p>
                </Nav.Link>
              </div>
            </div>
            <div>
                <Nav.Link className='linkNavbar text-center ms-3' href='#'>
                  Prova Premium per 0 Eur
                </Nav.Link>
            </div>
          </div>
        </div>
    </Navbar>
    </>
  )
}