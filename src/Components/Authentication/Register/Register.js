import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import './Register.css';


const Register = () => {

  const [showPass, setShowPass] = useState(false);
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [errorMessage, setErrorMessage] = useState("");
//    const [user] = useAuthState(auth);
 
const navigate = useNavigate();

const navigateLogin = () => {
    navigate('/login');
}

  if (loading) {
    return <Loading></Loading>;
  }
  
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setErrorMessage("Password did not Matched");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center height-control">
      <div className="container">
        <div className="row">
          <div className=" col-sm-6 col-lg-4 mx-auto register mt-2">
            <div className="mb-3">
              <h2 className="text-primary text-center">Please Register</h2>
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    type={!showPass ? "password" : "text"}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Control
                    name="confirmPassword"
                    type={!showPass ? "password" : "text"}
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
                <p className="text-danger fw-bold">
                  {errorMessage ? errorMessage : ""}
                  <br />
                  {error ? error.message : ""}
                </p>
                <Form.Group className="mb-3" controlId="formBasicShowPass">
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onClick={() => setShowPass(!showPass)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                 
                >
                  Register
                </Button>
              </Form>
              Already have an account?{" "}
              <Link to="/login" className="btn btn-primary" onClick={navigateLogin}>
                Plelase Login
              </Link>
            </div>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;