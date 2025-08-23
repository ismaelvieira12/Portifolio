import React from 'react';
import "../resume/resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
  const educacao = Data.filter( item => item.category === "educação");
  const experiencia = Data.filter( item => item.category === "experiência");
  return (
    <section className="container section resume" id="resume">
      <h2 className="section_title">Formação Acadêmica</h2>
      <div className="resume_container grid">
        {educacao.map( item => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            year={item.year}
            desc={item.desc}
          />
        ))}
      </div>

      <div className="resume_container grid">
        {experiencia.map( item => (
          <Card
            key={item.id}
            icon={item.icon}
            title={item.title}
            year={item.year}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Resume;
