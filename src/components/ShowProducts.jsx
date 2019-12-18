import React, {Component, Fragment} from "react";

import './styles/ShowProducts.css';
import {connect} from 'react-redux'
import {showTopProducts} from "../actions";
import CardProduct from "./CardProduct";

class Showproducts extends Component {

    componentWillMount() {
        this.props.showTopProducts();
    }

    renderTopProducts() {
        return this.props.topProducts.map((product) => {
            return (
                <Fragment key={product.Product.id}>
                    <CardProduct data={product.Product}/>
                </Fragment>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <section className="d-flex justify-content-start flex-wrap">

                    {this.renderTopProducts()}

                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        topProducts: state.TopProducts.list
    }
}

export default connect(mapStateToProps, {showTopProducts})(Showproducts);
