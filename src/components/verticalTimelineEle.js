import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import WorkIcon from '@material-ui/icons/Work';

const element = ({ date, event, roles, expansionText, location }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <ul className="collapsible">
        <li>
          <div
            className="collapsible-header indigo lighten-5 padding"
            style={{}}
          >
            <h3 className="vertical-timeline-element-title">{event}</h3>
            <p className="font-small">{roles}</p>
          </div>
          <div className="collapsible-body">{expansionText}</div>
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};
export default element;
