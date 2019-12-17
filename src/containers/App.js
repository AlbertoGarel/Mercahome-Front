import React, {Component, Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Wrapper from '../components/Wrapper';
import Slider from '../components/Slider';
import Showproducts from "../components/ShowProducts";
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
                <Wrapper>
                    <main className="my_container compens_nav">
                        <section className="cont-principal">
                            <Slider/>
                            <Showproducts/>
                        </section>
                    </main>
                </Wrapper>
            </Fragment>
        );
    }
}

export default App;
