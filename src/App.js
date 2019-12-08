import React from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Header from '../src/components/Header';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 *  IMPORT STYLES
 * */
import './containers/styles/App.css';

function App() {
  return (
  <main>
    <Header />
  </main>
  );
}

export default App;
