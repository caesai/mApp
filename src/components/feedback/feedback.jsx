import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class feedback extends Component {
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
                <div class="content _feedbackPage">
                    <div class="content-title">
                        Обратная связь
                    </div>
                    <div class="content-feedbackForm feedbackForm form">
                        <div class="feedbackForm-field form-field">
                            <input type="text" name="email" value="" placeholder="Имя" />
                        </div>
                        <div class="feedbackForm-field form-field _error">
                            <input type="text" name="email" value="" placeholder="Эл. адрес" />
                        </div>
                        <div class="feedbackForm-field _textarea form-field">
                            <textarea name="email" placeholder="Ваше сообщение"></textarea>
                        </div>
                        <div class="feedbackForm-submit form-submit button _blue">
                            Отправить
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default feedback;