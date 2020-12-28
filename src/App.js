import React, {useState} from 'react';

const App = () => {

  const[Nome, setNome] = useState('Rodrigo');

  const AlterarNome = () => setNome('Rodrigo Soares') /*também pode ser usada, mas lá no setNome do button não se
  utiliza arrowFunction.*/

  return(
    <div>
      <p>O meu nome é: {Nome}</p>
      <button onClick={() => AlterarNome()}>Alterar</button>
    </div>
  )
}

/*Ao se importar o useState e declarar o setNome ele altera o nome ao ligarmos ele ao onClick (no formato arrowFunction).*/
export default App;
