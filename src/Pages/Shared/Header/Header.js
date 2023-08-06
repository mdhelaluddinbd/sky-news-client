import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaUser } from "react-icons/fa6";
import { Image } from "react-bootstrap";

const Header = () => {
  const { user,logOut } = useContext(authContext);
  const handleSignOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch((error)=>{
      console.error(error)
    })
  }
  return (
    <div className=" mb-4 ">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary border rounded"
       
      >
        <Container  >
          <Navbar.Brand className="fw-bold" >
            <Link to={"/"} className="text-decoration-none">
              <span className="fs-2 text-dark">Sky</span>{" "}
              <span className="bg-danger text-white px-1 rounded">News</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
            <Nav.Link ><Link className="text-decoration-none fw-bold" to={"/"}>Home </Link></Nav.Link> 
             
              <NavDropdown title="News Categories" id="collasible-nav-dropdown">
                <LeftSideNav></LeftSideNav>
              </NavDropdown>
            </Nav>

            <div className="d-flex justify-content-center align-items-center">
             
            <div>
            {
                user?.photoURL ?
                <Image className="pe-2" style={{height:"2rem"}} roundedCircle src={user?.photoURL}></Image>
                :
                <FaUser></FaUser>
              }
            </div>
              
              <div>

                {
                  user?.uid?
                 <>
                  <span className="mt-2 pe-2">{user?.displayName}</span>
                 <button onClick={handleSignOut} className="btn btn-primary fw-bold">Log Out</button>
                 </>

                  :
                 <div>
                   <Link to={"/login"} className="fw-bold text-white text-decoration-none bg-primary rounded p-2 m-2">
                
                Login
              </Link>
              <Link to={"/signup"} className="fw-bold text-white text-decoration-none bg-primary rounded p-2 m-2">
                
                Sign Up
              </Link>
                 </div>
                }
              
              
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
