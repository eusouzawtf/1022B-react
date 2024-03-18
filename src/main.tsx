import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './componentes/Footer'
import Main from './componentes/Main'
import Header from './componentes/Header'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer></Footer>
  </React.StrictMode>,
)
