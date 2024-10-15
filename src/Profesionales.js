import React from 'react';
import { Container, Card } from 'react-bootstrap';



const Profesionales = () => {
    return (
        <Container className="mt-3">
            <Card>
                <Card.Body>
                    <Card.Title>Nuestros Profesionales</Card.Title>
                    <Card.Text>
                        Aquí encontrarás Toda la informacion acerca de las personas calificados para atender cada uno de los casos.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>


    );
};

export default Profesionales;