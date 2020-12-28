import React, { Component } from 'react';

import Navegacao from './componentes/Navegacao';
import Home from './componentes/Home'
import Servicos from './componentes/Servicos';
import Contatos from './componentes/Contatos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navegacao />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/servicos">
              <Servicos />
            </Route>

            <Route exact path="/contatos">
              <Contatos />
            </Route>
          </Switch>

        </div>
      </Router>

      /*Envolvendo todo o component dentro do Router (de div a div).*/
      /*Para colocar uma rota devemos envolver o componente desejado dentro do <Route><ComponentDesejado /></Route>.*/
      /*O "exact" antes do path faz com que seja renderizado some o caminho digitado no path.*/
      /*O Switch deve ir de Route a Route.*/

    )
  }
}

export default App;
