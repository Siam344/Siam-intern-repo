import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import './hooks/i18n'; // Import your i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated root creation
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
