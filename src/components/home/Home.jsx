import React from 'react';
import "../home/home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Me from "../../assets/avatar-4.jpeg";
const Home = () => {
  return (
    <section className="home container" id='home'>
      <Shapes />
      <div className="intro">
        <img src={Me} alt="Minha foto de avatar" className="home_img"/>
        <h1 className="home_name">Ismael Nascimento</h1>
        <span className="home_education">I'm a Front-End developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Conecte</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home