import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
            </a>
            <a href="tel:+123456789">
                <PhoneIcon />
            </a>
            
        </div>
        <p>&copy; 2024 Khaoula's Food</p>
    </div>
  );
}

export default Footer;
