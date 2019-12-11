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
import './styles/Header.css';
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Identificate from "../containers/Identificate";
import Carrito from "../containers/Carrito"


class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <img src="./assets/images/merca_dev.png" alt="logo mercahome"
                         id="nav_logo"
                    />
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form id="search_cont" className="form-inline my-2 my-lg-0">
                            <span id="search_span"><i className="fa fa-2x fa-search"/></span>
                            <input id="input_header"
                                   className="form-control mr-sm-2"
                                   type="text"
                                   placeholder="Buscar productos"
                                   aria-label="Search"/>
                        </form>

                        <div className="menu-left" role="menu">
                            <a className="menu-item subhead1-b" data-test="categories-link"
                               href="/categorias"
                            >
                                <label className="menu-item__label">Categorías</label>
                                <span className="menu-item__border"/>
                            </a>
                            <a className="menu-item subhead1-b" data-test="my-products-link"
                               href="/my-products"
                            >
                                <label className="menu-item__label">Mis Habituales</label>
                                <span className="menu-item__border"/>
                            </a>
                        </div>

                        <div className="menu-right">
                            <Identificate />
                            <Carrito />
                        </div>

                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Header;
