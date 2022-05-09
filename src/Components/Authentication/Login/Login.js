import axios from 'axios';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
  import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
 import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import './Login.css';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSignIn = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {data}=await axios.post('http://localhost:5000/login',{email});
        localStorage.setItem('accessToken',data.accessToken);
         navigate(from, { replace: true });
    }

    const navigateRegister = e => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent,please check your email');
        }
        else {
            toast('Please enter your email...');
        }
    }

    return (
        <div className='container'>
        <div className='row'>
            <div className=' col-sm-6 col-lg-4 mx-auto login mt-2'>
            <h2 className='text-info text-center mt-2'>Login</h2>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success w-50 mx-auto d-block mb-2 fw-bold" type="submit">
                    Sign In
                </Button>
            </Form>
            {errorMessage}
            <p>New User? <Link to="/register" className='text-primary text-decoration-none' onClick={navigateRegister}>Create Account</Link> </p>
            <p>Forget Password?<button className='btn btn-link text-primary  text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />
            </div>
            </div>
        </div>
    );
};

export default Login;