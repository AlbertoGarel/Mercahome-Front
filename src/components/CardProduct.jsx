import React, {Component} from "react";

import './styles/CardProduct.css'

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {


        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pr-0 pl-0">
                <div className="card">
                    <div className="position-relative">
                        <img className="card-img-top" src={this.props.data.image} alt={this.props.data.name}/>
                        <span className="product-cell__image-overlay"></span>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.data.name}</p>
                        <p className="card-text">{this.props.data.ud}</p>
                        <p className="card-text font-weight-bold">{`${this.props.data.price.toFixed(2)} € `} <span className="card-text">{this.props.data.volume}</span>
                        </p>
                    </div>
                    <div className="buttons">
                        <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i
                            className="fa fa-plus-circle fa-stack-1x fa-inverse"></i></span>
                        <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i
                            className="fa fa-trash fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProduct;
