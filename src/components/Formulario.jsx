import React, { useState } from 'react';

const Formulario = ({ onNumeroSubmit }) => {
  const [numero, setNumero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numero.trim()) return;
    onNumeroSubmit(parseInt(numero));
    setNumero('');
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
        &nbsp;Introduce el n-esimo termino de la siguiente sucesion&nbsp;&nbsp;
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        </label>
        <button type="submit">Calcular termino</button>
    </form>
    &nbsp;<label><em>serie(n) = 4primo(n) - triangular(n-1) + fibonacci(n+2)</em></label>  
    </>



  );
};

export default Formulario;