import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-particles"></div>
      </div>
      
      <Container className="hero-container">
        <Row className="align-items-center min-vh-100">
          <Col lg={8} md={10} className="mx-auto text-center">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <h1 className="hero-title">
                Your Trusted{' '}
                <span className="gradient-text">IC Design Partner</span>
              </h1>
              
              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
                Accelerating semiconductor innovation with expert VLSI & Embedded design services
              </p>
              
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
                <Button 
                  className="btn-luxury me-3 mb-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Get in Touch
                  <FaArrowRight className="ms-2" />
                </Button>
                
                <Button 
                  className="btn-outline-luxury mb-3"
                  onClick={() => scrollToSection('services')}
                >
                  Explore Services
                  <FaPlay className="ms-2" />
                </Button>
              </div>
              
              <div className="hero-stats" data-aos="fade-up" data-aos-delay="800">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Successful Tapeouts</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Global Clients</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 