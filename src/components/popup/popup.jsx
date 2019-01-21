import React, { Component } from 'react'
import classNames from 'classnames'

class popup extends Component {
	constructor(props) {
		super(props);		
		this.state = {
		};
    }
	
	render() {
        let popupClasses = ['popup'];

        if (this.props.popupActive)
            popupClasses.push('_active');

        popupClasses = classNames(popupClasses);

        return <div className={popupClasses}>
            <div class="popup-content withdrawalPopupForm form">
                <div class="popup-content-close" onClick={() => this.props.changePopupState(false)}></div>
                <div class="popup-content-title">
                    Вывод на кошелёк XMR&nbsp;Monero
                </div>
                <div class="withdrawalPopupForm-field form-field">
                    <input type="text" value="" placeholder="Адрес кошелька" />
                </div>
                <div class="withdrawalPopupForm-field form-field">
                    <input type="text" value="" placeholder="Сумма платежа" />
                    <div class="withdrawalPopupForm-field-max">
                        max
                    </div>
                </div>
                <div class="withdrawalPopupForm-aviable">
                    <span>Доступно к выводу</span> 2.635
                </div>
                <div class="withdrawalPopupForm-submit form-submit button _blue">
                    Вывести
                </div>
            </div>
        </div>;
    }
}

export default popup;
