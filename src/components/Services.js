import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaMicrochip, 
  FaCheckCircle, 
  FaCogs, 
  FaShieldAlt, 
  FaCode, 
  FaRuler 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaMicrochip />,
      title: 'RTL Design & DFT',
      description: 'Comprehensive RTL design with built-in Design for Testability (DFT) features for optimal test coverage.',
      features: ['RTL Coding', 'DFT Implementation', 'Scan Chain Design', 'Test Pattern Generation']
    },
    {
      icon: <FaCheckCircle />,
      title: 'Design Verification',
      description: 'Advanced verification methodologies including UVM, SystemVerilog, and formal verification.',
      features: ['UVM Framework', 'SystemVerilog', 'Formal Verification', 'Coverage Analysis']
    },
    {
      icon: <FaCode />,
      title: 'Embedded Systems',
      description: 'Complete embedded system design from hardware to software integration and optimization.',
      features: ['Firmware Development', 'Driver Development', 'System Integration', 'Performance Optimization']
    },
    {
      icon: <FaCogs />,
      title: 'PD & Layout',
      description: 'Physical design and layout services with advanced process nodes and design rule compliance.',
      features: ['Floor Planning', 'Place & Route', 'Timing Closure', 'DRC/LVS Verification']
    },
    {
      icon: <FaRuler />,
      title: 'Rule Checks',
      description: 'Comprehensive design rule checking and layout versus schematic verification for manufacturability.',
      features: ['DRC Verification', 'LVS Checking', 'ERC Analysis', 'Manufacturability Checks']
    },
    {
      icon: <FaShieldAlt />,
      title: 'IP Development',
      description: 'Custom IP development and integration for specialized applications and requirements.',
      features: ['Custom IP Design', 'IP Integration', 'Documentation', 'Verification']
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive VLSI and embedded systems solutions for your semiconductor needs
            </p>
          </Col>
        </Row>
        
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card 
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <Card.Body>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <div className="service-cta" data-aos="fade-up">
              <h3>Ready to Start Your Project?</h3>
              <p>Let's discuss how we can help bring your semiconductor vision to life</p>
              <button 
                className="btn-luxury"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services; 