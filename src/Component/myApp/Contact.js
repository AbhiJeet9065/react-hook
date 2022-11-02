import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Contact = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/index");
    };
  return (
    <>
        <h1>Hello {location.pathname.replace("/", '')} page</h1>
        <button className='btn-primary btn' onClick={goToHome}>Get back to home page</button>
    </>
  )
}

export default Contact