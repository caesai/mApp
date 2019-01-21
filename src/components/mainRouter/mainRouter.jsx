import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Switch } from 'react-router'
import axios from 'axios';
import Cookies from 'universal-cookie';
import qs from 'qs';
import classNames from 'classnames'

import MainPage from '../mainPage';
import About from '../about';
import Blog from '../blog';
import Contacts from '../contacts';
import Feedback from '../feedback';
import HowItWorks from '../howItWorks';
import WhereToSpend from '../whereToSpend';
import Currencies from '../private/currencies';
import Settings from '../private/settings';
import Addresses from '../private/addresses';
import Login from '../login';
import Registration from '../registration';
import RestorePassword from '../restorePassword';

import NotFound from '../notFound';
import ServerError from '../serverError';

const cookies = new Cookies();

class mainRouter extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			loaded: true,
			authData: false
		};

		this.authorize = this.authorize.bind(this);
	}

	authorize() {
		this.setState({authData: true});
	}
    
	render() {
		if (!this.state.loaded)
		{
			return (
				<div>Загрузка</div>
			);
		} else {			
			return (
				<Router>
					<Switch>
						<Route path="/" exact>
							<MainPage authData={this.state.authData} />
						</Route>     
						<Route path="/about/" exact>
							<About authData={this.state.authData} />
						</Route>
						<Route path="/blog/" exact>
							<Blog authData={this.state.authData} />
						</Route>
						<Route path="/contacts/" exact>
							<Contacts authData={this.state.authData} />
						</Route>
						<Route path="/feedback/" exact>
							<Feedback authData={this.state.authData} />
						</Route>
						<Route path="/how-it-works/" exact>
							<HowItWorks authData={this.state.authData} />
						</Route>
						<Route path="/where-to-spend/" exact>
							<WhereToSpend authData={this.state.authData} />
						</Route>
						<Route path="/private/currencies/" exact>
							<Currencies authData={this.state.authData} />
						</Route>
						<Route path="/private/settings/" exact>
							<Settings authData={this.state.authData} />
						</Route>
						<Route path="/private/addresses/" exact>
							<Addresses authData={this.state.authData} />
						</Route>						
						<Route path="/mining/" exact>
							<Currencies authData={this.state.authData} />
						</Route>
						<Route path="/login/" exact>
							<Login authData={this.state.authData} authorize={this.authorize} />
						</Route>
						<Route path="/registration/" exact>
							<Registration authData={this.state.authData} />
						</Route>
						<Route path="/restore-password/" exact>
							<RestorePassword authData={this.state.authData} />
						</Route>
						<Route path="/503/" exact>
							<ServerError authData={this.state.authData} />
						</Route>
						<Route>
							<NotFound authData={this.state.authData} />
						</Route>
					</Switch>
				</Router>
			);
		}
	}
}

export default mainRouter;
