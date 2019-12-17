import React, {Component, Fragment} from 'react';
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
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 *  IMPORT STYLES
 * */
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
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
}

export default App;
