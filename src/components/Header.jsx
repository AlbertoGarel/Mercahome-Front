import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
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
import './styles/Header.css';
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Identificate from "../components/Identificate";
import Carrito from "../components/Carrito"
/**
 * IMPORT ACTIONS
 * */
import {search} from '../actions'
import {connect} from 'react-redux'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:''
        };
        this.textInput = React.createRef()
    }

    componentDidMount() {
        this.textInput.current.value = this.props.desc
    }

    handleSearch = (ev) => {
        if (ev.target.value.length > 2) {
            search(ev.target.value);
        }
    };


    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light flex-shrink-1">
                    <Link to="/" id="enlace-logo"><img
                        src="./assets/images/merca_dev.png"
                        alt="logo mercahome"
                        id="nav_logo"
                    />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div id="search_cont" className="form-inline my-2 my-lg-0">
                            <span id="search_span"><i className="fa fa-2x fa-search"/></span>
                            <input id="input_header"
                                   name="busqueda"
                                   className="form-control mr-sm-2"
                                   type="text"
                                   placeholder="Buscar productos"
                                   aria-label="Search"
                                   onChange={ev=>this.setState({search:ev.target.value})}
                                   onKeyUp={(ev) => this.handleSearch(ev)}
                                   ref={this.textInput}
                                   value={this.props.vaciar ? '' : this.state.search}

                            />
                            {this.state.desc} == {this.state.search}
                        </div>
                        <div className="menu-left" role="menu">
                            <Link to="/categorias" className="menu-item subhead1-b" data-test="categories-link"
                            >
                                <label className="menu-item__label">Categorías</label>
                                <span className="menu-item__border"/>
                            </Link>
                            <Link className="menu-item subhead1-b" data-test="my-products-link"
                                  to="/my-products"
                            >
                                <label className="menu-item__label">Mis Habituales</label>
                                <span className="menu-item__border"/>
                            </Link>
                        </div>

                        <div className="menu-right">
                            <Identificate/>
                            <Carrito/>
                        </div>

                    </div>
                </nav>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        desc: state.Search.desc
    }
}

export default connect(mapStateToProps)(Header);
