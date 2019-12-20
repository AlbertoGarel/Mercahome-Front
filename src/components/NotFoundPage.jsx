import React, {Component, Fragment} from 'react';
/**
 *  IMPORT COMPONENTS
 * */
import Wrapper from '../components/Wrapper';
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
import './styles/NotFoundPage.css';

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
                        <section className="d-flex justify-content-center align-items-center" style={{width:"100vw",height:"100vh"}}>
                           <h1 style={{transform:"scale(3)"}}>404</h1>
                        </section>
                    </main>
                </Wrapper>
            </Fragment>
        );
    }
}

export default App;
