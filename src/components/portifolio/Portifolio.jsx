import React from 'react';
import "../portifolio/portifolio.css"

const Portifolio = () => {
  return (
    <div className="container work section" id="work">
      <h2 className="container-title">Projetos Recentes</h2>

      <div className="work_filters">
        <div className="work_itens">Relógio</div>
        <div className="work_itens">Jogo da Velha</div>
        <div className="work_itens">Gerador de Senha</div>
        <div className="work_itens">Dashboard</div>
        <div className="work_itens"></div>
      </div>
    </div>
  )
}

export default Portifolio