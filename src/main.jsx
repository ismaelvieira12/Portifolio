import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
