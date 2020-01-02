import React, {Component} from "react";

import {connect} from "react-redux";
import {addProduct, subtractProduct} from '../actions'

import './styles/CardProduct.css'

class CardProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleButtonPlus = (ev) => {
        // this.setState({number: this.state.number + 1});
        // let id = ev.currentTarget.dataset.id;
        // let cant = ev.currentTarget.dataset.cant;
        // let price = ev.currentTarget.dataset.price;
        // const product ={
        //     cant
        // };
        // localStorage.setItem(`product-${id}`, JSON.stringify(product));
        // console.log(cant * price)
        // console.log('sumar',this.state.minCat)

        addProduct(ev.currentTarget.dataset);


    };
    handleButtonQuit = (ev, cant) => {
        // this.setState({number: this.state.number - 1});
        // if (this.state.number <= 0) {
        //     this.setState({
        //         number: 0
        //     })
        // }
        // let id = ev.currentTarget.dataset.id;
        // let cant = ev.currentTarget.dataset.cant;
        // let price = ev.currentTarget.dataset.price;
        // const product ={
        //     cant
        // };
        // localStorage.setItem(`product-${id}`, JSON.stringify(product));
        // console.log(ev.currentTarget.dataset)
        // console.log('restar',this.state.minCat)


        subtractProduct(ev.currentTarget.dataset)

    };


//     renderCant(itemId){
//     const items = this.props.items;
//     for(let prop of items){
//         if(prop.id === itemId){
//             return prop.cant;
//         }
//     }
// }


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
                        <div className="buttons">
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
                            {/*{this.state.number !== 0 ? this.state.number : ''}*/}
                            {cant}
                            {/*{console.log('cant', cant)}*/}
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
