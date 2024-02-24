import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const commonSpringProps = {
      from: { opacity: 0, transform: 'translateY(-20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      config: { duration: 500 },
    };

  const nameSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
  });

  const linkSpring = useSpring(commonSpringProps);

  const navbarStyle = {
    backgroundColor: '#001f3f',
  };

  const location = useLocation();
  const { pathname } = location;

  const isHiddenRoute = (routes) => routes.includes(pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <animated.a className="navbar-brand" href="/" style={{ ...nameSpring, paddingLeft: '15px' }}>Your Name</animated.a>
      <div className="form-inline" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <animated.a style={{ ...linkSpring, color: '#fff' }}>Home</animated.a>
            </Link>
          </li>
          <li className="nav-item">
            {!isHiddenRoute(['/articles', '/services']) && (
              <Link to="#skills" className="nav-link">
                <animated.a style={{ ...linkSpring, color: '#fff' }}>Skills</animated.a>
              </Link>
            )}
          </li>
          <li className="nav-item">
            {!isHiddenRoute(['/articles', '/services']) && (
              <Link to="#projects" className="nav-link">
                <animated.a style={{ ...linkSpring, color: '#fff' }}>Projects</animated.a>
              </Link>
            )}
          </li>
          <li className="nav-item">
            {!isHiddenRoute(['/articles', '/services']) && (
              <Link to="#ContactUs" className="nav-link">
                <animated.a style={{ ...linkSpring, color: '#fff' }}>SocialMedia</animated.a>
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              <animated.a style={{ ...linkSpring, color: '#fff' }}>Services</animated.a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className="nav-link">
              <animated.a style={{ ...linkSpring, color: '#fff' }}>Articles</animated.a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
