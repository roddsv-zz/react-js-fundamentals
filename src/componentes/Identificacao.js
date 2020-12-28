import React, { Component } from 'react';

class Identificacao extends Component {
    render() {
        return (
            <div>
                <p>Nome: {this.props.nome}</p>                
                <p>Sobrenome: {this.props.sobrenome}</p>
            </div>
        );
    }
}

/*Se não tiver o props aqui, não renderiza. Tem que chamar o props aqui e o state lá pra poder renderizar.*/

export default Identificacao;