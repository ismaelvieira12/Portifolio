import React from 'react';
import "../services/services.css";
import imagem1 from "../../assets/about.png";
import imagem2 from "../../assets/about.png";
import imagem3 from "../../assets/about.png";

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
    description: "Testando"
  },
]
const Services = () => {
  return (
   <section className="section services container" id="services">
      <h2 className="section-titel">Services</h2>

      {/* chamdo o arry de objetos criado la em cima (data) */}
      <div className="services_container grid">
        {data.map(({id, image, title, description}) => { 
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className='services_img'/>

              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          )
        })}
      </div>
   </section>
  )
}

export default Services