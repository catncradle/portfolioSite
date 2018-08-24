import React, { Component } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import VerticalTimelineElement from './verticalTimelineEle';
import Materialize from '../layouts/materialize-src/js/bin/materialize';

const timeline = [
  {
    date: '1991',
    event: 'My Birthdate!',
    location: 'New York',
    roles: `Born in Bellevue hospital in New York, so I've been here my whole life!`,
    expansionText: 'not much to say other than I love being a New Yorker!',
  },
  {
    date: '2007-2013',
    event: 'Water Safety Instructor/Lifeguard',
    location: 'New York',
    roles: `Swimming instructor teaching classes usually of 6 students, averaging about 4-6 classes per 3 month cycle`,
    expansionText:
      'I spent my junior/senior year of high school lifeguarding for a pool in the Lower East Side before becoming WSI certified and teaching group swim lessons',
  },
  {
    date: '2011-present',
    event: 'Software Engineer',
    location: 'New York',
    roles: `Creative Direction, User Experience, Visual Design, Project
    Management, Team Leading`,
    expansionText: 'hhhhhhhhhhh',
  },
  {
    date: '2011-present',
    event: 'Software Engineer',
    location: 'New York',
    roles: `Creative Direction, User Experience, Visual Design, Project
    Management, Team Leading`,
    expansionText: 'hhhhhhhhhhh',
  },
];

// const Timeline = () => {
//   return (
//     <VerticalTimeline>
//       {timeline.map((event, idx) => {
//         return <VerticalTimelineElement key={idx} {...event} />;
//       })}
//     </VerticalTimeline>
//   );
// };

class Timeline extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = Materialize.Collapsible.init(elems);
    });
  }
  render() {
    return (
      <VerticalTimeline>
        {timeline.map((event, idx) => {
          return <VerticalTimelineElement key={idx} {...event} />;
        })}
      </VerticalTimeline>
    );
  }
}

export default Timeline;
