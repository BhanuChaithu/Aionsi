import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavExpanded(false);
  };

  return (
    <Navbar 
      className={`navbar-luxury ${isScrolled ? 'scrolled' : ''}`}
      expand="lg" 
      fixed="top"
      expanded={isNavExpanded}
      onToggle={() => setIsNavExpanded(!isNavExpanded)}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-luxury">
          <span className="gradient-text">AIONSI</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggler-luxury"
        >
          {isNavExpanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('services')}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('case-studies')}>Case Studies</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            <Button 
              className="btn-luxury ms-2"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 