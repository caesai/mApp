import React, { Component } from 'react'
import { Link } from "react-router-dom"
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

        if (this.state.auth)
		containerClasses.push('_loggedIn');

	    return <>
		<div className="mainPageHeader-about about">
				<div className="about-text">
					Зарабатывай <span>5 000 руб. в месяц</span>{" "}<br />
					просто запуская браузер{" "}<br />
					на&nbssp;любом устройстве
				</div>
				<div className="about-buttons">
					<div className="about-buttons-startMining">
						<Link to="/mining/" class="about-buttons-startMining-button button _blue">
							Начать майнить
						</Link>
						<div className="about-buttons-startMining-description">
							Чтобы начать майнить и зарабатывать нажмите{" "}<br />
							на&nbsp;кнопку выше и не&nbsp;закрывайте эту вкладку
						</div>
					</div>
					<div className="about-buttons-video">
						<div className="about-buttons-video-button button _white">
							Узнай всё о&nbsp;сервисе за&nbsp;2&nbsp;минуты
						</div>
					</div>
				</div>
			</div>	
		<Container classes={containerClasses}>						
			<MiningOnAnyDeviceAdvert />
			<HowItWorks />
			<WhereToSpend />
			<BlogPreview />
			<StartMiningBlock />												
			<Footer />
		</Container>
		</>;
	}
}

export default mainPage;