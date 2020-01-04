import React, {Component, Fragment} from 'react';
import axios from 'axios';
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
import '../containers/styles/AdminView.css'
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Wrapper from "../components/Wrapper";


class UserOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:3000/products/top')
            .then(res => {
                this.renderTopProducts(res)
            })
            .catch(err => console.log(err));
    }

    renderTopProducts(res) {
        let elems = [];
        res.data.map((product) => {

            elems.push(
                <tr key={product.Product.id}>
                    <td>{product.Product.id}</td>
                    <td>{product.Product.name}</td>
                    <td>{product.Product.ud}</td>
                    <td>{product.Product.volume}</td>
                    <td>{product.qty_total}</td>
                    <td>{product.price_total.toFixed(2)}</td>
                </tr>
            )
        });
        this.setState({rows: elems})
    }


    render() {
        return (
            <Fragment>
                <Wrapper>
                    <main>
                        <div className="container">
                            <div className="card-block">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Unidades</th>
                                            <th>Precio</th>
                                            <th>Volumen</th>
                                            <th>Categoria</th>
                                            <th>buttons</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {this.state.rows}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </Wrapper>
            </Fragment>
    )
    }
    }



    export default UserOrders;
