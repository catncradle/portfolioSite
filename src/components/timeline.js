import React from 'react';
import TimelineElement from './timelineEle';
import {
  cat,
  lifeGuard,
  medical,
  professor,
  coding,
  fellow,
} from '../components/imgPng/index';
const stuff = [
  {
    title: 'FullStack Teaching Fellow',
    text: '2018',
    hidden: `This is a postgraduate position offered to students after vetting them through an application and technical/behavioral interviews, here I got to mentor another cohort of students (mine was remote), and do other various duties for FullStack such as engineering and admissions interview.`,
    icon: fellow,
  },
  {
    title: 'FullStack Academy Web Development Fellowship',
    text: '2018',
    hidden: `An intensive 5 month program done in conjuntion with New York's tech talent pipeline. A special offshoot of already stellar FullStack Academy BootCamp with a less than 6% acceptance rate. I would describe it as the best thing that ever happened to me, and I've met some of my best friends here. Here I learned to build webapps in fullstack Javascript, using Node, Express, React PosgreSQL.`,
    icon: coding,
  },
  {
    title: 'Carnegie Hill Veterinarians Head Technician',
    text: '2014-2018',
    hidden:
      'After getting my Technician Certification I worked here as the head technician, assisted in 6-12 surgical cases weekly. Numerous technician duties such as maintaining controlled substance logs, and managing non-office side of business.',
    icon: cat,
  },
  {
    title: 'Carnegie Hill Veterinarians Intern/Technician',
    text: '2012-2013',
    hidden:
      'Torwards the tail end of my education at SUNY Delhi I had to do a externship which I completed at Carnegie Hill Veterinarians. they decided to hire me after the externship and I worked as a veterinary assistant up until I got my certification',
    icon: cat,
  },
  {
    title: 'SUNY Delhi',
    text: '2009-2012',
    hidden:
      'I studied here! It was great, I learned about veterinary sciences, became eligible to take the VTNE to become a veterinary technician',
    icon: professor,
  },

  {
    title: 'Lifeguard/Swimming Instructor',
    text: '2007-2014',
    hidden:
      'I worked as a lifeguard for the last half of my highschool years at multiple places before becoming a swimming instructor, teach group or private classes for about 5 years',
    icon: lifeGuard,
  },
  {
    title: 'Born',
    text: 'I dunno haha, born in New York? 1991',
    hidden: `Yeah it was a great time! Born and raised in New York City, and lived here in lower Manhattan my whole life, and I can't see myself anywhere else!`,
    icon: medical,
  },
];

const time = () => {
  return (
    <div className="timeline">
      <h1 className="timeline-header">
        Work/Experience... tap title for more info
      </h1>
      <section className="timeline-container center-align">
        {stuff.map((timeEle, idx) => {
          timeEle.direction = !(idx % 2);
          return <TimelineElement key={idx} {...timeEle} />;
        })}
      </section>
    </div>
  );
};

export default time;
