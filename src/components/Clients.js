import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'Qualcomm', logo: 'Qualcomm' },
    { name: 'Samsung', logo: 'Samsung' },
    { name: 'AMD', logo: 'AMD' },
    { name: 'Intel', logo: 'Intel' },
    { name: 'NVIDIA', logo: 'NVIDIA' },
    { name: 'Broadcom', logo: 'Broadcom' },
    { name: 'MediaTek', logo: 'MediaTek' },
    { name: 'TSMC', logo: 'TSMC' }
  ];

  return (
    <section className="clients-section section-padding">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Trusted by <span className="gradient-text">Leading Companies</span>
            </h2>
            <p className="section-subtitle">
              We work with global semiconductor leaders to deliver innovative solutions
            </p>
          </Col>
        </Row>
        
        <Row className="clients-carousel">
          <Col>
            <div className="clients-container" data-aos="fade-up">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="client-logo"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="logo-placeholder">
                    {client.logo}
                  </div>
                  <span className="client-name">{client.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <div className="clients-cta" data-aos="fade-up">
              <h3>Join Our Prestigious Client List</h3>
              <p>Partner with us to accelerate your semiconductor innovation</p>
              <button 
                className="btn-luxury"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Become a Client
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Clients; 