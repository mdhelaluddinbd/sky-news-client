import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle,FaGithub, FaFacebook,FaYoutube,FaTwitter,FaWhatsapp,FaLinkedin,} from "react-icons/fa6";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(authContext);
  const googleProvider= new GoogleAuthProvider();
  const navigate=useNavigate();

  const handleGoogleLogin = () => {
    

    providerLogin(googleProvider)
    .then((result)=>{
      const user=result.user;
      console.log(user)
      navigate('/')
    })
    .catch((error)=>{
      console.error(error);
    })
  };




  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogin}
          className="mb-2"
          variant="outline-primary"
        >
          {" "}
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With GitHub
        </Button>
      </ButtonGroup>

      <div className="mt-3">
        <h5>Find Us On</h5>
        <ListGroup>
          <Link className="text-decoration-none">
            <ListGroup.Item className="mb-3">
              {" "}
              <FaFacebook /> Facebook
            </ListGroup.Item>
          </Link>
          <Link className="text-decoration-none">
            {" "}
            <ListGroup.Item className="mb-3">
              <FaYoutube /> Youtube
            </ListGroup.Item>
          </Link>
          <Link className="text-decoration-none">
            <ListGroup.Item className="mb-3">
              <FaTwitter /> Twitter
            </ListGroup.Item>
          </Link>
          <Link className="text-decoration-none">
            <ListGroup.Item className="mb-3">
              <FaWhatsapp /> Whatsapp
            </ListGroup.Item>
          </Link>
          <Link className="text-decoration-none">
            <ListGroup.Item className="mb-3">
              <FaLinkedin /> Linkedin
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </div>

      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
