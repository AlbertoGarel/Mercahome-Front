import React, {Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
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
import './styles/App.css';

function App() {
    return (
        <Fragment>
            <Header/>
            <main className="my_container compens_nav">
                <section className="cont-principal">
                <Slider/>
                </section>
            </main>
            <Footer/>
        </Fragment>
    );
}

export default App;
