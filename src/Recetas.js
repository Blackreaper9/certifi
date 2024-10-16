import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

// Importa las imágenes de las recetas
import comida1 from './assets/comida1.jpg';
import comida2 from './assets/comida2.jpg';
import comida3 from './assets/comida3.jpg';

const Recetas = () => {
    return (
        <Container className="mt-4">
            <h2 className="text-center">Recetas de Comida</h2>
            <p className="text-center">Descubre algunas de las recetas más deliciosas y fáciles de preparar.</p>

            <Row className="mt-4">
                <Col md={4}>
                    <Card className="mb-4">
                        <Image src={comida3} fluid />
                        <Card.Body>
                            <Card.Title>Ensalada César</Card.Title>
                            <Card.Text>
                                Una ensalada clásica con un toque delicioso de pollo a la parrilla y aderezo de césar. Perfecta como plato principal o acompañamiento.
                            </Card.Text>
                            <Card.Text>
                                <strong>Preparación:</strong> Lava la lechuga, asa el pollo, prepara el aderezo y mezcla con crutones. Listo para servir.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Image src={comida2} fluid />
                        <Card.Body>
                            <Card.Title>Spaghetti a la Boloñesa</Card.Title>
                            <Card.Text>
                                Un plato italiano tradicional con salsa de tomate y carne molida, acompañado de espaguetis al dente.
                            </Card.Text>
                            <Card.Text>
                                <strong>Preparación:</strong> Cocina la pasta, prepara la salsa boloñesa con carne, cebolla y tomate. Mezcla y sirve con queso parmesano.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Image src={comida1} fluid />
                        <Card.Body>
                            <Card.Title>Tacos de Carnitas</Card.Title>
                            <Card.Text>
                                Tacos mexicanos de carnitas de cerdo con cebolla, cilantro y salsa verde. Una explosión de sabor en cada bocado.
                            </Card.Text>
                            <Card.Text>
                                <strong>Preparación:</strong> Cocina las carnitas en su jugo, calienta las tortillas y sirve con cebolla, cilantro y salsa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Recetas;