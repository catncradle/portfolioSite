import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Intro from '../components/intro';
import StoryComp from '../components/storyComp';
import VerticalTimeline from '../components/verticalTimeline';
import Timeline from '../components/timeline';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

import './index.scss';

const infoFile = {
  one: {
    pic: require('/Users/jackjack/Desktop/personal_site/src/img/laying.jpg'),
    title: 'FullStack Academy',
    text:
      'Currently I am a teaching Fellow for fullstack Academy, and a proud graduate of the FullStack Academy Web Development Fellowship.',
    text2: `Currently looking for new opportunities to utilize what I've learned, and to learn!`,
    direction: 'right',
  },
  two: {
    pic: require('/Users/jackjack/Desktop/personal_site/src/img/pic2.jpg'),
    text: `I was the head veterinary technician for a private veterinary practice for about 5 years before starting my software engineering journey. Hello world for me was in November of 2017, where I did a bunch of self learning before getting accepted into the Web Development Fellowship at Fullstack Academy in January 2018, a tuition free program with an acceptance rate of under 6% making it a program with a much harder entry than their normal programs.

    `,
    text2: `I enjoy teaching and learning, whatever the context may be, whether it was training a new technician intern in a veterinary setting, or mentoring students going through the immersive program I like to surround myself with people who are eager to learn and teach, as we always end up lifting each other up, just like how my instructors used to say, "a rising tide lifts all boats!"`,
    title: 'Software Engineer',
    direction: 'left',
  },
};

const Layout = ({ children, data }) => (
  <div className="">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'This is my going to be my professional website hopefully',
        },
        { name: 'keywords', content: 'Professional website' },
      ]}
    />
    <Header />
    <Intro />
    <StoryComp info={infoFile.one} />
    <Timeline />
    <Portfolio />
    <StoryComp info={infoFile.two} />
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
