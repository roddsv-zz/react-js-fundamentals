import React from 'react';
import { Link } from 'react-router-dom';

const Navegacao = () => {
    return(
        <div>
            <Link to="/">Home</Link>| 
            <Link to="/servicos">Serviços</Link>|
            <Link to="/contatos">Contatos</Link>
        </div>
    )
}

/*Os Links correspondem a um a href dentro do React.*/
export default Navegacao