
import React, { useState } from 'react';
import "../portifolio/portifolio.css"

import { motion } from "framer-motion";
import img1 from "/project/dashboard.png";
import img2 from "/project/banco-de-horas.jpg";
import img3 from "/project/dashboard2.jpg"; 
import img4 from "/project/gerador-de-senha.jpg";
import img5 from "/project/jogo-da-velha.png";
import img6 from "/project/projeto-com-bootstrap.jpg";
import img7 from "/project/relógio-digital.png";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';

// import Menu from './Menu';


function Portifolio() {
  // Função para armazenar o item que está sendo passado o mouse
  const [hovered, setHoveredId] = useState(null);

  const data = [
    {
      id: 1,
      image: img1,
      title: "Dashboard",
      description: "Um relógio digital simples feito com React."
    },
    {
      id: 2,
      image: img2,
      title: "Banco de Horas Extras",
      description: "Um jogo da velha interativo."
    },
    {
      id: 3,
      image: img3,
      title: "Dashboard",
      description: "Um gerador de senhas seguras."
    },
    {
      id: 4,
      image: img4,
      title: "Gerador de Senhas",
      description: "Um dashboard para visualização de dados."
    },
    {
      id: 5,
      image: img5,
      title: "Jogo da Velha",
      description: "Um projeto feito com JavaScript puro."
    },
    {
      id: 6,
      image: img6,
      title: "Site para uma padaria",
      description: "Um projeto responsivo usando Bootstrap."
    },

    {
      id: 7,
      image: img7,
      title: "Relógio com Cronometro",
      description: "Um projeto responsivo usando Bootstrap."
    }
  ];

  return (

    <section className="container work section" id="portifolio">
      <h2 className="section_title">Projetos</h2>

{/* Criando uma responsividade para o layout mobile */}

      {window.innerWidth > 768 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="carrosel">

          {data.map((item) => (
            <div  
              key={item.id} 
              className='cards'
              onMouseEnter={ () => setHoveredId(item.id) }
              onMouseLeave={ () => setHoveredId(null) }  
            >
              <div className='slider-item-container' id='hover'>
                <img src={item.image} alt="Slider" className='slider-item' />
              </div >
              <p 
                className='title'
                style={{display: hovered === item.id ? 'block' : 'none'}}
              >
                {item.title}
              </p>
              <span 
                className='descrition' 
                style={{ display: hovered === item.id ? 'block' : 'none' }}
              >
                {item.description}
              </span>
            </div>
          ))}
        </motion.div>
      ) : (
         <Swiper
         
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='cards'>
                <div className='slider-item-container'>
                  <img src={item.image} alt="Slider" className='slider-item' />
                </div>
                <p className='title'>{item.title}</p>
                <span className='descrition'>{item.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
)}
    </section>
  );
}

export default Portifolio