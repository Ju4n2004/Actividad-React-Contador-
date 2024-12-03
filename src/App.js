// imports
import React from 'react';
import './App.css';
import Contador from './components/Contador';



// funcion app contador
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Contador />
    </div>
  );
}

export default App;