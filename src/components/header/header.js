import {Navbar, Nav,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () =>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">X Bank</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">AddUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Header;