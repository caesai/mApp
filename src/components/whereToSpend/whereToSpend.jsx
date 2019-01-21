import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class howItWorks extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {
	    let containerClasses = ['_innerPage'];

        if (this.props.authData)
            containerClasses.push('_loggedIn');

	    return <Container classes={containerClasses}>
            <Header authData={this.props.authData} />				
                <div class="content">
                    <div class="content-title">
                        Где потратить
                    </div>
                    <div class="content-withAdvert blockWithRightAdvertPanel">
                        <div class="blockWithRightAdvertPanel-content whereToSpendPage">
                            <div class="whereToSpendPage-item whereToSpendItem">
                                <div class="whereToSpendItem-link">
                                    <div class="whereToSpendItem-link-title">
                                        CoinMap
                                    </div>
                                    <div class="whereToSpendItem-link-url">
                                        coinmap.org
                                    </div>
                                </div>
                                <div class="whereToSpendItem-description">
                                    Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год
                                </div>
                            </div>
                            <div class="whereToSpendPage-item whereToSpendItem">
                                <div class="whereToSpendItem-link">
                                    <div class="whereToSpendItem-link-title">
                                        CoinMap
                                    </div>
                                    <div class="whereToSpendItem-link-url">
                                        coinmap.org
                                    </div>
                                </div>
                                <div class="whereToSpendItem-description">
                                    Помимо выгодных тарифов у них есть самое дефицитное качество облачных сервисов
                                </div>
                            </div>
                        </div>
                        <div class="blockWithRightAdvertPanel-adverts advertsNoAdblock">
                            <div class="advertsNoAdblock-orderToAdvertising orderToAdvertising">
                                <div class="orderToAdvertising-title">
                                    Вы магазин и принимаете криптовалюту?
                                </div>
                                <div class="orderToAdvertising-text">
                                    Оставьте заявку на спецразмещение
                                </div>
                            </div>
                            <div class="advertsNoAdblock-advert">
                                <div class="advert"></div>
                            </div>
                            <div class="advertsNoAdblock-advert">
                                <div class="advert"></div>
                            </div>
                        </div>
                        <div class="blockWithRightAdvertPanel-content whereToSpendPage">
                            <div class="whereToSpendPage-item whereToSpendItem">
                                <div class="whereToSpendItem-link">
                                    <div class="whereToSpendItem-link-title">
                                        CoinMap
                                    </div>
                                    <div class="whereToSpendItem-link-url">
                                        coinmap.org
                                    </div>
                                </div>
                                <div class="whereToSpendItem-description">
                                    Помимо выгодных тарифов у них есть самое дефицитное качество облачных сервисов
                                </div>
                            </div>
                            <div class="whereToSpendPage-item whereToSpendItem">
                                <div class="whereToSpendItem-link">
                                    <div class="whereToSpendItem-link-title">
                                        CoinMap
                                    </div>
                                    <div class="whereToSpendItem-link-url">
                                        coinmap.org
                                    </div>
                                </div>
                                <div class="whereToSpendItem-description">
                                    Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год
                                </div>
                            </div>
                            <div class="whereToSpendPage-item whereToSpendItem">
                                <div class="whereToSpendItem-link">
                                    <div class="whereToSpendItem-link-title">
                                        CoinMap
                                    </div>
                                    <div class="whereToSpendItem-link-url">
                                        coinmap.org
                                    </div>
                                </div>
                                <div class="whereToSpendItem-description">
                                    Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год
                                </div>
                            </div>
                            <div class="whereToSpendPage-item whereToSpendItem">
                                <div class="whereToSpendItem-link">
                                    <div class="whereToSpendItem-link-title">
                                        CoinMap
                                    </div>
                                    <div class="whereToSpendItem-link-url">
                                        coinmap.org
                                    </div>
                                </div>
                                <div class="whereToSpendItem-description">
                                    Довольно высокая доходность – сервисы позволяют получить на вложенные средства от 200% до 400% дохода за год
                                </div>
                            </div>
                        </div>
                        <div class="blockWithRightAdvertPanel-moreBlock">
                            <div class="blockWithRightAdvertPanel-moreBlock-moreButton button _white _arrowRight">
                                Смотреть еще
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </Container>;
	}
}

export default howItWorks;