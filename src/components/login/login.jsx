import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Link } from 'react-router-dom'
import Footer from '../layout/footer';
import Container from '../container';

class login extends Component {
	constructor(props) {
		super(props);		
		this.state = {
            username: '',
            email: '',
            password: ''
		};
    }
    
    handleChange = (e) => {
        console.log(e);
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.auth);
        this.props.signIn(this.state);
        console.log(this.props.auth);
    }
	
	render() {		
        const { authError, auth } = this.props;
	    let containerClasses = ['_innerPage'];

        if (auth.uid)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>	
                <div className="content _loginPage">
                    <div className="content-title">
                        Вход
                    </div>
                    <form className="content-loginForm loginForm form" onSubmit={this.handleSubmit}>
                        <div className="loginForm-field form-field">
                            <input type="text" id="email" placeholder="Эл. адрес" onChange={this.handleChange}/>
                        </div>
                        <div className="loginForm-field form-field">                        
                            <input type="password" id="password" placeholder="Пароль" onChange={this.handleChange} />
                        </div>
                        <div className="loginForm-restorePassword">
                            Забыли пароль?
                        </div>
                        <div className="loginForm-submit form-submit">                            
                            <button className="form-submit button _blue">Войти</button>
                            <div className="form-submit">
                                { authError ? <p>{authError}</p> : null }
                            </div>
                        </div>
                        <div className="loginForm-registration">
                            <div className="loginForm-registration-label">
                                Нет аккаунта?
                            </div>
                            <div className="loginForm-registration-link">
                                <Link to='/registration'>Зарегистрироваться</Link>
                            </div>
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
      signIn: (creds) => dispatch(signIn(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(login);

