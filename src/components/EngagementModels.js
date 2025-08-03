import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { FaUsers, FaGlobe, FaHandshake, FaRocket } from 'react-icons/fa';
import './EngagementModels.css';

const EngagementModels = () => {
  const [activeTab, setActiveTab] = useState('onsite');

  const models = [
    {
      id: 'onsite',
      title: 'Onsite',
      icon: <FaUsers />,
      description: 'Our team works directly at your facility for maximum collaboration and control.',
      features: [
        'Direct team collaboration',
        'Real-time communication',
        'Immediate feedback loops',
        'Full project control',
        'Secure infrastructure access'
      ],
      benefits: [
        'Maximum transparency',
        'Direct oversight',
        'Immediate issue resolution',
        'Cultural alignment'
      ]
    },
    {
      id: 'offshore',
      title: 'Offshore',
      icon: <FaGlobe />,
      description: 'Cost-effective offshore development with proven delivery models and quality assurance.',
      features: [
        'Cost-effective solutions',
        '24/7 development cycles',
        'Scalable team sizes',
        'Quality assurance processes',
        'Regular progress reporting'
      ],
      benefits: [
        'Reduced costs',
        'Extended development hours',
        'Access to global talent',
        'Flexible scaling'
      ]
    },
    {
      id: 'hybrid',
      title: 'Hybrid',
      icon: <FaHandshake />,
      description: 'Combines the best of onsite and offshore models for optimal results and cost efficiency.',
      features: [
        'Mixed team composition',
        'Flexible engagement',
        'Cost optimization',
        'Quality assurance',
        'Risk mitigation'
      ],
      benefits: [
        'Balanced approach',
        'Cost efficiency',
        'Quality control',
        'Risk management'
      ]
    },
    {
      id: 'turnkey',
      title: 'Turnkey',
      icon: <FaRocket />,
      description: 'Complete end-to-end project delivery from concept to final product deployment.',
      features: [
        'End-to-end delivery',
        'Project management',
        'Quality assurance',
        'Documentation',
        'Support & maintenance'
      ],
      benefits: [
        'Single point of contact',
        'Reduced management overhead',
        'Guaranteed delivery',
        'Comprehensive support'
      ]
    }
  ];

  return (
    <section className="engagement-models section-padding">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Engagement <span className="gradient-text">Models</span>
            </h2>
            <p className="section-subtitle">
              Flexible engagement options tailored to your project requirements and business needs
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Row>
                <Col lg={3} md={12} className="mb-4">
                  <Nav variant="pills" className="flex-column engagement-nav">
                    {models.map((model) => (
                      <Nav.Item key={model.id}>
                        <Nav.Link 
                          eventKey={model.id}
                          className="engagement-nav-link"
                        >
                          <div className="nav-icon">
                            {model.icon}
                          </div>
                          <span>{model.title}</span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
                
                <Col lg={9} md={12}>
                  <Tab.Content>
                    {models.map((model) => (
                      <Tab.Pane key={model.id} eventKey={model.id}>
                        <div className="model-content" data-aos="fade-left">
                          <div className="model-header">
                            <div className="model-icon">
                              {model.icon}
                            </div>
                            <div>
                              <h3>{model.title}</h3>
                              <p className="model-description">{model.description}</p>
                            </div>
                          </div>
                          
                          <Row className="mt-4">
                            <Col md={6}>
                              <div className="features-section">
                                <h4>Key Features</h4>
                                <ul className="feature-list">
                                  {model.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="benefits-section">
                                <h4>Benefits</h4>
                                <ul className="benefit-list">
                                  {model.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                          </Row>
                          
                          <div className="model-cta mt-4">
                            <button 
                              className="btn-luxury"
                              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                              Discuss {model.title} Model
                            </button>
                          </div>
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EngagementModels; 