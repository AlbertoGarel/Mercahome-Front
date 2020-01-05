import React, {Component} from "react";

import {connect} from "react-redux";
import {addProduct, showCategories, showPoolCat, subtractProduct} from '../actions'

import './styles/CardProduct.css'

class CardProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    handleButtonPlus = (ev) => {
        addProduct(ev.currentTarget.dataset);


    };
    handleButtonQuit = (ev, cant) => {

        subtractProduct(ev.currentTarget.dataset)

    };


    render() {
        const {user, items} = this.props;
        //pinta de redux
        let cant;
        for (let prop of items) {
            if (prop.id == this.props.data.id) {
                cant = prop.cant;
            }
        }


        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pr-0 pl-0">
                <div className="card">
                    <div className="position-relative">
                        <img className="card-img-top" src={this.props.data.image} alt={this.props.data.name}/>
                        <span className="product-cell__image-overlay"/>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.data.name}</p>
                        <p className="card-text">{this.props.data.ud}</p>
                        <p className="card-text font-weight-bold">
                            {`${parseFloat(this.props.data.price).toFixed(2)} € `}
                        <span
                            className="card-text">{this.props.data.volume}</span>
                        </p>
                    </div>
                    {user.username.length > 0 ?
                        <div className="buttons d-flex align-items-center">
                            <span className="fa-stack fa-lg"
                                  data-id={this.props.data.id}
                                  data-name={this.props.data.name}
                                  data-image={this.props.data.image}
                                  data-price={parseFloat(this.props.data.price).toFixed(2)}
                                  data-ud={this.props.data.ud}
                                  data-volume={this.props.data.volume}
                                  data-cant={1}
                                  data-total={parseFloat(this.props.data.price).toFixed(2)}
                                  onClick={(ev) => this.handleButtonPlus(ev)}>
                                <i className="fa fa-circle fa-stack-2x"/><i
                                className="fa fa-plus-circle fa-stack-1x fa-inverse"/>
                            </span>

                            { cant === undefined ?
                                ''
                                :
                                cant == 1 ?
                                <span className="fa-stack fa-lg"
                                      data-id={this.props.data.id}
                                      data-name={this.props.data.name}
                                      data-image={this.props.data.image}
                                      data-price={parseFloat(this.props.data.price).toFixed(2)}
                                    // data-cant={1}
                                      onClick={(ev) => this.handleButtonQuit(ev, this.cant)}>
                                <i className="fa fa-circle fa-stack-2x"/><i
                                    className="fa fa-trash fa-stack-1x fa-inverse"/>
                        </span>
                                :

                                <span className="fa-stack fa-lg"
                                      data-id={this.props.data.id}
                                      data-name={this.props.data.name}
                                      data-image={this.props.data.image}
                                      data-price={parseFloat(this.props.data.price).toFixed(2)}
                                    // data-cant={1}
                                      onClick={(ev) => this.handleButtonQuit(ev, this.cant)}>
                                 <i className="fa fa-circle fa-stack-2x"/><i
                                     className="fa fa-minus-circle fa-stack-1x fa-inverse"/>
                        </span>
                            }
                            <span className="text-bolde flex-grow-1 text-center">
                                {cant === undefined ? '' :  cant > 0 && cant == 1 ? `${cant} ud` : `${cant} uds` }
                            </span>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.Users,
        items: state.Carrito.list
    }
}

export default connect(mapStateToProps)(CardProduct);
