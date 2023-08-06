import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {createUser}=useContext(authContext)
    const [error,setError]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        createUser(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            setError('')
        })
        .catch((error)=>{
            setError(error.message)
        })

        form.reset();
    }
   



  return (
    <div>
      <Form onSubmit={handleSubmit} className="border p-3">
        <div>
          <h3>Please Sign Up Here!</h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="d-flex">
        <Form.Check type="checkbox" label="I agree with " />
        <span className=" ps-1"><Link to={"/terms"}> Terms & Conditions</Link> </span>
        </div>
      </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <span className="ps-2 text-danger">{error}</span>
      </Form>
    </div>
  );
};

export default SignUp;
