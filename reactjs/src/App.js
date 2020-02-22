/* Toda arquivo em que for renderiza conteúdo JSX
* é necessário importar o React
*/
import React from 'react'

// Importando imagem
import logo from './assets/logo-erx-p.png'

// Importando arquivo CSS
import './App.css'

function App() {
  return <img src={logo} alt="logo"/>;
}

export default App;