import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes">
      <div className="about_box">
        <i className="icon-fire about-icon"></i>

        <div>
          <h3 className="about_title">12</h3>
          <span className="about_subtitle">Repositórios</span>
        </div>
      </div>

      <div className="about_box">
        <i className="icon-folder-alt about-icon"></i>

        <div>
          <h3 className="about_title">20</h3>
          <span className="about_subtitle">Projetos</span>
        </div>
      </div>

      <div className="about_box">
        <i className="icon-badge about-icon"></i>

        <div>
          <h3 className="about_title">7</h3>
          <span className="about_subtitle">Certificados</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox