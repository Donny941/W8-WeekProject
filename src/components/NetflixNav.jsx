import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
import kids from "../assets/kids_icon.png";
import { Search, BellFill } from "react-bootstrap-icons";

function NetflixNav() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fs-8 fw-1">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tv Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-3">
            <Search color="white" size={20} style={{ cursor: "pointer" }} />
            <img src={kids} alt="kids" style={{ width: "30px", height: "30px" }} />
            <BellFill color="white" size={20} style={{ cursor: "pointer" }} />
            <NavDropdown title={<img src={avatar} alt="avatar" style={{ width: "30px" }} />} id="basic-nav-dropdown-dark" menuVariant="dark" align="end">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#info">Info</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNav;
