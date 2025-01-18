import React from 'react'
import './Details.css';
import { FaFacebook, FaInstagram,FaWhatsapp,FaViber , FaTwitter} from 'react-icons/fa';

const Details = () => {
  return (
    <>
    <div className='main'>
        <div className='left'>
       <h1>info@thenext.edu.np</h1>
       <h1>+977-01-5970268</h1>
        </div>
      
       


      <div className='right'>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size="2em" color="#1877F2" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size="2em" color="#E1306C" />
      </a>
      <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size="2em" color="#25D366" />
      </a>
      <a href="https://viber.com" target="_blank" rel="noopener noreferrer">
        <FaViber size="2em" color="#665CAC" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size="2em" color="#1DA1F2" />
      </a>
      </div>



      </div>
  
    </>
  );
}

export default Details;
