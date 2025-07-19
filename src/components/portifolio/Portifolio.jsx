
import React, { useState } from 'react';
import "../portifolio/portifolio.css"

import { motion } from "framer-motion";

import {Swiper, SwiperSlide} from 'swiper/react'
// import Menu from './Menu';


function Portifolio() {
  // Função para armazenar o item que está sendo passado o mouse
  const [hovered, setHoveredId] = useState(null);
  // const mouseMoveHandler = () => {
  //   const description = document.querySelector('.descrition');
  //   description.style.display = 'block';
  //   console.log("passou o mouse");
  // }

  const data = [
    {
      id: 1,
      image: "public/project/dashboard.png",
      title: "Dashboard",
      description: "Um relógio digital simples feito com React."
    },
    {
      id: 2,
      image: 'public/project/banco-de-horas.jpg',
      title: "Banco de Horas Extras",
      description: "Um jogo da velha interativo."
    },
    {
      id: 3,
      image: "public/project/dashboard2.jpg",
      title: "Dashboard",
      description: "Um gerador de senhas seguras."
    },
    {
      id: 4,
      image: "public/project/gerador-de-senha.jpg",
      title: "Gerador de Senhas",
      description: "Um dashboard para visualização de dados."
    },
    {
      id: 5,
      image: "public/project/jogo-da-velha.png",
      title: "Jogo da Velha",
      description: "Um projeto responsivo usando Bootstrap."
    },
    {
      id: 6,
      image: "public/project/projeto-com-bootstrap.jpg",
      title: "Site para uma padaria",
      description: "Um projeto responsivo usando Bootstrap."
    },

    {
      id: 6,
      image: "public/project/relógio-digital.png",
      title: "Relógio com Cronometro",
      description: "Um projeto responsivo usando Bootstrap."
    }
  ];

  return (

    <section className="container work section" id="portifolio">
      <h2 className="section_title">Projetos</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)", // Safari support
        }}
        className="carrosel">

        {data.map((item) => (
          <div  
            key={item.id} 
            className='cards'
            onMouseEnter={ () => setHoveredId(item.id) }
            
            >
            <div className='slider-item-container' id='hover'>
              <img src={item.image} alt="Slider" className='slider-item' />
            </div>
            <p className='title'>{item.title}</p>
            <span className='descrition'>{item.description}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Portifolio