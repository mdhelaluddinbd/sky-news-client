import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// This is bootsrrap CDN Link 
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
   
  </React.StrictMode>
);


reportWebVitals();
