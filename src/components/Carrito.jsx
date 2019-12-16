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
import './styles/Carrito.css'

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

    render() {
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

                    </div>
                    <div id="footer_carrito">
                        <div id="footer_carrito_pedido">
                            <span>Total aproximado</span>
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

export default Carrito;
