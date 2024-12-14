import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="icon-fire about-icon"></i>

        <div>
          <h3 className="about_title">12</h3>
          <sapn className="about_subtitle">Repositórios</sapn>
        </div>
      </div>

      <div className="about_box">
        <i className="icon-folder-alt about-icon"></i>

        <div>
          <h3 className="about_title">20</h3>
          <sapn className="about_subtitle">Projetos</sapn>
        </div>
      </div>

      <div className="about_box">
        <i className="icon-badge about-icon"></i>

        <div>
          <h3 className="about_title">7</h3>
          <sapn className="about_subtitle">Certificados</sapn>
        </div>
      </div>
    </div>
  )
}

export default AboutBox