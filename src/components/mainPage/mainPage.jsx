import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';
import MiningOnAnyDeviceAdvert from './miningOnAnyDeviceAdvert';
import HowItWorks from './howItWorks';
import WhereToSpend from './whereToSpend';
import BlogPreview from './blogPreview';
import StartMiningBlock from './startMiningBlock';

class mainPage extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    let containerClasses = [];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>
			<Header mainPage={true} authData={this.props.authData} />
				<MiningOnAnyDeviceAdvert />
				<HowItWorks />
				<WhereToSpend />
				<BlogPreview />
				<StartMiningBlock />												
			<Footer />
		</Container>;
	}
}

export default mainPage;