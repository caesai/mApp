import React, { Component } from 'react'
import Header from '../layout/header';
import Footer from '../layout/footer';
import Container from '../container';

class about extends Component {
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
			<Header authData={this.props.authData}/>					
                <div class="content">
                    <div class="content-title">
                        О проекте
                    </div>
                    <div class="content-text">
                        <p>
                            SimpleMining - это самый простой и доступный майнинг криптовалюты прямо в браузере! Вы получаете деньги только за то что открыли эту страницу! Без вложений, без приглашений, без просмотров рекламы и выполнения заданий. Просто оставьте открытой эту страницу в фоновой вкладке и занимайтесь своими делами, пока деньги будут поступать на Ваш счет.
                        </p>
                        <p>
                            SimpleMining самостоятельно:
                        </p>
                        <ul>
                            <li>Откроет Вам криптовалютные кошельки</li>
                            <li>Запустит все необходимые процедуры на вашем устройстве</li>
                            <li>Подключит устройство к майнинговому пулу</li>
                            <li>Выберет криптовалюту, которую выгоднее всего майнить в данный момент</li>
                            <li>Поможет превратить криптовалюту в реальные деньги или что-то за нее купить</li>
                        </ul>
                        <div class="content-text-buttons buttons">
                            <div class="button _white _arrowRight _howItWorksInlineButton">
                                Как это работает
                            </div>
                            <div class="button _blue _startMiningInlineButton">
                                Начать майнить
                            </div>
                        </div>
                    </div>
                </div>						
			<Footer />
        </Container>;
	}
}

export default about;