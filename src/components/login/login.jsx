import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class login extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    let containerClasses = ['_innerPage'];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>
            <Header authData={this.props.authData} />				
                <div class="content _loginPage">
                    <div class="content-title">
                        Вход
                    </div>
                    <div class="content-loginForm loginForm form">
                        <div class="loginForm-field form-field _error">
                            <input type="text" name="email" value="test@testru" placeholder="Эл. адрес" />
                        </div>
                        <div class="loginForm-field form-field">
                            <input type="password" name="email" value="" placeholder="Пароль" />
                        </div>
                        <div class="loginForm-restorePassword">
                            Забыли пароль?
                        </div>
                        <div class="loginForm-submit form-submit button _blue" onClick={() => this.props.authorize()}>
                            Войти
                        </div>
                        <div class="loginForm-registration">
                            <div class="loginForm-registration-label">
                                Нет аккаунта?
                            </div>
                            <div class="loginForm-registration-link">
                                Зарегистрироваться
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default login;

