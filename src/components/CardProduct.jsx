import React, {Component, Fragment} from "react";

import './styles/CardProduct.css'

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {


        return (
            <Fragment>
                <div className="card" >
                    <img className="card-img-top" src={this.props.data.image} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">{this.props.data.name}</p>
                            <p className="card-text">{this.props.data.ud}</p>
                            <p className="card-text">{`${this.props.data.price} € `} <span>{this.props.data.volume}</span> </p>
                        </div>
                    <div className="buttons">
                        <button>+</button>
                        <button>quitar</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;
