import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="black" expand="lg">
                <Container>
                    <Navbar.Brand href="/home" className='text-secondary'>Azizul Kabir Lavlu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='mx-1 text-decoration-none text-secondary  rounded-2' to="/home">Home</Link>
                            <Link className='mx-1 text-decoration-none text-secondary  rounded-2' to="/about">About</Link>
                            <Link className='mx-1 text-decoration-none text-secondary  rounded-2' to="/projects">Projects</Link>
                            <Link className='mx-1 text-decoration-none text-secondary  rounded-2' to="/blog">Blogs</Link>
                            <Link className='mx-1 text-decoration-none text-secondary  rounded-2' to="/contact">Contact</Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;