import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
    const [error,setError]=useState('');
  const navigate = useNavigate();
  const { signUser,setLoading } = useContext(authContext);
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';

  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('')
        form.reset();

       if(user.emailVerified){
        return  navigate(from,{replace:true});
       }
       else{
        toast.error('Please verify your email')
       }

      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(()=>{
        setLoading(false)
      })
  };
  return (
    <div>
      <Form onSubmit={handleSignInUser} className="border p-3">
        <div>
          <h3>Please Login Here!</h3>
        </div>
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

        <Button variant="primary" type="submit">
          Login
        </Button>

        <span className="ps-2 text-danger">{error}</span>
      </Form>
    </div>
  );
};

export default Login;
