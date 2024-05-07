import React, { useState } from 'react';
import Formulario from './components/Formulario';
import CalculoSerie from './components/CalculoSerie';
import Resultado from './components/Resultado';

const App = () => {


	
	const [resultado, setResultado] = useState({op:null, ter:0, pri:0, tri:0, fib:0});

  	const handleNumeroSubmit = (numero) => {
		setResultado(CalculoSerie({numero}));

  	};

  	return (
    <div>
    	<h1>&nbsp;C&aacute;lculo de Series</h1>
    	<Formulario onNumeroSubmit={handleNumeroSubmit} />
		{resultado.op && <Resultado objeto = {{resultado}} />}
	</div>

  	);
};

export default App;