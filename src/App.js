import React, { Component } from 'react';
import Child from './componentes/Child';

class App extends Component {

  state = {
    nome: "Rodrigo",
  }

  alterar = () => {
    this.setState({
      nome: "Rodrigo Soares"
    })
  }

  
  render() {
    return (
      <div>
        <h3>Parent</h3>
        <button onClick={this.alterar}>Alterar</button>


        <hr />
        
        <Child nome={this.state.nome}/>

      </div>
    )
  }
}

export default App;
