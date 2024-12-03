import React, { useState } from 'react';

const Contador = () => {
  const [numero, setNumero] = useState(0);

  // Incrementar en 1
  const incrementar = () => {
    setNumero(numero + 1);
  };

  // Incrementar en 2
  const incrementarMasDos = () => {
    setNumero(numero + 2);
  };

  // Restablecer a 0
  const restablecer = () => {
    setNumero(0);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contador</h2>
      <p className="text-4xl font-semibold text-blue-600 mb-6">{numero}</p>
      <div className="space-x-4">
        <button
          onClick={incrementar}
          className="px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600"
        >
          Incrementar
        </button>
        <button
          onClick={incrementarMasDos}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Incrementar +2
        </button>
        <button
          onClick={restablecer}
          className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600"
        >
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default Contador;