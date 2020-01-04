import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
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
import '../containers/styles/Category.css'
import '../containers/styles/AdminView.css'
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";
import TopProducts from '../components/TopProducts'
/**
 * IMPORT REDUCERS
 * */
import {
    search,
    showCategories,
    showPoolCat,
    sortByPrice,
    searchDelete
} from "../actions";
import CardProduct from "../components/CardProduct";
import SortBtn from "../components/SortBtn";
import UpdateProducts from "../components/UpdateProducts";
import TopCities from "../components/TopCities";

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        render: 'crud'
        };

    }
    cambia = (arg) =>{
        this.setState({render: arg})
    }

    handlerRender = () => {

        switch (this.state.render) {
            case 'crud':
                return (
                    <UpdateProducts/>
                );
            case 'topVentas':
                return(
                    <div className="container">
                        <TopProducts/>
                    </div>
                );
                case 'topPaises':
                return(
                    <div className="container">
                        <TopCities/>
                    </div>
                );
            default:
                return(
                    <div className="cover">
                        <img className="w-50" src="./assets/images/no_products.png" alt="no products"/>
                        <p className="p_error">No hay categorías</p>
                    </div>
                )
        }
    };


    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav">
                        <section className="cont-principal">
                            <ul id="categorias" className="admin">

                                <li
                                    onClick={() => this.cambia('crud')}
                                >Actulizar productos
                                </li>
                                <li
                                    onClick={() => this.cambia('topVentas')}
                                >Más vendidos
                                </li>
                                <li
                                    onClick={() => this.cambia('topPaises')}
                                >Top Ciudades
                                </li>

                            </ul>

                            <div className="contenido-admin">
                                <div className="titulo mx-auto mb-2 ">
                                    <h2>Panel de administración</h2>
                                    <hr/>
                                </div>
                                {/*{this.state.render === 'topVentas' ?*/}
                                {/*    <div className="container">*/}
                                {/*        <h1>esto es top ventas</h1>*/}
                                {/*    </div>*/}
                                {/*    :*/}
                                {/*    <UpdateProducts/>*/}
                                {/*}*/}
                                {this.handlerRender()}
                            </div>
                        </section>
                    </main>
                </Wrapper>
            </Fragment>
        )
    }
}


function mapStateToProps(state) {
    return {
        categories: state.Categories.list,
        poolCat: state.PoolCat.list,
        busqueda: state.Search.list,
        desc: state.Search.desc
    }
};

export default connect(mapStateToProps)(AdminView);
