import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const Character = ({name, status, image, origin}) => {
    return (
        <Col md={3}>
            <Card style={{ margin: '10px', width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {origin.name}
                        <span  className={status === 'Alive' ? 'alive' : 'dead'}>{status}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Character
