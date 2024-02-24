import React from 'react';
import { Navbar as BootstrapNavbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const brandStyle = {
    color: '#007bff', 
  };

  const copyrightStyle = {
    color: '#007bff',
    fontSize: '14px', 
    marginTop: '5px', 
  };

  return (
    <BootstrapNavbar bg="fff" variant="dark" className="py-2">
      <Container>
        <BootstrapNavbar.Brand href="#" style={brandStyle}>My Website</BootstrapNavbar.Brand>
        <div style={copyrightStyle}>
          &copy; {new Date().getFullYear()} - Created by iim7md11
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Footer;
