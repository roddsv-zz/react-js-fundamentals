/*1. Importar o React

2. Criar o Component

3. Exportar o Component
*/

import React, { Component } from 'react';
import Nome from './Nome';
import Sobrenome from './Sobrenome';


class Identificacao extends React.Component {
    render(){
        return(
            <div>
                <Nome />
                <Sobrenome />
            </div>
        )
    }
}

export default Identificacao