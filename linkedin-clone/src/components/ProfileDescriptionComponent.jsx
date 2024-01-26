import Card from 'react-bootstrap/Card'

export default function ProfileDescriptionComponent({bio}) {
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Text>
                    <h2 className='fs-4 mb-0'>Informazioni</h2>
                    <div className='mt-2'>
                        <p className='m-0'>
                            {bio}
                        </p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
