import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function TopBar() {
  let navigate = useNavigate()
  return <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Blog App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}> <i className="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/create')}> <i className="fa-solid fa-plus"></i> Create</Nav.Link>
            <Nav.Link onClick={()=>navigate('/dashboard')}> <i className="fa-solid fa-chart-line"></i> Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar