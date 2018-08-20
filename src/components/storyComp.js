import React from 'react';

const storyComp = ({ info }) => (
  <section
    className={`story-${info.direction}`}
    style={{ backgroundImage: `url(${info.pic})` }}
  >
    <div className={`story-${info.direction}-box`}>
      <div className="col s12 m5">
        <div className="card-panel teal">
          {console.log(info.pic)}
          <span className="white-text">{info.text}</span>
        </div>
      </div>
    </div>
  </section>
);

export default storyComp;
