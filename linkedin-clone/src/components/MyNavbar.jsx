import React from 'react'
import { Navbar, Nav, Dropdown, DropdownItem } from 'react-bootstrap';
import { TiHome } from "react-icons/ti";
import { IoPeople } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { useState, useEffect, useRef } from 'react';
import { FcVip } from "react-icons/fc";
import { fetchNavUser } from '../redux/slice/NavUserSlice';
import { useDispatch, useSelector } from 'react-redux';
import SearchNav from './Navbar/SearchNav';

import NavbarScroll from './Navbar/NavbarScroll';
import OffCanvNavbar from './Navbar/OffCanvNavbar';

export default function MyNavbar() {

  const dispatch = useDispatch();

  /* State e Set OffCanvas */
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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

  /* Fetch User */
  const userFetch = useSelector((state) => state.navUser.navUser);
  //console.log(userFetch.bio);

  useEffect(() => {
    dispatch(fetchNavUser());
  }, []);


  return (
    <div className='sticky-top'>
      <Navbar
        bg="white"
        data-bs-theme="light"
        className='py-0 my-0 border border-bottom-secondary'
      >
        <div
          className='d-flex justify-content-start align-items-center my-0 py-0'
          fluid style={{ margin: '0 10%' }}>
          {/*Contenitore della barra di navigazione + menù Navbar*/}
          <div
            className='d-flex justify-content-between align-items-center my-0 py-0'
            style={{
              width: '100%',
              borderRight: '1px solid #666666',
              height: '100%',
            }}
          >
            {/*Barra di ricerca e logo*/}
            <div><SearchNav /></div>
            {/*Voci del menù della Navbar*/}
            <div>
              <Nav
                className="d-flex justify-content-evenly align-items-baseline me-3"
                style={{ width: '30rem' }}>
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
                <div className='text-center'>
                  <div className='m-0 p-0'>
                    <img onClick={handleOpen} as={Nav.Link} src={userFetch.image} alt="Profile Picture" style={{ height: '1.7rem', width: '1.7rem', borderRadius: '50%', margin: '0', padding: '0' }} />
                    <Dropdown show={open} onClick={handleOpen} ref={ref}>
                      <Dropdown.Toggle as={Nav.Link} className='testoNavbar m-0 p-0'>
                        <span>Tu</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className='mt-2 dropdown-menu dropdown-menu-end'>
                        <DropdownItem className=' pb-0'>
                          <div className='d-flex justify-content-between align-items-top' style={{ width: '12rem' }}>
                            <div className='me-2'>
                              <img src={userFetch.image} alt="Profile Picture" style={{ height: '3rem', width: '3rem', borderRadius: '50%', margin: '0', padding: '0' }} />
                            </div>
                            <div className='d-flex flex-column flex-wrap text-wrap'>
                              <p className='nameSectionDropdown mb-1 fw-semibold' style={{ color: '#3B3B3B' }}>{userFetch && userFetch.name} {userFetch && userFetch.surname}</p>
                              <p className='text-break word-wrap'>{userFetch && userFetch.bio}</p>
                            </div>
                          </div>
                          <div className='dropdownButton' style={{ width: '100%' }}>
                            <span className='fw-semibold m-0 p-0'>Visualizza Profilo</span>
                          </div>
                        </DropdownItem>
                        <hr className='my-1' />
                        <div>
                          <ul className='navbarList ps-3'>
                            <li>
                              <p className='nameSectionDropdown mb-0 fw-semibold' style={{ color: '#3B3B3B' }}>Account</p>
                            </li>
                            <li>
                              <DropdownItem className='dropdownOption ps-0 fw-semibold d-flex align-items-center'>
                                <FcVip style={{ fontSize: '1.5rem' }} />
                                <span>Prova Premium per 0 EUR</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem className='dropdownOption ps-0'>Impostazioni e privacy</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem className='dropdownOption ps-0'>Guida</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem className='dropdownOption ps-0'>Lingua</DropdownItem>
                            </li>
                          </ul>
                        </div>
                        <hr className='my-1' />
                        <div>
                          <ul className='navbarList ps-3'>
                            <li>
                              <p className='nameSectionDropdown mb-0 fw-semibold' style={{ color: '#3B3B3B' }}>Gestisci</p>
                            </li>
                            <li>
                              <DropdownItem className='dropdownOption ps-0'>Post e Attività</DropdownItem>
                            </li>
                            <li>
                              <DropdownItem className='dropdownOption ps-0'>Account per la pubblicazione di off...</DropdownItem>
                            </li>
                          </ul>
                        </div>
                        <hr className='my-1' />
                        <DropdownItem className='dropdownOption'>Esci</DropdownItem>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Nav>
            </div>
          </div>
          {/*Voci del menù per le Aziende + Passa a Premium*/}
          <div
            className='d-flex align-items-center justify-content-baseline ps-2'
          >
            <div className='text-center' style={{ width: '8rem' }} >
              <div>
                <Nav.Link className='testoNavbar' onClick={handleShow}>   {/* onClick={handleShow} */}
                  <CgMenuGridR className='navbarIcon' />
                  <p className='mb-0'>Per le Aziende</p>
                </Nav.Link>
                <OffCanvNavbar show={show} onHide={handleClose} />
              </div>
            </div>
            <div>
              <Nav.Link className='text-center ms-3' href='#'>
                <p className='linkNavbar'>Prova Premium per 0 Eur</p>
              </Nav.Link>
            </div>
          </div>
        </div>
      </Navbar>
      <NavbarScroll />
    </div>
  )
}