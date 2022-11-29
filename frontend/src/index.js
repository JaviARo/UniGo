import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header, Footer } from './components/Control';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Footer/>
  </>
);

