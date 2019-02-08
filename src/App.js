import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/header'
import MainPage from './components/mainPage'
import About from './components/about';
import Blog from './components/blog';
import Contacts from './components/contacts';
import Feedback from './components/feedback';
import HowItWorks from './components/howItWorks';
import WhereToSpend from './components/whereToSpend';
import Currencies from './components/private/currencies';
import Settings from './components/private/settings';
import Addresses from './components/private/addresses';
import Login from './components/login';
import Registration from './components/registration';
import RestorePassword from './components/restorePassword';
import Test from './components/test';

import NotFound from './components/notFound';
import ServerError from './components/serverError';

class App extends Component {
    // Init root component
    constructor(props) {
		super(props);		
		this.state = {
			loaded: true,
		};
	}

    // TO DO explain magic
    // componentDidMount() {		
	// 	this.props.history.listen((location, action) => {
	// 		document.body.classList.remove('_preventScroll');
	// 	});
	// }

    // Render root 
    render() {
        if (!this.state.loaded)
        {
            return (
                <div>Загрузка</div>
            );
        };
        return (
        <BrowserRouter>
            <div className="App">
            <Header mainPage={true}/>
            <Switch>            				
                <Route path='/' exact component={MainPage} />
                <Route path='/login' component={Login} />
                <Route path='/registration' component={Registration} />
                <Route path="/restore-password" component={RestorePassword} />

                <Route path='/about' component={About} />            
				<Route path="/blog" component={Blog} />
				<Route path="/contacts" component={Contacts} />
                <Route path="/feedback" component={Feedback} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/where-to-spend" component={WhereToSpend} />

                <Route path="/mining/" exact component={Currencies} />
                <Route path="/private/currencies" component={Currencies} />
                <Route path="/private/settings" component={Settings} />
                <Route path="/private/addresses" component={Addresses} />
                
                <Route path="/test" component={Test} />
                <Route path="/503" component={ServerError} />                
                <Route component={NotFound} />								
            </Switch>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
