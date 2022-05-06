import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from './../../../images/google.png';

const GoogleLogin = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorMessage;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (googleUser) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorMessage}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-success w-25 d-block mx-auto my-2 mb-3'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    {/* <span className='px-2 fw-bold'>Sign In</span> */}
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;