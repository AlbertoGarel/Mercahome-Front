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
        this.state = {
            title: "promoción"
        }
    }


    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="my_container compens_nav">
                        <section className="cont-principal">
                            <Slider/>
                            <div className="titulo mx-auto mb-2 ">
                                <h2>{this.state.title}</h2>
                                <p style={{textIndent:'1.5em'}}>Productos en promoción hasta fin de existencias</p>
                                <hr/>
                            </div>
                            <Showproducts/>
                        </section>
                    </main>
                </Wrapper>
            </Fragment>
        );
    }
}

export default App;
