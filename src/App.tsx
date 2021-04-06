import React from 'react';
import { toast } from 'react-toastify';
import { Routes } from './components/routes';
import { GlobalProvider } from './contexts';

toast.configure();

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </div>
  );
};

export default App;
