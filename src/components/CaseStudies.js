import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaMicrochip, FaMobile, FaCar, FaIndustry, FaArrowRight } from 'react-icons/fa';
import './CaseStudies.css';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: 'Smartwatch SoC Verification',
      category: 'Verification',
      icon: <FaMobile />,
      shortDescription: 'Comprehensive verification of a complex System-on-Chip for next-generation smartwatches.',
      fullDescription: 'Led the complete verification effort for a 28nm smartwatch SoC with multiple cores, graphics processing, and wireless connectivity. Implemented UVM-based testbench with 99.5% functional coverage and achieved first-pass silicon success.',
      technologies: ['UVM', 'SystemVerilog', 'Coverage Analysis', 'Formal Verification'],
      results: ['99.5% Functional Coverage', 'First-Pass Silicon Success', '30% Faster Time-to-Market'],
      image: 'smartwatch-soc.jpg'
    },
    {
      id: 2,
      title: 'Automotive MCU Design',
      category: 'Design',
      icon: <FaCar />,
      shortDescription: 'Safety-critical microcontroller design for automotive applications with ASIL-D compliance.',
      fullDescription: 'Designed a safety-critical 32-bit microcontroller for automotive applications requiring ASIL-D compliance. Implemented redundant safety mechanisms, error detection, and correction features ensuring reliable operation in harsh automotive environments.',
      technologies: ['RTL Design', 'Safety Mechanisms', 'ASIL-D Compliance', 'Error Detection'],
      results: ['ASIL-D Certified', 'Zero Safety Violations', 'Enhanced Reliability'],
      image: 'automotive-mcu.jpg'
    },
    {
      id: 3,
      title: 'Industrial IoT Processor',
      category: 'Embedded',
      icon: <FaIndustry />,
      shortDescription: 'Low-power processor design for industrial IoT applications with advanced security features.',
      fullDescription: 'Developed a low-power processor specifically designed for industrial IoT applications. Integrated advanced security features, multiple communication protocols, and power management units achieving 50% power reduction compared to standard solutions.',
      technologies: ['Low-Power Design', 'Security Features', 'IoT Protocols', 'Power Management'],
      results: ['50% Power Reduction', 'Enhanced Security', 'IoT Ready'],
      image: 'iot-processor.jpg'
    },
    {
      id: 4,
      title: 'AI Accelerator Chip',
      category: 'AI/ML',
      icon: <FaMicrochip />,
      shortDescription: 'Custom AI accelerator chip design for machine learning inference with optimized performance.',
      fullDescription: 'Designed a custom AI accelerator chip optimized for machine learning inference workloads. Achieved 10x performance improvement over general-purpose processors while maintaining energy efficiency for edge computing applications.',
      technologies: ['Custom Architecture', 'AI/ML Optimization', 'Edge Computing', 'Performance Tuning'],
      results: ['10x Performance Gain', 'Energy Efficient', 'Edge Optimized'],
      image: 'ai-accelerator.jpg'
    }
  ];

  const handleCaseClick = (caseStudy) => {
    setSelectedCase(caseStudy);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCase(null);
  };

  return (
    <section id="case-studies" className="case-studies section-padding">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <p className="section-subtitle">
              Real-world projects showcasing our expertise in VLSI design and verification
            </p>
          </Col>
        </Row>
        
        <Row>
          {caseStudies.map((caseStudy, index) => (
            <Col lg={6} md={6} className="mb-4" key={caseStudy.id}>
              <Card 
                className="case-study-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                onClick={() => handleCaseClick(caseStudy)}
              >
                <Card.Body>
                  <div className="case-icon">
                    {caseStudy.icon}
                  </div>
                  <div className="case-category">{caseStudy.category}</div>
                  <Card.Title>{caseStudy.title}</Card.Title>
                  <Card.Text>{caseStudy.shortDescription}</Card.Text>
                  <div className="case-read-more">
                    <span>Read More</span>
                    <FaArrowRight />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <div className="case-studies-cta" data-aos="fade-up">
              <h3>Ready to Start Your Project?</h3>
              <p>Let's discuss how we can help bring your semiconductor vision to life</p>
              <Button 
                className="btn-luxury"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for detailed case study */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="lg"
        className="case-study-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title-content">
              <div className="modal-icon">
                {selectedCase?.icon}
              </div>
              <div>
                <h4>{selectedCase?.title}</h4>
                <span className="modal-category">{selectedCase?.category}</span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCase && (
            <div className="modal-content">
              <p className="modal-description">{selectedCase.fullDescription}</p>
              
              <Row className="mt-4">
                <Col md={6}>
                  <h5>Technologies Used</h5>
                  <ul className="modal-list">
                    {selectedCase.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </Col>
                <Col md={6}>
                  <h5>Key Results</h5>
                  <ul className="modal-list">
                    {selectedCase.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-outline-luxury" onClick={handleCloseModal}>
            Close
          </Button>
          <Button 
            className="btn-luxury"
            onClick={() => {
              handleCloseModal();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Similar Project
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default CaseStudies; 