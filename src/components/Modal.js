import React, {Component, Fragment} from 'react';
import {userRegister} from "../actions";

import './styles/Modal.css';
import $ from 'jquery';
import axios from 'axios';

// import Popper from 'popper.js';
class Modal extends Component {
// const Modal = (props) => {
    constructor(props) {
        super(props);
        this.state = {
            usercity: '',
            RegExito: '',
            RegError: '',
            values: {
                email: '',
                username: '',
                loginEmail: '',
                password: '',
                loginPassword: '',
                userStreet: '',
                // usercity: '',
                confirmPassword: '',
            },
            validations: {
                email: '',
                username: '',
                loginEmail: '',
                password: '',
                loginPassword: '',
                userStreet: '',
                confirmPassword: '',
            },
            rows: [],
            // citySelected: 1
        }
        // this.handleChanges = this.handleChanges.bind(this)
        this.myFormRef = React.createRef();
    }

    //validación de SELECT OPTION


    //envío de formulario
    handleSubmit = (ev) => {
        ev.preventDefault();
        const isValid = this.validateAll(ev);

        if (!isValid) {
            return false
        }

        const values = JSON.stringify(this.state);
        if (ev.target.id === "login-form") {
            const paramsBody = {
                "email": this.state.values.loginEmail,
                "password": this.state.values.loginPassword
            };
            this.myFormRef.reset();
            userRegister(paramsBody);

        } else {
                        console.log(this.state.values.username)
                        console.log(this.state.values.userStreet)
                        console.log(this.state.values.usercity)
                        console.log(this.state.values.email)
                        console.log(this.state.values.password)
            let paramsBody = {
                "user_name": this.state.values.username,
                "email": this.state.values.email,
                "password": this.state.values.password,
                "address": this.state.values.userStreet,
                "fk_city": this.state.usercity
            };
            axios.post('http://localhost:3000/users/register', paramsBody)
                .then(res => {
                    this.setState({
                        RegExito: res.data.message,
                        RegError: '',
                    });
                    if(res.status == 200) window.location.href = "/";
                    // this.handleSubmit("login-form")
                })
                .catch(err => {
                    this.setState({
                        RegError: err.message,
                        RegExito: ''
                    })
                });
            this.myFormRef.reset();
        }
    };
    handleChange = (ev) => {
        const {name, value} = ev.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    };
    validateAll = (ev) => {
        const {usercity} = this.state
        const {loginEmail, loginPassword, username, password, email, userStreet, confirmPassword} = this.state.values
        const validations = {
            loginEmail: '',
            loginPassword: '',
            username: '',
            password: '',
            email: '',
            userStreet: '',
            usercity: '',
            confirmPassword: ''
        };
        let isValid = true;

        if (ev.target.id === "login-form") {
            if (!loginPassword) {
                validations.loginPassword = 'Password es requerido.';
                isValid = false;
            }
            if (!(/[A-Z]/).test(loginPassword)) {
                validations.loginPassword = 'Al menos una letra mayuscula es requerida.';
                isValid = false;
            }
            if (!(/[a-z]/).test(loginPassword)) {
                validations.loginPassword = 'Al menos una letra minúcula es requerida.';
                isValid = false;
            }
            if (!(/[1-9]/).test(loginPassword)) {
                validations.loginPassword = 'Al menos un dígitoa es requerido.';
                isValid = false;
            }
            // if (!loginUsername) {
            //     validations.loginUsername = 'Nombre es requerido';
            //     isValid = false
            // }
            // if ((loginUsername && loginUsername.length < 8) || (loginUsername.length > 20)) {
            //     validations.loginUsername = 'Nombre debe contener de 3 a 20 caracteres.'
            //     isValid = false
            // }
            if (!loginEmail) {
                validations.loginEmail = 'Email es requerido'
                isValid = false
            }
            if (loginEmail && !/\S+@\S+\.\S+/.test(loginEmail)) {
                validations.loginEmail = 'Formato de Email debe ser :  example@mail.com';
                isValid = false
            }
            if (loginPassword < 8) {
                validations.password = 'Longitud mínima de 8 caracteres es requerida.';
                isValid = false;
            }

            return isValid;
        } else {
            if(!usercity){
                validations.usercity= 'Selecciona una ciudad';
                isValid = false;
            }
            if (password < 8) {
                validations.password = 'Longitud mínima de 8 caracteres es requerida.';
                isValid = false;
            }
            if (!(/[A-Z]/).test(password)) {
                validations.password = 'Al menos una letra mayuscula es requerida.';
                isValid = false;
            }
            if (!(/[a-z]/).test(password)) {
                validations.password = 'Al menos una letra minúcula es requerida.';
                isValid = false;
            }
            if (!(/[1-9]/).test(password)) {
                validations.password = 'Al menos un dígitoa es requerido.';
                isValid = false;
            }
            if (!password) {
                validations.password = 'Password es requerido.';
                isValid = false;
            }
            if (password !== confirmPassword) {
                validations.password = 'Passwords no son idénticos';
                isValid = false;
            }

            if (!username) {
                validations.username = 'Nombre es requerido.';
                isValid = false
            }
            if ((!username) || (username && username.length < 8) || (username.length > 20)) {
                validations.username = 'Nombre debe contener de 8 a 20 caracteres.'
                isValid = false
            }
            if (!email) {
                validations.email = 'Email es requerido'
                isValid = false
            }
            if (email && !/\S+@\S+\.\S+/.test(email)) {
                validations.email = 'Formato de Email debe ser :  example@mail.com'
                isValid = false
            }
            if (!userStreet) {
                validations.userStreet = 'Calle es requerida';
                isValid = false
            }
            if (!isValid) {
                this.setState({validations})
            }

            return isValid
        }
    };

    validateOne = (ev) => {
        const {name} = ev.target;
        const value = this.state.values[name];
        let message = '';

        if (!value) {
            message = `${name} es requerido`
        }

        if (value && name === 'name' && (value.length < 8 || value.length > 50)) {
            message = 'Nombre debe contener de 8 a 20 caracteres.'
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Formato de Email debe ser :  example@mail.com'
        }

        this.setState({
            validations: {
                ...this.state.validations,
                [name]: message
            }
        })
    };

    // render Selects
    componentDidMount() {
        axios.get('http://localhost:3000/cities')
            .then(res=>{
                this.renderTopCities(res)
            })
            .catch(err=>console.log(err));
    }

    renderTopCities(res){
        let elems=[];
        res.data.map((cat) => {

            elems.push(

                <Fragment key={cat.id}>
                    <option value={cat.id}>{cat.name}</option>
                </Fragment>

            )
        });
        this.setState({rows: elems})
    }

    handleChanges = (ev) =>{
        // this.setState({citySelected: ev.target.value});
        // this.setState({ values:{usercity: ev.target.value}})
        this.setState( { usercity: ev.target.value})
    };

    render() {
        $(function () {

            $('#login-form-link').click(function (ev) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                ev.preventDefault();
            });
            $('#register-form-link').click(function (ev) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                ev.preventDefault();
            });


        });
        return (
            <Fragment>
                <div className="modal-wrapper"
                     style={{
                         transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    <div className="modal-header">
                        <h3>Modal Header</h3>
                        <span className="close-modal-btn" onClick={this.props.close}><i
                            className="fa fa-2x fa-window-close-o"/></span>
                    </div>
                    <div className="modal-body">
                        <div className="row formulario-row">
                            <div className="col-md-12 col-md-offset-3">
                                <div className="panel panel-login">
                                    <div className="panel-heading">
                                        <div className="row formulario-row">
                                            <div className="col-xs-6">
                                                <a href="#" className="active" id="login-form-link">Iniciar sesión</a>
                                            </div>
                                            <div className="col-xs-6">
                                                <a href="#" id="register-form-link">Regístrate ahora</a>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row formulario-row">
                                            <div className="col-lg-12">
                                                <p className="error">{this.state.RegError}</p>
                                                <p className="correcto">{this.state.RegExito}</p>
                                                <form id="login-form" onSubmit={(ev) => this.handleSubmit(ev)}
                                                      method="post" role="form" style={{display: 'block'}}
                                                      ref={(login) => this.myFormRef = login}>
                                                    <div className="form-group">
                                                        <input type="email"

                                                               name="loginEmail"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}

                                                               id="loginEmail" tabIndex="1"
                                                               className="form-control" placeholder="Email"/>
                                                        <p className="error">{this.state.validations.loginEmail}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"

                                                               name="loginPassword"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}

                                                               id="loginPassword"
                                                               tabIndex="2" className="form-control"
                                                               placeholder="Contraseña"/>
                                                        <p className="error">{this.state.validations.loginPassword}</p>
                                                    </div>
                                                    <div className="form-group text-center">
                                                        <input type="checkbox" tabIndex="3" className="" name="remember"
                                                               id="remember"/>
                                                        <label htmlFor="remember"> Recordarme</label>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row formulario-row">
                                                            <div className="col-sm-6 col-sm-offset-3">
                                                                <input type="submit"

                                                                       name="login-submit"

                                                                       id="login-submit" tabIndex="4"
                                                                       className="form-control btn btn-login"
                                                                       value="Iniciar sesión"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/*REGISTER*/}
                                                <form id="register-form" onSubmit={(ev) => this.handleSubmit(ev)}
                                                      method="post" role="form" style={{display: 'none'}}
                                                      ref={(register) => this.myFormRef = register}>
                                                    <div className="form-group">
                                                        <input type="text"

                                                               name="username"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}

                                                               autoComplete="nope"
                                                               id="username"
                                                               tabIndex="1"
                                                               className="form-control" placeholder="Usuario"/>
                                                        <p className="error">{this.state.validations.username}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text"

                                                               name="userStreet"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}

                                                               autoComplete="nope"
                                                               id="userStreet"
                                                               tabIndex="2"
                                                               className="form-control" placeholder="Calle"/>
                                                        <p className="error">{this.state.validations.userStreet}</p>
                                                    </div>
                                                    {/*--option*/}
                                                    <div className="form-group">
                                                        <select name="usercity" className="form-control"
                                                                defaultValue={this.state.values.usercity}
                                                                onChange={this.handleChanges}>
                                                            <option >Selecciona Ciudad</option>
                                                            {this.state.rows}
                                                        </select>
                                                        <p className="error">{this.state.validations.usercity}</p>
                                                    </div>
                                                    {/*option*/}
                                                    <div className="form-group">
                                                        <input type="email"

                                                               name="email"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}

                                                               autoComplete="nope"
                                                               id="email" tabIndex="3"
                                                               className="form-control"
                                                               placeholder="Correo electronico"/>
                                                        <p className="error">{this.state.validations.email}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"

                                                               name="password"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}

                                                               autoComplete="nope"
                                                               id="password"
                                                               tabIndex="4" className="form-control"
                                                               placeholder="Contraseña"/>
                                                        <p className="error">{this.state.validations.password}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password"

                                                               name="confirmPassword"
                                                               onChange={this.handleChange}
                                                               onBlur={this.validateOne}
                                                               autoComplete="nope"

                                                               id="confirmPassword" tabIndex="5"
                                                               className="form-control"
                                                               placeholder="Confirmar contraseña"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row formulario-row">
                                                            <div className="col-sm-6 col-sm-offset-3">
                                                                <input type="submit" name="register-submit"
                                                                       id="register-submit" tabIndex="4"
                                                                       className="form-control btn btn-register"
                                                                       value="Crear cuenta"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={this.props.close}>CLOSE</button>
                        {/*<button className="btn-continue">CONTINUE</button>*/}
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Modal;
