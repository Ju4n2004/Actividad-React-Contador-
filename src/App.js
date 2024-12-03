import React from 'react';
import './App.css';
import Contador from './components/Contador';


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 space-y-6">
      <Contador />
    </div>
  );
}

export default App;