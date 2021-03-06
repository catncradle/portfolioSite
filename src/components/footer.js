import React from 'react';
import { email, linkedin, medium, github } from './techIcons/index';

const footer = () => (
  <section className="black">
    <div className="container footer">
      <div className="flex-row footer-row">
        <div className="flex-col flex">
          <h1>hey there</h1>
          <span>would you like to reach out?</span>
        </div>
        <div className="flex-row">
          <a href="https://medium.com/@jacklye">
            <img src={medium} className="footer-icons" alt="" />
          </a>
          <a href="https://github.com/catncradle">
            <img className="footer-icons" src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/jacklye/">
            <img src={linkedin} alt="" className="footer-icons" />
          </a>
          <a>
            <img src={email} alt="" className="footer-icons" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default footer;
