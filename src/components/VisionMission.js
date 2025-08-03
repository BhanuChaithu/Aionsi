import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTrophy, FaGlobe, FaLightbulb } from 'react-icons/fa';
import './VisionMission.css';

const VisionMission = () => {
  const pillars = [
    {
      icon: <FaTrophy />,
      title: 'Technical Excellence',
      description: 'Maintaining the highest standards in VLSI design and verification methodologies to deliver superior quality solutions.',
      details: [
        'Advanced design methodologies',
        'State-of-the-art tools and technologies',
        'Continuous skill development',
        'Quality-driven processes'
      ]
    },
    {
      icon: <FaGlobe />,
      title: 'Global Expansion',
      description: 'Expanding our global footprint to serve clients worldwide while maintaining local expertise and cultural understanding.',
      details: [
        'Multi-location delivery centers',
        '24/7 global support',
        'Local market expertise',
        'Cultural alignment'
      ]
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Leadership',
      description: 'Leading the industry in innovative semiconductor solutions and cutting-edge technology adoption.',
      details: [
        'R&D investment',
        'Emerging technology adoption',
        'Patent portfolio development',
        'Industry thought leadership'
      ]
    }
  ];

  return (
    <section className="vision-mission section-padding">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Vision & <span className="gradient-text">Mission</span>
            </h2>
            <p className="section-subtitle">
              Our commitment to excellence drives everything we do
            </p>
          </Col>
        </Row>
        
        <Row>
          {pillars.map((pillar, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div 
                className="pillar-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="pillar-icon">
                  {pillar.icon}
                </div>
                <h3>{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <ul className="pillar-details">
                  {pillar.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <div className="vision-statement" data-aos="fade-up">
              <h3>Our Vision</h3>
              <p className="vision-text">
                "To be the world's most trusted partner in semiconductor innovation, 
                accelerating the development of next-generation technologies that shape the future."
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisionMission; 