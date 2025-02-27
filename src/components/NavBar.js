import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

function NavBarComp() {
  const [show, setShow] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between w-100">
        {/* Toggle Button (Left) */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="order-1 border-0"  // Remove border
          onClick={() => setShow(true)} 
        />

        {/* Full-Screen Navbar Links (Hidden in Small Screens) */}
        <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Sidebar for Small Screens */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header className="d-flex justify-content-between">
          {/* Custom Close Button */}
          <button 
            className="btn btn-link text-uppercase text-dark ms-auto text-decoration-none" 
            onClick={() => setShow(false)}
            style={{fontWeight: 'bold'}}
          >
            Close
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={() => setShow(false)}>HOME</Nav.Link>
            <Nav.Link href="#about" onClick={() => setShow(false)}>ABOUT</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setShow(false)}>PROJECTS</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setShow(false)}>CONTACT</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default NavBarComp;
