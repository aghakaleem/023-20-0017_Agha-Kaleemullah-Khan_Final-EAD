import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <Navbar expand="lg" className="bg-white text-dark">
            <Container>
                <Navbar.Brand className={"text-dark"}> <Link style={{textDecoration: 'none', color: 'black'}} to={"/"}> Grace </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav bar-nav text-dark" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"text-dark"}> <Link style={{textDecoration: 'none', color: 'black'}} to={"/"}> Home </Link></Nav.Link>
                        <Nav.Link className={"text-dark"}> <Link style={{textDecoration: 'none', color: 'black'}} to={"/products"}> Products </Link></Nav.Link>
                        <Nav.Link className={"text-dark"}> <Link style={{textDecoration: 'none', color: 'black'}} to={"/contact-us"}> Contact Us </Link></Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link className={"text-dark"}> <Link style={{textDecoration: 'none', color: 'black'}} to={"/cart"}> <FontAwesomeIcon icon={faShoppingCart} /> Cart </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;