console.log('Main.tsx loading...');
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Mounting App...');
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log('App mounted.');
}

