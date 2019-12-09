import React from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Slider from '../src/components/Slider';
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
            <Header/>
            <main className="my_container">
                <Slider/>
            </main>
            <Footer/>
        </main>
    );
}

export default App;
