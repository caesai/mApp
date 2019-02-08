import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { signOut } from '../../../store/actions/authActions'

class Header extends Component {
	constructor(props) {
		super(props);		
		this.state = {
			menuPanelOpen: false,
			userPanelMenuOpen: false,
		};

		// Pass this into functions
		this.toggleMenuPanelState = this.toggleMenuPanelState.bind(this);
		this.toggleUserPanelMenuState = this.toggleUserPanelMenuState.bind(this);
		this.bodyOnClick = this.bodyOnClick.bind(this);
		this.stopPropagation = this.stopPropagation.bind(this);
	}

	// Init
	componentDidMount() {
		window.addEventListener('click', this.bodyOnClick);	
	}

	bodyOnClick(event) {
		this.setState({userPanelMenuOpen: false});
	}

	// Menu state changer
	toggleMenuPanelState(event) {
		event.stopPropagation();
		console.log('toggle')
		let menuPanelOpen = !this.props.menuPanelOpen;
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

	//
	render() {	
		let menuPanelClasses = ['header-menuPanel'];
		if (this.state.menuPanelOpen) menuPanelClasses.push('_open');

		let headerClasses = ['header'];
    	headerClasses.push('mainPageHeader-top');
		headerClasses = classNames(headerClasses);  			  		

		//const links =  ? <SignedInLinks profile={this.props.profile} /> : <SignedOutLinks />;
		if (!this.props.auth.isEmpty) {
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

			return <>
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
									<Link to="/" onClick={this.props.signOut}>Выйти</Link>
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
			</>
		} else {
			menuPanelClasses = classNames(menuPanelClasses);
			return <>
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
					<Link to="/login" class="header-menuPanel-loginButton button">
						Войти
					</Link>			
					<div class="header-menuPanel-registration">
						<div class="header-menuPanel-registration-label">
							Нет аккаунта?
						</div>
						<div class="header-menuPanel-registration-link">
							<Link to='/registration'>Зарегистрироваться</Link>
						</div>
					</div>
				</div>
			</div>
		</>
		}
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return{	  
	  auth: state.firebase.auth,
	  profile: state.firebase.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  signOut: () => dispatch(signOut())
	}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header);