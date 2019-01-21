import React, { Component } from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Container from '../../container';
import classNames from 'classnames';

class restorePassword extends Component {
	constructor(props) {
		super(props);		
		this.state = {
            nameBlockOpen: true,
            emailBlockOpen: false,
            passwordBlockOpen: false
		};
    }
    
    switchNameBlockState() {
        let nameBlockOpen = !this.state.nameBlockOpen;

        this.setState({nameBlockOpen});
    }

    switchEmailBlockState() {
        let emailBlockOpen = !this.state.emailBlockOpen;

        this.setState({emailBlockOpen});
    }

    switchPasswordBlockState() {
        let passwordBlockOpen = !this.state.passwordBlockOpen;

        this.setState({passwordBlockOpen});
    }
	
	render() {
	    let containerClasses = ['_innerPage'];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

        let nameBlockClasses = ['setting'];

        if (this.state.nameBlockOpen)
            nameBlockClasses.push('_open');
        
        nameBlockClasses = classNames(nameBlockClasses);

        let emailBlockClasses = ['setting'];

        if (this.state.emailBlockOpen)
            emailBlockClasses.push('_open');
        
        emailBlockClasses = classNames(emailBlockClasses);

        let passwordBlockClasses = ['setting'];

        if (this.state.passwordBlockOpen)
            passwordBlockClasses.push('_open');
        
        passwordBlockClasses = classNames(passwordBlockClasses);

	    return <Container classes={containerClasses}>
            <Header authData={this.props.authData} />				
                <div class="content _settingsPage">
                    <div class="content-title">
                        Настройки
                    </div>
                    <div className={nameBlockClasses}>
                        <div class="setting-title" onClick={() => this.switchNameBlockState()}>
                            Сменить имя пользователя
                        </div>
                        <div class="setting-form form">
                            <div class="setting-form-field form-field">
                                <input type="text" name="name" value="" placeholder="Имя" />
                            </div>
                            <div class="setting-form-field form-field">
                                <input type="password" name="password" value="" placeholder="Пароль" />
                            </div>
                            <div class="setting-form-submit form-submit button _blue">
                                Сохранить
                            </div>
                        </div>
                    </div>
                    <div className={emailBlockClasses}>
                        <div class="setting-title" onClick={() => this.switchEmailBlockState()}>
                            Сменить эл. адрес
                        </div>
                        <div class="setting-form form">
                            <div class="setting-form-field form-field">
                                <input type="text" name="name" value="" placeholder="Новый эл. адрес" />
                            </div>
                            <div class="setting-form-field form-field">
                                <input type="password" name="password" value="" placeholder="Пароль" />
                            </div>
                            <div class="setting-form-submit form-submit button _blue">
                                Сохранить
                            </div>
                        </div>
                    </div>
                    <div className={passwordBlockClasses}>
                        <div class="setting-title" onClick={() => this.switchPasswordBlockState()}>
                            Сменить пароль
                        </div>
                        <div class="setting-form form">
                            <div class="setting-form-field form-field">
                                <input type="password" name="name" value="" placeholder="Новый пароль" />
                            </div>
                            <div class="setting-form-field form-field">
                                <input type="password" name="name" value="" placeholder="Повторить новый пароль" />
                            </div>
                            <div class="setting-form-field form-field">
                                <input type="password" name="password" value="" placeholder="Ваш текущий пароль" />
                            </div>
                            <div class="setting-form-submit form-submit button _blue">
                                Сохранить
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default restorePassword;

