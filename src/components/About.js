import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMicrochip, FaGlobe, FaUsers, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="about-content" data-aos="fade-right">
              <h2 className="section-title text-start">
                About <span className="gradient-text">AIONSI</span>
              </h2>
              
              <p className="about-description">
                AIONSI is a global product engineering services company specializing in VLSI, 
                Embedded Systems, and Semiconductor domains. With over 15 years of experience, 
                we have established ourselves as a trusted partner for leading semiconductor 
                companies worldwide.
              </p>
              
              <p className="about-description">
                Our team of expert engineers and designers work collaboratively to deliver 
                innovative solutions that accelerate semiconductor innovation and bring cutting-edge 
                products to market faster.
              </p>
              
              <div className="about-features">
                <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">
                    <FaMicrochip />
                  </div>
                  <div className="feature-content">
                    <h4>VLSI Design Excellence</h4>
                    <p>Advanced digital and analog design methodologies</p>
                  </div>
                </div>
                
                <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="feature-icon">
                    <FaGlobe />
                  </div>
                  <div className="feature-content">
                    <h4>Global Reach</h4>
                    <p>Serving clients across North America, Europe, and Asia</p>
                  </div>
                </div>
                
                <div className="feature-item" data-aos="fade-up" data-aos-delay="600">
                  <div className="feature-icon">
                    <FaUsers />
                  </div>
                  <div className="feature-content">
                    <h4>Expert Team</h4>
                    <p>Experienced engineers with deep domain expertise</p>
                  </div>
                </div>
                
                <div className="feature-item" data-aos="fade-up" data-aos-delay="800">
                  <div className="feature-icon">
                    <FaRocket />
                  </div>
                  <div className="feature-content">
                    <h4>Innovation Focus</h4>
                    <p>Cutting-edge technologies and methodologies</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="about-visual" data-aos="fade-left">
              <div className="about-image-container">
                <div className="about-image">
                  <div className="image-overlay"></div>
                  <div className="floating-card card-1">
                    <div className="card-icon">
                      <FaMicrochip />
                    </div>
                    <span>VLSI Design</span>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">
                      <FaGlobe />
                    </div>
                    <span>Global Services</span>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">
                      <FaRocket />
                    </div>
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 