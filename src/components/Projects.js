import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const fadeInProjects = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const springProps = useSpring({
    transform: hoveredProject ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 150, friction: 12 },
  });

  const projects = [
    { id: 1, img: './images/project.jpg', title: 'Project 1', desc: 'Desc Project 1' },
    { id: 2, img: './images/project.jpg', title: 'Project 2', desc: 'Desc Project 2' },
    { id: 3, img: './images/project.jpg', title: 'Project 3', desc: 'Desc Project 3' },
    { id: 4, img: './images/project.jpg', title: 'Project 4', desc: 'Desc Project 4' },
  ];

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <animated.section className="trial-block shadow3 text-center" id="projects" style={fadeInProjects}>
      <h2 className="text-center badge badge-info">Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-3" key={project.id}>
              <animated.div
                className="card mb-4"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
                style={{ ...springProps, width: '80%', margin: '0 auto' }}
              >
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.desc}</p>
                </div>
              </animated.div>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default Projects;
