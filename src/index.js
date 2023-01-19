import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAqYypUh3Oi7r05rnl0uxreOn3WhlPQQ2U",
  authDomain: "react-coderhouse-930a7.firebaseapp.com",
  projectId: "react-coderhouse-930a7",
  storageBucket: "react-coderhouse-930a7.appspot.com",
  messagingSenderId: "989053560779",
  appId: "1:989053560779:web:41363442646c97aa13784e"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
