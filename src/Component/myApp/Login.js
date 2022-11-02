import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const diffToast = () => {
        toast.error("Login UnSuccessful!", {
            position:"top-center"
        });
        toast.success("Login Successful!", {
            position:"top-right"
        });
        toast.warn("Warning!", {
            position:"top-left"
        });
        toast.dark("Danger!", {
            position:"top-bottom"
        });
    }
    
  return (
    <>
        <div className="main-div">
            <h2>Welcome to signin page</h2>
            <button className="btn btn-primary" onClick={diffToast}>Login</button>
        </div>

        <ToastContainer />
    </>
  )
}

export default Login