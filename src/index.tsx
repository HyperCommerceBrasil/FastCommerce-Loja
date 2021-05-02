import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from './contexts';
import { Routes } from './components/routes';

toast.configure();

ReactDOM.render(
  <GlobalProvider>
    <Routes />
  </GlobalProvider>,
  document.getElementById('root'),
);
