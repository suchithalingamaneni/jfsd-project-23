import React from 'react';
import about from '../assets/about.jpg'; 

const About = () => {
  return (
    <div style={{
      margin: 0, 
      padding: 0,
      fontFamily: 'Arial, sans-serif', 
      backgroundImage: `url(${about})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      height: '150vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      alignItems: 'center',
    }}>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <img 
        src={about} 
        alt="Handloom Fashion" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }} 
      />
      <div style={{
        position: 'relative',
        zIndex: 1,
      }}>
        <h3 style={{ textAlign: 'left' }}>Welcome to Handloom Fashion!</h3>
        <p>At Handloom Fashion, we are passionate about promoting the rich tradition of handloom textiles. Our platform connects you with exclusive, handcrafted pieces created by artisans across diverse regions. Each product in our collection reflects the dedication, creativity, and craftsmanship of these artisans, celebrating the beauty of traditional weaving techniques.</p>
        <h3 style={{ textAlign: 'left' }}>Our Mission</h3>
        <p>Our mission is to empower artisans by providing them a global platform to showcase their work. We believe in the importance of preserving heritage and cultural identity through textiles. By supporting these artisans, we aim to create a sustainable future for handloom craftsmanship.</p>
        <h3 style={{ textAlign: 'left' }}>Artisanal Craftsmanship</h3>
        <p>Handloom weaving is an ancient art form that requires skill, precision, and passion. Our curated collection includes a variety of textiles—from sarees to shawls, home decor to fashion accessories—all crafted using time-honored methods. Each piece is unique, created with natural materials and traditional techniques passed down through generations.</p>
        <h3 style={{ textAlign: 'left' }}>Sustainability and Ethical Fashion</h3>
        <p>We believe in slow fashion and are committed to sustainability. Handloom products are eco-friendly, made with minimal machinery and natural resources. By choosing handloom, you are making a conscious decision to support sustainable fashion and preserve our environment for future generations.</p>
        <h3 style={{ textAlign: 'left' }}>Join Us in Supporting Artisans</h3>
        <p>When you purchase from Handloom Fashion, you’re not just buying a product—you’re supporting the livelihood of artisans and their families. Together, we can promote ethical practices in the fashion industry while celebrating the creativity and heritage behind each handcrafted masterpiece.</p>
      </div>
    </div>
  );
};

export default About;
