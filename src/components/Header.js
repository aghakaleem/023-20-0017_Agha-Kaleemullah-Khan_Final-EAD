import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark text-white">
            <Container>
                <Navbar.Brand className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/"}> Fahad. </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav bar-nav text-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/all-projects"}> Projects </Link></Nav.Link>
                        <Nav.Link className={"text-white"} ><Link style={{textDecoration: 'none'}} className={"text-white"} to={"/reviews"}> Reviews </Link></Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">Social Media Profiles</Nav.Link>
                        <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/products"}> Products </Link></Nav.Link>
                        <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/contact-us"}> Contact Us </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
