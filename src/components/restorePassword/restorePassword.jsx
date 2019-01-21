import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class restorePassword extends Component {
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
                <div class="content _restorePasswordPage">
                    <div class="content-title">
                        Восстановление пароля
                    </div>
                    <div class="content-restorePasswordForm restorePasswordForm form">
                        <div class="restorePasswordForm-description">
                            Для восстановления пароля введите мнемонический ключ и почту, <br />указанную при регистрации
                        </div>
                        <div class="restorePasswordForm-field form-field">
                            <input type="text" name="email" value="" placeholder="Эл. адрес" />
                        </div>
                        <div class="restorePasswordForm-field _textarea form-field">
                            <textarea name="email" placeholder="Мнемонический ключ"></textarea>
                        </div>
                        <div class="restorePasswordForm-submit form-submit button _blue">
                            Восстановить
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default restorePassword;