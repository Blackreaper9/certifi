import React, { useState } from 'react';
import { Card, Container, Navbar, Nav, Form, Button, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Home.css';
import CentrosDeAyuda from './CentrosDeAyuda';  // Importa el componente CentrosDeAyuda
import Profesionales from './Profesionales';    // Importa el componente Profesionales
import logo from './assets/ciberbloxlogo.png';  // Ruta correcta

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Usuario:", username, "Contraseña:", password);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Registrarse - Usuario:", registerUsername, "Gmail:", registerEmail, "Contraseña:", registerPassword);
        setShowRegisterModal(false);
    };

    return (
        <Router>
            <>
                {/* Navbar */}
                <Navbar className="navbar-custom" variant="light">
                    <Container>
                    <img src={logo} alt="ciberbloxlogo.png" style={{ width: '150px', marginRight: '20px' }} />  {}
                        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => setShowRegisterModal(true)}>
                                Regístrate
                            </Nav.Link>
                            <Nav.Link as={Link} to="/centros-ayuda">Centros de ayuda</Nav.Link>
                            <Nav.Link as={Link} to="/profesionales">Profesionales</Nav.Link>  {/* Nuevo link para Profesionales */}
                        </Nav>
                    </Container>
                </Navbar>

                <Container className="custom-container mt-3">
                    <Routes>
                        {/* Ruta para la página principal (inicio de sesión) */}
                        <Route path="/" element={
                            <Card className="custom-card">
                                <Card.Body>
                                    <Card.Title>Página de apoyo hacia la mujer "Déjanos ayudarte"</Card.Title>
                                    <Card.Text>
                                        Ingresa tu caso y nosotros te ayudaremos lo más pronto posible.
                                    </Card.Text>
                                </Card.Body>

                                {/* Formulario de Inicio de Sesión */}
                                <Card className="mt-3">
                                    <Card.Body>
                                        <Card.Title>Inicia Sesión</Card.Title>
                                        <Form onSubmit={handleLoginSubmit}>
                                            <Form.Group controlId="formUsername">
                                                <Form.Label>Nombre de Usuario</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="No ingreses tu nombre real"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formPassword" className="mt-3">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Ingresa tu contraseña"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>

                                            <Button style={{ backgroundColor: 'pink', color: 'white', border: 'none' }} type="submit">
                                                Iniciar Sesión
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Card>
                        } />

                        {/* Ruta para la página de Centros de Ayuda */}
                        <Route path="/centros-ayuda" element={<CentrosDeAyuda />} />

                        {/* Ruta para la página de Profesionales */}
                        <Route path="/profesionales" element={<Profesionales />} />  {/* Nueva ruta para Profesionales */}
                    </Routes>
                </Container>

                {/* Modal de Registro */}
                <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Registrarse</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleRegisterSubmit}>
                            <Form.Group controlId="registerUsername">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="No ingreses tu nombre real"
                                    value={registerUsername}
                                    onChange={(e) => setRegisterUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="registerEmail" className="mt-3">
                                <Form.Label>Correo Electrónico (Gmail)</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo Gmail"
                                    value={registerEmail}
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="registerPassword" className="mt-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    value={registerPassword}
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button style={{ backgroundColor: 'pink', color: 'white', border: 'none' }} type="submit" className="mt-3">
                                Registrarse
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        </Router>
    );
};

export default Home;
