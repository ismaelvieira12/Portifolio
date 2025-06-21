import React from 'react';
import "../portifolio/portifolio.css"
import Menu from './Menu';

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
        <Menu/>
      </div>
    </section>
  )
}

export default Portifolio