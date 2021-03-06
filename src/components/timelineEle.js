import React from 'react';

const timelineEle = ({ title, text, direction, hidden, icon }) => {
  return (
    <div className="row container">
      <div
        className={`card small col s5  teal lighten-1 ${
          direction ? 'left' : 'right'
        }`}
      >
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <div className="row">
              <div className="col s12">
                <img src={icon} alt="education" />
              </div>
            </div>
          </span>

          <p>{text}</p>
        </div>
        <div className="card-reveal  cyan darken-1">
          <span className="card-title grey-text text-darken-4">{title}</span>
          <p>{hidden}</p>
        </div>
      </div>
    </div>
  );
};

export default timelineEle;
