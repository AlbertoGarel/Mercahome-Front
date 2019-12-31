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
import {connect} from "react-redux";

class Identificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }




    render() {
        const {evento, user} = this.props;
        console.log(user);
        return (
            <div className="dropdown open">
                <label className="dropdown-toggle menu-item__label"
                       id="dropdownMenu5" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                    {user.username ? user.username : 'Identificate'}
                </label>
                <i className="fa fa-2x fa-chevron-down"/>
                <div className="dropdown-menu">
                    <h1 className="dropdown-item">{user.username ? user.username : 'Invitado'}</h1>
                    <p className="lugar_entrega dropdown-item">
                        {user.address ? user.address : 'Entregar en...'}
                    </p>
                    <div className="dropdown-divider"/>
                    <button id="identificate_btn" type="button" className="btn btn-lg btn-block"
                            onClick={evento}>Identificate
                    </button>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item info" href="/">
                        <i className="fa fa-lg fa-question info"/>
                        <span>Preguntas frecuentes</span></a>
                    <a className="dropdown-item info" href="/">
                        <i className="fa fa-2x fa-commenting"/>
                        <span>Ayuda</span></a>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.Users

    }
}

export default connect(mapStateToProps)(Identificate);
