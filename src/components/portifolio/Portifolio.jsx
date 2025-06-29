import React from 'react';
import "../portifolio/portifolio.css"



import {Swiper, SwiperSlide} from 'swiper/react'
// import Menu from './Menu';

const Portifolio = () => {
  const data = [
    {
      id: 1,
      image: "public/project/dashboard.png",
      // title: "Relógio Digital",
      // description: "Um relógio digital simples feito com React."
    },
    {
      id: 2,
      image: 'public/project/banco-de-horas.jpg',
      // title: "Jogo da Velha",
      // description: "Um jogo da velha interativo."
    },
    {
      id: 3,
      image: "public/project/dashboard2.jpg",
      // title: "Gerador de Senha",
      // description: "Um gerador de senhas seguras."
    },
    {
      id: 4,
      image: "public/project/gerador-de-senha.jpg",
      // title: "Dashboard",
      // description: "Um dashboard para visualização de dados."
    },
    {
      id: 5,
      image: "public/project/jogo-da-velha.png",
      // title: "Projeto com Bootstrap",
      // description: "Um projeto responsivo usando Bootstrap."
    },
    {
      id: 6,
      image: "public/project/projeto-com-bootstrap.jpg",
      // title: "Projeto com Bootstrap",
      // description: "Um projeto responsivo usando Bootstrap."
    }
    ,
    {
      id: 6,
      image: "public/project/relógio-digital.png",
      // title: "Projeto com Bootstrap",
      // description: "Um projeto responsivo usando Bootstrap."
    }
  ]
  return (

    <section className="container work section" id="portifolio">
      <h2 className="section_title">Projetos Recentes</h2>

      {/* <div className="work_filters">
        <span className="work_itens">Relógio</span>
        <span className="work_itens">Jogo da Velha</span>
        <span className="work_itens">Gerador de Senha</span>
        <span className="work_itens">Dashboard</span>
        <span className="work_itens">Projeto com bootstrap</span>
      </div> */}

      <div className="carrosel">
        {data.map((item) => (
          <div key={item.id} className='cards'>
            <img src={item.image} alt="Slider" className='slider-item' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portifolio