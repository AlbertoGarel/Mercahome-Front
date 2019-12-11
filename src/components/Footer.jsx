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
import './styles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <ul id="ul_footer">
                    <li><a href="">Política de cookies</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                    <li><a href="">Política de privacidad</a></li>
                </ul>
                <div>
                    <h6>© Mercahome S.A.</h6>
                </div>
            </div>
        )
    }
}

export default Footer;
