/* Toda arquivo em que for renderiza conteúdo JSX
* é necessário importar o React
*/
import React from 'react'

// // Importando imagem
// import logo from './assets/logo-erx-p.png'

// Carregando o componente TechList
import TechList from './components/TechList'

// Importando arquivo CSS
import './App.css'

function App() {
  return <TechList />;
}

export default App;