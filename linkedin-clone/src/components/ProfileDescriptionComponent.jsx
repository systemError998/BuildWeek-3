import Card from 'react-bootstrap/Card'

export default function ProfileDescriptionComponent() {
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Text>
                    <h2 className='fs-4 mb-0'>Informazioni</h2>
                    <div className='mt-2'>
                        <p className='m-0'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Officia asperiores enim recusandae, aliquam alias ipsa ab,
                            laudantium pariatur aut similique eligendi, vero optio?
                            Tempore unde atque, rerum magnam fugiat sint.
                        </p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
