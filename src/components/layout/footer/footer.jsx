import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class footer extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    return <div class="footer">
			<div class="footer-copyright">
				2018 © SimpleMining
			</div>
			<div class="footer-menu footerMenu">
				<div class="footerMenu-item">
					<Link to="/about/">О проекте</Link>
				</div>
				<div class="footerMenu-item">
					<Link to="/how-it-works/">Как это работает</Link>
				</div>
				<div class="footerMenu-item">
					<Link to="/where-to-spend/">Где потратить</Link>
				</div>
				<div class="footerMenu-item">
					<Link to="/blog/">Блог</Link>
				</div>
				<div class="footerMenu-item">
					<Link to="/contacts/">Контакты</Link>
				</div>
			</div>
		</div>;
	}
}

export default footer;