import React from 'react';
import "../portifolio/portifolio.css"

// importando o swiper para o carrossel
import 'swiper/element/bundle';
// importando o swiper para o carrossel
import {} from 'swiper/element/bundle'
// importando o css que vai ser usado no carrossel
import './swiper.css';
// importando os modulos que serão usados no carrossel
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Menu from './Menu';

const Portifolio = () => {
  return (
    <section className="container work section" id="work">
      <h2 className="container-title">Projetos Recentes</h2>

      <div className="work_filters">
        <span className="work_itens">Relógio</span>
        <span className="work_itens">Jogo da Velha</span>
        <span className="work_itens">Gerador de Senha</span>
        <span className="work_itens">Dashboard</span>
        <span className="work_itens">Projeto com bootstrap</span>
      </div>

      <div className="container grid">
        {/* <Menu/> */}
      </div>
    </section>
  )
}

export default Portifolio