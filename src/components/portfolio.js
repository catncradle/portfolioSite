import React from 'react';
import { suitz, suitsCard, coffeeFindr } from '../img';

const portfolio = () => (
  <section className="portfolio ">
    <header className="center portfolio-header teal lighten-4">
      My Portfolio
    </header>
    <div className="portfolio-items">
      <div className="portfolio-item">
        <img src={suitz} alt="" className="portfolio-image responsive-img" />
      </div>
      <div className="portfolio-item">
        <img
          src={suitsCard}
          alt=""
          className="portfolio-image responsive-img"
        />
      </div>
      <div className="portfolio-item">
        <img
          src={coffeeFindr}
          alt=""
          className="portfolio-image responsive-img"
        />
      </div>
    </div>
  </section>
);

export default portfolio;
