import React, {Component, Fragment} from "react";
import Header from "./Header";
import Footer from "./Footer";

class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <Header/>

                {this.props.children}

                <Footer/>
            </Fragment>
        )
    }
}

export default Wrapper;