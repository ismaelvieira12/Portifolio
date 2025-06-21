import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importando o swiper para o carrossel
import 'swiper/element/bundle';
// importando o swiper para o carrossel
import {} from 'swiper/element/bundle'
// importando o css que vai ser usado no carrossel
// importando os modulos que serão usados no carrossel
// Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
