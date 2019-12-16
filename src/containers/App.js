import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import store from '../store';
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://localhost:3000/categories',
            categories: [],
        }
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(connect => {
                this.setState({
                    categories: connect.data
                });
            })
            .catch(error => console.log(error))
    }

    render() {
        // console.table(this.state.categories);
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

const mapStateToProps = state => ({
    categories: state.categories
});


export default connect(mapStateToProps, {})(App);
