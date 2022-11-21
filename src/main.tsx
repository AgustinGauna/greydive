import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TareasContextProvider } from './context/TareasContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TareasContextProvider>
      <App />
    </TareasContextProvider>
  </React.StrictMode>
);
