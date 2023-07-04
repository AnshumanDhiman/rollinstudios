import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTopButton from './components/ScrollToUp/ScrollToUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ScrollToTopButton />
  </React.StrictMode>
);


