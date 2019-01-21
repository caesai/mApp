import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class howItWorks extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
	}
	
	render() {		
	    return <div class="howItWorks">
            <div class="howItWorks-title">
                Как это работает
            </div>
            <div class="howItWorks-text">
                SimpleMining - это самый простой и доступный майнинг криптовалюты прямо в браузере! Вы получаете деньги только за то что открыли эту страницу! Без вложений, без приглашений, без просмотров рекламы и выполнения заданий. Просто оставьте открытой эту страницу в фоновой вкладке и занимайтесь своими делами, пока деньги будут поступать на Ваш счет.
            </div>
            <div class="howItWorks-more button _white _arrowRight">
                Подробнее
            </div>
        </div>;
	}
}

export default howItWorks;