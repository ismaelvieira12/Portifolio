import React from 'react';
import "../resume/resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className="container section resume" id="resume">
      <h2 className="section_title">Formação Acadêmica</h2>
      <div className="resume_container grid">
        {Data.map((val, id) => (
          <Card
            key={id}
            icon={val.icon}
            title={val.title}
            year={val.year}
            desc={val.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Resume;
