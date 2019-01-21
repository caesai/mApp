import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class registration extends Component {
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
                <div class="content _mnemonicKeyPage">
                    <div class="content-title">
                        Мнемонический ключ
                    </div>
                    <div class="content-mnemonicKeyForm mnemonicKeyForm form">
                        <div class="mnemonicKeyForm-note">
                            Запомните или сохраните! Он&nbsp;понадобится для&nbsp;восстановления пароля:
                        </div>
                        <div class="mnemonicKeyForm-phrase">
                            Каждый Охотник Желает Знать Где Сидит Фазан
                        </div>
                        <div class="mnemonicKeyForm-field form-field _error">
                            <input type="text" name="name" value="Тимур" placeholder="Имя" />
                        </div>
                        <div class="mnemonicKeyForm-field form-field">
                                <input type="text" name="email" value="" placeholder="Эл. адрес" />
                            </div>
                        <div class="mnemonicKeyForm-field form-field">
                            <input type="password" name="password" value="" placeholder="Пароль" />
                        </div>
                        <div class="mnemonicKeyForm-field form-field">
                            <input type="password" name="password_repeat" value="" placeholder="Повторите пароль" />
                        </div>
                        <div class="mnemonicKeyForm-submit form-submit button _blue">
                            Зарегистрироваться
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default registration;