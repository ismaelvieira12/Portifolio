import React from 'react';
import "../resume/resume.css";
import Data from './Data';
import Card from './Card';


const Resume = () => {
  return (
    <section className="container section resume" id="resume">
      <h2 className="section_title">Experiência</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "educação") {
              return (
                // Para criação do carne atraves do array
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
          
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experiência") {
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume