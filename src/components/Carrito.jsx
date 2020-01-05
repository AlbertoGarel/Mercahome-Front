import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux'
import {AddOrder} from '../actions'
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
            message: ''
        };

    }


    openCart = () => {
        (this.state.showClass === 'noShow') ? this.setState({showClass: ''}) : this.setState({showClass: 'noShow'});
    };

    sendCarrito = () => {
        // let carritoLocalStorage = JSON.parse(localStorage.getItem('redux_localstorage_simple')).Carrito.list;
        console.log(JSON.parse(localStorage.getItem('redux_localstorage_simple_Carrito')).list);
        if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('redux_localstorage_simple_Carrito')).list.length > 0) {

            let carritoOfredux = this.props.items;
            let user = JSON.parse(localStorage.getItem('user'));
            let paramsHeaders = {headers: {Authorization: `bearer ${JSON.parse(localStorage.getItem('user')).token}`}};
            let paramsBody = {
                "email": user.email,
                "products": []
            };
            carritoOfredux.map(item => {
                paramsBody.products.push({
                    "fk_user_id": user.id,
                    "fk_product_id": parseInt(item.id),
                    "current_price": parseFloat(item.total),
                    "qty": parseInt(item.cant)
                })
            });
            const message = AddOrder(paramsBody, paramsHeaders)
            this.setState({message: message})

        } else {
            this.setState({message: 'No tienes ningún producto en el carrito.'})

            setTimeout(function () {
                this.setState({message: ''})
            }.bind(this), 2000)
        }
    };


    renderItemsToCart() {
        if (this.props.items.length > 0 ) {
            return this.props.items.map(item => {
                return (
                    <Fragment key={item.id}>
                        <CardProduct data={item}/>
                    </Fragment>
                )
            })
        } else {
            return (
                <div style={{
                    width: 100 + '%',
                    height: 100 + '%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src="./assets/images/no_products.png" alt=""/>
                </div>
            )
        }
    }


    render() {
        let valorTotal = 0;
        for (let props of this.props.items) {
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
                        <p className="lugar_entrega"><span style={{display: "block"}}>CARRO</span>{ localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).address : 'ENTREGAR EN...'} </p>
                    </div>
                    <div id="body_carrito">
                        {this.renderItemsToCart()}

                    </div>
                    <div id="footer_carrito">
                        <div id="footer_carrito_pedido">
                            <span>
                                Precio Total:

                            </span>
                            <span> {valorTotal.toFixed(2)} €</span>
                        </div>
                        <p style={{
                            color: 'red',
                            textAlign: 'center'
                        }}>{this.state.message ? this.state.message : ''}</p>
                        <button type="button" className="btn"
                                onClick={() => {
                                    this.sendCarrito()
                                }}
                        >
                            Tramitar pedido
                        </button>
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
