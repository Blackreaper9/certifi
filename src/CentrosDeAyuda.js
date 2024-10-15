import React from 'react';
import { Container, Card } from 'react-bootstrap';



const CentrosDeAyuda = () => {
    return (
        <Container className="mt-3">
            <Card>
                <Card.Body>
                    <Card.Title>Centros de Ayuda</Card.Title>
                    <Card.Text>
                        Aquí encontrarás información sobre centros de ayuda disponibles.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>


    );
};

export default CentrosDeAyuda;