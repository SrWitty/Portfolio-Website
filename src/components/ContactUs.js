import React from 'react';


const ContactUs = () => {
  return (
    <section className="trial-block shadow3 text-center" id="ContactUs">
      <div className="height450">
        <div className="section-title text-center">
          <span className="badge badge-info">Get Started</span>
          <h2>Social Link</h2>
          <span className="section-title-line section-title-line"></span>
        </div>
        <div className="social-overlap process-scetion mt100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="social-bar">
                  <div className="social-icons mb-3 iconpad text-center">
                    <a href="#" className="slider-nav-item"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="slider-nav-item"><i className="fab fa-discord"></i></a>
                    <a href="#" className="slider-nav-item"><i className="fab fa-brands fa-threads"></i></a>
                    <a href="#" className="slider-nav-item"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/your-github-username" className="slider-nav-item" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
