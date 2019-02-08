import React, { Component } from 'react'
import Footer from '../layout/footer';
import Container from '../container';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class registration extends Component {
	constructor(props) {
		super(props);		
		this.state = {
            username: '',
            email: '',
            password: '',            
		};
    }
    
        
    handleChange = (e) => {
        console.log(e);
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handlePasswordCheck = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.auth);
        this.props.signIn(this.state);
        console.log(this.props.auth);
    }
	
	render() {		
	    let containerClasses = ['_innerPage'];

        if (this.props.auth.uid)
            containerClasses.push('_loggedIn');
        if (this.props.auth.uid) return <Redirect to='/' />;

	    return <Container classes={containerClasses}>				
                <div className="content _mnemonicKeyPage">
                    <div className="content-title">
                        Мнемонический ключ
                    </div>
                    <form className="content-mnemonicKeyForm mnemonicKeyForm form" onSubmit={this.handleSubmit}>
                        <div className="mnemonicKeyForm-note">
                            Запомните или сохраните! Он&nbsp;понадобится для&nbsp;восстановления пароля:
                        </div>
                        <div className="mnemonicKeyForm-phrase">
                            Каждый Охотник Желает Знать Где Сидит Фазан
                        </div>
                        <div className="mnemonicKeyForm-field form-field _error">
                            <input type="text" id="name" placeholder="Имя" onChange={this.handleChange}/>
                        </div>
                        <div className="mnemonicKeyForm-field form-field">
                                <input type="text" id="email" placeholder="Эл. адрес" onChange={this.handleChange}/>
                            </div>
                        <div className="mnemonicKeyForm-field form-field">
                            <input type="password" id="password" placeholder="Пароль" onChange={this.handleChange}/>
                        </div>
                        <div className="mnemonicKeyForm-field form-field">
                            <input type="password" id="password_repeat" placeholder="Повторите пароль" onChange={this.handlePasswordCheck}/>
                        </div>
                        <div className="mnemonicKeyForm-submit form-submit button _blue">
                            <button className="button _blue"></button>  
                            Зарегистрироваться                          
                        </div>
                    </form>
                </div>
            <Footer />
        </Container>;
	}
}

const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(registration);