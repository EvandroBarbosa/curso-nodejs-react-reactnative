// Carregando o modulo do React
import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component{
  // Propriedade de estado do React
  // Essa propriedade é imutavel 
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      'JavaScript',
    ]
  };

  // Method que pega o evento do teclado ao digitar no input
  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  // Method que adiciona um novo elemento na lista
  handleSubmit = e => {
    e.preventDefault()

    /* Essa é a forma de adicionar um elemento na propriedade states sendo
    que ela é imutavel, para que possamos alterar algo no estado é necessario 
    pegar o estado anterior compiar ele por inteiro e  setState adicionar o novo elemento
    nesse estado anterior lembre-se que o estado anterior não sofre alteração */
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  // Method para remoção de um elemento na lista
  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={() => this.handleDelete(tech)}/>))}
        </ul>
        <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;