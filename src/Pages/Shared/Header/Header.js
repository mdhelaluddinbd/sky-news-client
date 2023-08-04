import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DateTime from "../DateTime/DateTime";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" mb-4 ">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary border rounded">
        <Container>
          <Navbar.Brand className="fw-bold" ><Link to={"/"} className="text-decoration-none"><span className="fs-2 text-dark">Sky</span> <span className="bg-danger text-white px-1 rounded">News</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="#features" >Home</Nav.Link>
              <Nav.Link href="#pricing">All News</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Breaking News
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Regular News
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Entertainment
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                Culture
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                Arts
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           

            <div className="d-flex">
                <Link className="fw-bold text-white text-decoration-none bg-primary rounded px-2 me-2"> Login</Link>
                <DateTime></DateTime>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
