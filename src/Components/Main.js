
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

function Main() {
  return (
    <div >
    <Navbar bg="secondary" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href='/signin'>Login</Nav.Link>
          <Nav.Link href='/signup'>New client</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Avatar alt="Login" src="/static/images/avatar/2.jpg" />
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Outlet/>
  </div>
  )
}
export default Main
