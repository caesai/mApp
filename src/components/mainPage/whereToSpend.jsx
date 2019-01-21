import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class whereToSpend extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {
	    return <div class="whereToSpend _mainPage">
            <div class="whereToSpend-title">
                Где потратить
            </div>
            <div class="whereToSpend-list">
                <div class="whereToSpend-list-item whereToSpendItem">
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
                <div class="whereToSpend-list-item whereToSpendItem">
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
                <div class="whereToSpend-list-item whereToSpendItem">
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
                <div class="whereToSpend-list-item whereToSpendItem">
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
            <div class="whereToSpend-more button _transparent _arrowRight">
                Смотреть еще
            </div>
        </div>;
	}
}

export default whereToSpend;