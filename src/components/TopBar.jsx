import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import useLogout from '../hooks/useLogout'

function TopBar() {
    let role = sessionStorage.getItem('role')
    let logout = useLogout()
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Zendesk</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/dashboard' className='link'>Dashboard</Link></Nav.Link>
              {role==='superAdmin'?<Nav.Link><Link to='/user' className='link'>User Management</Link></Nav.Link>:<></>}
            </Nav>
          </Navbar.Collapse>
          <Button variant='danger' onClick={()=>logout()}>Logout</Button>
        </Container>
      </Navbar>
    );
  }
  
  export default TopBar;