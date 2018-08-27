import React, { Component } from 'react';
import { suitz, suitsCard, coffeeFindr } from '../img';
import { react, node, psql, googleMaps, fireBase } from './techIcons/index';
const Materialize =
  typeof window !== `undefined`
    ? require('../layouts/materialize-src/js/bin/materialize')
    : null;

export class portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: false,
      item2: false,
      item3: false,
    };
  }

  componentDidMount() {
    console.log('here');

    console.log('here');
    let elems = document.querySelectorAll('.modal');
    let instances = Materialize.Modal.init(elems);
  }
  render() {
    return (
      <section className="portfolio" id="work">
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
            <a href="https://suitz.herokuapp.com/">
              <img
                src={suitz}
                alt="portfolio item 1"
                className="portfolio-image responsive-img"
              />
            </a>
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
            <h4>Suits - Card Game Generator</h4>

            <p>
              A double interfaced card game generator, which allows a user to
              scaffold out rules for a game, allow them to to choose the amount
              of players, how the phases of a turn play out, and how the game is
              won. The game runs on a validator function and is built on
              React/Node and Firebase.
            </p>
            <a href="https://suits-card-generator.firebaseapp.com/">
              <img
                src={suitsCard}
                alt="portfolio item 2"
                className="portfolio-image responsive-img"
              />
            </a>
          </div>
          <div className="modal-footer">
            <a
              href="https://www.youtube.com/watch?v=GQEp18eyhEo"
              className="modal-close waves-effect waves-green btn-flat"
            >
              View Presentation!
            </a>
          </div>
        </div>
        <div id="modal3" className="modal">
          <div className="modal-content">
            <h4>Coffee Findr</h4>

            <p>
              A webapp built in React, using the google maps API to find the
              five closest coffee shops to the user's device location or by
              dropping a pin, the user can then get the walking distance/time
              for each coffee shop by clicking the coffee cups that show up on
              the map.
            </p>
            <a href="https://www.youtube.com/watch?v=2-PhtikiXgE">
              <img
                src={coffeeFindr}
                alt="portfolio item 2"
                className="portfolio-image responsive-img"
              />
            </a>
          </div>
          <div className="modal-footer">
            <a
              href="https://www.youtube.com/watch?v=2-PhtikiXgE"
              className="modal-close waves-effect waves-green btn-flat"
            >
              View Presentation!
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default portfolio;
