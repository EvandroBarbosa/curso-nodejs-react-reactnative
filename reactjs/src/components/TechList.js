// Carregando o modulo do React
import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component{
  // Propriedade de estado do React
  // Essa propriedade é imutavel 
  state = {
    newTech: '',
    techs: []
  };

  /* Ciclo de vida dos components no React, os principais method */

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if(techs) {
      this.setState({ techs: JSON.parse(techs)})
    }
  }

  // Executado sempre que houver alterações nas props ou state
  // E esse method recebe como paramentro as prevProps e prevState
  // As propriedades antes da alteração e o estado
  componentDidUpdate(_, prevState){
    // this.props this.state
    if(prevState.techs !== this.state.techs){
      // Armazenando o conteudo no localstorage do navegador
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }

  }

  // Executado quando um componente deixa de existir
  componentWillUnmount(){

  }

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