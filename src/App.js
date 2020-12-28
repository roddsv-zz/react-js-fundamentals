import React, { Component } from 'react';
import Identificacao from './componentes/Identificacao';

class App extends Component{

  state = {
    nome: "Rodrigo",
    sobrenome: "Soares"
  }
  render() {
    return (
      <div>
        ReactJS
        <Identificacao nome={this.state.nome} sobrenome={this.state.sobrenome} />
      </div>
    )
  }
}

export default App;
