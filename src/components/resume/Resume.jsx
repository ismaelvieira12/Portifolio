import React from "react";
import "../resume/resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  // Separando categorias para evitar repetição
  const educacao = Data.filter((item) => item.category === "educação");
  const experiencia = Data.filter((item) => item.category === "experiência");

  return (
    <section className="container section resume" id="resume">
      <h2 className="section_title">Experiência</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
          <h3 className="timeline_header">Formação Acadêmica</h3>
          {educacao.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div>

        <div className="timeline grid">
          <h3 className="timeline_header">Experiência Profissional</h3>
          {experiencia.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
