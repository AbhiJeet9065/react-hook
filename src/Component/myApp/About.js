import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const About = () => {
    const location = useLocation();

    const Navigate = useNavigate();

    const goToContact = () => {
      Navigate("/contact")
    }
  return (
    <div>
        <button className='btn-primary btn' onClick={() => goToContact()}>Go to contact page</button>
        <button className='btn-primary btn' onClick={() => { Navigate(-1); }}>go back</button>

        {
            location.pathname === 'about/thapa' ?
            <p>Hii, Thapa Good to see you again</p> :
            <p>Login to see your files</p>
        }
    </div>
  )
}

export default About