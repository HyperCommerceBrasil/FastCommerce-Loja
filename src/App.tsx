import React from 'react';
import { toast } from 'react-toastify';
import { Routes } from './components/routes';

toast.configure();

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
