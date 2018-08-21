import React, { Component } from 'react';
import { suitz, suitsCard, coffeeFindr } from '../img';
import { react, node, psql, googleMaps, fireBase } from './techIcons/index';
// const portfolio = () => (
//   <section className="portfolio ">
//     <header className="center portfolio-header teal lighten-4">
//       My Portfolio
//     </header>
//     <div className="portfolio-items">
//       <div className="portfolio-item">
//         <img src={suitz} alt="" className="portfolio-image responsive-img" />
//       </div>
//       <div className="portfolio-item">
//         <img
//           src={suitsCard}
//           alt=""
//           className="portfolio-image responsive-img"
//         />
//       </div>
//       <div className="portfolio-item">
//         <img
//           src={coffeeFindr}
//           alt=""
//           className="portfolio-image responsive-img"
//         />
//       </div>
//     </div>
//   </section>
// );
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems);
});

export class portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: false,
      item2: false,
      item3: false,
    };
  }

  render() {
    return (
      <section className="portfolio ">
        <header className="center portfolio-header teal lighten-4">
          My Portfolio
        </header>
        <div className="portfolio-items">
          <div className="portfolio-item">
            <a className="modal-trigger" href="#modal1">
              <img
                src={suitz}
                alt="portfolio item 1"
                className="portfolio-image responsive-img"
              />
            </a>
          </div>
          <div className="portfolio-item">
            <a className="modal-trigger" href="#modal2">
              <img
                src={suitsCard}
                alt="portfolio item 2"
                className="portfolio-image responsive-img"
              />
            </a>
          </div>
          <div className="portfolio-item">
            <a className="modal-trigger" href="#modal3">
              <img
                src={coffeeFindr}
                alt=""
                className="portfolio-image responsive-img"
              />
            </a>
          </div>
        </div>
        {/* <!-- Modal Structure --> */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Suitsz Ecommerce site </h4>
            <p>
              An Ecommerce site built with Fullstack Javascript, using
              React/Redux on the front end, Express for the backend with
              postgreSQL with Sequelize as the ORM, and deployed on heroku
            </p>
            <img
              src={suitz}
              alt="portfolio item 1"
              className="portfolio-image responsive-img"
            />
          </div>
          <div className="modal-footer">
            <a
              href="https://suitz.herokuapp.com/"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Click here to visit
            </a>
          </div>
        </div>
        <div id="modal2" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>

            <p>A bunch of text</p>
            <img
              src={suitsCard}
              alt="portfolio item 2"
              className="portfolio-image responsive-img"
            />
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
        <div id="modal3" className="modal">
          <div className="modal-content">
            <h4 className="modal-header">Modal Header</h4>
            <div className="flex-row">
              <div className="flex-col flex-grow">
                <img
                  src={coffeeFindr}
                  alt=""
                  className="portfolio-image responsive-img"
                />
                <p> hi there just random stuff</p>
              </div>
              <div className="flex-col flex-grow">
                <div className="flex-row flex-grow">
                  <img className="scale-down" src={fireBase} alt="" />
                </div>
                <div className="flex-row flex-grow">
                  <img className="scale-down" src={fireBase} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default portfolio;
