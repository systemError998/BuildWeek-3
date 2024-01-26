import { Button, Card, Dropdown } from 'react-bootstrap';
import EsperienzaDettaglioComponent from './EsperienzaDettaglioComponent'
import '../assets/css/MainProfileStyle.css'
import { MdOutlineWork, MdCalendarMonth } from "react-icons/md";

export default function ProfileEsperienzaComponent({ experience }) {

    
    return (
        <Card className='my-2 w-100'>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-baseline'>
                    <p className='fs-4 fw-semibold m-0'>Esperienza</p>
                    <div className='d-flex'>
                        <Dropdown>
                            <Dropdown.Toggle
                                className='rounded-circle border-0 bg-white text-secondary custom-dropdown-toggle'
                            >
                                <i className="bi bi-plus"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className='text-secondary'>
                                    <MdOutlineWork />
                                    <span> Aggiungi posizione lavorativa</span>
                                </Dropdown.Item>
                                <Dropdown.Item className='text-secondary'>
                                    <MdCalendarMonth />
                                    <span> Aggiungi pausa lavorativa</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle ms-2 border-0'
                        >
                            <i className="bi bi-pencil"></i>
                        </Button>
                    </div>
                </div>

                {experience.length > 0  ? (
                    experience.map((exp, key) => (
                    <EsperienzaDettaglioComponent 
                    posizione={exp.role} 
                    azienda={exp.company} 
                    luogo={exp.area} 
                    descrizione={exp.description} 
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    />))
                    ) 
                    : (<h4>Nessuna Esperienza :/ </h4>)}
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le esperienze </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}
