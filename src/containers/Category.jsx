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
/**
 * IMPORT COMPONENTS AND CONTAINERS
 * */
import Header from "../components/Header";
import Footer from "../components/Footer";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // url: 'http://localhost:3000/categories',
            // categories: [],
        }
        //functions BIND
    }

    // componentDidMount() {
    //     axios.get(this.state.url)
    //         .then(connect => {
    //             this.setState({categories: connect.data});
    //             console.table(connect.data);
    //             console.log('----', this.state.categories)
    //         })
    //         .catch(error => console.log(error))
    // }

    render() {
        return (
            <Fragment>
                <Header/>
                <main className="container-fluid no-padd compens_nav">
                    <section className="cont-principal">
                        <ul id="categorias">
                            {this.state.categories.map(category => <Fragment>
                                <li id={category.category} key={category.id}><i
                                    className="fa fa-2x fa-chevron-right"/>{category.category}</li>
                                <hr/>
                            </Fragment>)}
                        </ul>

                        <div className="contenido ">

                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <p> One of three columns</p>
                            <Footer/>
                        </div>
                    </section>
                </main>

            </Fragment>
        )
    }

    // render() {
    //     return (
    //         <Fragment>
    //             <Header/>
    //             <main className="container-fluid">
    //                     <div className="row">
    //                         <div className="col-sm-12 col-lg-2 left">
    //                             <ul id="categorias">
    //                                 {this.state.categories.map(category => <Fragment><li id={category.category} key={category.id}><i className="fa fa-2x fa-chevron-right"/>{category.category}</li><hr/></Fragment>)}
    //                             </ul>
    //                         </div>
    //                         <div className="col-sm-12 col-lg-10 bg-success">
    //                             One of three columns
    //                             <Footer/>
    //                         </div>
    //                     </div>
    //             </main>
    //
    //         </Fragment>
    //     )
    // }
}

export default Category;
