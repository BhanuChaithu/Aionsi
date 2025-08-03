import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCog, FaShieldAlt, FaHandshake, FaRocket } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <FaCog />,
      title: 'Technical Expertise',
      description: 'Deep domain knowledge in VLSI design, verification, and embedded systems with proven methodologies.',
      color: 'var(--royal-purple)'
    },
    {
      icon: <FaRocket />,
      title: 'Advanced Methodologies',
      description: 'State-of-the-art design tools and verification methodologies for optimal results.',
      color: 'var(--rich-gold)'
    },
    {
      icon: <FaHandshake />,
      title: 'Flexible Engagement',
      description: 'Customized engagement models to meet your specific project requirements and timelines.',
      color: 'var(--deep-black)'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security protocols and infrastructure to protect your intellectual property.',
      color: 'var(--jet-grey)'
    }
  ];

  return (
    <section className="why-choose-us section-padding">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Why Choose <span className="gradient-text">AIONSI</span>
            </h2>
            <p className="section-subtitle">
              We combine technical excellence with innovative solutions to deliver exceptional results
            </p>
          </Col>
        </Row>
        
        <Row>
          {advantages.map((advantage, index) => (
            <Col lg={6} md={6} className="mb-4" key={index}>
              <div 
                className="advantage-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="advantage-icon" style={{ color: advantage.color }}>
                  {advantage.icon}
                </div>
                <div className="advantage-content">
                  <h4>{advantage.title}</h4>
                  <p>{advantage.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <div className="trust-indicators" data-aos="fade-up">
              <div className="trust-item">
                <span className="trust-number">99%</span>
                <span className="trust-label">Client Satisfaction</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">24/7</span>
                <span className="trust-label">Support Available</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">ISO</span>
                <span className="trust-label">Certified Processes</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs; 