import React from 'react';
import "../sadbar/sadbar.css";
import Logo from "../../assets/favicon_io/logo.png"
const Sadbar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav_logo">
        <img src={Logo} alt="#" />  
      </a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link"><i className="icon-home"></i></a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link"><i className="icon-user-following"></i></a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link"><i className="icon-briefcase"></i></a>
            </li>
            
            <li className="nav_item">
              <a href="#portifolio" className="nav_link"><i className="icon-layers"></i></a>
            </li>

            <li className="nav_item">
              <a href="#resume" className="nav_link"><i className='icon-graduation'></i></a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link"><i className='icon-bubbles'></i></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav_footer">
        <span className="copyright">&copy; Ismael 2024</span>
      </div>
    </aside>
  )
}

export default Sadbar