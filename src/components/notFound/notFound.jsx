import React, { Component } from 'react'
import Container from '../container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class notFound extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    return <Container>
			<div class="content errorPage">
				<div class="errorPage-logo">
					<Link to="/"/>
				</div>
				<div class="errorPage-information">
					<div class="errorPage-information-number"></div>
					<div class="errorPage-information-name">
						Page not found
					</div>
					<div class="errorPage-information-description">
						Неправильно набран адрес или такой страницы больше не существует. Если вы уверены, что набрали адрес правильно, сообщите нам об этом. Спасибо!
					</div>
					<Link to="/" class="errorPage-information-toMainPage button _blue">
						Перейти на главную
					</Link>
				</div>
			</div>
		</Container>;
	}
}

export default notFound;