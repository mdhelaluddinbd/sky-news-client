import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { createUser,updateUserProfile,verifyEmailAddress } = useContext(authContext);
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photoURL)
    
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        handleUpdateUserProfile(name,photoURL);
        handleUserEmailVerify();

        toast.success('Please verify Your Email Address')
      })
      .catch((error) => {
        setError(error.message);
      });

    form.reset();
    
  };

  const handleUpdateUserProfile=(name,photoURL)=>{
    const profile={
        displayName:name,
        photoURL:photoURL
    }
    updateUserProfile(profile)
    .then(()=>{

    })
    .catch((error)=>{
        console.error(error)
    })
  }

  const handleCheck=(event)=>{
    setAccept(event.target.checked)
  }

  const handleUserEmailVerify=()=>{
    verifyEmailAddress()
    .then(()=>{

    })
    .catch((error)=>{
      console.error(error)
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="border p-3">
        <div>
          <h3>Please Sign Up Here!</h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Profile</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className="d-flex">
            <Form.Check onClick={handleCheck} type="checkbox"  label="I agree with " />
            <span className=" ps-1">
              <Link to={"/terms"}> Terms & Conditions</Link>{" "}
            </span>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Login
        </Button>
        <span className="ps-2 text-danger">{error}</span>
      </Form>
    </div>
  );
};

export default SignUp;
