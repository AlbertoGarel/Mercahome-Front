import React, {Component} from 'react';

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
import './styles/Identificate.css';

class Identificate extends Component {

    render() {
        return (
            <div className="dropdown open">
                <label className="dropdown-toggle menu-item__label"
                       id="dropdownMenu5" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                    Identificate
                </label>
                <i className="fa fa-2x fa-chevron-down"/>
                <div className="dropdown-menu">
                    <h1 className="dropdown-item">Invitado</h1>
                    <p className="lugar_entrega dropdown-item">Entregar en...</p>
                    <div className="dropdown-divider"/>
                    <a id="identificate_btn" type="button" className="btn btn-lg btn-block">Identificate</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item info" href="#!">
                        <i className="fa fa-lg fa-question info"/>
                        <span>Preguntas frecuentes</span></a>
                    <a className="dropdown-item info" href="#!">
                        <i className="fa fa-2x fa-commenting"/>
                        <span>Ayuda</span></a>
                </div>
            </div>
        )
    }
}

export default Identificate;
