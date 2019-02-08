import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

const SignedInLinks = (props) => {
  // Prepare styles
  let headerClasses = ['header'];
  if (this.props.mainPage) headerClasses.push('mainPageHeader-top');
  headerClasses = classNames(headerClasses);

  let menuPanelClasses = ['header-menuPanel'];
  if (this.state.menuPanelOpen) menuPanelClasses.push('_open');

  menuPanelClasses.push('_withUserPanel');
  menuPanelClasses = classNames(menuPanelClasses);

  let userPanelMenuClasses = ['userPanel-menu', 'userPanelMenu'];
  if (this.state.userPanelMenuOpen) userPanelMenuClasses.push('_open');	      
  userPanelMenuClasses = classNames(userPanelMenuClasses);
    
  let userPanelNameClasses = ['userPanel-name'];
  if (this.state.userPanelMenuOpen) userPanelNameClasses.push('_open');	
  userPanelNameClasses = classNames(userPanelNameClasses);
  
  //Render contents
  return (
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
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
