import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux'
import {addProduct, subtractProduct} from '../actions'
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
import './styles/Carrito.css';
import CardProduct from "./CardProduct";

class Carrito extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showClass: 'noShow',
        };

    }

    openCart = () => {
        (this.state.showClass === 'noShow') ? this.setState({showClass: ''}) : this.setState({showClass: 'noShow'});
    };

    calculaTotal(){

    }

    renderItemsToCart() {
        if (this.props.items.length > 0) {
            return this.props.items.map(item=>{
                return (
                    <Fragment key={item.id}>
                        <CardProduct data={item}/>
                    </Fragment>
                )
            })
        } else {
            return (
                <div style={{width:100+'%', height: 100 + '%', display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src="./assets/images/no_products.png" alt=""/>
                </div>
            )
        }
    }

    render() {
        let valorTotal = 0;
        for(let props of this.props.items){
            valorTotal += parseFloat(props.total);
        }


        return (
            <Fragment>
                <button id="btn_carrito" onClick={this.openCart}>
                    <i className="fa fa-2x fa-shopping-cart"/>
                </button>
                <section id="carrito_container" className={this.state.showClass}>
                    <div id="header_carrito">
                        <button id="btn_close_carrito" onClick={this.openCart}>X</button>
                        <p className="lugar_entrega"><span style={{display: "block"}}>CARRO</span>ENTREGAR EN...</p>
                    </div>
                    <div id="body_carrito">
                        {this.renderItemsToCart()}
                    </div>
                    <div id="footer_carrito">
                        <div id="footer_carrito_pedido">
                            <span>
                                {/*Total aproximado*/}
                                { valorTotal }
                            </span>
                            <span>...€</span>
                        </div>
                        <button type="button" className="btn ">tramitar pedido</button>
                    </div>
                    <hr/>
                </section>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.Carrito.list
    }
}

export default connect(mapStateToProps)(Carrito);
