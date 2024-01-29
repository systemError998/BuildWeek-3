import React from 'react'
import { Container } from 'react-bootstrap'
import { IoBookmarkSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosSettings } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { BsClipboard2Check } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { LiaEditSolid } from "react-icons/lia";
import { PiTargetBold } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

export default function JobPage() {
  return (
    <Container>
      <div className='row mt-4'
      style={{
        width: '87%',
        margin: 'auto',
      }}>
        <div className='col-3 pe-4'>
          {/*Menù laterale JobPage*/}
          <div
          className='bg-light pt-4 pb-3 pe-3 ps-3 rounded-4'
          style={{
            border: "1px solid #DFDEDA",
          }}>
            <ul className='list-unstyled'>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{color: '#404040'}}>
                <IoBookmarkSharp className='me-3 fs-5 my-0' />
                <p className='menuJob fw-semibold my-0'>
                  Le mie offerte di lavoro
                </p>
              </li>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{color: '#404040'}}>
                <TfiMenuAlt className='me-3 fs-5 my-0' />
                <p className='menuJob fw-semibold my-0'>Preferenze</p>
              </li>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{color: '#404040'}}>
                <BsClipboard2Check className='me-3 fs-4 my-0' />
                <p className='menuJob fw-semibold my-0'>Valutazione delle competenze</p>
              </li>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{color: '#404040'}}>
                <IoLogoYoutube className='me-3 fs-4 my-0' />
                <p className='menuJob fw-semibold my-0'>Indicazioni per chi cerca lavoro</p>
              </li>
              <li as={Link} to='#' className='linkJobMenu d-flex align-items-center' style={{color: '#404040'}}>
                <IoIosSettings className='me-3 fs-4 my-0' />
                <p className='menuJob fw-semibold my-0'>Impostazioni candidatura</p>
              </li>
            </ul>
          </div>
          {/*Pulsante Laterale JobPage*/}
          <div
          className='buttonJobMenu as={Link} to="#" mt-3 fw-semibold px-4 py-2 d-flex align-items-center justify-content-center'
          style={{width: '100%', borderRadius: '26px'}}>
            <LiaEditSolid className='me-4 fs-3 my-0' />
            <span className='menuJob text-center'>Pubblica offerta gratuita</span>
          </div>
        </div>
        <div className='col-6'>
          <div className='bg-light px-3 py-4'>
            <h4 className='mb-0'>Selezione in corso</h4>
            <p className=''>Offerte di lavoro che potrebbero esserti sfuggite</p>

            {/*oggetto da mappare*/}
            <div className='row'>
              <div className='col-2'>

              </div>
              <div className='col-9 d-flex flex-column'>
                <p>Geometra</p>
                <span>Gallo Prefabbricati s.r.l.</span>
                <span>Gioia del Colle, Puglia, Italia (In sede)</span>
                <span> <PiTargetBold /> Selezione attiva</span>
                <div>
                  <span> <FaCheck /> Visualizzato Promosso </span>
                  <span> <BsLinkedin /> Candidatura semplice </span>
                </div>
              </div>
              <div className='col-1'>
              <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
        <div className='col-3 bg-danger'>
          <p>Colonna 3</p>
        </div>
      </div>
    </Container>
  )
}
