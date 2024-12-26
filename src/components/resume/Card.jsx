import React from 'react'
//Porque tudo que a dentro de mim
// Vem senhor e me resgata todos os dias
const Card = (promps) => {
  return (
    <div className="timeline_item">
        <i className={promps.icon}></i>
        <span className="timeline_date">{promps.year}</span>
        <h3 className="timeline_title">{promps.title}</h3>
        <p className="timeline_text">{promps.desc}</p>
    </div>
  )
}

export default Card