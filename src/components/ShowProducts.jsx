import React, {Component, Fragment} from "react";

import './styles/ShowProducts.css';
import {connect} from 'react-redux'
import {showTopProducts} from "../actions";
import CardProduct from "./CardProduct";

class Showproducts extends Component {

    componentWillMount() {
        showTopProducts();
    }

    renderTopProducts() {
        if(!this.props.busqueda.length){
            return this.props.topProducts.map((product) => {
                return (
                    <Fragment key={product.Product.id}>
                        <CardProduct data={product.Product}/>
                    </Fragment>
                )
            })
        }else{
            return this.props.busqueda.map((product) => {
                return (
                    <Fragment key={product.id}>
                        <CardProduct data={product}/>
                    </Fragment>
                )
            })
        }

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
        topProducts: state.TopProducts.list,
        busqueda: state.Search.list,
        desc: state.Search.desc
    }
}

export default connect(mapStateToProps)(Showproducts);
