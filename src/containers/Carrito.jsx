import React, {Component, Fragment} from 'react';
/**
 * IMPORT BOOTSTRAP
 * */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 *  IMPORT LIBRARIES OF BOOTSTRAP
 * */
import 'bootstrap/dist/js/bootstrap.bundle.min';
/**
 * IMPORT OWN STYLES
 * */
import '../containers/styles/Carrito.css'

class Carrito extends Component {
    render() {
        return (
            <Fragment>
                <i className="fa fa-2x fa-shopping-cart"></i>
            </Fragment>
        )
    }
}

export default Carrito;
