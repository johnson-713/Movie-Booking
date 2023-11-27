import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ScreenSlotProvider } from './ScreenSlotProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScreenSlotProvider>
    <App />
    </ScreenSlotProvider>
  </React.StrictMode>
);

