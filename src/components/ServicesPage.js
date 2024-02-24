import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServicesPage = () => {
  const fadeInServices = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [hoveredService, setHoveredService] = useState(null);

  const springProps = useSpring({
    transform: hoveredService ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 150, friction: 12 },
  });

  const services = [
    { id: 1, img: './images/project.jpg', title: 'Service 1', desc: 'Description of Service 1.' },
    { id: 2, img: './images/project.jpg', title: 'Service 2', desc: 'Description of Service 2.' },
    { id: 3, img: './images/project.jpg', title: 'Service 3', desc: 'Description of Service 3.' },
  ];

  const handleMouseEnter = (service) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <animated.section className="trial-block shadow3 text-center" id="services" style={fadeInServices}>
      <h2 className="text-center badge badge-info mb-4">Our Services</h2>
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4 mb-4" key={service.id}>
              <animated.div
                className="card"
                onMouseEnter={() => handleMouseEnter(service)}
                onMouseLeave={handleMouseLeave}
                style={{ ...springProps, width: '80%', margin: '0 auto' }}
              >
                <img
                  src={service.img}
                  className="card-img-top"
                  alt={service.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
              </animated.div>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default ServicesPage;
