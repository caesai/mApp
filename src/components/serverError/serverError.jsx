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
            <div class="content errorPage _error503">
                <div class="errorPage-logo">
                    <Link to="/"/>
                </div>
                <div class="errorPage-information">
                    <div class="errorPage-information-number"></div>
                    <div class="errorPage-information-name">
                        Service Unavailable
                    </div>
                    <div class="errorPage-information-description">
                        The service is not available.
                        Please try again later
                    </div>
                    <Link to="/" class="errorPage-information-toMainPage button _blue">
                        Try again later
                    </Link>
                </div>
            </div>
		</Container>;
	}
}

export default notFound;