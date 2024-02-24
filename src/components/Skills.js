import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const fadeInSkills = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const fluidProps = useSpring({
    from: { width: '0%' },
    to: async (next, cancel) => {
      while (true) {
        await next({ width: '50%' });
        await next({ width: '0%' });
      }
    },
    config: { duration: 2000, loop: true },
  });

  return (
    <animated.section className="trial-block shadow3 text-center" id="skills" style={fadeInSkills}>
      <h2 className="text-center badge badge-info">Skills</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="mb-3">HTML</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="mb-3">CSS</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="mb-3">Bootstrap</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="mb-3">JavaScript</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="mb-3">PHP</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
          <div className="col-lg-4">
            <animated.div className="skill-item" style={fadeInSkills}>
              <span className="mb-3">MySQL</span>
              <div className="progress">
                <animated.div className="progress-bar" style={fluidProps}></animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

export default Skills;
