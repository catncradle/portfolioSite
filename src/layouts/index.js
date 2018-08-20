import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Intro from '../components/intro';
import StoryComp from '../components/storyComp';
import VerticalTimeline from '../components/verticalTimeline';
import Timeline from '../components/timeline';
import Portfolio from '../components/portfolio';

import './index.scss';

const infoFile = {
  one: {
    pic: require('/Users/jackjack/Desktop/personal_site/src/img/laying.jpg'),
    text:
      'Currently I am a teaching Fellow for fullstack Academy, and a proud graduate of the FullStack Academy Web Development Fellowship.',
    direction: 'left',
  },
  two: {
    pic: require('/Users/jackjack/Desktop/personal_site/src/img/pic2.jpg'),
    text: 'I love Photography and getting my picture taken!',
    direction: 'right',
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
    <StoryComp info={infoFile.two} />
    <Timeline />
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
