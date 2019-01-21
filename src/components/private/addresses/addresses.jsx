import React, { Component } from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Container from '../../container';
import Popup from '../../popup';

class addresses extends Component {
	constructor(props) {
		super(props);		
		this.state = {
            popupActive: false
        };

        this.changePopupState = this.changePopupState.bind(this);
    }
    
    changePopupState(active) {
        this.setState({popupActive: active});
    }
	
	render() {
	    let containerClasses = ['_innerPage'];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>
            <Header authData={this.props.authData} />
                <div class="content _walletsPage">
                    <div class="content-title">
                        Ваши кошельки
                    </div>
                    <div class="wallets">
                        <div class="wallets-filter">
                            <input name="" value="" placeholder="Введите название монеты" />
                        </div>
                        <div class="wallets-list">
                            <div class="wallets-list-item wallet">
                                <div class="wallet-type">
                                    <div class="wallet-type-image">
                                        <img src="/static/images/cryptocurrencies/btc.png"
                                        srcset="/static/images/cryptocurrencies/btc@2x.png 2x,
                                        /static/images/cryptocurrencies/btc@3x.png 3x"
                                        alt="" />
                                    </div>
                                    <div class="wallet-type-name">
                                        Bitcoin
                                    </div>
                                </div>
                                <div class="wallet-address">
                                    <div class="wallet-address-input">
                                        <input type="text" value="1vzwWt3Gp8a1ZXYaX92KpbwDQpbFqpvRq" name="" readonly="readonly" />
                                    </div>
                                    <div class="wallet-address-copyButton">Скопировать</div>
                                </div>
                            </div>
                            <div class="wallets-list-item wallet">
                                <div class="wallet-type">
                                    <div class="wallet-type-image">
                                        <img src="/static/images/cryptocurrencies/eth.png"
                                        srcset="/static/images/cryptocurrencies/eth@2x.png 2x,
                                        /static/images/cryptocurrencies/eth@3x.png 3x"
                                        alt="" />
                                    </div>
                                    <div class="wallet-type-name">
                                        Ethereum
                                    </div>
                                </div>
                                <div class="wallet-address">
                                    <div class="wallet-address-input">
                                        <input type="text" value="0x613f1da4f21cdb523f6c1fee9d2cb019e97f83eb" name="" readonly="readonly" />
                                    </div>
                                    <div class="wallet-address-copyButton">Скопировать</div>
                                </div>
                            </div>
                            <div class="wallets-list-item wallet">
                                <div class="wallet-type">
                                    <div class="wallet-type-image">
                                        <img src="/static/images/cryptocurrencies/xmr.png"
                                        srcset="/static/images/cryptocurrencies/xmr@2x.png 2x,
                                        /static/images/cryptocurrencies/xmr@3x.png 3x"
                                        alt="" />
                                    </div>
                                    <div class="wallet-type-name">
                                        Monero
                                    </div>
                                </div>
                                <div class="wallet-address">
                                    <div class="wallet-address-input">
                                        <input type="text" value="0x613f1da4f21cdb523f6c1fee9d2cb019e97f83eb" name="" readonly="readonly" />
                                    </div>
                                    <div class="wallet-address-copyButton">Скопировать</div>
                                </div>
                            </div>
                            <div class="wallets-list-item wallet">
                                <div class="wallet-type">
                                    <div class="wallet-type-image">
                                        <img src="/static/images/cryptocurrencies/ltc.png"
                                        srcset="/static/images/cryptocurrencies/ltc@2x.png 2x,
                                        /static/images/cryptocurrencies/ltc@3x.png 3x"
                                        alt="" />
                                    </div>
                                    <div class="wallet-type-name">
                                        Litecoin
                                    </div>
                                </div>
                                <div class="wallet-address">
                                    <div class="wallet-address-input">
                                        <input type="text" value="1vzwWt3Gp8a1ZXYaX92KpbwDQpbFqpvRq" name="" readonly="readonly" />
                                    </div>
                                    <div class="wallet-address-copyButton">Скопировать</div>
                                </div>
                            </div>
                        </div>
                        <div class="wallets-showEverything">
                            Показать всё
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default addresses;