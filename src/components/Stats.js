import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaMicrochip, FaGlobe, FaTrophy } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    years: 0,
    tapeouts: 0,
    clients: 0,
    projects: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = {
      years: 15,
      tapeouts: 10,
      clients: 50,
      projects: 200
    };

    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key];
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    });
  };

  const statsData = [
    {
      icon: <FaUsers />,
      number: counts.years,
      suffix: '+',
      label: 'Years Experience',
      color: 'var(--royal-purple)'
    },
    {
      icon: <FaMicrochip />,
      number: counts.tapeouts,
      suffix: '+',
      label: 'Successful Tapeouts',
      color: 'var(--rich-gold)'
    },
    {
      icon: <FaGlobe />,
      number: counts.clients,
      suffix: '+',
      label: 'Global Clients',
      color: 'var(--deep-black)'
    },
    {
      icon: <FaTrophy />,
      number: counts.projects,
      suffix: '+',
      label: 'Completed Projects',
      color: 'var(--jet-grey)'
    }
  ];

  return (
    <section className="stats-section section-padding">
      <Container>
        <Row>
          {statsData.map((stat, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div 
                className="stat-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-number">
                  {stat.number}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats; 