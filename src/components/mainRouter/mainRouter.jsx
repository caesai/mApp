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

	restoreState() {
		document.body.classList.remove('_preventScroll');
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
						<Route path="/" exact render={() => {
							this.restoreState();
							return <MainPage authData={this.state.authData} />;
						}} />
						<Route path="/about/" exact render={() => {
							this.restoreState();
							return <About authData={this.state.authData} />;
						}} />
						<Route path="/blog/" exact render={() => {
							this.restoreState();
							return <Blog authData={this.state.authData} />;
						}} />
						<Route path="/contacts/" exact render={() => {
							this.restoreState();
							return <Contacts authData={this.state.authData} />;
						}} />
						<Route path="/feedback/" exact render={() => {
							this.restoreState();
							return <Feedback authData={this.state.authData} />;
						}} />
						<Route path="/how-it-works/" exact render={() => {
							this.restoreState();
							return <HowItWorks authData={this.state.authData} />;
						}} />
						<Route path="/where-to-spend/" exact render={() => {
							this.restoreState();
							return <WhereToSpend authData={this.state.authData} />;
						}} />
						<Route path="/private/currencies/" exact render={() => {
							this.restoreState();
							return <Currencies authData={this.state.authData} />;
						}} />
						<Route path="/private/settings/" exact render={() => {
							this.restoreState();
							return <Settings authData={this.state.authData} />;
						}} />
						<Route path="/private/addresses/" exact render={() => {
							this.restoreState();
							return <Addresses authData={this.state.authData} />;
						}} />
						<Route path="/mining/" exact render={() => {
							this.restoreState();
							return <Currencies authData={this.state.authData} />;
						}} />
						<Route path="/login/" exact render={() => {
							this.restoreState();
							return <Login authData={this.state.authData} authorize={this.authorize} />;
						}} />
						<Route path="/registration/" exact render={() => {
							this.restoreState();
							return <Registration authData={this.state.authData} />;
						}} />
						<Route path="/restore-password/" exact render={() => {
							this.restoreState();
							return <RestorePassword authData={this.state.authData} />;
						}} />
						<Route path="/503/" exact render={() => {
							this.restoreState();
							return <ServerError authData={this.state.authData} />;
						}} />
						<Route render={() => {
							this.restoreState();
							return <NotFound authData={this.state.authData} />;
						}} />
					</Switch>
				</Router>
			);
		}
	}
}

export default mainRouter;
