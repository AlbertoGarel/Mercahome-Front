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
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";
/**
 * IMPORT REDUCERS
 * */
import {showCategories} from "../actions";

class Category extends Component {

    componentWillMount() {
        this.props.showCategories();
    }

    renderCategoriesList() {
        if (this.props.categories.length === 0) {
            return (
                <div className="cover">
                    <img className="w-50" src="./assets/images/no_products.png" alt="no products"/>
                    <p className="p_error">No hay categorías</p>
                </div>
            );
        }
        return this.props.categories.map((category) => {
            return (
                <Fragment key={category.id}>
                    <li id={category.category} key={category.id}><i
                        className="fa fa-2x fa-chevron-right"/>{category.category}</li>
                    <hr/>
                </Fragment>
            )
        })
    }

    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav">
                        <section className="cont-principal">
                            <ul id="categorias">

                                {this.renderCategoriesList()}

                            </ul>

                            <div className="contenido ">

                                <p> One of three columns</p>
                                <p> One of three columns</p>
                                <p> One of three columns</p>


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
        categories: state.Categories.list
    }
};


export default connect(mapStateToProps, {showCategories})(Category);
