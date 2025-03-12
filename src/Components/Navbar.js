import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import logo from "../Assests/Images/main.jpg";

function NavbarTop() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              height="60px"
              width="100%"
              onClick={() => {
                navigate("main");
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("home");
                }}
              >
                Manhole
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("pathway");
                }}
              >
                PathWay
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i
                  class="bi bi-person-circle"
                  style={{ fontSize: "25px", color: "black" }}
                ></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
