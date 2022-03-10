import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const path = location.pathname;
    const hash = location.hash;
    const homePath = path === '/home' && hash === '#home';
    const servicesPath = path === '/home' && hash === '#services';
    const expertsPath = path === '/home' && hash === '#experts';
    const addServicePath = path === '/addService';
    const manageServicesPath = path === '/manageServices';
    return (
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="/home"><b className="text-secondary">Genius</b></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home"><b className={homePath ? 'text-light' : ''}>Home</b></Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services"><b className={servicesPath ? 'text-light' : ''}>Services</b></Nav.Link>
                    <Nav.Link as={HashLink} to="/home#experts"><b className={expertsPath ? 'text-light' : ''}>Experts</b></Nav.Link>
                    <Nav.Link as={Link} className={addServicePath ? 'text-light' : ''} to="/addService" style={{ textDecoration: 'none' }}>
                            <b>Add Service</b>
                    </Nav.Link>
                    <Nav.Link as={Link} className={manageServicesPath ? 'text-light' : ''} to="/manageServices" style={{ textDecoration: 'none' }}>
                        <b>Manage Service</b>
                    </Nav.Link>
                    {user?.email ?
                        <Nav.Link><Button onClick={logOut} variant="danger">Logout</Button></Nav.Link>
                        :
                        <Nav.Link as={Link} to="/login"><button className="btn btn-primary">Login</button></Nav.Link>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;