import React, { Component } from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Container from '../../container';
import Popup from '../../popup';

class currencies extends Component {
	constructor(props) {
		super(props);		
		this.state = {
            popupActive: false
        };

        this.changePopupState = this.changePopupState.bind(this);
    }
    
    changePopupState(active) {
        this.setState({popupActive: active});

        if (active)
			document.body.classList.add('_preventScroll');
		else
			document.body.classList.remove('_preventScroll');
    }
	
	render() {
	    let containerClasses = ['_innerPage'];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>
            <Header authData={this.props.authData} />
                <div class="content _yourCryptocurrenciesPage">
                    <div class="content-title">
                        Поздравляем, майнинг в процессе!
                    </div>
                    <div class="content-yourCryptocurrencies yourCryptocurrencies">
                        <div class="yourCryptocurrencies-title">
                            Ваша криптовалюта
                        </div>
                        <div class="yourCryptocurrencies-list">
                            <div class="yourCryptocurrencies-list-item yourCryptocurrency">
                                <div class="yourCryptocurrency-icon">
                                    <img src="/static/images/cryptocurrencies/btc.png"
                                    srcset="/static/images/cryptocurrencies/btc@2x.png 2x,
                                    /static/images/cryptocurrencies/btc@3x.png 3x"
                                    alt="" />
                                </div>
                                <div class="yourCryptocurrency-content">
                                    <div class="yourCryptocurrency-content-title">
                                        Bitcoin
                                    </div>
                                    <div class="yourCryptocurrency-content-value">
                                        0.21570536
                                    </div>
                                    <div class="yourCryptocurrency-content-valueInUsd">
                                        $6,591.20
                                    </div>
                                    <div class="yourCryptocurrency-content-miningSpeed">
                                        $12.34 / день
                                    </div>
                                </div>
                                <div class="yourCryptocurrency-withdrawal">
                                    <div class="yourCryptocurrency-withdrawal-button button _white">
                                        Вывести
                                    </div>
                                </div>
                            </div>
                            <div class="yourCryptocurrencies-list-item yourCryptocurrency">
                                <div class="yourCryptocurrency-icon">
                                    <img src="/static/images/cryptocurrencies/eth.png"
                                    srcset="/static/images/cryptocurrencies/eth@2x.png 2x,
                                    /static/images/cryptocurrencies/eth@3x.png 3x"
                                    alt="" />
                                </div>
                                <div class="yourCryptocurrency-content">
                                    <div class="yourCryptocurrency-content-title">
                                        Ethereum
                                    </div>
                                    <div class="yourCryptocurrency-content-value">
                                        2.635
                                    </div>
                                    <div class="yourCryptocurrency-content-valueInUsd">
                                        $325.35
                                    </div>
                                    <div class="yourCryptocurrency-content-miningSpeed">
                                        $10.45 / день
                                    </div>
                                </div>
                                <div class="yourCryptocurrency-withdrawal">
                                    <div class="yourCryptocurrency-withdrawal-button button _white">
                                        Вывести
                                    </div>
                                </div>
                            </div>
                            <div class="yourCryptocurrencies-list-item yourCryptocurrency _active">
                                <div class="yourCryptocurrency-icon">
                                    <img src="/static/images/cryptocurrencies/xmr.png"
                                    srcset="/static/images/cryptocurrencies/xmr@2x.png 2x,
                                    /static/images/cryptocurrencies/xmr@3x.png 3x"
                                    alt="" />
                                </div>
                                <div class="yourCryptocurrency-content">
                                    <div class="yourCryptocurrency-content-title">
                                        Monero
                                    </div>
                                    <div class="yourCryptocurrency-content-value">
                                        8.4214
                                    </div>
                                    <div class="yourCryptocurrency-content-valueInUsd">
                                        $110.34
                                    </div>
                                    <div class="yourCryptocurrency-content-miningSpeed">
                                        $9.34 / день
                                    </div>
                                </div>
                                <div class="yourCryptocurrency-withdrawal">
                                    <div class="yourCryptocurrency-withdrawal-button button _white">
                                        Вывести
                                    </div>
                                </div>
                            </div>
                            <div class="yourCryptocurrencies-list-item yourCryptocurrency">
                                <div class="yourCryptocurrency-icon">
                                    <img src="/static/images/cryptocurrencies/ltc.png"
                                    srcset="/static/images/cryptocurrencies/ltc@2x.png 2x,
                                    /static/images/cryptocurrencies/ltc@3x.png 3x"
                                    alt="" />
                                </div>
                                <div class="yourCryptocurrency-content">
                                    <div class="yourCryptocurrency-content-title">
                                        Litecoin
                                    </div>
                                    <div class="yourCryptocurrency-content-value">
                                        1.584
                                    </div>
                                    <div class="yourCryptocurrency-content-valueInUsd">
                                        $61.75
                                    </div>
                                    <div class="yourCryptocurrency-content-miningSpeed">
                                        $5.2 / день
                                    </div>
                                </div>
                                <div class="yourCryptocurrency-withdrawal">
                                    <div class="yourCryptocurrency-withdrawal-button button _white">
                                        Вывести
                                    </div>
                                </div>
                            </div>
                            <div class="yourCryptocurrencies-list-item yourCryptocurrency">
                                <div class="yourCryptocurrency-icon">
                                    <img src="/static/images/cryptocurrencies/neo.png"
                                    srcset="/static/images/cryptocurrencies/neo@2x.png 2x,
                                    /static/images/cryptocurrencies/neo@3x.png 3x"
                                    alt="" />
                                </div>
                                <div class="yourCryptocurrency-content">
                                    <div class="yourCryptocurrency-content-title">
                                        NEO
                                    </div>
                                    <div class="yourCryptocurrency-content-value">
                                        3.163
                                    </div>
                                    <div class="yourCryptocurrency-content-valueInUsd">
                                        $20.54
                                    </div>
                                    <div class="yourCryptocurrency-content-miningSpeed">
                                        $5.2 / день
                                    </div>
                                </div>
                                <div class="yourCryptocurrency-withdrawal">
                                    <div class="yourCryptocurrency-withdrawal-button button _white">
                                        Вывести
                                    </div>
                                </div>
                            </div>
                            <div class="yourCryptocurrencies-list-item yourCryptocurrency">
                                <div class="yourCryptocurrency-icon">
                                    <img src="/static/images/cryptocurrencies/xem.png"
                                    srcset="/static/images/cryptocurrencies/xem@2x.png 2x,
                                    /static/images/cryptocurrencies/xem@3x.png 3x"
                                    alt="" />
                                </div>
                                <div class="yourCryptocurrency-content">
                                    <div class="yourCryptocurrency-content-title">
                                        NEM
                                    </div>
                                    <div class="yourCryptocurrency-content-value">
                                        8.4214
                                    </div>
                                    <div class="yourCryptocurrency-content-valueInUsd">
                                        $110.34
                                    </div>
                                    <div class="yourCryptocurrency-content-miningSpeed">
                                        $9.34 / день
                                    </div>
                                </div>
                                <div class="yourCryptocurrency-withdrawal">
                                    <div class="yourCryptocurrency-withdrawal-button button _white">
                                        Вывести
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="yourCryptocurrencies-showEverything">
                            Показать всё
                        </div>
                        {this.props.authData &&
                            <div class="yourCryptocurrencies-more button _white _arrowRight">
                                Показать адреса моих кошельков
                            </div>
                        }
                    </div>
                    {!this.props.authData &&                
                        <div class="content-loginOnPage">
                            <div class="loginOnPage-button button _blue" onClick={() => this.changePopupState(true)}>
                                Войти
                            </div>
                            <div class="loginOnPage-description">
                                Войдите в личный кабинет, чтобы<br />не потерять свои деньги!
                            </div>
                        </div>
                    }
                </div>
            <Footer />
            <Popup popupActive={this.state.popupActive} changePopupState={this.changePopupState} />
        </Container>;
	}
}

export default currencies;