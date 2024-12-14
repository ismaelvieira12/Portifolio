import React from 'react';
import "../about/about.css";
import imagem from "../../assets/about.png"
const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section-titel">Sobre mim</h2>

      <div className="about_container grid">
          <img src={imagem} alt="testando"  className='about_img'/>

          <div className="about_data grid">
            <div className="about_infor">
              <p className="about_description">Sou dedicado e disciplinado com uma paixão pela programação. Tenho experiência básica em HTML5, CSS3, JAVASCRIPT e MySQL. Estou constantemente em busca de inovações e me sinto motivado em resolver problemas complexos através da tecnologia.</p>
              <a href="#" className='btn'>Download CV</a>
            </div>

              <div className="about_skills grid">
                <div className="skills_data">
                  <div className="skills_title">
                    <h3 className="skills_names">Desenvolvedor</h3>
                    <span className="skills_number">90%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percetage development"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_title">
                    <h3 className="skills_names">Design</h3>
                    <span className="skills_number">70%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percetage ui_design"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_title">
                    <h3 className="skills_names">Photography</h3>
                    <span className="skills_number">60%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percetage protography"></span>
                  </div>
                </div>
              </div>
            
          </div>
      </div>
    </section>
  )
}

export default About