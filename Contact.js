import React from 'react';
import about from '../assets/phone.jpeg'; 
import contactback from '../assets/contactback.jpg';

const Contact = () => {
  return (
    <div style={{
      margin: 0, 
      padding: 0,
      fontFamily: 'Arial, sans-serif', 
      backgroundImage: `url(${contactback})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '200vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center',
    }}>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>
      Contact Us</h1>
      <img 
        src={about} 
        alt="About Us" 
        style={{
          width: '90%', 
          maxWidth: '400px', 
          borderRadius: '10px', 
          marginBottom: '20px'
        }}
      />
      <div>
      <h4 style={{ textAlign: 'center', padding: '20px' }}>We’d love to hear from you! Whether you have questions, feedback, or inquiries about our handloom products, feel free to reach out to us. Your thoughts and concerns are important to us, and we’re here to help!</h4>
      
      <h2 style={{ textAlign: 'center', padding: '29px' }}>Get in Touch</h2>
      
      <h3 style={{ textAlign: 'center', padding: '16px' }}>Email:</h3>
      <h4 style={{ textAlign: 'center', padding: '16px' }}>For general inquiries, please contact us at:</h4>
      <h4 style={{ textAlign: 'center', padding: '16px' }}>info_handloomfashion@gmail.com</h4>

      <h3 style={{ textAlign: 'center', padding: '16px' }}>Phone</h3>
      <h4 style={{ textAlign: 'center', padding: '16px' }}>For immediate assistance, you can reach us at:</h4>
      <h4 style={{ textAlign: 'center', padding: '16px' }}>9102837465</h4>
      <h4 style={{ textAlign: 'center', padding: '16px' }}>(Available Monday to Friday, 9 AM - 5 PM)</h4>

      <h3 style={{ textAlign: 'center', padding: '16px' }}>Follow Us on Social Media:</h3>
      <div>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-instagram" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-facebook" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-twitter" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-linkedin" style={{ fontSize: '24px' }}></i>
        </a>
    </div>
    </div>
    </div>
  );
};

export default Contact;
