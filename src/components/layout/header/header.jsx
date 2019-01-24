import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import classNames from 'classnames'

class MainPageHeader extends Component {
	render() {
		return <React.Fragment>
			<div class="mainPageHeader">
				{this.props.children}
				<div class="mainPageHeader-about about">
					<div class="about-text">
						Зарабатывай <span>5 000 руб. в месяц</span>{" "}<br />
						просто запуская браузер{" "}<br />
						на&nbsp;любом устройстве
					</div>
					<div class="about-buttons">
						<div class="about-buttons-startMining">
							<Link to="/mining/" class="about-buttons-startMining-button button _blue">
								Начать майнить
							</Link>
							<div class="about-buttons-startMining-description">
								Чтобы начать майнить и зарабатывать нажмите{" "}<br />
								на&nbsp;кнопку выше и не&nbsp;закрывайте эту вкладку
							</div>
						</div>
						<div class="about-buttons-video">
							<div class="about-buttons-video-button button _white">
								Узнай всё о&nbsp;сервисе за&nbsp;2&nbsp;минуты
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>;
	}
}

class HeaderData extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			menuPanelOpen: false,
			userPanelMenuOpen: false,
		};

		this.toggleMenuPanelState = this.toggleMenuPanelState.bind(this);
		this.toggleUserPanelMenuState = this.toggleUserPanelMenuState.bind(this);
		this.bodyOnClick = this.bodyOnClick.bind(this);
		this.stopPropagation = this.stopPropagation.bind(this);
	}

	componentDidMount() {
		window.addEventListener('click', this.bodyOnClick);	
	}

	bodyOnClick(event) {
		this.setState({userPanelMenuOpen: false});
	}

	toggleMenuPanelState() {
		let menuPanelOpen = !this.state.menuPanelOpen;

		this.setState({menuPanelOpen});

		if (menuPanelOpen)
			document.body.classList.add('_preventScroll');
		else
			document.body.classList.remove('_preventScroll');
	}

	toggleUserPanelMenuState(event) {
		event.stopPropagation();

		let userPanelMenuOpen = !this.state.userPanelMenuOpen;

		this.setState({userPanelMenuOpen});
	}

	stopPropagation(event) {
		event.stopPropagation();
	}
	
	render() {	
		let headerClasses = ['header'];

		if (this.props.mainPage)
			headerClasses.push('mainPageHeader-top');

		headerClasses = classNames(headerClasses);

		let menuPanelClasses = ['header-menuPanel'];

		if (this.state.menuPanelOpen)
			menuPanelClasses.push('_open');

		if (this.props.authData)
		{
			menuPanelClasses.push('_withUserPanel');

			menuPanelClasses = classNames(menuPanelClasses);

			let userPanelMenuClasses = ['userPanel-menu', 'userPanelMenu'];

			if (this.state.userPanelMenuOpen)
				userPanelMenuClasses.push('_open');	
				
			userPanelMenuClasses = classNames(userPanelMenuClasses);

			let userPanelNameClasses = ['userPanel-name'];

			if (this.state.userPanelMenuOpen)
				userPanelNameClasses.push('_open');	
				
			userPanelNameClasses = classNames(userPanelNameClasses);

			return <React.Fragment>
				<div className={headerClasses}>
					<div class="header-logo">
						<Link to="/"/>
					</div>
					<div class="header-menuIcon" onClick={this.toggleMenuPanelState}></div>
					<div className={menuPanelClasses}>
						<div class="header-menuPanel-close" onClick={this.toggleMenuPanelState}></div>
						<div class="header-menuPanel-logo">
							<Link to="/"/>
						</div>
						<div class="header-menuPanel-userPanel userPanel">
							<div className={userPanelNameClasses} onClick={this.toggleUserPanelMenuState}>
								Andrey
							</div>
							<div class="userPanel-inProcess">
								<span>Майнится:</span> Monero 0.204
							</div>
							<div className={userPanelMenuClasses} onClick={this.stopPropagation}>
								<div class="userPanelMenu-item _cryptocurrencies">
									<Link to="/private/currencies/">Ваша криптовалюта</Link>
								</div>
								<div class="userPanelMenu-item _adresses">
									<Link to="/private/addresses/">Ваша адреса</Link>
								</div>
								<div class="userPanelMenu-item _settings">
									<Link to="/private/settings/">Настройки</Link>
								</div>
								<div class="userPanelMenu-item _logout">
									<Link to="/private/logout/">Выйти</Link>
								</div>
							</div>
						</div>
						<div class="header-menuPanel-topMenu topMenu">
							<div class="topMenu-item">
								<Link to="/about/">О проекте</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/how-it-works/">Как это работает</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/where-to-spend/">Где потратить</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/blog/">Блог</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/contacts/">Контакты</Link>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>;
		} else {			
			menuPanelClasses = classNames(menuPanelClasses);

			return <React.Fragment>
				<div className={headerClasses}>
					<div class="header-logo">
						<Link to="/"/>
					</div>
					<div class="header-menuIcon" onClick={this.toggleMenuPanelState}></div>
					<div className={menuPanelClasses}>
						<div class="header-menuPanel-close" onClick={this.toggleMenuPanelState}></div>
						<div class="header-menuPanel-logo">
							<Link to="/"/>
						</div>
						<div class="header-menuPanel-topMenu topMenu">
							<div class="topMenu-item">
								<Link to="/about/">О проекте</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/how-it-works/">Как это работает</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/where-to-spend/">Где потратить</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/blog/">Блог</Link>
							</div>
							<div class="topMenu-item">
								<Link to="/contacts/">Контакты</Link>
							</div>
						</div>
						<Link to="/login/" class="header-menuPanel-loginButton button _transparent">
							Войти
						</Link>
						<div class="header-menuPanel-registration">
							<div class="header-menuPanel-registration-label">
								Нет аккаунта?
							</div>
							<div class="header-menuPanel-registration-link">
								Зарегистрироваться
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>;
		}
	}
}

class Header extends Component {
	render() {
		if (this.props.mainPage)
			return <MainPageHeader>
				<HeaderData authData={this.props.authData} mainPage={this.props.mainPage}/>
			</MainPageHeader>;
		else
			return <HeaderData authData={this.props.authData} mainPage={this.props.mainPage}/>;
	}
}

export default Header;