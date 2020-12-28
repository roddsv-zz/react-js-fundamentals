import React, { Component } from 'react';
import Identificacao from './componentes/Identificacao';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Componente Principal</p>
        <p><Identificacao /></p>
      </div>
    )
  }
}

export default App;
