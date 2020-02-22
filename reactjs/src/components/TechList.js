// Carregando o modulo do React
import React, { Component } from 'react'

class TechList extends Component{
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      'JavaScript',
    ]
  };
  render() {
    console.log(this.state)

    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJs</li>
        <li>React Native</li>
        <li>JavaScript</li>
      </ul>
    );
  }
}

export default TechList;