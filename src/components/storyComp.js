import React from 'react';

const storyComp = ({ info }) => (
  <section
    className={`story-${info.direction}`}
    id={info.direction === 'right' ? `one` : `two`}
    style={{ backgroundImage: `url(${info.pic})` }}
  >
    <div className={`story-${info.direction}-box`}>
      {/* <div className="col s12 m5"> */}
      <div className="flex-col">
        <h2 className="teal-text text-darken-1 text-outline">{info.title}</h2>
        <span className="white-text text-outline">{info.text}</span>
        <span className="white-text text-outline">{info.text2}</span>
      </div>
      {/* </div> */}
    </div>
  </section>
);

export default storyComp;
