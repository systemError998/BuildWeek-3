import { Button, Card } from 'react-bootstrap';
import EsperienzaDettaglioComponent from './EsperienzaDettaglioComponent'

export default function ProfileEsperienzaComponent({ experience }) {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <h2 className='fs-4'>Esperienza</h2>
                    <div>
                    <Button
                        variant="outline-secondary"
                        className='rounded-circle border-0'
                    >
                        <i className="bi bi-plus"></i>
                    </Button>
                    <Button
                        variant="outline-secondary"
                        className='rounded-circle ms-2 border-0'
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                    </div>
                </div>

                {experience.map((exp, key) => (
                    <EsperienzaDettaglioComponent posizione={exp.role} azienda={exp.company} luogo={exp.area} descrizione={exp.description} />
                ))}
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le esperienze </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}
