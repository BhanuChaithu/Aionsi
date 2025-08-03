import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h3 className="gradient-text">AIONSI</h3>
              <p>
                Your trusted partner in semiconductor innovation. We accelerate 
                the development of next-generation technologies that shape the future.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/aionsitechnologies/posts/?feedView=all" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">RTL Design & DFT</a></li>
                <li><a href="#services">Design Verification</a></li>
                <li><a href="#services">Embedded Systems</a></li>
                <li><a href="#services">PD & Layout</a></li>
                <li><a href="#services">Rule Checks</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5>Resources</h5>
              <ul>
                <li><a href="#whitepapers">Whitepapers</a></li>
                <li><a href="#webinars">Webinars</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:info@aionsi.com">info@aionsi.com</a></li>
                <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
                <li>123 Innovation Drive</li>
                <li>Tech Valley, CA 94000</li>
                <li>United States</li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">
              © 2024 AIONSI. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </Col>
        </Row>
      </Container>
      
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer; 