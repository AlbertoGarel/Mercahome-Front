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
import {
    showCategories,
    showPoolCat,
    sortByPrice
} from "../actions";
import CardProduct from "../components/CardProduct";
import SortBtn from "../components/SortBtn";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: "Agua",
            btn: false,
        };
//bind function
        this.outputEvent = this.outputEvent.bind(this);
    }

    outputEvent() {
        if (this.state.btn === false) {
            this.setState({btn: true});
        } else {
            this.setState({btn: false});
        }
            sortByPrice(this.state.btn);
    }

    componentDidMount() {
        showCategories();
        showPoolCat(this.state.cat);
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
                    <li id={category.category} key={category.id} onClick={() => this.handleCategory(category.category)}>
                        <i
                            className="fa fa-2x fa-chevron-right"/>{category.category}</li>
                    <hr/>
                </Fragment>
            )
        })
    }

    renderPoolCategories() {
        return this.props.poolCat.map((product) => {
            return (
                <Fragment key={product.id}>
                    <CardProduct data={product}/>
                </Fragment>
            )
        })
    }

    handleCategory = (category) => {
        this.setState({cat: category});
        showPoolCat(category);
    };

    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main className="container-fluid no-padd compens_nav">
                        <section className="cont-principal">
                            <ul id="categorias">

                                {this.renderCategoriesList()}

                            </ul>

                            <div className="contenido">
                                <div className="titulo mx-auto mb-2 ">
                                    <h2>{this.state.cat}</h2>
                                    <SortBtn clickHandler={this.outputEvent} data={this.state.btn}/>
                                    <hr/>
                                </div>

                                {this.renderPoolCategories()}

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
    }
};

export default connect(mapStateToProps)(Category);
