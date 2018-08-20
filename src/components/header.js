import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div className="header">
    <h1>Jack Lye</h1>
    <div className="header-nav">
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#one">What I Do</a>
        </li>
        <li>
          <a href="#two">Who I Am</a>
        </li>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
