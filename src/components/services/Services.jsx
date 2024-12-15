import React from 'react';
import "../services/services.css";
// import imagem1 from "../../assets/";
// import imagem2 from "../../assets/";
// import imagem3 from "../../assets/";

const data = [
  {
    id: 1,
    image: imagem1,
    title: "UI/UX design",
    description: "Desenvolvedor com foco na experiência do usuário"
  },
  {
    id: 2,
    image: imagem2,
    title: "Desenvolvedor Web",
    description: 'Desenvolvedor Front-End'
  },
  {
    id: 3,
    image: imagem3,
    title: "Tecnologia",
    description: ""
  }
]
const Services = () => {
  return (
   <div className="section services container" id="services">
    <h2 className="section_title">Services</h2>
   </div>
  )
}

export default Services